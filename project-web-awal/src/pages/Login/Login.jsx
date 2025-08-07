import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();

    console.log(username, password);
  };
  return (
    <main className="h-screen w-full bg-blue-600 flex items-center justify-center">
      <section className="h-85 w-80 border-2 border-white rounded-xl p-4 shadpw-white">
        <form onSubmit={submitLogin}>
          <div className="Title">
            <h1 className="text-white font-bold text-2xl">Login Account</h1>
          </div>
          <div className="containerBox mt-13">
            <div className="BoxLogin">
              <div>
                <Input
                  className="border-2 w-70 rounded-md bg-white p-1 outline-none text-sm font-semibold"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  on
                />
              </div>
              <br />
              <div>
                <Input
                  className="border-2 w-60 rounded-md bg-white p-1 outline-none text-sm font-semibold"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  on
                />
              </div>
              <div className="flex justify-center rounded-xl mt-5">
                <Button name="Login" type="submit" className="mt-5 w-60 p-1 border-2 -border-black font-bold text-white rounded-xl" />
              </div>
              <div className="LpPassword flex gap-2 items-center text-md font-semibold mt-5">
                <span className="text-white">Lupa Password ? </span>
                <a href="/Reset" className="text-sm font-bold text-blue-300">Reset</a>
              </div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
