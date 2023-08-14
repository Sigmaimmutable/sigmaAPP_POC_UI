import React, { useState, useEffect } from "react";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Sessionstatusget1, uservisitrecords } from "../apifunction";
import ButtonLoad from 'react-bootstrap-button-loader';
function Audit(props) {
  const [search, setSearch] = useState(false);
  const [userManage, setUserManage] = useState([]);
  const [uservisit1, setUservisit] = useState([]);
  const [searchQuery, setSearchQuery] = useState(false);
  const [searchDetails, setSearchDetails] = useState([]);
  const [startvalue, setstartvalue] = useState(0);
  const[loaderDownload, setLoaderDownload] = useState(false);
  const [pageSize, setPageSize] = useState(10); // Set your desired page size here

  const handleSearch = (searchQuer) => {
    if (!searchQuer) {
      setSearchQuery(false);
    } else {
      setSearchQuery(true);
      const filteredJobLists = userManage.filter((r) =>
        r.emailId.toLowerCase().includes(searchQuer.toLowerCase())
      );
      setSearchDetails(filteredJobLists);
    }
  };
  const Users = async (start) => {
    let r = [];
    let countlist = 0;
    try {
      let [check, data] = await Sessionstatusget1(start);
      if (check) {
        setUserManage(data);
      }
      // settenentid(tenentid.tenantId);
      console.log("ticket", data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchAllData = async () => {
    try {
      const allData = [];
      let currentPage = 0;

      while (true) {
        const [check, data] = await Sessionstatusget1(currentPage * pageSize);
        if (!check || data.length === 0) {
          break;
        }
        allData.push(...data);
        currentPage++;
      }

      return allData;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  useEffect(() => {
    fetchAllData().then((data) => {
      setUserManage(data);
    });
  }, []);

  const uservisit = async () => {
    try {
      let [check, data2] = await uservisitrecords();
      setUservisit(data2);
    } catch (err) {
      console.error(err);
    }
  }
  const pagination = async (start) => {
    setstartvalue(start);
    await Users(start);
  }
  useEffect(() => {
    uservisit();
  }, []);

  const downloadCsv = async () => {
    try {
      const allData = await fetchAllData();
      
      const csvData = [].concat(
        ...allData.map((x) => ({
          "Sl no": x.id,
          "Email Id": x.mailId,
          "Role Type": x.roleType,
          "Activity": !uservisit1.find((visit) => visit.algoAddress === x.mailId) ? x.activity : "",
          "Session Time": x.loginTime,
        }))
      );

      const csvRows = [];
      const headers = Object.keys(csvData[0]);
      csvRows.push(headers.join(','));

      for (const row of csvData) {
        const values = headers.map(header => row[header]);
        csvRows.push(values.join(','));
      }

      const csvContent = csvRows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'activity_details.csv';
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container-fluid">
      <Row className="mb-20">
        <Col md={6} xl={4} xxl={3}>
          <h4 className="page-title mb-0">Activity Details</h4>
        </Col>
      </Row>
    
      <Row className="mb-20" style={{ minHeight: '40px' }}>
        <Col xs={12} md={6} className="mt-md-0 mt-2 mb-md-0 mb-3">
          {search && (
            <Form>
              <InputGroup className="form-search shadow">
                <Button variant="reset" id="button-addon1">
                  {/* ... (search icon SVG) */}
                </Button>
                <Form.Control
                  aria-describedby="basic-addon1"
                  aria-label="Write something to search"
                  placeholder="Search by User name..."
                  onChange={(e) => { handleSearch(e.target.value) }}
                />
              </InputGroup>
            </Form>
          )}
        </Col>
      </Row>
      
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <ButtonLoad
    loading={loaderDownload}
    variant="gray"
    className="btn-gray-black me-2 mb-1 px-3"
    onClick={() => downloadCsv()}
  >
    Download
  </ButtonLoad>
</div>

  
 
  
      <div className="mb-20">
      <Table hover responsive>
        <thead>
          <tr>
            <th className="text-center">Sl no</th>
            <th className="text-center">Email Id</th>
            <th className="text-center">Role Type</th>
            <th className="text-center">Activity</th>
            <th className="text-center">Session Time</th>
          </tr>
        </thead>
        <tbody>
          {/* ... (other JSX code) */}
          {searchQuery ? (
            searchDetails.map((x) => (
              <tr key={x.id}>
                <td className="text-center">{x.id}</td>
                <td className="text-center">{x.mailId}</td>
                <td className="text-center">{x.roleType}</td>
                <td className="text-center">
                  {/* ... (other td elements) */}
                  {!uservisit1.find((visit) => visit.algoAddress === x.mailId) && x.activity}
                  {uservisit1.find((visit) => visit.algoAddress === x.mailId) && (
                    <div>
                      Wallet Type: {uservisit1.find((visit) => visit.algoAddress === x.mailId).walletType}
                    </div>
                  )}
                </td>
                <td className="text-center">
                  {uservisit1.find((visit) => visit.algoAddress === x.mailId) ? (
                    <div>
                      Start Date: {uservisit1.find((visit) => visit.algoAddress === x.mailId).startDate}
                    </div>
                  ) : (
                    x.loginTime
                  )}
                </td>
              </tr>
            ))
          ) : (
            Array.isArray(userManage) &&
            userManage.map((x) => (
              <tr key={x.id}>
                <td className="text-center">{x.id}</td>
                <td className="text-center">{x.mailId}</td>
                <td className="text-center">{x.roleType}</td>
                <td className="text-center">
                  {/* ... (other td elements) */}
                  {!uservisit1.find((visit) => visit.algoAddress === x.mailId) && x.activity}
                  {uservisit1.find((visit) => visit.algoAddress === x.mailId) && (
                    <div>
                      {uservisit1.find((visit) => visit.algoAddress === x.mailId).walletType}
                    </div>
                  )}
                </td>
                <td className="text-center">
                  {uservisit1.find((visit) => visit.algoAddress === x.mailId) ? (
                    <div>
                      {uservisit1.find((visit) => visit.algoAddress === x.mailId).startDate}
                    </div>
                  ) : (
                    x.loginTime
                  )}
                </td>
              </tr>
            ))
          )}
          {/* ... (other JSX code) */}
        </tbody>
      </Table>
        {/* <div className="d-flex justify-content-end mt-3">
          <button
            onClick={downloadCsv}
            className="btn btn-primary"
          >
            Download All Pages as CSV
          </button>
        </div> */}

         {/* <div className="d-flex justify-content-end mt-3" style={{ position: 'absolute', top: '0', right: '0', zIndex: '1' }}>
    <button
      onClick={downloadCsv}
      className="btn btn-primary"
      style={{ backgroundColor: 'black', color: 'white' }}
    >
      Download All Pages as CSV
    </button>
  </div> */}
 
        <Row className="mt-4">
          <Col md={8} className="d-flex justify-content-md-end justify-content-center">
            <ul className="d-flex pagination list-unstyled">
              <li>
                <Link className={startvalue !== 0 ? 'next' : startvalue === 0 ? 'prev disabled' : ''} onClick={() => { pagination(startvalue - 10) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                  </svg>
                </Link>
              </li>
              <li><Link className="active" onClick={() => { pagination(startvalue + 10) }}>{startvalue ? (startvalue / 10) + 1 : '1'}</Link></li>
              <li>
                <Link className="next" onClick={() => { pagination(startvalue + 10) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Audit;