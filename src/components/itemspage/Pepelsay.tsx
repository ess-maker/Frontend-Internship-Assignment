import Swithbetween from "../sheard/Swithbetween"

const Pepelsay = ({reviwe}:{reviwe:string}) => {
  return (
    <div className="shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] rounded-[1.25rem] p-7">
    <h1 className=" text-[2.1875rem] not-italic font-bold leading-[normal] mb-4">What people say?</h1>
    <p className="text-xl not-italic font-normal leading-8 mb-[3.69rem]">{reviwe}</p>
    <Swithbetween times={5} />
    </div>
  )
}

export default Pepelsay