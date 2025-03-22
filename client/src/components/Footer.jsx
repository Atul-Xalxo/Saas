import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500">Copyright @GreatStack.dev | All right reserved.</p>
      <div className="flex gap-2.5 max-sm:hidden">
        <img src={assets.facebook_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
        <img src={assets.instagram_icon} width={35} alt="" />
      </div>
    </div>
  );
};

export default Footer;
