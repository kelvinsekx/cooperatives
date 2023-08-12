import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export const Testimony = () => {
  return (
    <div className="my-16 flex justify-between">
      <div className="w-7/12">
        <Quote size={"60px"} className="mb-16" />
        <div>
          The Credit Union of Georgia is absolutely, unequivocally WONDERFUL!! I
          have had a few loans with them since 2014, and everything from the
          loan process to the loan officers and staff are great. The folks there
          are so kind, friendly and professional. CUGA has excellent rates and
          their loan process is quick and seamless. I recommended them to a
          family member recently who had the same experience. We are grateful
          for this banking institution and recommend it to anyone looking for
          great rates, great people and a great experience
        </div>
      </div>
      <div>
        <div className="text-xl relative right-28 border-2 border-red-400">
          Emmanuel Eboga, UCH-BENIN
        </div>
        <div className="relative h-72">
          <Image
            fill
            className="object-cover"
            alt=""
            src="https://images.pexels.com/photos/3290236/pexels-photo-3290236.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </div>
      </div>
    </div>
  );
};
