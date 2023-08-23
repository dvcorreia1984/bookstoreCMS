import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </BrowserRouter>
    <>
      <h1 className='text-xl font-serif text-red-500 '>Bookstore</h1>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
