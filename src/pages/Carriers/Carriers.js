import React from "react";
import "./carriers.css";
import { AiOutlineHome,AiOutlineGift,} from "react-icons/ai";
import Footer from "../../component/Footer/Footer";
import {BsPersonSquare,BsRocketTakeoff,BsTruck} from "react-icons/bs";
import {CiBurger  } from "react-icons/ci";

function Carriers() {
  return (
    <>
      <div className="w-full h-40 mx-auto min-h-screen bg-black text-white">
        <div className="about-img w-full ">
          <img
            src="./assets/career2.webp"
            className=" w-full h-[40vh] md:h-[55vh] xl:h-[65vh]"
            alt="2"
          />
        </div>


       

        <div className="careers-sec text-center mx-auto max-w-[1240px] ">
          <h2 className="text-3xl mt-10 mb-5 text-orange-600 ">SMILE! SATISFACTION! SOUND SLEEP</h2>
          <h3 className="text-xl mb-5 text-slate-300 font-mono">We bring these values to lives of our employees everyday.</h3>
          <p className="text-2xl text-slate-300 font-mono">
            A frenzy of new ideas, a stack of exciting release, surrounded by
            colleagues who are driven by passion and not deadlines, and an
            infectious vibe that pushes us to work at a breakneck speed day-in-
            in-day- out to deliver that next aha! moment to our customers.
          </p>
        </div>


        <hr className="h-[1px] text-[#dddddd] mx-auto w-52 border-none bg-[#dddd] mt-10 mb-5" />

        <div className="mx-auto text-center">
          <h2 className="text-3xl mt-10 mb-5  text-orange-600" >BENEFITS, WE THINK YOU’LL LIKE THEM</h2>
          <p className="text-2xl text-slate-300 mb-10 font-mono">Luxuries of a Start-Up begin after 3 months of working with us.</p>
        </div>

       <div className="max-w-full mx-auto grid lg:grid-cols-3 sm:grid-cols-2 gap-3 bg-black  pb-2 mt-3 p-10">
       <div className="careers-g gallery  p-5 mt-5  mb-5 rounded  text-white">
            <CiBurger className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000 " />
            <h5 className="text-white text-xl text-center py-2 font-mono">Fun - filled retreats</h5>
            <p className="font-mono">
            Have fun with your co-workers Eating, Celebrating and sharing ahppy moments
            </p>
          </div>
          <div className="careers-g gallery  p-5 mt-5  mb-5 rounded  text-white">
            <BsPersonSquare className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000 " />
            <h5 className="text-white text-xl text-center py-2 font-mono">Mentorship</h5>
            <p className="font-mono">
            You’ll receive valuable training from the experienced mentors for the challenge you face at work
            </p>
          </div>
          <div className="careers-g gallery  p-5 mt-5  mb-5 rounded  text-white">
            <AiOutlineHome className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000 " />
            <h5 className="text-white text-xl text-center py-2 font-mono">Remote Work</h5>
            <p className="font-mono">
            Get things done - from home or an office. We understand the emergencies to stay at home on time.
            </p>
          </div>

          <div className="careers-g gallery  p-5 mt-5  mb-5 rounded  text-white">
            <AiOutlineGift className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000 " />
            <h5 className="text-white text-xl text-center py-2 font-mono">Allowances & Perks</h5>
            <p className="font-mono">
            Every extra effort you make, you are definitely rewards with allowance added to the salary.
            </p>
          </div>

          <div className="careers-g gallery  p-5 mt-5  mb-5 rounded  text-white">
            <BsRocketTakeoff className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000 " />
            <h5 className="text-white text-xl text-center py-2 font-mono">A chance to skyrocket your career</h5>
            <p className="font-mono">
            In time you can become a team leader, come up with excellent results and take away the next level of designation.
            </p>
          </div>

          <div className="careers-g gallery  p-5 mt-5  mb-5 rounded  text-white">
            <BsTruck className="animate-bounce text-5xl mx-auto group-hover:text-white text-orange-600 mt-5 duration-1000 " />
            <h5 className="text-white text-xl text-center py-2 font-mono">Relocation Assistance</h5>
            <p className="font-mono">
            Want to explore Spineor from another corner of India, come and join us. We will take care of your relocation and accomodation.
            </p>
          </div>
          
       </div>



       
       <Footer />
      </div>
   
    </>
  );
}

export default Carriers;
