import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';
import ScrollToTop from 'react-scroll-to-top';
import ProtectedRoutesHook from './CustomHooks/Auth/ProtectedRoutes-Hook';
import ProtectedRoutes from './Utilities/ProtectedRoutes';
import ErrorBoundary from './Utilities/ErrorBoundary'; 
import UseRefreshToken from './Hooks/UseRefreshToken';
import Cookies from 'universal-cookie';
import svg from "./Images/Cookies.svg"
const cookies = new Cookies();

// Lazy loading with memoization
const lazyWithMemo = (importFunc) => {
  const LazyComponent = React.lazy(importFunc);
  return React.memo((props) => (
    <React.Suspense fallback={
      <div className='loading-spinner bg'>
        <PuffLoader
          aria-label='Loading Spinner'
          data-testid='loader'
          color={'#FF9B1B'}
          size={80}
        />
      </div>
    }>
      <LazyComponent {...props} />
    </React.Suspense>
  ));
};

// Lazy-loaded components
const ProductsPage = lazyWithMemo(() => import('./Pages/Products/ProductsPage'));
const ProductsDetailsPage = lazyWithMemo(() => import('./Pages/Products/ProductsDetailsPage'));
const HomePage = lazyWithMemo(() => import('./Pages/Home/HomePage'));
const CartPage = lazyWithMemo(() => import('./Pages/Cart/CartPage'));
const CheckOut = lazyWithMemo(() => import('./Components/Cart/CheckOut'));
const LoginPage = lazyWithMemo(() => import('./Pages/Auth/LoginPage'));
const Register = lazyWithMemo(() => import('./Pages/Auth/Register'));
const AdminAddProductPage = lazyWithMemo(() => import('./Pages/Admin/AdminAddProductPage'));
const AdminEditProductPage = lazyWithMemo(() => import('./Pages/Admin/AdminEditProductPage'));
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
const OrderDetailsPage = lazyWithMemo(() => import('./Pages/Admin/OrderDetailsPage'));
const ResetPassword = lazyWithMemo(() => import('./Pages/Auth/ResetPassword'));
const LayOut = lazyWithMemo(() => import('./Utilities/LayOut'));
const PageNotFound = lazyWithMemo(() => import('./Utilities/PageNotFound'));
const OrderConfirmation = lazyWithMemo(() => import('./Components/Cart/OrderConfirmation'));

// Cookie consent component
const CookieConsent = () => {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const consent = cookies.get('cookieConsent');
    if (!consent) {
      setTimeout(() => setShowBox(true), 500); 
    }
  }, []);

  const handleAcceptCookies = () => {
    cookies.set('cookieConsent', 'all', { path: '/', maxAge: 150 * 24 * 60 * 60 });
    setShowBox(false);
  };

  const handleOnlyEssential = () => {
    cookies.set('cookieConsent', 'essential', { path: '/', maxAge: 150 * 24 * 60 * 60 });
    setShowBox(false);
  };


  return (
    <div className={`cookie-consent-box ${showBox ? 'show' : ''}`}>
      <div className="cookie-consent-content">
        <div className="cookie-image">
          <img src={svg} alt="Cookie Icon" />
        </div>
        <p>We use cookies to improve your experience on our site. By using our site, you consent to cookies.</p>
        <div className="cookie-consent-buttons">
          <button onClick={handleAcceptCookies} className="accept-btn">Accept all cookies</button>
          <button onClick={handleOnlyEssential} className="essential-btn">Only essential cookies</button>
        </div>
      </div>
    </div>






  );
};

const App = () => {
  const [isAdmin, isUser] = ProtectedRoutesHook();
  const [refreshTokenFunction, loadingToken] = UseRefreshToken();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Admin routes */}
        {/* <Route element={<ProtectedRoutes auth={isAdmin} />}> */}
          <Route path='/admin/home' element={<AdminHomePage />} />
          <Route path='/admin/orders' element={<AdminOrdersPage />} />
          <Route path='/admin/users' element={<AdminUsersPage />} />
          <Route path='/admin/profile' element={<AdminProfilePage />} />
          <Route path='/admin/editprofile' element={<AdminEditProfilePage />} />
          <Route path='/admin/discounts' element={<AdminDiscountsPage />} />
          <Route path='/admin/vouchers' element={<AdminVouchersPage />} />
          <Route path='/admin/customerrequests' element={<AdminCustomerRequestsPage />} />
          <Route path='/admin/addproduct' element={<AdminAddProductPage />} />
          <Route path='/admin/products' element={<AdminProductsPage />} />
          <Route path='/admin/editproduct/:id' element={<AdminEditProductPage />} />
          <Route path='/admin/orderdetails/:id' element={<OrderDetailsPage />} />
        {/* </Route> */}
        {/* Other routes */}
        <Route path='/404' element={<PageNotFound />} />
        <Route path='/' element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          {/* User Routes */}
          {/* <Route element={<ProtectedRoutes auth={isUser} />}> */}
            <Route path='/users/me' element={<UserPage />} />
          {/* </Route> */}
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<Register />} />
          <Route path='/forget-password' element={<ForgetPassword />} />
          <Route path='password-reset-confirm/:uid/:token' element={<ResetPassword />} />
          {/* <Route path='/products/productdetails/:id' element={<ProductsDetailsPage />} /> */}
          <Route path='/products/productdetails/' element={<ProductsDetailsPage />} />
          <Route path='cart/checkout' element={<CheckOut />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/oderconfirmed' element={<OrderConfirmation />} />
        </Route>
      </>
    )
  );

  return (
    <ErrorBoundary>
      <div className='App'>
        <RouterProvider router={router} />
        <ScrollToTop smooth style={{ backgroundColor: '#FF9B1B', borderRadius: '50%' }} />
        <CookieConsent />
      </div>
    </ErrorBoundary>
  );
};

export default App;
