import { useState } from "react";
import styles from "../../style";

const Swithbetween = ({times}:{times:number}) => {
  const [active, setactive] = useState<number>(0);

  const handleSwitchClick = (index:number) => {
    setactive(index);
  };

  const switches = Array.from({ length: times }, (_, index) => (
    <span
      key={index}
      onClick={() => handleSwitchClick(index)}
      className={`w-2 h-2 rounded-full bg-gray-3 cursor-pointer duration-100 ${
        active === index ? "bg-primary w-4 rounded-2xl" : "rounded-full bg-gray_3"
      }`}
    ></span>
  ));

  return <div className={`${styles.flexCenter} gap-1`}>{switches}</div>;
};

export default Swithbetween;