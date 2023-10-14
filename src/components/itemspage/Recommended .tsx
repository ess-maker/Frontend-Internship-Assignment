import assest from "../../assets/imges"
import styles from "../../style"
import Submit from "../sheard/Submit"

const Recommended  = () => {
    return (
    <div className={`lg:pt-[8.25rem] pt-[6.25rem]`}>
    <h1 className="text-[2.1875rem] not-italic font-bold leading-[normal] mb-8">Recommended for you</h1>
    <div className={`${styles.grid_cards} gap-4 place-items-center`}>
    <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] rounded-[1.25rem] max-w-[25.3125rem]">
        <img src={assest.pageimg} alt="pageimg" className="max-h-[15.25rem] rounded-[1.25rem] mb-4" />
        <div className="px-[1.45rem] pb-6">
        <h1 className="text-xl not-italic font-normal leading-8">Basic to complex tasks <span className="ml-auto text-2xl not-italic font-bold leading-[normal]">₹4,370</span></h1>
        <p className="text-base not-italic font-normal leading-[normal] my-2">I will do business evaluation and corporate services</p>
        <div className={`${styles.flexitems} gap-1 mb-8`}>
        <img src={assest.star} alt="start_rate" />
        <p className="text-xl not-italic font-bold leading-[normal]"><span className="text-primary">4.8</span> (89)</p>
        </div>
        <Submit bgcolor={true} value={"View services"} padding={"w-full py-[0.63rem]"} border={false} />
        </div>
    </div>
    <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] rounded-[1.25rem] max-w-[25.3125rem]">
        <img src={assest.pageimg} alt="pageimg" className="max-h-[15.25rem] rounded-[1.25rem] mb-4" />
        <div className="px-[1.45rem] pb-6">
        <h1 className="text-xl not-italic font-normal leading-8">Basic to complex tasks <span className="ml-auto text-2xl not-italic font-bold leading-[normal]">₹4,370</span></h1>
        <p className="text-base not-italic font-normal leading-[normal] my-2">I will do business evaluation and corporate services</p>
        <div className={`${styles.flexitems} gap-1 mb-8`}>
        <img src={assest.star} alt="start_rate" />
        <p className="text-xl not-italic font-bold leading-[normal]"><span className="text-primary">4.8</span> (89)</p>
        </div>
        <Submit bgcolor={true} value={"View services"} padding={"w-full py-[0.63rem]"} border={false} />
        </div>
    </div>
    <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] rounded-[1.25rem] max-w-[25.3125rem]">
        <img src={assest.pageimg} alt="pageimg" className="max-h-[15.25rem] rounded-[1.25rem] mb-4" />
        <div className="px-[1.45rem] pb-6">
        <h1 className="text-xl not-italic font-normal leading-8">Basic to complex tasks <span className="ml-auto text-2xl not-italic font-bold leading-[normal]">₹4,370</span></h1>
        <p className="text-base not-italic font-normal leading-[normal] my-2">I will do business evaluation and corporate services</p>
        <div className={`${styles.flexitems} gap-1 mb-8`}>
        <img src={assest.star} alt="start_rate" />
        <p className="text-xl not-italic font-bold leading-[normal]"><span className="text-primary">4.8</span> (89)</p>
        </div>
        <Submit bgcolor={true} value={"View services"} padding={"w-full py-[0.63rem]"} border={false} />
        </div>
    </div>
    </div>
    </div>
    )
}

export default Recommended 