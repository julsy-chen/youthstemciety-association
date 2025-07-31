import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import WebsiteHeader from './WebsiteHeader.js';
import Homepage from './pages/HomePage.js';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Resources from './pages/Resources';
import Blog from './pages/Blog';

export default function App() {
  const [offeredResourceNumber, setOfferedResourceNumber] = useState(1)

  const offeredResourcesArray = [
    ["Student Blogs", "this is a description of the student blogs"],
    ["Mentorship Program", "this is a description of the mentorship program"],
    ["Study Resources", "this is a description of the study resources"],
    ["Inclusive Community", "this is a description of the inclusive community"],
  ]



  return (
    <>
      <div>
        <WebsiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}
