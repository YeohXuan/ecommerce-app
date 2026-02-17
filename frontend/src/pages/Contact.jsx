import { assets } from "../../assets/assets";
import Footer from "../components/Footer";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center border-t border-gray-200 pt-8">
        <Title firstText={"CONTACT"} secondText={"US"} />
      </div>
      <div className="flex flex-col justify-center md:flex-row mt-12 gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-120" />
        <div className="flex flex-col gap-4">
          <p className="font-semibold text-xl">Our Store</p>
          <p className="text-gray-500">
            59-C, Jalan Ibrahim Sultan, Kampung Stulang Laut, 80300 Johor Bahru,
            Johor Darul Ta'zim
          </p>
          <p className="text-gray-500">
            Tel: +60 3328 2573
            <br />
            Email: yorkxuan7@gmail.com
          </p>
          <p className="font-semibold text-xl">Careers at Forever</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer mt-2">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
      <Footer />
    </div>
  );
};

export default Contact;
