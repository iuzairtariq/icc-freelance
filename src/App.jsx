import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PMForm from './pages/PMForm';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';

const App = () => {
  return (
    <Router>
      <div className='text-2xl text-center px-4 md:px-8 lg:px-16'>
        <Routes>
          {/* Route for PMForm */}
          <Route path="/pmform" element={<PMForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<Payment />} />

          {/* Route for OrderPage */}
          {/* <Route path="/order" element={<OrderPage />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;