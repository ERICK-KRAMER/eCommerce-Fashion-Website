const Baner = () => {
  return (
    <div className="h-[600px] max-sm:h-[300px] bg-baner bg-cover text-white relative transition-all duration-500">
      <div className="absolute right-40 top-40 max-sm:right-14 max-sm:top-10 w-[400px] flex justify-center gap-6 items-start flex-col">
        <h1 className="text-6xl max-sm:text-4xl max-sm:w-[350px]">STYLIST PICKS BEAT THE HEAT</h1>
        <button className="px-10 py-4 bg-transparent border-4 hover:bg-sky-700 transition-colors duration-500 max-sm:px-7 max-sm:py-3">SHOP NOW</button>
      </div>
    </div>
  )
}

export { Baner };