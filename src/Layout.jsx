import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}

export default Layout
