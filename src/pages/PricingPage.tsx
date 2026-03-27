/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useOutletContext } from 'react-router-dom';
import Pricing from '../components/Pricing';
import type { AppOutletContext } from './outletContext';

export default function PricingPage() {
  const { onRequestPrototype } = useOutletContext<AppOutletContext>();
  return (
    <div className="relative z-10 pt-24 sm:pt-28">
      <Pricing onRequestPrototype={onRequestPrototype} />
    </div>
  );
}
