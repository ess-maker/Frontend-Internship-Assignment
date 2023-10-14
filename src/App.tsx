import { Outlet } from "react-router-dom"
import Navbar from "./components/header/Navbar"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div className="overflow-hidden w-full">
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}
export default App