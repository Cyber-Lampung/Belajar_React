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
    <main className="m-0 p-0 bg-stone-100">
      {/* header Bar Nav */}
      <Navbar
        className="p-5 flex items-center justify-between bg-stone-200"
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
                className="border-white border-2 p-2 w-70 bg-white rounded-xl text-black outline-none text-md"
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

      <article className="w-[100%] mt-50 mb-40 h-40">
        <div
          className=" w-[90%] bg-white h-150 m-auto rounded-lg shadow-black-400/50 p-20"
          style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-offset="500"
        >
          <div>
            <div className="">
              <p className="text-xl text-blue-800">Feature Payment</p>
            </div>

            <div className="mt-5 flex justify-between">
              <p className="text-5xl font-semibold">
                Experience that grows <br /> with your scale
              </p>
              <p className="text-stone-600">
                Desaign a financial operating system that works for <br /> your
                business and streamlined cash flow <br /> management
              </p>
            </div>
            <div className="mt-30">
              <div className="boxCardFeature">
                <div className="CardBox flex gap-30">
                  <div className="Card1">
                    <i className="creditCard bi-credit-card text-4xl" />
                    <p className="text-2xl">Free Transfers</p>
                    <p className="text-stone-400 text-sm mt-3">
                      Create a Financeial Experienceacy and <br /> automated
                      repeat purpuce by scheduling <br /> recurring payment
                    </p>
                  </div>
                  <div className="Card2">
                    <i className="digram2 bi-diagram-2 text-4xl" />
                    <p className="text-2xl">Multiple Create Account</p>
                    <p className="text-stone-400 text-sm mt-3">
                      Create a Financeial Experienceacy and <br /> automated
                      repeat purpuce by scheduling <br /> recurring payment
                    </p>
                  </div>
                  <div className="Card3">
                    <i className="Shield bi-shield-exclamation text-4xl" />
                    <p className="text-2xl">Multiple Create Account</p>
                    <p className="text-stone-400 text-sm mt-3">
                      Create a Financeial Experienceacy and <br /> automated
                      repeat purpuce by scheduling <br /> recurring payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="pt-100 bg-white">
        <div className="asideTitle">
          <span className="text-md text-blue-500 flex justify-center">
            WHY US
          </span>
        </div>
        <div className="TitleSection mt-4 font-bold">
          <h1 className="text-3xl flex justify-center">
            Why they Prefer Finpay
          </h1>
        </div>
        <div className="flex justify-center mt-15 gap-20">
          <div className="Card1 w-110 h-60 bg-stone-100 rounded-lg">
            <div className="wrapperCard p-15">
              <p className="text-5xl text-blue-400 font-bold">3K +</p>
              <p className="mt-5 text-xl font-semibold">
                Business already running <br /> on FinPlay
              </p>
            </div>
          </div>
          <div className="Card2 w-110 h-60 bg-stone-100 rounded-lg">
            <div className="wrapperCard2 p-10">
              <p className="text-xl text-black font-semibold">
                Instan Withdraw your funds <br /> at any Time
              </p>
              <div className="mt-8 flex gap-20">
                <img
                  src="https://vectorseek.com/wp-content/uploads/2023/06/Tokenize-Xchange-TKX-Logo-Vector.jpg"
                  alt=""
                  className="w-19 "
                />
                <img
                  src="https://img.freepik.com/premium-vector/ton-cryptocurrency-cartoon-coin-illustration-white-background_626313-775.jpg"
                  alt=""
                  className="w-17"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="w-[65%] h-70 m-auto bg-stone-100 rounded-lg">
            <div className="p-10">
              <aside className="left">
                <p className="text-xl font-semibold">No Asset votality</p>
              </aside>
              <aside className="right"></aside>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Home;
