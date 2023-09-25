import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';
import UpdateHomePage from './pages/UpdateHomePage';
import CreateHomePage from './pages/CreateHomePage';
import AboutPage from './pages/AboutPage';
import UpdateAboutPage from './pages/UpdateAboutPage'
import CreateAboutPage from './pages/CreateAboutPage'
import TestimonialPage from './pages/TestimonialPage';
import UpdateTestimonialPage from './pages/UpdateTestimonialPage'
import CreateTestimonialPage from './pages/CreateTestimonialPage'
import WorkPage from './pages/WorkPage';
import UpdateWorkPage from './pages/UpdateWorkPage'
import CreateWorkPage from './pages/CreateWorkPage'
import FaqPage from './pages/FaqPage';
import UpdateFaqPage from './pages/UpdateFaqPage'
import CreateFaqPage from './pages/CreateFaqPage';
import ServicePage from './pages/ServicePage';
import UpdateServicePage from './pages/UpdateServicePage';
import CreateServicePage from './pages/CreateServicePage';
import ContactPage from './pages/ContactPage';
import UpdateContactPage from './pages/UpdateContactPage';
import CreateContactPage from './pages/CreateContactPage';
import IossPage from './pages/IossPage';
import FiscalPage from './pages/FiscalPage';
import PartnerShipPage from './pages/PartnerShipPage';
import TaxPayPage from './pages/TaxPayPage';
import CUIossPage from './pages/CUIossPage'
import CIossPage from './pages/CIossPage'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AccountPage />} />
          <Route path='/dashboard' element={<HomePage />} />
          <Route path='/home/:id' element={<UpdateHomePage />} />
          <Route path='/home/create' element={<CreateHomePage />} />

          <Route path='/about' element={<AboutPage />} />
          <Route path='/about/:id' element={<UpdateAboutPage />} />
          <Route path='/about/create' element={<CreateAboutPage />} />

          <Route path='/testimonial' element={<TestimonialPage />} />
          <Route path='/testimonial/:id' element={<UpdateTestimonialPage />} />
          <Route path='/testimonial/create' element={<CreateTestimonialPage />} />


          <Route path='/work' element={<WorkPage />} />
          <Route path='/work/:role/:id' element={<UpdateWorkPage />} />
          <Route path='/work/create/:role' element={<CreateWorkPage />} />

          <Route path='/faq' element={<FaqPage />} />
          <Route path='/faq/:title/:id' element={<UpdateFaqPage />} />
          <Route path='/faq/create' element={<CreateFaqPage />} />


          <Route path='/service' element={<ServicePage />} />
          <Route path='/service/:id' element={<UpdateServicePage />} />
          <Route path='/service/create' element={<CreateServicePage />} />

          <Route path='/contact' element={<ContactPage />} />
          <Route path='/contact/:id' element={<UpdateContactPage />} />
          <Route path='/contact/create' element={<CreateContactPage />} />

          <Route path='/ioss' element={<IossPage />} />
          <Route path='/fiscal' element={<FiscalPage />} />
          <Route path='/partner' element={<PartnerShipPage />} />
          <Route path='/tax' element={<TaxPayPage />} />

          <Route path='/U/:role/:id' element={<CUIossPage />} />
          <Route path='/C/:role' element={<CIossPage />} />


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;