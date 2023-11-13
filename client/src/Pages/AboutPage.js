import React from 'react'
import Layout from '../Components/Layout/Layout'
import myImage from '../Images/contactUsImage.jpg';

const Aboutpage = () => {
  return (
    <>
      <Layout>
      <div className="outerDivOfContactus">
         

         <div className="contactDetailsDiv">
           
         <h1>About Us</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum ac justo in ultricies. Aenean ac odio sit amet metus luctus hendrerit. Vivamus sit amet felis non libero malesuada interdum. Vestibulum at fermentum nisi. Sed venenatis varius odio id malesuada. Fusce varius, libero a consequat bibendum, dui nulla egestas eros, a aliquam nunc erat et nisi. Quisque nec tincidunt libero, a vulputate justo. Nulla ut sapien non dolor congue cursus id eget eros.

Vestibulum suscipit sapien eu odio tincidunt, eu bibendum ex tempus. Nullam tincidunt varius urna, a bibendum ligula rhoncus vel. Sed auctor malesuada sagittis. Sed eget tristique orci. Suspendisse potenti. Praesent elementum libero nec sapien fringilla, eget sollicitudin lectus condimentum. Proin vel ligula at eros dapibus iaculis. Nullam hendrerit nisi id tellus suscipit, in congue dolor tincidunt.

Duis at mi eu quam venenatis tincidunt. In malesuada tortor eu purus feugiat, sed sollicitudin sapien congue. Nunc ultrices metus eget neque consectetur, et viverra velit ultricies. Curabitur sit amet odio ut libero feugiat bibendum. Integer rhoncus, justo in iaculis aliquet, libero quam bibendum tortor, non euismod turpis nulla eu metus. Donec vel metus nec quam scelerisque cursus in vel lorem.

Phasellus bibendum velit vitae orci malesuada, in lobortis justo finibus. Nullam euismod, lectus eget scelerisque fringilla, purus nulla eleifend eros, eget imperdiet orci sapien non libero. Aliquam erat volutpat. Integer quis odio vel ligula vestibulum vehicula nec a nunc. Donec elementum a turpis nec eleifend. Nullam vitae sapien sit amet libero volutpat interdum. Sed condimentum, sapien at convallis ultricies, sapien ipsum tincidunt dolor, eu malesuada eros nunc ac massa.</p>

           
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

export default Aboutpage
