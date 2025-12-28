import { assets } from "../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="w-32" />
          <p className="mt-5 w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            deserunt sunt obcaecati, nemo, expedita esse in reprehenderit saepe
            mollitia nihil quam aperiam temporibus ipsa! Quos doloremque non
            recusandae placeat alias.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 mt-5 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 mt-5 text-gray-600">
            <li>+60 11-3328 2573</li>
            <li>yorkxuan7@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300" />
      <p className="py-5 text-center text-sm text-gray-600">
        Copyright &copy; {currentYear} @yeohxuan — All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
