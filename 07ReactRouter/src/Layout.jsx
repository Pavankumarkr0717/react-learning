import Footer from './components/Footer/Footer';
import Header from './components/Headers/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
