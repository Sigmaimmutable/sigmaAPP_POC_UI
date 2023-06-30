import React,{useState,useEffect} from 'react';
import OuterRoundProgressBar from './HealthProgressBar';
import { OrgAdminmailcheckget, getJobsCountByType, getLatestJObTime, getTennantId } from '../apifunction';
import { Card, Col, Row } from 'react-bootstrap';

const MyPage = () => {
    useEffect(() => {
        document.title = "Sigma | Health Checkup"
    }, [])


    const[fjob,setfjob]=useState("");
    const[sjob,setsjob]=useState("");
    const [documentsUploadedCount, setDocumentsUploadedCount] = useState(0); // State for documents uploaded
    const [nftsCreatedCount, setNftsCreatedCount] = useState(0); 

    const fetchjobcount = async() =>{
        let firstjob = await getJobsCountByType("DOC_FETCH");
        let secondjob = await getJobsCountByType("MAKE_IREC");
        let lasttimejobrunned = await getLatestJObTime();
        setfjob(firstjob);
        setsjob(secondjob)
        let tnId = await getTennantId();
        let [check, data2] = await OrgAdminmailcheckget(tnId);
        console.log("data2",data2)
        if (check) {
            const nonnftdocs = data2.reduce((total, record) => total + record.rawDocs, 0);
            setDocumentsUploadedCount(nonnftdocs);
            
          const totalNftsCreatedCount = data2.reduce((total, record) => total + record.iRecDocs, 0);
          setNftsCreatedCount(totalNftsCreatedCount);
          }

    }

    useEffect(() => {
        fetchjobcount()
    }, [])
    
  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>Health Check-up</h1>
      <div className="">
        <div className="row">
          <div className="col-md-4 mb-3">
            <Card className="shadow border-0 h-100">
              <Card.Body className="p-lg-4 p-md-3 p-2">
                <h5 className="card-title">Card 1</h5>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <OuterRoundProgressBar value={75} />
                    </Col>
                    <Col xs={6}>
                      <div className="additional-info">
                        <p>NFT Jobs: 5</p>
                        <p>Count: 6</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-3">
          <Card className="shadow border-0 h-100">
              <Card.Body className="p-lg-4 p-md-3 p-2">
                <h5 className="card-title">Card 2</h5>
                <div className="progress-content pt-3">
                  <Row className="align-items-center">
                    <Col xs={6}>
                      <OuterRoundProgressBar value={50} />
                    </Col>
                    <Col xs={6}>
                      <div className="additional-info">
                        <p>NFT Jobs: 5</p>
                        <p>Count: 6</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4 mb-3">
            <Card className="shadow border-0 h-100">
              <Card.Body className="p-lg-4 p-md-3 p-2">
                <h5 className="card-title">Card 3</h5>
                <div className="progress-content pt-3">
                <Row className="align-items-center">
                    <Col xs={6}>
                      <OuterRoundProgressBar value={25} />
                    </Col>
                    <Col xs={6}>
                      <div className="additional-info">
                        <p>NFT Jobs: 5</p>
                        <p>Count: 6</p>
                      </div>
                    </Col>
                  </Row>
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
