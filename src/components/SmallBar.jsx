import React from "react";

const SmallBar = ({icon,name, iconClass, className }) => {
  return (
    <div className={`flex mx-[25px] my-[10px] h-[42px] rounded-[10px] cursor-pointer items-center hover:border ${className|| ''}`}>
      <div className={`flex-none w-[40px] rounded-[30px] ${iconClass || ""}`}>
        <img className="p-[5px] object-contain w-[40px] h-[35px] hover:p-[6px] " src={icon} alt={name} />
      </div>
    </div>
  );
};

export default SmallBar;
