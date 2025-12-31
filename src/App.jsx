import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Work from './pages/Work/Work'
import About from './pages/About/About'
import Contact from "./pages/Contact/Contact";
import Navbar from './components/Navbar/Navbar'
import ActiveFoundationTrust from './pages/ProjectDetails/ActiveFoundationTrust'
import CognitionBerries from './pages/ProjectDetails/CognitionBerries'
import CrewConnect from './pages/ProjectDetails/CrewConnect'
import RoyalKidz from './pages/ProjectDetails/RoyalKidz'
import ActiveMediaWebsite from './pages/ProjectDetails/ActiveMediaWebsite'
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/active-media" element={<ActiveMediaWebsite />} />
        <Route path="/project/active-foundation" element={<ActiveFoundationTrust />} />
        <Route path="/project/crewconnect" element={<CrewConnect />} />
        <Route path="/project/cognition-berries" element={<CognitionBerries />} />
        <Route path="/project/royalkidz" element={<RoyalKidz />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
