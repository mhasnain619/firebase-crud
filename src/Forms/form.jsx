import React, { useState } from "react";
import './forms.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
// import userImage from '../anain.jpg'
const MyForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        Phone: '',
        address: '',
        image: '',

    })
    const postUserData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUserData({ ...userData, [name]: value })
    }

    // connect with firebase //

    const submitData = async (event) => {
        event.preventDefault();
        const { name, email, Phone, address, } = userData;
        if (name && email && Phone && address) {
            const res = fetch('https://reactapp-2e601-default-rtdb.firebaseio.com/userDataRecord.json',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        Phone,
                        address,
                        image: "https://comepbstatic.imgix.net/wifi-range-man-on-laptop.jpg?fm=pjpg&auto=compress",
                    })
                }
            )
            if (res) {
                setUserData({
                    name: '',
                    email: '',
                    Phone: null,
                    address: '',

                })
                alert("Data stored on Firebase Database")
                console.log(res)

            } else {
                alert("nothing")
            }
        }
        else {
            alert("Please fill all input fields")
        }
    }

    return (
        <div className="all-over-body">
            <div className="main-container">
                <div className="header">
                    <p>Registration Form</p>
                </div>
                <Form method="POST" className="form-body">
                    <div className='main'>
                        <Row>
                            <Col >
                                <Form.Control
                                    className='nameInput my-2'
                                    aria-label="Small"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={userData.name}
                                    onChange={postUserData}
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                                <Form.Control
                                    className='inputEmail my-2'
                                    aria-label="Small"
                                    placeholder="E-mail"
                                    name="email"
                                    type="email"
                                    value={userData.email}
                                    onChange={postUserData}
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                                <Form.Control
                                    className='inputPhone my-2'
                                    aria-label="Small"
                                    placeholder="Phone"
                                    name="Phone"
                                    type="number"
                                    value={userData.number}
                                    onChange={postUserData}
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                                <Form.Control
                                    className='inputPhone my-2'
                                    aria-label="Small"
                                    placeholder="Address"
                                    value={userData.address}
                                    onChange={postUserData}
                                    name="address"
                                    type="text"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </Col>
                            <Col className="img-container">
                                <div className="UserImage">
                                    <img src='' alt="userImage" />
                                </div>
                                <Form.Control
                                    className='inputImage my-2'
                                    aria-label="Small"
                                    placeholder="text"
                                    type="file"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            </Col>
                        </Row>
                        <Button
                            className='submit-btn'
                            onClick={submitData}>
                            Submit
                        </Button>
                    </div >
                </Form>
            </div>
        </div>
    )
}
export default MyForm;
