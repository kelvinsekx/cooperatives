import { Eye, Landmark, Wallet2, Wheat } from "lucide-react";

export default function DashBoard() {
  return (
    <div>
      <DashBoard.Banner />
      <DashBoard.BalanceBoard />
      <DashBoard.CardsBalanceGroup />
    </div>
  );
}

/**
 * WELCOME BANNER
 *
 *
 */
const Banner = () => {
  return (
    <div className="flex justify-between rounded-2xl bg-green-800 h-28 text-white text-4xl">
      <div className="h-4/5 flex items-center my-auto w-full px-12 justify-between">
        <span className="flex items-center gap-2">
          <span>Dashboard</span> <Landmark className="relative top-[2px]" />
        </span>
        <span className="text-base">
          Hey <b>Ebosa</b> 🍕, <br />
          you last visited yesterday{" "}
        </span>
      </div>
    </div>
  );
};
DashBoard.Banner = Banner;
/**
 * ENDS BANNER
 */

/**
 * Balance peek
 *
 *
 */
const BalanceBoard = () => {
  return (
    <div className=" text-base flex items-center rounded-2xl justify-between bg-[#463cc9]/30 my-16 h-48 font-semibold">
      <div className="h-4/5 my-auto w-full px-12 flex justify-between items-center">
        <div>
          <div className="text-2xl flex gap-2 py-4">
            NGN Balance <Wheat />
          </div>
          <div>
            <span className="relative bottom-2">Naira</span>
            <span className="text-2xl">89,342.78</span>
          </div>
        </div>
        <div className="text-sm flex flex-col gap-2 text-slate-600">
          <div>
            <span>Last Update:</span> June 2023
          </div>
          <div>
            <span>Latest Credit:</span> ₦0.00
          </div>
          <div>
            <span>Latest Debit:</span> ₦0.00
          </div>
          <div className="border-2 border-black p-2 text-black">
            View Balance History
          </div>
          <div className="text-black">Quick Links</div>
        </div>
      </div>
    </div>
  );
};
DashBoard.BalanceBoard = BalanceBoard;
/**
 * ENDS BalanceBoard
 */

/**
 * Balance peek
 *
 *
 */
const BalanceCards = ({ index }: { index: number }) => {
  const bg_colors = ["bg-[green]/10", "bg-[#2a2472]/10", "bg-[#D8B863]/10"];
  return (
    <div
      className={`flex rounded-2xl p-8 w-[20rem] justify-between ${bg_colors[index]}  text-[#2a2472] font-semibold`}
    >
      <div>
        <Wallet2 size={"3rem"} />
      </div>
      <div>
        <div className="flex flex-col items-end">
          <div className="text-2xl">Explore Savings</div>
          <div className="text-xl">
            <span className="relative bottom-1">N</span>100000
          </div>
        </div>
        <div className="flex flex-col gap-1 text-base mt-2">
          <div>Last Update: June 2023</div>
          <div>Latest Debit: ₦0.00</div>
          <div>Latest Credit: ₦0.00</div>
        </div>
        <div className="flex item-center gap-2 mt-8 w-fit ml-auto cursor-pointer">
          See History <Eye size={"20px"} />
        </div>
      </div>
    </div>
  );
};
DashBoard.BalanceCards = BalanceCards;

const CardsBalanceGroup = () => {
  return (
    <div className="flex justify-around my-8">
      {[1, 2, 3].map((item, index) => (
        <BalanceCards index={index} />
      ))}
    </div>
  );
};

DashBoard.CardsBalanceGroup = CardsBalanceGroup;
/**
 * ENDS BalanceCards
 */
