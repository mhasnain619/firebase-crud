import './myProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from '../anain.jpg'
import Button from 'react-bootstrap/Button';
// import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { useEffect, useState } from 'react';
const MyProfile = () => {
    const [userData, setUserData, deleteData] = useState()
    const getValue = () => {

        fetch('https://reactapp-2e601-default-rtdb.firebaseio.com/userDataRecord.json',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then((res) => {
            const data = res.json().then((data) => {
                setUserData(data[""])
            })
        }).catch((error) => {
            console.log("lol")
        })
    }

    // to remove Data

    const removedata = () => {
        fetch('https://reactapp-2e601-default-rtdb.firebaseio.com/userDataRecord.json',
            {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            }
        ).then((res) => {
            const data = res.json().then((data) => {
                deleteData(data[""]);
                alert("Data removed");
            })

        }).catch((error) => {
            console.log("lol");
        })
    }

    useEffect(() => {
        getValue();
    }, [])
    console.log(userData)
    return (
        <div className="Main-container">
            <div className='card-container'>
                <div className='userPic-Info'>
                    <div className='red-circle'>
                        <div className='user-Image-div'>
                            <img src={Image} className='user-Image' alt='' />
                        </div>
                    </div>
                    <div className='user-info'>
                        <div className='userName'>
                            <p>{userData?.name ? userData.name : ""}</p>
                        </div>
                        <div className='userEmail'>
                            <p>{userData?.email ? userData.email : ""}</p>
                        </div>
                        <div className='userDev'>
                            <p>{userData?.Phone ? userData.Phone : ""}</p>
                        </div>
                        <div className='userAddress'>
                            <p>{userData?.address ? userData.address : ""}</p>
                        </div>
                        <div className='btn'>
                            <Button variant="danger" onClick={removedata}>Remove</Button>
                            <Button variant="danger" onClick={removedata}>Update</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default MyProfile;