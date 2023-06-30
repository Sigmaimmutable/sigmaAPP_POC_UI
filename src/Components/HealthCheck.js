import React,{useState,useEffect} from 'react';
import OuterRoundProgressBar from './HealthProgressBar';
import { OrgAdminmailcheckget, getJobsCountByType, getLatestJObTime, getTennantId } from '../apifunction';

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <div className="progress-content">
                  <OuterRoundProgressBar value={75} />
                  <div className="additional-info">
                    <p>NFT Jobs: 5</p>
                    <p>Count: 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <div className="progress-content">
                  <OuterRoundProgressBar value={50} />
                  <div className="additional-info">
                    <p>NFT Jobs: 5</p>
                    <p>Count: 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <div className="progress-content">
                  <OuterRoundProgressBar value={25} />
                  <div className="additional-info">
                    <p>NFT Jobs: 5</p>
                    <p>Count: 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
