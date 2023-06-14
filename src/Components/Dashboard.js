import { Card, Col, Row } from "react-bootstrap";
import Layout from "./Snippets/Layout";
import IconDU from '../asserts/images/card-icon-du.svg'
import { PieChart } from "./Snippets/PieChart";
import { BarChart } from "./Snippets/BarChart";
import { useState } from "react";

function Dashboard() {
    const [theme, setThemeColor] = useState('');
    const setTheme = (e) =>{
        setThemeColor(e);
    }
    return ( 
        <Layout getThemeMode={(e) => setTheme(e)}>
            <div className="container-fluid">
                <Row className="mb-3">
                    <Col md={6} xl={4} xxl={3}>
                        <h2 className="font-bold">Hi, Asha Latha!</h2>
                        <p>Welcome to Sigma! We always appreciate you to stay connected and stay updated on Sigma.</p>
                    </Col>
                </Row>

                <Row className="gx-3 mb-1">
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-1 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>Documents Uploaded</span></h4>
                            <h3 className="mb-0">307616</h3>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-2 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>NFTs Created</span></h4>
                            <h3 className="mb-0">5935</h3>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-3 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>Total Documents</span></h4>
                            <h3 className="mb-0">313551</h3>
                        </div>
                    </Col>
                    <Col xs={6} lg={3} className="mb-3">
                        <div className="info-card info-card-4 d-flex flex-column justify-content-between">
                            <h4 className="d-flex align-items-center"><img src={IconDU} alt="IconDU" /> <span>Total Users</span></h4>
                            <h3 className="mb-0">04</h3>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={5} xl={4} className="mb-md-0 mb-4">
                        <Card className="shadow border-0 h-100">
                            <Card.Body className="p-lg-4 p-md-3 p-2 h-100 d-flex align-items-center justify-content-center">
                                <PieChart theme={theme} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7} xl={8}>
                        <Card className="shadow border-0 h-100">
                            <Card.Body className="p-lg-4 p-md-3 p-2 h-100 d-flex align-items-center justify-content-center">
                                <BarChart theme={theme} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Layout>
     );
}

export default Dashboard;