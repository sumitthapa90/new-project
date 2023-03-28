import React from "react";
import "./contact.css";
import Footer from "../../component/Footer/Footer";

function Contact() {
  return (
    <>
      <div className="w-full h-40 mx-auto min-h-screen bg-black text-white">
        <div className="about-img w-full ">
          <img
            src="./assets/contact3.jpg"
            className=" w-full h-[40vh] md:h-[55vh] xl:h-[65vh]"
            alt="2"
          />
          
        </div>

        <h2 className="text-white text-center text-4xl font-bold  mt-10 font-mono">
          CONTACT
          <span className="text-amber-700 text-4xl font-bold font-mono ">
            US
          </span>
        </h2>
        <hr className="h-[1px] text-[#dddddd] mx-auto w-52 border-none bg-[#dddd]" />

        <div className="flex justify-around item-center p-5 sm:text-red-700">
          <div className="left">
            <img src="./assets/contact2.png" alt="4" className="w-[500px]" />
          </div>

          <div className="right bg-orange-500 rounded-xl shadow-lg  text-slate-800 p-3">
            <form className="flex flex-col space-y-3">
              <label for="" className="text-lg font-bold text-white font-mono">
                Your Name
              </label>

              <input
                type="text"
                placeholder="name"
                className="ring-1 ring-gray w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring"
              />

              <label for="" className="text-lg font-bold text-white font-mono">
                Email
              </label>

              <input
                type="email"
                placeholder="email"
                className="ring-1 ring-gray w-full rounded-md px-4 py-2 mt-3 outline-none focus:ring"
              />

              <label for="" className="text-lg font-bold text-white font-mono">
                Phone no
              </label>

              <input
                type="number"
                placeholder="Phone no"
                className="ring-1 ring-gray w-full rounded-md px-4 py-2 mt-3 outline-none focus:ring"
              />

              <label for="" className="text-lg font-bold text-white font-mono">
                Messaage
              </label>

              <textarea
                type="text"
                placeholder="message"
                rows="4"
                className="ring-1 ring-gray w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring"
              />

              <button className="btn p-2 rounded-lg inline-block bg-teal-600 text-white font-bold self-end">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className=" mx-auto ">
          <iframe
          className="map mb-5 mx-auto"
          title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6807218712966!2d76.68925751499053!3d30.69925809429644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef1eab50c8e3%3A0x2159196c8128e8f4!2sTechnogetic%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1679640995270!5m2!1sen!2sin"
            width="80%"
            height="450"
         
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
