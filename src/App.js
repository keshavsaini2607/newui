import './App.css';
import CompanyIntro from './components/CompanyIntro';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import VideoGrid from './components/VideoGrid';
import WebsiteFeatures from './components/WebsiteFeatures';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <CompanyIntro />
      <WebsiteFeatures />
      <VideoGrid />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
