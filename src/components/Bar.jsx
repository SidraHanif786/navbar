import React from "react";

const Bar = ({icon, name, nameClass, iconClass, className }) => {
  return (
    <div className={`flex mx-[25px] my-[10px] w-[220px] h-[42px] rounded-[10px] cursor-pointer items-center hover:border ${className|| ''}`}>
      <div className={`flex-none w-[40px] rounded-[30px] ${iconClass || ""}`}>
        <img className="p-[5px] object-contain w-[40px] h-[35px] hover:p-[6px] " src={icon} alt={name} />
      </div>
      <div className={`flex-initial ml-[28px] text-[18px] hover:text-[17px] ${nameClass || ""}`}>{name}</div>
    </div>
  );
};

export default Bar;
