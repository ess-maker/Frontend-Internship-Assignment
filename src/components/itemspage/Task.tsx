import assest from "../../assets/imges"
import styles from "../../style"
import Submit from "../sheard/Submit"

const Task = ({taskComplexity , price , deliveryTime}:{taskComplexity:string  , price:string ,   deliveryTime:string}) => {
  return (
    <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] rounded-[1.25rem] p-7 font-Poppins mb-8">
    <h1 className="text-xl not-italic font-normal leading-8 mb-8 ">{taskComplexity} <span className="ml-auto text-2xl not-italic font-bold leading-[normal]">{price}</span> </h1>
    <div className={`${styles.flexitems} gap-3`}>
    <img src={assest.calendar} alt="calendar_task" />
    <h3 className="text-xl not-italic font-normal leading-8">{deliveryTime}</h3>
    </div>
    <div className={`${styles.flexitems} gap-[1.56rem] mt-7`}>
        <Submit padding="py-[0.62rem] px-[1.72rem] w-1/2" border = {true}  bgcolor={false} value={"Request Proposal"} />
        <Submit padding="py-[0.62rem] px-[1.72rem] w-1/2" border = {false}  bgcolor={true} value={"Chat with me"} />
    </div>
    </div>
  )
}

export default Task