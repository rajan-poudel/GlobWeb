import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { brainwave } from "../assets";
import { curve } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container">
        {/* Top Row - Logo, Moto, and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Logo and Moto */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-7">
            <img src={brainwave} width={200} height={50} alt="Brainwave" />
              
            </div>
            <span className="inline-block relative">

            Your Vision, Our Code  ! {" "}
             <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-1"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            <br />

            {/* <p className="caption text-n-0 text-center md:text-left">
            Bharatpur - 7 Chitwan, 44200 <br />
            Madi Thori Street, Nepal
           
            
            </p> */}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:flex gap-8 md:gap-15">
            <a href="#" className="caption text-n-4 hover:text-n-1 transition-colors">
              Home
            </a>
            <a href="#clients" className="caption text-n-4 hover:text-n-1 transition-colors">
              Our Clients
            </a>
            <a href="#features" className="caption text-n-4 hover:text-n-1 transition-colors">
              Services
            </a>
            <a href="#pricing" className="caption text-n-4 hover:text-n-1 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="caption text-n-4 hover:text-n-1 transition-colors">
            Contact
            </a>
            <a href="https://raw.githubusercontent.com/globsofts/GlobSoft-Inc.-Card/refs/heads/main/2.jpg" className="caption text-n-4 hover:text-n-1 transition-colors">
            DigiCard
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.7586488080283!2d84.41410959010135!3d27.65677122757285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ab68267f444e727%3A0x2000fd86632d5c28!2sGlobSoft%20Inc!5e0!3m2!1sen!2snp!4v1747718940093!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="GlobWeb Location"
          ></iframe>
        </div>

        {/* Bottom Row - Copyright and Socials */}
        <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 text-center lg:text-left">
  GlobWeb © {new Date().getFullYear()} All rights reserved.
  <br className="block lg:hidden" />
  ‎  Powered by{" "}
  <a
    href="https://www.globsoft.rf.gd/"
    className="caption text-n-4 inline hover:underline"
  >
    GlobSoft Inc.
  </a>
</p>




          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;