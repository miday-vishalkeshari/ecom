import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register",
                { name,email,password,phone,address}
            );

            if(res && res.data.success){
                toast.success(res.data.message);   
            }
            else{
                toast(res.data.message);     
            }
            navigate("/login");     
        }
        catch (error) {
            console.log(`error in register.js file --> ${error}`)
            toast.error("something went wrong")
        };
    }

    return (
        <>
            <Layout title = "Login Page">
                <div className='register'>
                    <h1>Register User</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder='Enter Your Name'
                                required 
                                autofocus />
                        </div>

                        <div className="mb-3">
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                placeholder='Enter your Email'
                                required />
                        </div>

                        <div className="mb-3">

                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder='Enter Your Password'
                                required />
                        </div>

                        <div className="mb-3">

                            <input type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"
                                placeholder='Enter Your Phone No.'
                                required />
                        </div>

                        <div className="mb-3">

                            <input type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                placeholder='Enter Your Address'
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Register
