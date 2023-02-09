import React, { useState } from 'react';
import "./style.css"
import NavTabs from './components/NavTabs';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from "./components/pages/Contact"
import Resume from './components/pages/Resume';
import Footer from './components/Footer'

export default function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}







