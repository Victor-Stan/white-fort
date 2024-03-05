import { CiClock2, CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoIosClose, IoMdHeartEmpty } from "react-icons/io";
import { PiCoffeeLight } from "react-icons/pi";

const App = () => {
  return (
    <div className="flex flex-col w-full h-screen bg-cover bg-no-repeat bg-[url('./restaurant.jpg')] grid justify-items-center ">
      <IoIosClose
        className="bg-gradient-to-r from-black via-black to-gray-600 rounded-full justify-self-end m-5 "
        color="white"
        size={40}
      />

      <div className="bg-white w-[380px] h-[400px] mt-auto  rounded-lg shadow-inner shadow-2xl p-4">
        <label htmlFor="yeah" className="opacity-50 ">
          People:
        </label>
        <div className="flex flex-row  ">
          <div className="flex -space-x-2 overflow-hidden w-80" id="yeah">
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>

          <div className="border border-black rounded-lg p-2 mx-1.5 ">
            <IoMdHeartEmpty size={20} />
          </div>
          <button className="bg-black text-white font-medium py-1 px-2 rounded-lg inline-flex items-center">
            <PiCoffeeLight />
            <span>MENU</span>
          </button>
        </div>
        <div className=" p-2 mt-1 text-3xl font-bold">
          <h1>
            White Fort <br></br> Coffee
          </h1>
        </div>
        <div className="flex flex-row ">
          <CiLocationOn color="orange" className="mx-1" size={20} />
          <span className="">Gaziosmanpasa (Sogut Caddesi)</span>
          <span className="ml-auto border bg-slate-100 p-1 rounded-xl">
            1 mi
          </span>
        </div>
        <div className="flex flex-row ">
          <CiClock2 color="orange" className="mx-1" size={20} />
          <span>Hours: 8.00-16.00</span>
        </div>
        <div className="flex flex-row p-5 -mx-4">
          <span className="border bg-slate-100 p-1 rounded-xl mx-1">
            Burger
          </span>
          <span className="border bg-slate-100 p-1 rounded-xl mx-1">Tavuk</span>
          <span className="border bg-slate-100 p-1 rounded-xl mx-1">
            FastFood
          </span>
          <span className="ml-auto  p-1 text-lg font-bold">4.5</span>
          <FaStar className="mt-2.5" />
          <span className="mt-2 mx-1">(20+)</span>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white mt-9 font-medium py-3 px-24 rounded-lg tracking-wide w-full">
            RESERVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
