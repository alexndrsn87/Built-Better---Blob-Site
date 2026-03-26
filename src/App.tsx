/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sandbox from './components/Sandbox';
import Pricing from './components/Pricing';
import Terms from './components/Terms';
import Footer from './components/Footer';
import CustomScrollbar from './components/CustomScrollbar';

export default function App() {
  return (
    <main className="relative min-h-screen bg-navy text-white overflow-hidden selection:bg-pink selection:text-white">
      <CustomScrollbar />
      <div className="crt-glow"></div>
      <Background3D />
      <Navbar />
      <Hero />
      <Sandbox />
      <Pricing />
      <Terms />
      <Footer />
    </main>
  );
}
