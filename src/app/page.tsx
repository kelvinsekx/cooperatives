import Image from "next/image";

import { NavigationMenuDemo } from "@/components/layout/navigation-menu";
import { Footer } from "@/components/layout/footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Testimony } from "@/components/testimony";
import Link from "next/link";

const howItWorks = [
  {
    header: "Open a basic savings account",
    body: "You can get started with just $10.",
  },
  {
    header: "Explore your option",
    body: "Once you’ve opened your savings account, you can explore all our low-rate loans and popular account options.",
  },
  {
    header: "Get the help you need",
    body: "Feel free to reach out to us with any questions. We’re here, we’re local and we’d love to make life easier for you",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="max-w-5xl w-full">
        <NavigationMenuDemo />
        <Home.Banner />
        <Card className="my-16">
          <CardHeader className="text-2xl font-bold">
            {`Here's how it works`}
          </CardHeader>
          <CardContent>
            <div className="flex gap-8">
              {howItWorks.map((content, index) => {
                return (
                  <div className="w-1/3" key={index}>
                    <div className="text-xl fontsemibold">{content.header}</div>
                    <div>{content.body}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <Testimony />
      </div>
      <Footer />
    </main>
  );
}

const Banner = () => {
  return (
    <div className="flex justify-between pt-10">
      <div className="w-3/6 h-96 relative">
        <Image
          alt=""
          fill
          className="object-cover object-center rounded-sm"
          src={
            "https://images.pexels.com/photos/15424312/pexels-photo-15424312/free-photo-of-boy-sitting-on-sack-on-outdoor-market.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
      </div>
      <div className="flex flex-col w-5/12 gap-4">
        <p className="text-2xl font-bold">
          Cooperative the place g Lorem ipsum dolor
        </p>
        <p>
          sit amet consectetur adipisicing elit. Corrupti, sit fuga aspernatur
          recusandae expedita laborum ipsam quia rerum fugiat error velit
          maiores adipisci facilis natus molestias quisquam molestiae repellat
          laudantium!
        </p>
        <Link href={"/demo"} className="p-4 border-2 border-red-400 w-fit">
          Play with a Demo
        </Link>
        <Button className="border-2 border-red-400 w-fit">Sign Up</Button>
      </div>
    </div>
  );
};
Home.Banner = Banner;
