import product1 from "../../public/products/product1.png";
import product2 from "../../public/products/product2.png";
import product3 from "../../public/products/product3.png";
import product4 from "../../public/products/product4.png";
import product5 from "../../public/products/product5.png";
import product6 from "../../public/products/product6.png";
import product7 from "../../public/products/product7.png";
import product8 from "../../public/products/product8.png";
import product9 from "../../public/products/product9.png";
import product10 from "../../public/products/product10.png";
import product11 from "../../public/products/product11.png";
import product12 from "../../public/products/product12.png";

export interface ProductsProps {
  id: number;
  name: string;
  price: number,
  image: string;
  genre: string;
}

const Products: ProductsProps[] = [
  {
    id: 1,
    name: "Plain White Shirt",
    price: 29.00,
    image: product1,
    genre: 'women'
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 69.00,
    image: product2,
    genre: 'women'
  },
  {
    id: 3,
    name: "Black Polo Shirt",
    price: 29.00,
    image: product3,
    genre: 'women'
  },
  {
    id: 4,
    name: "Blue Sweatshirt",
    price: 49.00,
    image: product4,
    genre: 'women'
  },
  {
    id: 5,
    name: "Blue Plain Shirt",  
    price: 79.00,
    image: product5,
    genre: 'men'
  },
  {
    id: 6,
    name: "Dark Blue Shirt",
    price: 49.00,
    image: product6,
    genre: 'men'
  },
  {
    id: 7,
    name: "Outcast T Shirt",
    price: 89.00,
    image: product7,
    genre: 'men'
  },
  {
    id: 8,
    name: "Polo Plain Shirt",
    price: 19.00,
    image: product8,
    genre: 'men'
  },
  {
    id: 9,
    name: "Gray Polo Shirt",
    price: 29.00,
    image: product9,
    genre: 'men'
  },
  {
    id: 10,
    name: "Red Shirt",
    price: 49.00,
    image: product10,
    genre: 'women'
  },
  {
    id: 11,
    name: "Polo White Shirt",
    price: 69.00,
    image: product11,
    genre: 'women'
  },
  {
    id: 12,
    name: "Pink Casual Shirt",
    price: 29.00,
    image: product12,
    genre: 'women'
  },
]

export { Products };
