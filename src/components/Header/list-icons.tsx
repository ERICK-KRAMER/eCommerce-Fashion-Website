import React from "react"

const ListIcons = ({children}: {children: React.ReactNode}) => {
  return(
    <div className="flex justify-center items-center gap-6">
      {children}
    </div>
  )
}

export { ListIcons }