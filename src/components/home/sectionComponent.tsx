interface SectionComponentProps {
  children: React.ReactNode,
  title: string,
  description: string,
}

const SectionComponent = ({ children, title, description }: SectionComponentProps) => {
  return (
    <section className="p-10">
      
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-5xl max-sm:text-3xl max-md:text-4xl font-medium">{ title }</h1>
        <small className="text-neutral-400 text-base">{ description }</small>
      </div>

      <div className="grid grid-cols-4 my-10 place-items-center max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 gap-10">
        
        { children }
        
      </div>

    </section>
  )
}

export { SectionComponent };