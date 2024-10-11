import React from "react";
import { MdOutlineLocalOffer, MdStar } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Hero() {
  // first of all connect google  fonts 1:08:46//

  return (
    <section className="relative bg-hero bg-center bg-no-repeat h-screen w-full" >
      <div className="max_padd_container relative top-32 xs:top-52" >
        <h1 className="h1 max-w-[37rem] capitalize" >Digital Shopping Hun Junction</h1>
        <p className="text-gray-50 regular-16 mt-6  max-w-[33rem]" >
          lorem ipsum dol ipsum dol ipsum dol ipsum dol ipsum dol ipsum dol
          ipsum dol ipsum dol ipsum dol ipsum dol ipsum dol ipsum dol ipsum dol
        </p>
      
      <div className="flexStart !items-center gap-x-4 my-10" >
        <div className="!regular-24 flex flex-center gap-x-3" >
          <MdStar />
          <MdStar />
          <MdStar />
          <MdStar />
        </div>
        <div className="bold-16 sm:bold-20">
          176k
          <span className="regular-16 sm:regular-20"> Excellent Reviews</span>
        </div>
        </div>
        <div className="max-xs:flex-col flex gap-2" >
          <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
            Shop now
          </NavLink>
          <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2"}>
           <MdOutlineLocalOffer className="text-2xl" /> Offers
          </NavLink>
        </div>
      </div>
    
    </section>
  );
}
