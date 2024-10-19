import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import PortFolioApp from './PortFolioApp';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortFolioApp />
  </StrictMode>,
)
