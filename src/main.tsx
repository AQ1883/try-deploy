import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Services from './pages/Services.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
]);

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
   <ThemeProvider>
   <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
