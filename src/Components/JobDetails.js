import { Button, Card, Col, Dropdown, Form, InputGroup, Row, Table, Modal } from "react-bootstrap";
import Eye from '../asserts/images/eye-icon.svg'
import SiteLogo from '../asserts/images/site-logo-xxl.svg'
import CheckBox from '../asserts/images/check-box.svg';

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Snippets/Layout";
import { useNavigate } from "react-router-dom";
import { getJobList, getSigmafieldConfig } from "../apifunction";

function JobDetails() {

    const [search, setSearch] = useState(false);
    const [search1, setSearch1] = useState('');
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [jobLists, setjobList] = useState([]);
    const [StartValue, setStartValue] = useState(0);
    const [limit, setlimit] = useState(10);
    const [active, setActive] = useState("notActive");
    const [Selectedcolm, setSelectedcolm] = useState("");



console.log("Selectedcolm",Selectedcolm)
    const handleClose = () => {
        setShow(false);
        setSelectedValues([]);
    }
    const handleShow = () => setShow(true);
    const [data, setColumnValue] = useState([""]);
  

    const handleCheckboxClick = (e) => {
        if (selectedValues.includes(e)) {
            const updatedValues = selectedValues.filter((item) => item !== e);
            setSelectedValues(updatedValues);
        }else{
            setSelectedValues([...selectedValues, e]);
        }
        
    }
    const handleSearch = (e) => {
        setSearch1(e.target.value)
    }
    // const data = ['Filename_ _v', 'Version_id', 'Status_ _v', 'Column 4', 'Column 5', 'Column 6', 'Column 7', 'Column 8', 'Column 9', 'Column 10', 'Column 11', 'Column 12'];


    const handlefatch = () => {
        console.log("selecetd",selectedValues)
        setSelectedColumns(selectedValues)
        setShow(false);
        
        let s = [];
        
            jobLists.map((r,i) =>{                
                let k =[];
                if(r.jobName === "DOC_FETCH"){

                    selectedValues.map((x,y)=>{ 
                        if(r[x]){ 
                            if(r[x] === "DOC_FETCH") {
                                k.push("Resource persist job")
                            }else if(r[x] === "Y"){
                                k.push("Completed")
                            }
                            else{
                                k.push(r[x])
                            }
                            
                        }}               
                        ) 
                        console.log("kvalue",k)
                    s.push(k);  
                }
                  
                }
                )
                console.log("svalue",s)
                setSelectedcolm(s);

        // navigate('/job/immutable-record-jobs')
    }

    useEffect(() =>{
        const jobfetch = async() =>{
            await getJobList('543609ec-58ba-4f50-9757-aaf149e5f187',StartValue,limit).then((response)=>
            // console.log("response",response)
            setjobList(response)

            );
        }
        jobfetch();
    }, [])

   
    useEffect(() =>{getSigmaConfigcolumns()},[])

    const getSigmaConfigcolumns = async() =>{
        // let[check,configColumns] = await getSigmafieldConfig('543609ec-58ba-4f50-9757-aaf149e5f187');
        // // console.log("configColumns",configColumns)
        // let columnData=[];
        // configColumns.map((r,i)=>{
        //     columnData.push(r.extField)
        // })
        let colmData = ["id","jobName","status","errorSummary","companyCode","runStartTime","runCompletionTime","noOfRecordsProcessed","jobRunByUser","latestDocumentDate"]
        // console.log("columnData",columnData)
        setColumnValue(colmData);
    }


    const paginationProcess = async(start,limit) =>{
        await getJobList('543609ec-58ba-4f50-9757-aaf149e5f187',start,limit).then((response)=>
        // console.log("response",response)
        setjobList(response)
        )
        if(selectedValues[0]){
             handlefatch();
              
        console.log("pagination",StartValue)
        }
        
        console.log("pagination",StartValue)
        setStartValue(start);
        setlimit(limit);
        
        
        setActive("active")
    }


    return ( 
        <div>
            <Row className="mb-2">
                <Col md={6} xl={4} xxl={3}>
                    <h4 className="page-title mb-0">Job Details</h4>
                </Col>
            </Row>
            
            <Row className="mb-20" style={{minHeight: '40px'}}>
                <Col xs={8} md={4} className="d-flex align-items-center">
                    <h6 className="me-3 mb-0 text-muted">Links:</h6>
                    <Dropdown size="sm" className="me-2">
                        <Dropdown.Toggle variant="gray" className="rounded-pill" id="dropdown-basic">
                            Select
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-filter">
                            <Dropdown.Item  onClick={handleShow} href="#/action-1">Tesla v1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Tesla v2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tesla v3</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tesla v4</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Tesla v5</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="gray" className="btn-gray-black rounded-pill">Submit</Button>
                </Col>
                <Col xs={'auto'} className="ms-md-0 ms-auto order-md-1">
                    <Button variant="outline-gray" className="me-0" onClick={() => setSearch(!search)}>
                        {search ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="d-block" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        ):(
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="d-block" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        )}
                    </Button>
                </Col>
                <Col md={4} lg={3} className="ms-auto mt-md-0 mt-2 mb-md-0 mb-3">
                    {search && (
                        <Form>
                            <InputGroup className="form-search shadow">
                                <Button variant="reset" id="button-addon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </Button>
                                <Form.Control
                                    aria-describedby="basic-addon1"
                                    aria-label="Write something to search"
                                    placeholder="Write something to search..."
                                />
                            </InputGroup>
                        </Form>
                    )}
                </Col>
            </Row>
           
            <div className="mb-20">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th width="84">
                                <div className="d-flex align-items-center justify-content-between">
                                    <Dropdown size="sm" className="me-2">
                                        <Dropdown.Toggle variant="reset" id="dropdown-basic">
                                            <img src={Eye} alt="Eye" />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-filter-table">
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-1`}
                                                    label={`Show/Hide Columns`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-2`}
                                                    label={`Favourites`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-3`}
                                                    label={`Id`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-4`}
                                                    label={`File Name`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-5`}
                                                    label={`Document Name`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-6`}
                                                    label={`State`}
                                                />
                                            </div>
                                            <div className="d-flex px-2 py-1">
                                                <Form.Check
                                                    className="mb-0"
                                                    type='checkbox'
                                                    id={`default-7`}
                                                    label={`Global Id`}
                                                />
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <Form.Check
                                        className="mb-0 check-single"
                                        type='checkbox'
                                        id={`default-8`}
                                    />
                                </div>
                            </th>
                            {selectedColumns[0] ? 
                            (<>
                            {selectedColumns.map((r,i)=>{
                                return(
                                    <th className="text-center">{r}</th>
                                )
                            })}
                            </>):(<>
                                <th className="text-center">Job id</th>
                            <th className="text-center">Job name</th>
                            <th className="text-center">Job run by</th>
                            <th className="text-center">Company</th>
                            <th className="text-center">Start time</th>
                            <th className="text-center">Completion time</th>
                            <th className="text-center">Status</th>
                            </>)}
                            
                        </tr>
                    </thead>
                    <tbody>

                    {Selectedcolm[0] ?
                    
                     (<>
                      
                      {Selectedcolm.map((r,i) =>{
                       
                            
                                return(
                                   
                                    <tr>
                                          <td width="84">
                                                <div className="d-flex justify-content-end">
                                                    <Form.Check
                                                        className="mb-0 check-single"
                                                        type='checkbox'
                                                        id={`default-9`}
                                                    />
                                                </div>
                                            </td>
                                        {r.map((x,y)=>{
                                            return(<>
                                              
                                            <td className="text-center">{x}</td>
                                            </>
                                            )
                                        })}
                                   
                                    {/* <td className="text-center">{r[1] === "DOC_FETCH" ? "Resource persist job": "Immutable record job"}</td>
                                    <td className="text-center">{r.jobRunByUser}</td>
                                    <td className="text-center">{r.companyCode}</td>
                                    <td className="text-center">{r.runStartTime}</td>
                                    <td className="text-center">{r.runCompletionTime}</td>
                                    <td className="text-center">{r.status === "Y" ? "Completed" : "Running"}</td> */}
                                </tr>
                                )
                           
                      
                            
                        })}
                     </>):(<>
                      {jobLists[0] === null || jobLists[0] === "" || jobLists[0] === undefined ?
                        (<>
                        </>):
                        (<>
                        {jobLists.map((r,i) =>{
                            if(r.jobName === "DOC_FETCH"){
                                return(
                                    <tr>
                                    <td width="84">
                                        <div className="d-flex justify-content-end">
                                            <Form.Check
                                                className="mb-0 check-single"
                                                type='checkbox'
                                                id={`default-9`}
                                            />
                                        </div>
                                    </td>
                                    <td className="text-center">{r.id}</td>
                                    <td className="text-center">{r.jobName === "DOC_FETCH" ? "Resource persist job": "Immutable record job"}</td>
                                    <td className="text-center">{r.jobRunByUser}</td>
                                    <td className="text-center">{r.companyCode}</td>
                                    <td className="text-center">{r.runStartTime}</td>
                                    <td className="text-center">{r.runCompletionTime}</td>
                                    <td className="text-center">{r.status === "Y" ? "Completed" : "Running"}</td>
                                </tr>
                                )
                            }
                           
                        })}
                        </>)}
                     </>)
                     
                     }
                       
                       
                      
                    </tbody>
                </Table>

                <Row className="mt-4">
                    <Col md={4} className="mb-md-0 mb-3">
                        {/* <Dropdown size="sm">
                            <Dropdown.Toggle variant="gray" id="dropdown-basic">
                                Select Rows
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-filter">
                                <Dropdown.Item href="#/action-1">100 Rows</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">500 Rows</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">1000 Rows</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}
                    </Col>
                    <Col md={8} className="d-flex justify-content-md-end justify-content-center">
                        <ul className="d-flex pagination list-unstyled">
                            <li>
                                <Link to="/" className="prev disabled">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li><Link className={StartValue === 0 ? 'active' : ''}  onClick={()=>paginationProcess(0,10)} >1</Link></li>
                            <li><Link className={StartValue === 11 ? 'active' : ''} onClick={()=>paginationProcess(11,10)}>2</Link></li>
                            <li><Link className={StartValue === 21? 'active' : ''} onClick={()=>paginationProcess(21,10)}>3</Link></li>
                            <li><Link className={StartValue === 31? 'active' : ''} onClick={()=>paginationProcess(31,10)}>4</Link></li>
                            <li><Link className={StartValue === 41? 'active' : ''} onClick={()=>paginationProcess(41,10)}>5</Link></li>
                            <li><Link className={StartValue === 51 ? 'active' : ''} onClick={()=>paginationProcess(51,10)}>6</Link></li>
                            <li>
                                <Link onClick={()=>paginationProcess(StartValue+10,10)} className="next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Manage columns</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-4 justify-content-between">
                        <Col md={6} className="py-1 mb-md-0 mb-2">
                            <h6 className="mb-2">Available columns:</h6>
                
                            <Card>
                                <Card.Header className="border-0">
                                    <h5 className="d-flex align-items-center"><img src={CheckBox} alt="CheckBox" className="me-2" /> {selectedValues?.length} {selectedValues?.length < 2 ? 'item' : 'items' } selected</h5>

                                    <InputGroup className="form-search shadow border">
                                        <Form.Control
                                            aria-describedby="basic-addon1"
                                            aria-label="Write something to search"
                                            placeholder="Search columns..."
                                            className="ps-3"
                                            onChange={(e) => handleSearch(e)}
                                        />
                                        <Button variant="reset"  id="button-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </Button>
                                    </InputGroup>
                                </Card.Header>
                                <Card.Body className="pt-0">
                                    {data?.filter((item) => item.toLowerCase().includes(search1?.toLowerCase()))?.map((item, index) => (
                                        <div key={index} className={`mb-1 d-flex`}>
                                            <Form.Check
                                                className="mb-0"
                                                type='checkbox'
                                                id={`default-${index}`}
                                                label={item}
                                                value={item}
                                                onChange={() => handleCheckboxClick(item)}
                                            />
                                        </div>
                                    ))}                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="py-1">
                            <h6 className="mb-2">Selected Columns:</h6>
                            
                            <Card>
                                <Card.Body>
                                    <ul className="selected-list list-unstyled d-flex flex-wrap">
                                        {selectedValues?.map((item, index) => (
                                            <li key={index}><Button variant="outline-gray">{item}</Button></li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Row>
                                <Col xs={6}>
                                    <Button type="submit" variant="dark" className="w-100 btn-button" onClick={handlefatch}>Fetch</Button>
                                </Col>
                                <Col xs={6}>
                                    <Button type="reset" onClick={()=>setSelectedValues([])} variant="outline-dark" className="w-100 btn-button">Reset</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            {/* /.mb-20 */}
        </div>
     );
}

export default JobDetails;