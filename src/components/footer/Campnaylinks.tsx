
const Campnaylinks = ({titel , arrayliks} : {titel:string , arrayliks:string[] }) => {
  return (
    <ul className={`ml-[6.37rem]`}>
    <h1 className="text-white text-sm not-italic font-bold leading-[normal] font-Open_Sans">{titel}</h1>
    {arrayliks.map((nav , index:number)  => (
    <li className="text-white text-base not-italic font-normal leading-[1.375rem] py-4 font-Open_Sans" key={index}>{nav}</li>
    ))}
    </ul>
  )
}

export default Campnaylinks