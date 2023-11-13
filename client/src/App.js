import { Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Switch
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PageNotFound from './Pages/PageNotFound';
import ContactUsPage from './Pages/ContactUsPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Register from './Pages/auth/Register';
import Login from './Pages/auth/Login';
import Dashboard from './Pages/user/Dashboard';
// import Private from './Components/Routes/Private';
// import AdminRoute from './Components/Routes/AdminRoute';
import AdminDashboard from './Pages/admin/AdminDashboard';
import CreateCategory from './Pages/admin/CreateCategory'
import CreateProduct from './Pages/admin/CreateProduct'
import Users from './Pages/admin/Users'
import UserOrder from './Pages/user/UserOrder'
import UserProfile from './Pages/user/UserProfile'
import Products from './Pages/admin/Products'
import UpdateProduct from './Pages/admin/UpdateProduct';



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        {/* <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route> */}
        <Route path="/dashboard/user" element={<Dashboard />} />
        <Route path="/dashboard/user-order" element={<UserOrder />} />
        <Route path="/dashboard/user-profile" element={<UserProfile />} />


        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/admin/create-category" element={<CreateCategory />} />
        <Route path="/dashboard/admin/create-product" element={<CreateProduct />} />
        <Route path="/dashboard/admin/product/:slug" element={<UpdateProduct />} />
        <Route path="/dashboard/admin/users" element={<Users />} />
        <Route path="/dashboard/admin/products" element={<Products />} />





        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
