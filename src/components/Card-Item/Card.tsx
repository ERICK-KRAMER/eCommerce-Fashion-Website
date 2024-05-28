interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return(
    <div className="w-[400px] max-sm:w-[180px] pb-2 max-md:w-[200px] max-lg:w-[200px] max-xl:w-[240px] max-[375px]:w-[150px] flex justify-center items-center flex-col gap-1 overflow-hidden cursor-pointer rounded border">
      { children }
    </div>
  )
}

export { Card };