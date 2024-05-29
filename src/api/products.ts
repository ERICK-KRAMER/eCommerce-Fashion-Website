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
  price: number;
  image: string;
  genre: string;
  description: string;
}

const Products: ProductsProps[] = [
  {
    id: 1,
    name: "Plain White Shirt",
    price: 29.00,
    image: product1,
    genre: 'women',
    description: "This plain white shirt is a wardrobe essential for every woman. Made with high-quality fabric, it offers comfort and versatility for any occasion."
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 69.00,
    image: product2,
    genre: 'women',
    description: "Stylish denim jacket that never goes out of fashion. Perfect for adding a casual and modern touch to your daily look while keeping you warm and comfortable."
  },
  {
    id: 3,
    name: "Black Polo Shirt",
    price: 29.00,
    image: product3,
    genre: 'women',
    description: "Classic black polo shirt that combines elegance and casualness. Ideal for a sophisticated yet relaxed look."
  },
  {
    id: 4,
    name: "Blue Sweatshirt",
    price: 49.00,
    image: product4,
    genre: 'women',
    description: "Comfortable and stylish blue sweatshirt. Perfect for colder days, offering coziness without compromising style."
  },
  {
    id: 5,
    name: "Blue Plain Shirt",
    price: 79.00,
    image: product5,
    genre: 'men',
    description: "Plain blue shirt, ideal for formal and informal occasions. Made with high-quality materials to ensure a perfect fit and all-day comfort."
  },
  {
    id: 6,
    name: "Dark Blue Shirt",
    price: 49.00,
    image: product6,
    genre: 'men',
    description: "Elegant and versatile dark blue shirt. Can be worn both at work and social events, always ensuring a sophisticated look."
  },
  {
    id: 7,
    name: "Outcast T Shirt",
    price: 89.00,
    image: product7,
    genre: 'men',
    description: "Outcast t-shirt with exclusive design. Perfect for those who want to stand out with a unique and authentic style."
  },
  {
    id: 8,
    name: "Polo Plain Shirt",
    price: 19.00,
    image: product8,
    genre: 'men',
    description: "Plain polo shirt, essential in the male wardrobe. Matches everything and is ideal for a casual and neat look."
  },
  {
    id: 9,
    name: "Gray Polo Shirt",
    price: 29.00,
    image: product9,
    genre: 'men',
    description: "Classic gray polo shirt, perfect for any occasion. Comfortable and elegant, it is a must-have piece for everyday wear."
  },
  {
    id: 10,
    name: "Red Shirt",
    price: 49.00,
    image: product10,
    genre: 'women',
    description: "Vibrant red shirt that adds a touch of color and style to your wardrobe. Perfect for making your look stand out at any event."
  },
  {
    id: 11,
    name: "Polo White Shirt",
    price: 69.00,
    image: product11,
    genre: 'women',
    description: "Elegant white polo shirt, ideal for a clean and sophisticated look. Made with premium materials for maximum comfort."
  },
  {
    id: 12,
    name: "Pink Casual Shirt",
    price: 29.00,
    image: product12,
    genre: 'women',
    description: "Casual pink shirt, ideal for a relaxed and modern look. Comfortable and stylish, perfect for everyday wear."
  }
]

export { Products };