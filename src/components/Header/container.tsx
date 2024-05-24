const Container = ({children}: {children:React.ReactNode}) => {
  return(
    <header className="flex justify-between items-end px-10 py-5 h-[80px] border-b">
      {children}
    </header>
  )
}

export { Container };