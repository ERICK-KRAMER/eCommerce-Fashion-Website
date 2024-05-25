import React, { HtmlHTMLAttributes } from "react";

interface InformationItemProps extends HtmlHTMLAttributes<HTMLDivElement>{
  description: string,
  children: React.ReactNode,
}

const InformationItem: React.FC<InformationItemProps> = ({description, children}) => {
  return(
    <div className=" p-4 cursor-default w-[280px] max-[375px]:text-lg">
      {children}
      <div className=" ml-10 w-[170px]">
        <small className="text-neutral-400">{description}</small>
      </div>
    </div>
  )
}

export { InformationItem };