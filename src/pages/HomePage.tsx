/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import type { AppOutletContext } from './outletContext';

export default function HomePage() {
  const { onRequestPrototype } = useOutletContext<AppOutletContext>();
  return <Hero onRequestPrototype={onRequestPrototype} />;
}
