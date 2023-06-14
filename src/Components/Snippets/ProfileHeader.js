import { Button, Col, Dropdown, Row, Tab, Tabs } from "react-bootstrap";
import Avatar from "../../asserts/images/avartar.png"
import { Link } from "react-router-dom";
import LogoutIcon from "../../asserts/images/logout-icon.svg"

function ProfileHeader() {
    return ( 
        <header className="app-header">
            <div className="container-fluid">
                <Row className="align-items-center justify-content-between">
                    <Col xs={12} className="d-flex align-items-center">
                        <Link to="/" className="d-inline-block me-auto btn-back align-items-center"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                            Back to Dashboard
                        </Link>

                        <Dropdown className="dropdown-bell" align={"end"} autoClose="outside">
                            <Dropdown.Toggle variant="bell" className="shadow border-0" id="dropdown-basic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="d-block" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                                </svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="shadow-md">
                                <div className="dropdown-bell-body">
                                    <h3 className="mb-0">Notifications</h3>

                                    <Tabs
                                        defaultActiveKey="all"
                                        id="uncontrolled-tab-example"
                                    >
                                    <Tab eventKey="all" title="All">
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="unread" title="Unread">
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify unread">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="read" title="Read">
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                        <div className="d-flex notify">
                                            <img src={Avatar} alt="Avatar" />
                                            <div>
                                                <h6>Notification Title</h6>
                                                <p>Notification description will be presented here. You just need to replace the text</p>
                                                <p className="d-flex justify-content-between"><strong>Friday 03:50am</strong><strong>Sep 20, 2023</strong></p>
                                            </div>
                                        </div>
                                    </Tab>
                                    </Tabs>
                                </div>
                                <div className="dropdown-bell-footer d-flex align-items-center justify-content-between">
                                    <Button variant="link" className="p-0">Mark all as read</Button>
                                    <Button variant="dark" className="btn-button btn-sm">View all notifications</Button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown align={"end"} autoClose="outside">
                            <Dropdown.Toggle variant="ava" className="avatar p-0 border-0 d-flex align-items-center" id="dropdown-basic">
                                <strong className="d-none d-md-block">Asha</strong>
                                <img src={Avatar} className="shadow" alt="Avatar" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-avatar px-3">
                                <div className="d-flex py-3 border-bottom">
                                    <img src={Avatar} alt="Avatar" />

                                    <div className="d-flex flex-column justify-content-between">
                                        <h6>Asha</h6>
                                        <p>sigma.super.user@gmail.com</p>
                                    </div>
                                </div>
                                <div className="py-2 d-flex align-items-center justify-content-between">
                                    <Link to="/account" className="btn-link">My Account</Link>
                                    <Button variant="logout"><img src={LogoutIcon} alt="LogoutIcon" /> Sign Out</Button>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
        </header>
     );
}

export default ProfileHeader;