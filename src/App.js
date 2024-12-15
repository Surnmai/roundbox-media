import Logo from "./img/roundbox.png";

// import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function App() {
  return (
    <>
      <section className="bg-hero h-[73rem] w-full bg-cover bg-no-repeat bg-center relative">
        <div className="container">
          {/* title and logo  */}
          <div className="flex items-center justify-between mb-8 md:mb-8 ">
            {/* title  */}

            <h3 className="text-primary font-poppins max-w-2xl font-bold text-xl md:text-2xl">
              Production management, event coverage and media support to suit
              your organization
            </h3>

            {/* logo  */}
            <div className="cursor-pointer">
              <img src={Logo} alt="logo" className="w-[10rem] " />
            </div>
          </div>

          {/* add flex basis, shrink and grow to the children  */}
          {/* text and contact  */}
          <div className="flex flex-wrap justify-between items-center text-white font-dmSans text-2xl md:text-5xl">
            {/* text  */}
            <div className="flex-1 capitalize max-w-3xl mb-4">
              <div className="font-bold mb-6">
                <p>production management</p>
                <p>Videography/photography</p>
                <p>Live event streaming</p>
                <p>Live worship</p>
                <p>Church Media Consultancy</p>
              </div>
              <article className="text-xl md:text-2xl">
                From worship, to concerts, to grand openings, to corporate
                meetings, Roundbox.media is here to help
              </article>
            </div>

            {/* contact  */}
            <div className="flex-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              <div className="flex flex-col justify-center items-center bg-transparent font-bold font-dmSans sm:p-14 md:p-28">
                <p>055 847 1720</p>
                <p>050 843 4937</p>
                <div className="flex">
                  <FaInstagram />
                  <span>roundbox.media</span>
                </div>
              </div>
            </div>
          </div>

          {/* gradiant border  */}
          <div className="translate-y-8 rounded-md h-10 w-full bg-gradient-to-r from-black from-30% via-red-800 via-60% to-sky-500 to-90%"></div>

          {/* bottom text  */}
          <div className="flex justify-between translate-y-[4rem] text-2xl">
            <p className="text-primary">site under development </p>
            <p className="text-white">.goodstuff </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
