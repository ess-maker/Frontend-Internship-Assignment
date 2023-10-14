import { useDispatch, useSelector } from "react-redux"
import assest from "../../assets/imges"
import styles, { layout } from "../../style"
import Submit from "../sheard/Submit"
import { AppDispatch, RootState } from "../../store/store"
import { setSearchValue } from "../../store/shearchvalue"
import { charteredAccountants } from "../../type"
import { useEffect } from "react"
import { fetchCharteredAccountants } from "../../store/charteredsslice"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const dispatch:AppDispatch = useDispatch()
  const Navigate = useNavigate();
  const searchvalue = useSelector((state:RootState) => state.searchvalue.value);
  const selectCharteredData = useSelector((state:RootState) => state.chartereddata.data.filter(
  (item:charteredAccountants) => item.name.toLowerCase().includes(searchvalue.toLocaleLowerCase())));
  
  useEffect(() => {
    dispatch(fetchCharteredAccountants())
  } , [searchvalue])

  return (
    <section className={`${layout.section} ${styles.heropadding} justify-center md:justify-between gap-[4.25rem]`}>
    <div style={{background:'linear-gradient(75deg,#feddee 0%,#fcf6fc 31.77%,#c5eaed 64.58%,#fdddfe 100%)'}} className="absolute w-full left-0 top-0 h-full z-[-1] after:absolute overflow-hidden  after:w-[149rem] after:left-[-41rem] after:bottom-[-10rem]  after:rotate-[-3deg]   after:bg-white after:min-h-[13.125rem] "></div>
    <div>
    <h1 className={`${styles.heading1} mb-4`}>Find <span className={`text-secondary`}>Partners</span> (CAs) available online</h1>
    <p className={`${styles.garypargraf}`}><span className="font-bold">CONNECT</span> with us where your services are listed and visible to 
    a myriad of businesses seeking CA’s for compliance support</p>
    <div className="mt-[3.75rem] flex flex-wrap gap-4 justify-center">
    <div className="flex flex-col w-[79%] flex-shrink relative ">
    <input type="text" onChange={(e) => dispatch(setSearchValue(e.target.value))} placeholder="Search by name" className={`${styles.input}`} />
    {searchvalue.length > 0 && selectCharteredData.length > 0 ? (
    <div className="w-full absolute z-20 -bottom-[13rem] overflow-y-scroll bg-white px-2 -mt-5 rounded-b-[0.625rem] border border-solid border-input_gray h-56">
    {selectCharteredData.map((item:charteredAccountants) => (
    <span onClick={() => Navigate(`${item.name}`)} className={`w-full h-14 flex items-center text-xl font-Inter  pl-6 duration-200 hover:bg-gray_3 rounded-[0.625rem]  hover:text-white cursor-pointer`}>{item.name}</span>
    ))}
    </div>): ("")}
    </div>
    <Submit padding = "py-[1.69rem] px-[4.13rem]" style = "h-fit lg:-ml-8 w-[79%] lg:w-fit relative z-10" bgcolor={true} value={"Search"} border={false} />
    </div>
    </div>
    <img src={assest.hero} alt="hero" className="max-w-[40rem]"/>
    </section>
  )
}

export default Hero