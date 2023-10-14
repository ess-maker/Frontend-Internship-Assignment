import assest from "../../assets/imges";
import styles, { layout } from "../../style"
import Detiles  from "./detiles";

const Benfites = () => {
  return (
    <section className={`${styles.paddingx} lg:pb-[8.25rem] pb-[6.25rem] ${layout.sectionBetween} gap-8 `}>
    <div className="xl:w-[50%]">
    <h1 className="text-[4.0625rem] not-italic font-bold leading-[normal] font-Poppins mb-[0.87rem]"> <span className="text-secondary">All-in-One platform</span> that Makes Easier</h1>
    <p className="text-2xl not-italic font-normal leading-[2.375rem] font-Poppins mb-8">We are more than a platform; We are your success partner. 
    Discover our services to achieve your business and educational goals</p>
    <Detiles />
    </div>
    <div>
        <div className={`${styles.flexitems} gap-2`}>
        <div className={`flex flex-col gap-2`}>
        <span className={`${styles.link_two} ml-auto w-fit bg-bgcolor_pink rounded-[0.9375rem_0.9375rem_0.1875rem_0.9375rem] px-4 py-2 `}>Hey, check out loreumipsum services. </span>
        <span className={`${styles.link_two} ml-auto w-fit bg-bgcolor_pink rounded-[0.9375rem_0.9375rem_0.1875rem_0.9375rem] px-4 py-2 `}>I learned from their videos, got my first job.</span>
        <span className={`${styles.link_two} ml-auto w-fit bg-bgcolor_pink rounded-[0.9375rem_0.9375rem_0.1875rem_0.9375rem] px-4 py-2 `}>You won't be disappointed with their services.</span>
        <span className={`${styles.link_two} ml-auto w-fit bg-light_blue rounded-[0.9375rem_0.9375rem_0.9375rem_0.1875rem] px-4 py-2 mt-[2.19rem]`}>I got a perfect analysis report from them too </span>
        <span className={`${styles.link_two} ml-auto w-fit bg-light_blue rounded-[0.9375rem_0.9375rem_0.9375rem_0.1875rem] px-4 py-2`}>Oh, that's great.</span>
        </div>
        <div>
        </div>
        <img src={assest.student} alt="student" />
        </div>
        <div className="md:-mt-[4rem] mt-0 -ml-4">
        <img src={assest.feameltecher} alt="feameltecher" />
        </div>
    </div>
    </section>
  )
}

export default Benfites