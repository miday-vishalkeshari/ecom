import React, { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate,useLocation} from 'react-router-dom'
import { useAuth } from '../../Context/Auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {   
            const res = await axios.post("/api/v1/auth/login",
                {  email, password }
            );
            if (res && res.data.success) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                navigate(location.state || "/");
            }
            else {
                toast(res.data.message);
            }
        }
        catch (error) {
            toast.error("something went wrong")
            setEmail("");
            setPassword("");
        };
    }

    return (
        <>
            <Layout title = "Login Page">
                <div className='register'>
                    <h1>Login User</h1>
                    <form onSubmit={handleSubmit}>

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

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </Layout>
        </>
    )
}

export default Login
