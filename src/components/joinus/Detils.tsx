const Detils = ({deliveryTime} : {deliveryTime:string}) => {
  return (
    <div className="font-Open_Sans rounded-[0.625rem] bg-card_gray py-[0.69rem] px-4 gap-2 flex justify-between flex-wrap">
        <div>
            <h1 className="text-lg not-italic mb-1 font-bold leading-7 text-primary">Due date</h1>
            <p className="text-base not-italic font-normal leading-[1.625rem] text-black">{deliveryTime}</p>
        </div>
        <div>
            <h1 className="text-lg not-italic font-bold leading-7 font-Open_Sans text-lightred mb-[0.41rem]">Penalty fees</h1>
            <p className="text-base not-italic font-normal leading-7 font-Open_Sans"><span className="underline font-bold">₹50,000</span> for the company</p>
            <p className="text-base not-italic font-normal leading-7 font-Open_Sans"><span className="underline font-bold">₹50,000</span> for the company</p>
        </div>
    </div>
  )
}

export default Detils