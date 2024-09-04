// src/routes.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Solutions from './components/Solutions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'Solutions',
    element: <Solutions />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}