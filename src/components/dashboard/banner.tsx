import { Landmark } from "lucide-react";

export const Banner = ({ bannerFor }: { bannerFor?: string }) => {
  return (
    <div className="flex justify-between rounded-2xl bg-green-800 h-28 text-white text-4xl">
      <div className="h-4/5 flex items-center my-auto w-full px-12 justify-between">
        <span className="flex items-center gap-2">
          <span>{bannerFor || "Dashboard"}</span>
          <Landmark className="relative top-[2px]" />
        </span>
        <span className="text-base">
          Hey <b>{"Kylian"}</b> 🍕, <br />
          you last visited yesterday{" "}
        </span>
      </div>
    </div>
  );
};
