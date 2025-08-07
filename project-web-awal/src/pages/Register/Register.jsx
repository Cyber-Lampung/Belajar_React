import React, { useState } from "react";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    // kirim disini langsung ke api
  };

  return (
    <main className="">
      <section className="h-screen w-full flex items-center justify-center bg-blue-700 ">
        <form
          onSubmit={handelSubmit}
          className="Register flex flex-col gap-5 w-90 h-120 border-2 border-white rounded-xl  bg-violet-700 p-4"
        >
          <div className="Title">
            <h1 className="text-2xl font-bold text-2xl text-white flex justify-center">
              Sign Up
            </h1>
          </div>
          <div className="mt-6 flex flex-col justify-center items-center gap-7">
            <Input
              className="border-2 w-70 rounded-md bg-white p-1 outline-none text-sm font-semibold"
              type="email"
              name="Email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="border-2 w-70 rounded-md bg-white p-1 outline-none text-sm font-semibold"
              type="text"
              name="Username"
              placeholder="Username"
              id="user"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="text"
              name="Password"
              placeholder="Password"
              id="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button
              name="Register"
              type="submit"
              className="LoginBtn w-50 p-1 rounded-xl text-md font-bold text-white"
            />
          </div>
          <div className="">
            <p className="text-sm font-bold text-white sans flex justify-center">
              Register With
            </p>
          </div>
          <footer className="bg-white h-10 w-50 m-auto rounded-xl flex items-center justify-center gap-5">
            <img
              src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
              className="w-6"
              alt=""
            />
            <img
              src="https://cdn.vectorstock.com/i/1000v/47/44/black-telephone-icon-simple-signal-vector-21174744.jpg"
              className="w-8"
              alt=""
            />
            <img
              src="https://www.clipartmax.com/png/middle/158-1587271_email-icon-vector-circle.png"
              className="w-7"
              alt=""
            />
          </footer>
          <div className="Sudahpunyaakun flex gap-3 items-center">
            <span className=" text-sm font-bold text-white">
              Sudah Punya Akun ?{" "}
            </span>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
