import { useEffect, useState } from "react";

const Numst = ({index} : {index:number}) => {
  const [label , setlabel] = useState<string>("th") ;
  useEffect(() => {
    if (index === 1) {
    setlabel("st")
  } else if (index === 2) {
    setlabel("nd")
  } else if (index === 3) {
    setlabel("rd")
  } else if (index > 3 ) {
    setlabel('th')
  }
} , [index])
  return (
  <div style={{background:'linear-gradient(96deg, #0076CE 0%, #9400D3 100%)'}} className={`absolute -top-[0.66rem] -left-[0.44rem] w-[2.875rem] h-[2.875rem] flex items-center  rounded-[0.625rem]  justify-center pl-2 pr-[0.87rem]`}>
    <div className="flex items-start">
  <p className="text-2xl not-italic font-bold leading-[normal] text-white font-Poppins">{index}</p>
  <p className="text-base not-italic font-bold leading-[normal] text-white font-Poppins">{label}</p>
    </div>
  </div>
  )
}

export default Numst