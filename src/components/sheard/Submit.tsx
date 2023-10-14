import styles from "../../style"

const Submit = ({ bgcolor , style ,  value ,  padding , border} : { bgcolor:boolean , value:string ,  padding:string , border:boolean , style?:string}) => {
  return (
    <button className={`duration-200 ${bgcolor ? "text-white bg-primary hover:bg-opacity-40 " : " !text-primary"} ${style} ${padding} ${styles.textlink} rounded-[0.625rem] ${border ? styles.buttonborder : ""}`}>{value}</button>
  )
}

export default Submit