/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomScrollbar from './components/CustomScrollbar';
import PrototypeModal from './components/PrototypeModal';
import HomePage from './pages/HomePage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import PricingPage from './pages/PricingPage';
import type { AppOutletContext } from './pages/outletContext';

function Layout() {
  const [prototypeOpen, setPrototypeOpen] = useState(false);
  const onRequestPrototype = () => setPrototypeOpen(true);

  const outletContext: AppOutletContext = { onRequestPrototype };

  return (
    <main className="relative min-h-screen bg-navy text-white overflow-hidden selection:bg-pink selection:text-white">
      <CustomScrollbar />
      <div className="crt-glow"></div>
      <Background3D />
      <Navbar onRequestPrototype={onRequestPrototype} />
      <Outlet context={outletContext} />
      <Footer />
      <PrototypeModal open={prototypeOpen} onClose={() => setPrototypeOpen(false)} />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
