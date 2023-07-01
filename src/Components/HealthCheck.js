import React,{useState,useEffect} from 'react';
import OuterRoundProgressBar from './HealthProgressBar';
import { OrgAdminmailcheckget, getJobsCountByType, getLatestJObTime, getTennantId } from '../apifunction';
import { Card, Col, Row } from 'react-bootstrap';
import "./HealthCheck.css";

const MyPage = () => {
    useEffect(() => {
        document.title = "Sigma | Health Checkup"
    }, [])


    const[fjob,setfjob]=useState("");
    const[sjob,setsjob]=useState("");
    const[epochTimeState, setEpochTimeState] = useState("");
    const [documentsUploadedCount, setDocumentsUploadedCount] = useState(0); // State for documents uploaded
    const [nftsCreatedCount, setNftsCreatedCount] = useState(0); 
    const [remainingTime, setRemainingTime] = useState('');

    console.log("----timer----", epochTimeState);

    const fetchjobcount = async() =>{
        let firstjob = await getJobsCountByType("DOC_FETCH");
        let secondjob = await getJobsCountByType("MAKE_IREC");
        let lasttimejobrunned = await getLatestJObTime();
        setfjob(firstjob);
        setsjob(secondjob);
        let tnId = await getTennantId();
        let [check, data2] = await OrgAdminmailcheckget(tnId);
        console.log("OrgAdminmailcheckget", lasttimejobrunned)
        setEpochTimeState(timestampToEpoch(lasttimejobrunned));
        if (check) {
            const nonnftdocs = data2.reduce((total, record) => total + record.rawDocs, 0);
            setDocumentsUploadedCount(nonnftdocs);
            
            const totalNftsCreatedCount = data2.reduce((total, record) => total + record.iRecDocs, 0);
            setNftsCreatedCount(totalNftsCreatedCount);
          }

    }

    const calculatePercentageDifference = (num1, num2) => { 
      if (isNaN(num1) || isNaN(num2)) {
        return 0;
      }
  
      const difference = num2 - num1;
      const percentageDifference = Math.abs((difference / Math.abs(num1)) * 100);
      let percentage = parseInt(percentageDifference);
      return percentage;
    };

    useEffect(() => {
        fetchjobcount()
    }, [])

    function timestampToEpoch(timestamp) {
      const epochTime = parseInt(new Date(timestamp).getTime() / 1000); // Divide by 1000 to convert to seconds
      return epochTime;
    }

    const Timer = () => {
      useEffect(() => {
        const interval = setInterval(() => {
          const now = Math.floor(Date.now() / 1000);
          const difference = (epochTimeState + 86400) - now;
    
          if (difference <= 0) {
            setRemainingTime('00:00:00:00');
            clearInterval(interval);
          } else {
            const days = Math.floor(difference / 86400);
            const hours = Math.floor((difference % 86400) / 3600);
            const minutes = Math.floor((difference % 3600) / 60);
            const seconds = Math.floor(difference % 60);
    
            const formattedTime = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes
              .toString()
              .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
            setRemainingTime(formattedTime);
          }
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [epochTimeState]);
    
      return remainingTime;
    };
    
  return (
    <div>
      <h3 style={{ marginBottom: '30px' }}>Health Check-up</h3>
      <div className="">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <Card className="shadow border-0 h-100">
              <Card.Body className="p-lg-4 p-md-3 p-3">
                <h4 className="card-title">Document Health</h4>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <OuterRoundProgressBar value={documentsUploadedCount ? calculatePercentageDifference(documentsUploadedCount + nftsCreatedCount, documentsUploadedCount) : "0"} />
                    </Col>
                    <Col xs={6}>
                      <div className="additional-info">
                        <p><b>Total Documents Fetched:</b> {documentsUploadedCount + nftsCreatedCount}</p>
                        <p><b>Total Documents to be Uploaded:</b> {documentsUploadedCount}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
          <Card className="shadow border-0 h-100">
              <Card.Body className="p-lg-4 p-md-3 p-3">
                <h4 className="card-title">Documents NFT Health</h4>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <OuterRoundProgressBar value={calculatePercentageDifference(nftsCreatedCount, documentsUploadedCount)} />
                    </Col>
                    <Col xs={6}>
                      <div className="additional-info">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>With NFT:</b> {nftsCreatedCount}</p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;<b>Without NFT:</b> {documentsUploadedCount}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
            <Card className="shadow border-0 h-100">
              <Card.Body className="p-lg-4 p-md-3 p-3">
                <h4 className="card-title">Job Health</h4>
                <div className="progress-content pt-3">
                <Row className="align-items-center">
                    <Col xs={6}>
                      <OuterRoundProgressBar value={calculatePercentageDifference(fjob, sjob)} />
                    </Col>
                    <Col xs={6}>
                      <div className="additional-info">
                        <p><b>Document Fetched:</b> {fjob}</p>
                        <p><b>NFT Created:</b> {sjob}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-4">
          <Card className="shadow border-0 h-100">
              <Card.Body className="p-lg-4 p-md-3 p-3">
              <h4 className="card-title text-center">Timer Until Next Job</h4>
                  <div className="progress-content justify-content-center pt-3">
                  <h3 className='digital-clock px-3 py-2'>{Timer(epochTimeState)}</h3>
                  {/* <Row className="align-items-center">
                    <Col xs={12}> */}
                      {/* <OuterRoundPercentageBar value={remainingTime} /> */}
                    {/* </Col>
                  </Row> */}
                </div>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyPage;
