import { ChevronsRight } from "lucide-react";
import mastercard from "../../../public/footer/mastercard.png";
import paypal from '../../../public/footer/paypal.png';
import visa from "../../../public/footer/visa.png";
import visaElectron from "../../../public/footer/visaElectron.png";


const Footer = () => {
  return(
    <footer className="p-6 bg-neutral-100 flex flex-col gap-2">
      <div className=" flex flex-col justify-center md:grid md:grid-cols-4 md:px-10">
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-start flex-col gap-2 h-[180px]">
            <h3 className="text-lg font-medium cursor-default">Company info</h3>
            <ul>
              <li className="hover:underline cursor-pointer hover:text-sky-700">About Us</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Latest Posts</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Contact Us</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Shop</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-start flex-col gap-2 h-[180px]">
            <h3 className="text-lg font-medium cursor-default">Help links</h3>
            <ul>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Tracking</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Order Status</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Delivery</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Shipping Info</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">FAQ</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-start flex-col gap-2 h-[180px]">
            <h3 className="text-lg font-medium cursor-default">Useful links</h3>
            <ul>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Special Offers</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Gift Cards</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Advetising</li>
              <li className="hover:underline cursor-pointer hover:text-sky-700">Terms of Use</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col">
          <div className="flex justify-start items-start flex-col gap-2 h-[180px]">
            <h3 className="text-lg font-medium cursor-default">Get in the know</h3>
            <div className="border-b-2 p-2 flex gap-4">
              <input type="text" placeholder="Enter email" className="border-none bg-neutral-100 outline-none"/>
              <button><ChevronsRight/></button>
            </div>
          </div>
        </div>
        
      </div>

      <hr className="bg-neutral-400"/>

      <div className="flex justify-between items-center px-10 mt-4 max-sm:flex-col max-sm:gap-y-6">
        <div className="flex flex-col gap-1">
          <small>© 2020 NorthStar eCommerce</small>
          <small>Privacy Policy Terms & Conditions</small>
        </div>
        <div className="flex gap-4">
          <span className="cursor-default">
            <img src={ mastercard } alt="Mastercard" className="w-10 h-6"/>
          </span>
          <span className="cursor-default">
            <img src={ paypal } alt="PayPal" className="w-10 h-6"/>
          </span>
          <span className="cursor-default">
            <img src={ visa } alt="Visa" className="w-10 h-6"/>
          </span>
          <span className="cursor-default">
            <img src={ visaElectron }  alt="Visa Electron" className="w-10 h-6"/>
          </span>
        </div>
      </div>
      
    </footer>
  )
}

export { Footer };