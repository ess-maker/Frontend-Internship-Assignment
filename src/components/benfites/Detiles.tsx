import { benifits } from "../../content"

const Detiles = () => {
  return (
    <div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
        {benifits.map((benifit , index) => (
            <div key={index} className={` flex flex-col justify-center md:flex-row md:justify-start gap-4`}>
                <img src={benifit.icon} alt="benifit.icon" className="max-w-[4.0625rem] max-h-[4.0625rem] m-auto md:m-0" />
                <p className=" text-xl not-italic font-normal leading-8 font-Poppins"><span className="font-bold">{benifit.usniqname}</span> {benifit.pargraf}</p>
            </div>
        ))}
    </div>
  )
}

export default Detiles