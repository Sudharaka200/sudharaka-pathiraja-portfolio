// src/App.jsx  —  shows where to add HelmetProvider + per-page SEO
// Install: npm install react-helmet-async

import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SEO from './components/SEO'

// Pages
import Home    from './pages/Home'
import Contact from './pages/contact'

export default function App() {
  return (
    // HelmetProvider must wrap everything — put it at the very top of your tree
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SEO
                  title="Sudharaka Pathiraja | Associate Software Engineer"
                  description="Associate Software Engineer specialising in full-stack development, Java, React, Spring Boot, and cloud technologies. Based in Sri Lanka."
                  path="/"
                />
                <Home />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SEO
                  title="Contact Sudharaka Pathiraja | Let's Work Together"
                  description="Get in touch with Sudharaka Pathiraja — open to freelance projects, collaborations, and full-time opportunities in software engineering."
                  path="/contact"
                  type="website"
                />
                <Contact />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}