import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
