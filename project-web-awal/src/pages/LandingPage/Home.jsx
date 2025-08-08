import React, { useEffect, useRef } from "react";
import Navbar from "../../Components/Navbar";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import Chart from "chart.js/auto";

function Home() {
  const chartRef = useRef(null); // 1. bikin ref dulu
  let chartInstance = null;

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: false, // animasi hanya jalan sekali saat scroll
    });

    const ctx = chartRef.current.getContext("2d"); // 2. ctx dibuat di sini, setelah render
    if (chartInstance) {
      chartInstance.destroy(); // biar gak dobel chart saat re-render
    }
    chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
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
                  <div className="Card1" data-aos="fade-right">
                    <i className="creditCard bi-credit-card text-4xl" />
                    <p className="text-2xl">Free Transfers</p>
                    <p className="text-stone-400 text-sm mt-3">
                      Create a Financeial Experienceacy and <br /> automated
                      repeat purpuce by scheduling <br /> recurring payment
                    </p>
                  </div>
                  <div className="Card2" data-aos="fade-down">
                    <i className="digram2 bi-diagram-2 text-4xl" />
                    <p className="text-2xl">Multiple Create Account</p>
                    <p className="text-stone-400 text-sm mt-3">
                      Create a Financeial Experienceacy and <br /> automated
                      repeat purpuce by scheduling <br /> recurring payment
                    </p>
                  </div>
                  <div className="Card3" data-aos="fade-left">
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
          <span
            className="text-md text-blue-500 flex justify-center"
            data-aos="fade-down"
          >
            WHY US
          </span>
        </div>
        <div className="TitleSection mt-4 font-bold">
          <h1 className="text-3xl flex justify-center" data-aos="fade-up">
            Why they Prefer Finpay
          </h1>
        </div>
        <div className="flex justify-center mt-15 gap-20">
          <div
            className="Card1 w-110 h-60 bg-stone-100 rounded-lg"
            data-aos="fade-right"
          >
            <div className="wrapperCard p-15">
              <p className="text-5xl text-blue-400 font-bold">3K +</p>
              <p className="mt-5 text-xl font-semibold">
                Business already running <br /> on FinPlay
              </p>
            </div>
          </div>
          <div
            className="Card2 w-110 h-60 bg-stone-100 rounded-lg"
            data-aos="fade-left"
          >
            <div className="wrapperCard2 p-10">
              <p className="text-xl text-black font-semibold">
                Instan Withdraw your funds <br /> at any Time
              </p>
              <div className="mt-8 flex gap-20">
                <img
                  src="https://vectorseek.com/wp-content/uploads/2023/06/Tokenize-Xchange-TKX-Logo-Vector.jpg"
                  alt=""
                  className="w-19 rounded-lg"
                />
                <img
                  src="https://img.freepik.com/premium-vector/ton-cryptocurrency-cartoon-coin-illustration-white-background_626313-775.jpg"
                  alt=""
                  className="w-17 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div
            className="w-[65%] h-70 m-auto bg-green-100 rounded-lg flex items-center justify-center"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-40">
              <aside className="left">
                <p className="text-4xl font-semibold">No Asset votality</p>
                <p className="mt-5 text-sm text-stone-500">
                  Generate returns on your <br /> case reverses whitout making{" "}
                  <br /> any investements
                </p>
              </aside>
              <aside className="right">
                <div className="w-120 h-60 bg-white rounded-lg">
                  <canvas ref={chartRef}></canvas>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* for section three */}

      <article className="pt-30 bg-white">
        <aside
          className="w-[95%] h-150 m-auto rounded-lg"
          style={{ backgroundColor: "#003566" }}
          data-aos="fade-up"
        >
          <div className="p-25">
            <div className="subJudul">
              <p className="text-md text-stone-400 font-semibold">Step</p>
              <p className="text-4xl text-white font-bold mt-5">
                Maximize your returns with a <br /> Reverse account that
                generates.
              </p>
            </div>
            <div className="mt-10 flex gap-10">
              <div
                className="Card1 w-70 h-50 rounded-lg"
                style={{ backgroundColor: "#0f4c5c" }}
                data-aos="fade-right"
              >
                <div className="p-2">
                  <p className="text-8xl text-white pl-5">1</p>
                  <div className="relative top-[-10px] left-7">
                    <p className="text-white">Open your Account</p>
                    <p className="text-stone-400 text-xs mt-1">
                      Sig In up to finpay and set up your account <br /> from
                      the Dashboard
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="Card1 w-70 h-50 rounded-lg"
                style={{ backgroundColor: "#0f4c5c" }}
                data-aos="fade-up"
              >
                <div className="p-2">
                  <p className="text-8xl text-white pl-5">2</p>
                  <div className="relative top-[-10px] left-7">
                    <p className="text-white">Transfers your Money</p>
                    <p className="text-stone-400 text-xs mt-1">
                      move money from to another account into <br /> and start
                      to earning up
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="Card1 w-70 h-50 rounded-lg"
                style={{ backgroundColor: "#0f4c5c" }}
                data-aos="fade-left"
              >
                <div className="p-2">
                  <p className="text-8xl text-white pl-5">3</p>
                  <div className="relative top-[-10px] left-7">
                    <p className="text-white">Watch your balance grow</p>
                    <p className="text-stone-400 text-xs mt-1">
                      Accesed Instally and remain insulated <br /> from market
                      volatility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </article>

      <article className="pt-40 pb-40  bg-white">
        <div className="titleFour">
          <div className="items-center">
            <p className="text-md text-blue-500 text-center">OUR MISSION</p>
            <div className="text-center font-semibold mt-10 text-4xl">
              <p>We've Helped</p>
              <p>inovative companies</p>
            </div>
            <div className="mt-10">
              <p className="text-stone-400 text-sm text-center">
                Hundlered of all sizes and accross all industries <br /> have
                madea big imporovements with us
              </p>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-30">
            <div className="card1">
              <p className="text-5xl font-bold text-center">24%</p>
              <p>Revenue business</p>
            </div>
            <div className="card1">
              <p className="text-5xl font-bold text-center">180K</p>
              <p>In annuel revenue</p>
            </div>
            <div className="card1">
              <p className="text-5xl font-bold text-center">10+</p>
              <p>Month of runway</p>
            </div>
          </div>

          <div className="mt-30">
            <div>
              <p className="text-center">Choose Plan</p>
            </div>
            <div className="mt-20 flex gap-30 justify-center">
              <div className="Card w-100 h-50 bg-stone-100 rounded-lg"></div>
              <div className="Card w-100 h-50 bg-stone-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </article>

      <article className="mt-40"></article>
    </main>
  );
}

export default Home;
