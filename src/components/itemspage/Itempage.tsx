import { useParams } from "react-router-dom"
import assest from "../../assets/imges"
import styles, { layout } from "../../style"
import Pepelsay from "./Pepelsay"
import Recommended from "./Recommended "
import Task from "./Task"
import { AppDispatch, RootState } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCharteredAccountants } from "../../store/charteredsslice"
import { charteredAccountants } from "../../type"

const Itempage = () => {
  const { name } = useParams()
  console.log(name);

  const selectCharteredData = useSelector((state: RootState) => state.chartereddata.data
  .filter((item: charteredAccountants) => item.name === name ));
  const dispatch: AppDispatch = useDispatch();

  console.log(selectCharteredData);
  
  

  useEffect(() => {
    dispatch(fetchCharteredAccountants())
  } , [name])
  
  
  return (
    <div className={`${styles.padding} font-Poppins`}>
    {selectCharteredData.map((item:charteredAccountants) => (
    <div key={item.id} className={`flex gap-8 ${layout.section}`}>
    <div className="w-full">
          <h1 className="text-[2.1875rem] not-italic font-bold leading-[normal] font-Poppins mb-4">{item.name}</h1>
          <p className="text-xl not-italic font-normal leading-8 font-Poppins">{item.intro}
          </p>
          <div className={`${styles.flexitems} gap-1`}>
          <img src={assest.star} alt="start_rate" />
          <p className="text-xl not-italic font-bold leading-[normal] my-8"><span className="text-primary">{item.rating}</span> ({item.reviewCount})</p>
          </div>
          <Task taskComplexity={item.taskComplexity} price={item.price} deliveryTime={item.deliveryTime} />
          <Pepelsay reviwe = {item.testimonial.text} />
    </div>
    <div className="w-full">
      <img src={item.image} alt="pageimg" className="max-w-full mb-8" />
      <h1 className=" text-[2.1875rem] not-italic font-bold leading-[normal]">About {item.name}</h1>
      <div className={`${styles.flexBetween} w-full flex-wrap mt-[1.37rem] mb-8`}>
      <p className="text-base not-italic font-bold leading-[2.125rem]"><span className="text-[#999]">FROM</span><span className="block">{item.about.from}</span></p>
      <p className="text-base not-italic font-bold leading-[2.125rem]"><span className="text-[#999]">PARTNER SINCE</span><span className="block">{item.about.partnerSince}</span></p>
      <p className="text-base not-italic font-bold leading-[2.125rem]"><span className="text-[#999]">AVERAGE RESPONSE TIME</span><span className="block">{item.about.averageResponseTime}</span></p>
      </div>
      <h3 className="text-gray_two text-base not-italic font-bold leading-[2.125rem]">ABOUT</h3>
      <p className="text-xl not-italic font-normal leading-[2.125rem]">
      {item.about.description}
      </p>
      <div className={`mt-8 gap-4 w-full  flex-wrap ${styles.flexBetween} !items-start`}>
          <ul>
          <p className="text-base not-italic font-bold leading-[2.125rem] text-gray_two ">SERVICES I OFFER</p>
          {item.about.services.map((serverlink , index:number) => (
            <li className="text-xl not-italic font-normal leading-9 py-1 list-disc" key={index}>{serverlink}</li>
          ))}
          </ul>
          <ul>
          <p className="text-base not-italic font-bold leading-[2.125rem] text-gray_two ">WHY ME?</p>
          {item.about.benefits.map((offerlink , index:number) => (
              <li className="text-xl not-italic font-normal leading-9 py-1 list-disc" key={index}>{offerlink}</li>
          ))}
          </ul>
      </div>
    </div>
    </div>
    ))}

    <Recommended />
    </div>
  )
}

export default Itempage