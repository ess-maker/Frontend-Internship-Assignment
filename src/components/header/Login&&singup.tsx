import styles from "../../style"
import Submit from "../sheard/Submit"

const Login_singup = () => {
  return (
    <div className={`hidden md:${styles.flexitems} gap-4`}>
        <Submit padding="py-[0.62rem] px-[1.72rem]" border = {true}  bgcolor={false} value={"Login"} />
        <Submit padding="py-[0.62rem] px-[1.72rem]" border = {false}  bgcolor={true} value={"Register"} />
    </div>
  )
}

export default Login_singup