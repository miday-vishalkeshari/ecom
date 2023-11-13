import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useAuth } from '../Context/Auth'

const Homepage = () => {
  const [auth,setAuth] =  useAuth();
  return (
    <>
    <Layout>
        <h1>Homepage</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
      
    </>
  )
}

export default Homepage
