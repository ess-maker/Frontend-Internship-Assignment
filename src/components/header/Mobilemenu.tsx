import assest from "../../assets/imges"
import { navlinks } from "../../content"
import { NavLink } from "react-router-dom"
import styles from "../../style"
import Submit from "../sheard/Submit"


const MenuMobil = ({show , changestate} : {show:boolean , changestate:() => void}) => {
    return (
    <>
    <div className={`bg-black opacity-50 fixed w-full h-full left-0 top-0 z-10 ${show ? "" : "hidden"}`}></div>
    <div className={`fixed w-64 h-full -left-64 top-0 z-50 bg-white shadow-2xl py-4 px-6 duration-1000 ease-in-out md:hidden  ${show ? "!left-0" : ""}`}>
    <div className={`${styles.flexitems}`}>
    <img src={assest.logo} alt="logo" />
    <img src={assest.close} 
    onClick={changestate}
    alt="close" 
    className="absolute top-5 right-5 cursor-pointer"
    />
    </div>
    <ul className={`${styles.flexitems} gap-[4rem] flex-col my-16`}>
    {navlinks.map((nav , index:number) => (
    <li className={` ${styles.flexitems} gap-10`} key={index}>
    <NavLink className="font-Poppins text-xl font-normal leading-normal text-black" to="">{nav.link}</NavLink>
    <img src={assest.arowdown} className="absolute right-16" alt="Vector" />
    </li>
    ))}
    </ul>
    <div className={`${styles.flexCenter} gap-[1rem] absolute bottom-4 left-1/2 transform -translate-x-1/2 flex-col text-xl`}>
    <Submit padding="py-[0.62rem] px-[1.72rem]" border = {true}  bgcolor={false} value={"Login"} />
    <Submit padding="py-[0.62rem] px-[1.72rem]" border = {false}  bgcolor={true} value={"Register"} />
    </div>
    </div>
    </>
    )
}

export default MenuMobil