import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string,
  alt?: string,
}

const Image = ({ src, alt }: ImageProps) => {
  return <img src={ src }
    alt={ alt }
    className=" w-full h-full object-cover object-top" />
}

export { Image };