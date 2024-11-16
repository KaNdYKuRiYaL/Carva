import React from 'react'
import AuthProvider from '@/components/AuthProvider';
import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '@/context/GlobalContext';
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: 'Carva | Find the Perfect Car',
  description : 'Find your dream car',
  keywords : 'rental , find cars , find rentals',
};


const MainLayout = ({children}) => {
  return (
    <AuthProvider>    
      <GlobalProvider>  
        <html lang='en'>
          <body>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
            <ToastContainer/>
          </body>    
        </html>
      </GlobalProvider>
    </AuthProvider>

  );
}

export default MainLayout
