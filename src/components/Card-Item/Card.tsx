const Card = () => {
  return(
    <div className="w-[400px] h-[450px] flex justify-center items-center flex-col gap-2">
      <img src="https://www.next.com.az/nxtcms/resource/blob/5821504/ee0fc6a294be647924fa5f5e7e3df8e9/hoodies-data.jpg" alt="Example image" className=" w-full h-[80%] object-cover object-top"/>
      <span><p>Plain White Shirt</p></span>
      <span><p>$29.00</p></span>
    </div>
  )
}

export { Card };