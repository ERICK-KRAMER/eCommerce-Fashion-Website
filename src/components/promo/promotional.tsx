import React, { HtmlHTMLAttributes } from "react";

interface PromotionalProps extends HtmlHTMLAttributes<HTMLDivElement> { 
  title: string,
  description: string
  children: React.ReactNode
}

const Promotional: React.FC<PromotionalProps> = ({children , title, description, className,...rest}) => {
  return(
    <div className={`bg-black h-96 flex justify-center items-center gap-6 flex-col text-white ${className}`} {...rest}>
      <h1 className="text-6xl">{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  )
}

export { Promotional };