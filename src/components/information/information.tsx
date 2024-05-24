
const Information = ({children}: {children: React.ReactNode}) => {
  return(
    <div className=" p-10 cursor-default grid grid-cols-4 place-items-center">
      {children}
    </div>
  )
}

export { Information };