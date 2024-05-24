interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {
  return(
    <div className="w-[400px] h-[450px] flex justify-center items-center flex-col gap-2">
      { children }
    </div>
  )
}

export { Card };