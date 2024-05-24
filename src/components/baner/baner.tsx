const Baner = () => {
  return (
    <div className="h-[600px] bg-baner bg-cover text-white relative">
      <div className="absolute right-40 top-40 w-[400px] flex justify-center gap-6 items-start flex-col">
        <h1 className="text-6xl">STYLIST PICKS BEAT THE HEAT</h1>
        <button className="px-10 py-4 bg-transparent border-4 hover:bg-sky-700 transition-colors duration-500">SHOP NOW</button>
      </div>
    </div>
  )
}

export { Baner };