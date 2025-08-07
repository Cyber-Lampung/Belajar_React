import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true, // animasi hanya jalan sekali saat scroll
    });
  }, []);
  const Title = "FinPay";

  return (
    <main>
      {/* header Bar Nav */}
      <Navbar
        className="m-10 flex items-center justify-between"
        title={Title}
      />

      {/* section bar */}

      <section className="mt-40 w-[80%] m-auto flex justify-between ">
        <aside>
          <h1
            className="flex flex-col gap-2 tracking-wide"
            data-aos="fade-left"
          >
            <span className="text-4xl font-bold">Get Paid Early </span>
            <span className="text-4xl font-semibold ">Save Automatically</span>
            <span className="text-4xl font-semibold ">All Your Pay</span>
          </h1>
          <p className="text-stone-500 mt-7" data-aos="fade-right">
            Support Small Businnes with simple invoicing, <br /> powerfull
            integrations, and cash flow managament tools.
          </p>
          <div className="mt-7 flex">
            <div data-aos="fade-left">
              <Input
                placeholder="Your Business Email"
                className="border-white border-2 p-2 w-70 bg-stone-200 rounded-xl text-black outline-none text-md"
              />
            </div>
            <div data-aos="fade-right">
              <Button 
                name="Get Started"
                className="bg-blue-600 p-2 rounded-xl relative right-10 text-md font-semibold text-white"
              />
            </div>
          </div>
          <div className="mt-5 font-bold text-xl flex gap-5" data-aos="fade-up">
            <span>Klarna</span>
            <span>CoinBase</span>
            <span>BitCoin</span>
          </div>
        </aside>
        <div>
          <aside className="image">
            <img
              src="https://asset.kompas.com/crops/qLjpvpmD6CFKqmVnYjGscmdTKls=/136x0:511x250/1200x800/data/photo/2022/02/03/61fb0a50228bd.png"
              alt=""
              className="relative w-150 rounded-lg"
              data-aos="fade-right"
            />
            <img
              src="https://freesvg.org/img/credit-card-front.png"
              className="w-80 absolute top-40 right-40"
              data-aos="fade-left"
              alt=""
            />
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Home;
