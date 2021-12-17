import React from 'react';
import './TaskForm.css'
import { Button,Form } from 'react-bootstrap';
import formLogo from '../../../images/form-logo (3).png';
import companyLogo from '../../../images/company-logo (1).png'
const TaskForm = () => {
    return (
            <div className='form-area overflow-hidden'>
                <img className='comLogo' src={companyLogo} />
                <div className='form-container d-flex justify-content-center align-items-center'>
                    <div className="form-box">
                    <div className='img-area'>
                    <img className='logo-img ' src={formLogo} />
                    </div>
                    <h2 className='mt-3 text-center text-1'>It's a delight to have you <br/>onboard</h2>
                    <div className='text-2 mt-4 mb-4'>
                    <p>Help us know you better.<br/></p> 
                    <p>(This is how we optimize Wobot as per your business needs)</p>
                    </div>
                    
                    {/* input field area */}
                    <Form>
                        <div>
                            <Form.Group className="mb-3 form-field mx-auto" controlId="formBasicEmail">
                                <Form.Label className='text-3'>Company Name</Form.Label>
                                <Form.Control type="name" placeholder="e.g. Example Inc" />
                            </Form.Group> <br/>
                            <Form.Group className="form-field mx-auto" controlId="formGridState">
                                <Form.Label className='text-3'>Industry</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Select...</option>
                                    <option>Wobot.ai...</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className='my-5 form-field mx-auto'>
                            <p className='text-3'>Company Size</p>
                            <div className='d-flex'>
                                <Button variant="light disabled text-dark fw-bold me-2" size="sm">
                                1-20
                                </Button>
                                <Button variant="light disabled text-dark fw-bold me-2" size="sm">
                                21-50
                                </Button>
                                <Button variant="primary me-2 fw-bold" size="sm">
                                51-200
                                </Button>
                                <Button variant="light disabled text-dark fw-bold me-2" size="sm">
                                201-500
                                </Button>
                                <Button variant="light disabled text-dark fw-bold me-2" size="sm">
                                500+
                                </Button>
                            </div>
                        </div>
                            <div className='form-field mx-auto'>
                                <Button variant="primary my-2" className='form-field mx-auto'>Get Started</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className='text-4'>
                    <p>Terms of use | Privacy policy</p>
                </div>
            </div>
    );
};

export default TaskForm;