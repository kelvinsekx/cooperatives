"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

// icons
import { Home, AlarmClock, Beef, Bean, MoveRight } from "lucide-react";

export default function Demo() {
  return (
    <>
      <Demo.Banner />
      <Demo.WhatWeOffer />
      <Demo.Staff />
      <Demo.ContactUs />
    </>
  );
}

const Banner = () => {
  return (
    <div className="flex flex-row-reverse justify-between pt-10">
      <div className="w-3/6 h-96 relative">
        <Image
          alt=""
          fill
          className="object-cover object-center rounded-sm"
          src={
            "https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
      </div>
      <div className="flex flex-col w-5/12 gap-4">
        <p className="text-2xl font-bold">
          We strive to improve the economic status of all our members
        </p>
        <p>
          We are a team of talented managers maintaining high integrity and best
          performance for the benefit of our members
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};
Demo.Banner = Banner;

const staffCard: React.FC<
  React.PropsWithChildren<{ src: string; title: string; name: string }>
> = ({ children, src, title, name }) => {
  return (
    <div className="text-black flex flex-col items-center py-4 px-8 gap-2">
      <div className="relative w-48 h-56">
        <Image alt="" src={src} fill className="object-cover object-top" />
      </div>
      <p className="font-semibold text-lg">{name}</p>
      <p>{title}</p>
    </div>
  );
};
Demo.StaffCard = staffCard;

/*
 Staff Component
*
*
*
*
*/
const directors_data = [
  {
    avatar:
      "https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Treasurer Monday",
    title: "Chairman",
  },
  {
    avatar:
      "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mrs Uchuno Mary",
    title: "President",
  },
  {
    avatar:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mr Agbese Blessing",
    title: "Vice President",
  },
  {
    avatar:
      "https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mr Adugbo Friday",
    title: "Secretary",
  },
  {
    avatar:
      "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Mr Agbor Rapson",
    title: "Treasurer",
  },
];
const Staff = () => {
  return (
    <div>
      <div className="text-3xl pb-8 font-semibold">Board of Directors</div>
      <div>
        <p className="text-red-400 text-xl font-serif">
          Our extenguised directors
        </p>
        <div className="flex flex-wrap w-9/12">
          {directors_data.map((director, index) => (
            <Demo.StaffCard
              key={index}
              src={director.avatar}
              title={director.title}
              name={director.name}
            ></Demo.StaffCard>
          ))}
        </div>
      </div>
    </div>
  );
};
Demo.Staff = Staff;

/*
 WhatWeOffer Layout Component
*
*
*
*
*/
const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-2 border-slate-300 text-slate-400 hover:text-red-400 shadow-sm rounded-[1rem] py-4 px-8">
      <Link href="/" className="flex flex-col items-center gap-16">
        {children}
      </Link>
    </div>
  );
};
Demo.Card = Card;

const WhatWeOffer = () => (
  <div className="my-16">
    <p className="text-2xl text-red-400 font-semibold py-10">
      How can we help you?
    </p>
    <div className="flex gap-6 justify-evenly">
      <Demo.Card>
        <AlarmClock size={"40px"} color="#f87171" />
        <div>Apply for a Loan</div>
      </Demo.Card>
      <Demo.Card>
        <Home size={"40px"} color="#f87171" />
        <div>Apply for a Mortage</div>
      </Demo.Card>
      <Demo.Card>
        <Bean size={"40px"} color="#f87171" />
        <div>Open a Business Account</div>
      </Demo.Card>
      <Demo.Card>
        <Beef size={"40px"} color="#f87171" />
        <div>Open a Personal Account</div>
      </Demo.Card>
    </div>
  </div>
);
Demo.WhatWeOffer = WhatWeOffer;

/*
 Contanct Us Layout Component
*
*
*
*
*/

const ContactCard = () => (
  <div className="border-2 border-slate-500 text-slate-900 h-60 !rounded-[1rem] flex flex-col justify-between py-4 px-8 text-base">
    <div className="text-2xl">Call Us</div>
    <p>
      Monday - Friday
      <br /> from 7am to 7pm & 9am to 1pm
    </p>
    <Button className="flex items-center gap-4 border-2 border-red-400 bg-red-400 py-4 px-11 !rounded-[2rem]">
      <span>O80 8035 8893434</span>
      <MoveRight className="relative hover:left-5" />
    </Button>
  </div>
);

const ContactUs = () => {
  return (
    <div className="my-16">
      <div className="text-3xl pb-8 font-semibold">We’re Here to Help</div>
      <div>
        <p className="text-red-400 text-2xl font-serif mb-4">
          We’re Here to Help
        </p>
        <div className="flex justify-between w-full">
          {[1, 2, 3].map((director, index) => (
            <ContactCard />
          ))}
        </div>
      </div>
    </div>
  );
};
Demo.ContactUs = ContactUs;
