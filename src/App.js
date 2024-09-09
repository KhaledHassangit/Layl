import React, { Suspense, memo } from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import LayOut from './Utilities/LayOut';
import ScrollToTop from 'react-scroll-to-top';
import PuffLoader from 'react-spinners/PuffLoader';

// Lazy load route components with React.memo()
const lazyWithMemo = (importFunc) => {
  const LazyComponent = React.lazy(importFunc);
  return memo((props) => (
    <Suspense fallback={<div className='loading-spinner'><PuffLoader  BoxLoader
      style={{  
        display: "block",
        margin: "0 auto",
      }}
      aria-label="Loading Spinner"
      data-testid="loader"
      color={'#FF9B1B'} 
      size={15} />
      </div>}>
      <LazyComponent {...props} />
    </Suspense>
  ));
};

const ProductsPage = lazyWithMemo(() => import('./Pages/Products/ProductsPage'));
const ProductsDetailsPage = lazyWithMemo(() => import('./Pages/Products/ProductsDetailsPage'));
const HomePage = lazyWithMemo(() => import('./Pages/Home/HomePage'));
const CartPage = lazyWithMemo(() => import('./Pages/Cart/CartPage'));
const CheckOut = lazyWithMemo(() => import('./Components/Cart/CheckOut'));
const PaymentMethods = lazyWithMemo(() => import('./Components/Cart/PaymentMethods'));
const LoginPage = lazyWithMemo(() => import('./Pages/Auth/LoginPage'));
const Register = lazyWithMemo(() => import('./Pages/Auth/Register'));
const AdminAddProductPage = lazyWithMemo(() => import('./Pages/Admin/AdminAddProductPage'));
const UserPage = lazyWithMemo(() => import('./Pages/User/UserPage'));
const ForgetPassword = lazyWithMemo(() => import('./Pages/Auth/ForgetPassword'));
const AdminHomePage = lazyWithMemo(() => import('./Pages/Admin/AdminHomePage'));
const AdminOrdersPage = lazyWithMemo(() => import('./Pages/Admin/AdminOrdersPage'));
const AdminCustomerRequestsPage = lazyWithMemo(() => import('./Pages/Admin/AdminCustomerRequestsPage'));
const AdminUsersPage = lazyWithMemo(() => import('./Pages/Admin/AdminUsersPage'));
const AdminProfilePage = lazyWithMemo(() => import('./Pages/Admin/AdminProfilePage'));
const AdminDiscountsPage = lazyWithMemo(() => import('./Pages/Admin/AdminDiscountsPage'));
const AdminVouchersPage = lazyWithMemo(() => import('./Pages/Admin/AdminVouchersPage'));
const AdminProductsPage = lazyWithMemo(() => import('./Pages/Admin/AdminProductsPage'));
const AdminEditProfilePage = lazyWithMemo(() => import('./Pages/Admin/AdminEditProfilePage'));

// Define router and routes
const router = createBrowserRouter(
  createRoutesFromElements([
    // Admin routes
    <Route path='/Admin/Home' element={<AdminHomePage />} />,
    <Route path='/Admin/Orders' element={<AdminOrdersPage />} />,
    <Route path='/Admin/Users' element={<AdminUsersPage />} />,
    <Route path='/Admin/Profile' element={<AdminProfilePage />} />,
    <Route path='/Admin/EditProfile' element={<AdminEditProfilePage />} />,
    <Route path='/Admin/Discounts' element={<AdminDiscountsPage />} />,
    <Route path='/Admin/Vouchers' element={<AdminVouchersPage />} />,
    <Route path='/Admin/CustomerRequests' element={<AdminCustomerRequestsPage />} />,
    <Route path='/Admin/AddProduct' element={<AdminAddProductPage />} />,
    <Route path='/Admin/Products' element={<AdminProductsPage />} />,

    // Other routes
    <Route index element={<HomePage />} />,
    <Route path='/' element={<LayOut />}>

      {/*  User Routes  */}
      <Route path='/User/Profile' element={<UserPage />} />,

      <Route path='Products' element={<ProductsPage />} />,
      <Route path='Login' element={<LoginPage />} />,
      <Route path='Register' element={<Register />} />,
      <Route path='/ForgetPassword' element={<ForgetPassword />} />,

      <Route path='/Products/ProductDetails' element={<ProductsDetailsPage />} />,
      <Route path='/Cart' element={<CartPage />} />,
      <Route path='Cart/Checkout' element={<CheckOut />} />,
      <Route path='/Cart/Checkout/PaymentMethods' element={<PaymentMethods />} />,
    </Route>
  ])
);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ScrollToTop smooth style={{ backgroundColor: '#FF9B1B', borderRadius: '50%' }} />
    </div>
  );
}

export default App;
