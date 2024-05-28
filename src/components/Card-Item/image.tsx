import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string,
  alt?: string,
}

const Image = ({ src, alt }: ImageProps) => {
  return <img src="https://www.next.com.az/nxtcms/resource/blob/5821504/ee0fc6a294be647924fa5f5e7e3df8e9/hoodies-data.jpg"
    alt="Example image"
    className=" w-full h-full object-cover object-top" />
}

export { Image };