import { Button, Col, Form, Row } from "react-bootstrap";
import Avatar from "../asserts/images/avartar.png"
import ProfileHeader from "./Snippets/ProfileHeader";
import React, { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import ReactCountryFlag from "react-country-flag"

function Profile() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value.target.value)
        // console.log('select', value.target.value);
    }
    return ( 
        <div>
            <ProfileHeader />

            <main className="app-main">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col lg={10} xl={9}>
                            <div className="d-flex mb-80 user-profile">
                                <img src={Avatar} alt="Avatar" />

                                <div className="d-flex flex-column justify-content-center">
                                    <h3>Asha</h3>
                                    <p>sigma.super.user@gmail.com</p>
                                </div>
                            </div>

                            <Row className="justify-content-between gx-xl-5">
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>First Name</Form.Label>
                                        <Form.Control type="text" value="Asha" />
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>Last Name</Form.Label>
                                        <Form.Control type="text" value="Lota" />
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>Nick Name</Form.Label>
                                        <Form.Control type="text" value="Asha" />
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>Gender</Form.Label>
                                        <Form.Select className="form-control" aria-label="Default select example">
                                            <option>I would prefer not to say</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>Country/Region</Form.Label>
                                        <div className="form-control d-flex align-items-center pe-0">
                                            {value && <div className="pe-2"><ReactCountryFlag countryCode={value} svg /></div>}
                                            <Form.Select className="form-reset form-control p-0 border-0 position-relative" style={{top: '2px'}} aria-label="Default select example" onChange={changeHandler}>
                                                <option>Select Country/Region</option>
                                                {options?.map((item) => (
                                                    <option key={item?.value} value={item?.value}>{item?.label}</option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                        {/* <Select options={options} value={value} onChange={changeHandler} /> */}
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>State</Form.Label>
                                        <Form.Select className="form-control" aria-label="Default select example">
                                            <option>Select State</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>Language</Form.Label>
                                        <Form.Select className="form-control" aria-label="Default select example">
                                            <option>English</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Form.Group className="mb-2" controlId="form.ControlInput1">
                                        <Form.Label className='text-muted'>Time Zone</Form.Label>
                                        <Form.Control type="text" value="(GMT +5:30) India Standard time ( Asia/Kolkata)" />
                                    </Form.Group>
                                </Col>
                                <Col className="mb-2" sm={6}>
                                    <Row>
                                        <Col xs={6}>
                                            <Button variant="dark" className="w-100 btn-button">Save</Button>
                                        </Col>
                                        <Col xs={6}>
                                            <Button variant="outline-dark" className="w-100 btn-button">Cancel</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </main>
        </div>
     );
}

export default Profile;