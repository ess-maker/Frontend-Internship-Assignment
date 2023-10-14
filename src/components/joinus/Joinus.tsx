import { useDispatch, useSelector } from "react-redux"
import styles from "../../style"
import Detils from "./Detils"
import Numst from "./Numst"
import { AppDispatch, RootState } from "../../store/store"
import { charteredAccountants } from "../../type"
import { useEffect } from "react"
import { fetchCharteredAccountants } from "../../store/charteredsslice"

const Joinus = () => {
const selectCharteredData = useSelector((state:RootState) => state.chartereddata.data.slice(0 , 6));
const dispatch: AppDispatch = useDispatch();

useEffect(() => {
  dispatch(fetchCharteredAccountants())
} , [1])

console.log(selectCharteredData);


  return (
    <>
  <article className={`${styles.padding} md:bg-[url('./src/assets/joinusBg.svg')]  md:bg-cover  md:bg-no-repeat `}>
  <h1 className={`${styles.headingtitel} text-center mb-4`}>Want to <span className="text-secondary">Join</span> Us?</h1>
  <p className={`${styles.pargraf}`}>To remain with us, it is essential that you diligently follow the steps provided</p>
  <div className={`mt-[5.25rem] ${styles.grid_cards} gap-8 `}>
    {selectCharteredData.length > 0 ? (
    selectCharteredData.map((selectedchart:charteredAccountants) => (
    <div key={selectedchart.id} className="relative bg-white cursor-pointer shadow-[2px_4px_15px_0px_rgba(133,133,167,0.25)] rounded-[1.25rem] py-6 px-8">
    <Numst index={selectedchart.id} />
    <h1 className=" text-center text-xl not-italic font-bold leading-[normal] font-Poppins mb-2">{selectedchart.name}</h1>
    <p className="text-center text-lg not-italic font-normal leading-[1.625rem] font-Poppins mb-4">{selectedchart.intro}</p>
    <Detils deliveryTime = {selectedchart.deliveryTime}  />
    </div>
    ))
    ) : <h1>waith untiell the respone come</h1>}
  </div>
  </article>
  <p className={`text-[1.0625rem] md:mt-8 mb-8 text-left not-italic font-normal !px-4 leading-[1.625rem] font-Poppins ${styles.paddingx}`}>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className="font-bold">every day</span> until you file the form .There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>
</>
  )
}

export default Joinus