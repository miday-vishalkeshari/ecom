import React from 'react'
import Layout from '../Components/Layout/Layout'
import myImage from '../Images/contactUsImage.jpg';
import { AiFillMail, AiTwotonePhone } from 'react-icons/ai'
import { BiHeadphone } from 'react-icons/bi'

const ContactUsPage = () => {
  return (
    <>
      <Layout>
        
        <div className="outerDivOfContactus">
         

          <div className="contactDetailsDiv">
            <button className="contactDetailsbutton">CONTACT US</button>
            <p>
              any query add info about Product feel free to contact us
            </p>
            <p>{<AiFillMail />}  Kesharivishal611@gmail.com</p>
            <p>{<AiTwotonePhone />}  +91 756-484-4460</p>
            <p>{<BiHeadphone />}  1800-0000-0000 (toll free)</p>
          </div>

          <img
            src={myImage}
            alt="Description"
            className="contactUsPageImage" /* Add a CSS class to the <img> element */
          />

        </div>



      </Layout>
    </>
  )
}

export default ContactUsPage
