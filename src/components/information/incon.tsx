import { ElementType } from "react";

type InformationIconProps = {
  icon: ElementType,
  name: string
}

const InformationIcon = ({icon: Icon, name}: InformationIconProps) => {
  return(
    <div className="flex gap-4">
      <Icon className="text-blue-500"/>
      <span><p>{name}</p></span>
    </div>
  ) 
}

export { InformationIcon };