import React from "react";
import Navbar from "../../Components/Navbar";

function Home() {
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
          <h1 className="flex flex-col gap-2 tracking-wide">
            <span className="text-4xl font-bold">Get Paid Early </span>
            <span className="text-4xl font-semibold ">Save Automatically</span>
            <span className="text-4xl font-semibold ">All Your Pay</span>
          </h1>
          <p className="text-stone-500">
            Support Small Businnes with simple invoicing, <br /> powerfull
            integrations, and cash flow managament tools
          </p>
        </aside>
        <div>
          <aside className="image">
            <img
              src="https://asset.kompas.com/crops/qLjpvpmD6CFKqmVnYjGscmdTKls=/136x0:511x250/1200x800/data/photo/2022/02/03/61fb0a50228bd.png"
              alt=""
              className="relative w-150 rounded-lg"
            />
            <img
              src="https://freesvg.org/img/credit-card-front.png"
              className="w-80 absolute top-40 right-40"
              alt=""
            />
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Home;
