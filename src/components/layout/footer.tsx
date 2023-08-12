import React from "react";
import Link from "next/link";

import { Separator } from "../ui/separator";

// icons
import { Twitter, Heart } from "lucide-react";

const footerLinks = [
  "Forms & Disclosures",
  "Privacy & Security",
  "Fee Schedule",
  "Friendly Deposit",
  "Rates",
];
export const Footer: React.FC = () => (
  <footer className=" w-full bg-slate-200/25 p-8">
    <div className="max-w-5xl m-auto">
      <p className="mb-1">Mailing Address: 23, ERE/4534, Benin city.</p>
      <p className="mb-6">Emailing Address: icimeme@cooperative.com.</p>
      <div className="flex gap-4">
        {footerLinks.map((str, index) => (
          <Link href={`/${str}`} key={index}>
            {str} |
          </Link>
        ))}
        <Twitter strokeWidth={"2px"} />
      </div>
      <Separator className="border-2 border-black/25" />
      <div>
        <p>&copy;2023 Cooperative. All Rights Reserved</p>
        <p className="flex items-center gap-2">
          <span>built by</span> <Heart strokeWidth={"2px"} size={"12px"} />{" "}
          kelvinsekx
        </p>
      </div>
    </div>
  </footer>
);
