import { Outlet } from 'react-router-dom'
import AppBar from './components/AppBar'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout