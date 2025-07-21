import React from 'react';
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import RoutLayout from './layout/RouteLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import JobLayout from './layout/JobLayout';
import Jobs, { jobsLoader } from './pages/Jobs';
import JobDetails, { jobDetailsLoader } from './components/JobDetails';
import Error from './components/Error';

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RoutLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='about' element={<About/>}/>
      {/* Nested Routes */}
      <Route path='contact' element={<ContactLayout />}> 
        <Route path='info' element={<ContactInfo/>} />
        <Route path='form' element={<ContactForm/>} />
      </Route>
      {/* Nout Found Page */}
      <Route path='*' element={<NotFound/>}/>
      {/* React Router Loader */}
      <Route path='jobs' element={<JobLayout/>}   errorElement={<Error/>}>
        <Route index element={<Jobs/>} loader={jobsLoader} />
        {/* Route Parameter */}
        <Route path=':id' element={<JobDetails/>} loader={jobDetailsLoader}/>
      </Route>
    </Route>
  ));

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
