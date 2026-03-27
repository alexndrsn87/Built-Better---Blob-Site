/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CustomScrollbar from './components/CustomScrollbar';
import PrototypeModal from './components/PrototypeModal';

export default function App() {
  const [prototypeOpen, setPrototypeOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-navy text-white overflow-hidden selection:bg-pink selection:text-white">
      <CustomScrollbar />
      <div className="crt-glow"></div>
      <Background3D />
      <Navbar onRequestPrototype={() => setPrototypeOpen(true)} />
      <Hero onRequestPrototype={() => setPrototypeOpen(true)} />
      <WhatWeDo />
      <Pricing onRequestPrototype={() => setPrototypeOpen(true)} />
      <Footer />
      <PrototypeModal open={prototypeOpen} onClose={() => setPrototypeOpen(false)} />
    </main>
  );
}
