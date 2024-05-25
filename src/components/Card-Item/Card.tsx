interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return(
    <div className="w-[400px] h-[600px] max-sm:w-[180px] max-sm:h-[300px] max-md:w-[200px] max-md:h-[340px] max-lg:w-[200px] max-lg:h-[360px] max-xl:pb-10 max-xl:w-[240px] max-xl:h-[450px] max-[375px]:w-[150px] flex justify-center items-center flex-col gap-1 overflow-hidden pb-10 cursor-pointer">
      { children }
    </div>
  )
}

export { Card };