import Button from "./Components/Button";
import Input from "./Components/Input";
import "./App.css"

const form = document.querySelector(".Register");

form.addEventListener("submit", (e) => {
  e.preventDefault()

  form.name

})

const ClickMe = () => {
  alert(1)
}

function App() {
  return (

    <main className="">
      <section className="h-screen w-full flex items-center justify-center bg-blue-700 ">
        <form className="Register flex flex-col gap-5 w-90 h-120 border-2 border-white rounded-xl  bg-violet-700 p-4">
          <div className="Title">
            <h1 className="text-2xl font-bold text-2xl text-white flex justify-center">Sign Up</h1>
          </div>
          <div className="mt-6 flex flex-col justify-center items-center gap-7">
            <Input name="Email" placeholder="Email" id="email" className="border-white" />
            <Input name="Username" placeholder="Username" id="user" />
            <Input name="Password" placeholder="Password" id="pass" />
          </div>
          <div className="flex justify-center">
            <Button name="Login" onClick={ClickMe} className="LoginBtn " />
          </div>
          <div className="">
            <p className="text-sm font-bold text-white sans flex justify-center">Login With</p>
          </div>
          <footer className="bg-white h-10 w-50 m-auto rounded-xl flex items-center justify-center gap-5">
            <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className="w-6" alt="" />
            <img src="https://cdn.vectorstock.com/i/1000v/47/44/black-telephone-icon-simple-signal-vector-21174744.jpg" className="w-8" alt="" />
            <img src="https://www.clipartmax.com/png/middle/158-1587271_email-icon-vector-circle.png" className="w-7" alt="" />
          </footer>
            <div className="Sudahpunyaakun flex gap-3 items-center">
              <span className=" text-sm font-bold text-white">Sudah Punya Akun ? </span>
              <a href="/Login" className="text-sm font-bold text-blue-600" >Login</a>
            </div>
        </form>
      </section>
    </main>

  );
}

export default App;
