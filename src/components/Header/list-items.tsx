
const ListItems = ({children}: {children: React.ReactNode}) => {
  return(
    <div className="flex justify-normal items-center gap-96 font-medium">
      <h1 className="text-3xl cursor-default">NorthStar</h1>
      <nav className="max-xl:hidden">
        <ul className="flex justify-center items-center gap-16 text-lg">
          {children}
        </ul>
      </nav>
    </div>
  )
}

export { ListItems };