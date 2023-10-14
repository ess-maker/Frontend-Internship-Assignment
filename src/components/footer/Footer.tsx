import assest from "../../assets/imges"
import { social_media_imgs } from "../../content"
import styles from "../../style"
import Campnaylinks from "./Campnaylinks"

const Footer = () => {
  return (
    <footer style={{background:'linear-gradient(96deg, #0076CE -7.82%, #9400D3 143.96%)'}}>
    <div className={`grid grid-cols-1 md:grid-cols-2 justify-center items-start lg:grid-cols-4 xl:grid-cols-6 border-b border-solid border-white md:pb-[6.75rem]  py-[2.56rem] ${styles.paddingx}`}>
    <div className="mb-6 md:mb-0">
        <img src={assest.white_logo} alt="logo" className="mb-[0.97rem]"/>
        <p className="text-white text-sm not-italic font-normal leading-[1.375rem] font-Open_Sans">India's first platform dedicated to simplifying partner search</p>
    </div>
    <Campnaylinks titel={"COMPANY"} arrayliks={["About" , "Pricing" , "Careers"]} />
    <Campnaylinks titel={"SOLUTIONS"} arrayliks={["Search" , "Connect" , "Research" , "Academy"]} />
    <Campnaylinks titel={"RESOURCES"} arrayliks={["Blogs" , "Forms"]} />
    <Campnaylinks titel={"SUPPORT"} arrayliks={["Help" , "Contact Us"]} />
    <Campnaylinks titel={"LEGAL"} arrayliks={["Privacy" , "Terms" , "Accessibility"]} />
    </div>
    <div className={`${styles.paddingx} justify-center lg:justify-between flex items-center w-full flex-wrap py-4 gap-4`}>
      <h1 className="text-white text-sm not-italic font-normal  leading-[1.375rem] font-Open_Sans ">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</h1>
      <ul className={`${styles.flexitems} gap-2 `}>
        {social_media_imgs.map((icon:{icon:string} , index:number) => (
        <img key={index} src={icon.icon} alt="social_media_img" />
        ))}
      </ul>
    </div>
    <div className="bg-black h-[3.5625rem] w-full relative ">
        <h1 className="text-white text-center text-xs not-italic font-normal leading-[normal] absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</h1>
    </div>
    </footer>
  )
}

export default Footer