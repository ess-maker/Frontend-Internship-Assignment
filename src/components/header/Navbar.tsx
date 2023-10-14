import { NavLink , useNavigate } from "react-router-dom"
import assest from "../../assets/imges"
import { navlinks } from "../../content"
import { navlinkstypes } from "../../hooks/types"
import styles from "../../style"
import Login_singup from "./Login&&singup"
import MenuMobil from "./Mobilemenu"
import { useState } from "react"

const Navbar = () => {
  const [showmenu , setshowmenu] = useState<boolean>(false);
  const Navigate = useNavigate();

  const changeshowstate = () => {
    setshowmenu((prev:boolean) => !prev)
  }
  return (
  <nav className={`py-6 px-4 xl:px-[7.94rem] ${styles.flexBetween}`}>
    <ul className={`gap-10 ${styles.flexitems}`}>
      <img onClick={() => Navigate('/')}   src={assest.logo} alt="logo" className="max-w-[8.625rem] max-h-[2.8125rem] cursor-pointer" />
      {navlinks.map((navlink:navlinkstypes , index:number) => (
        <div key={index} className={`gap-[0.13rem] md:${styles.flexitems} hidden`}>
        <NavLink className={`${styles.link}`} to={""}>{navlink.link}</NavLink>
        <img src={assest.arowdown} alt="arowdown" />
        </div>
      ))}
    </ul>
    <Login_singup />
    <img src={assest.humberger_menu} onClick={changeshowstate} alt="humbergar_menu"  className="lg:hidden"/>
    <MenuMobil show={showmenu} changestate={changeshowstate} />
  </nav>
  )
}

export default Navbar
