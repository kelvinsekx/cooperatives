"use client";
import * as React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Naira } from "@/components/ui/naira";
import { Banner } from "@/components/dashboard";
import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DetailsPage() {
  return (
    <div className="text-base">
      <Banner bannerFor="Dividend" />
      <Body />
    </div>
  );
}

const notifications = [
  {
    title: "Profit for Jun - July, 2023",
    description: "23,456",
  },
  {
    title: "Profit for July - Nov, 2023",
    description: "2,000",
  },
  {
    title: "Profit for July - Dec, 2023",
    description: "22,000",
  },
];

const Body = () => {
  const [state, setState] = React.useState(false);
  return (
    <Card className={cn("w-[580px] mx-auto my-8")}>
      <CardHeader>
        <CardTitle> Your latest dividend</CardTitle>
        <CardDescription>
          Total at{" "}
          <span className="text-base font-semibold">
            <Naira />
            143,000
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid mx-auto gap-4 w-9/12">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1 text-sm">
            <p className="leading-none">
              Increase your monthly contribution which increases your dividends
            </p>
            <p className="text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
        <Body.List />
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => setState(true)}>
          <Check className="mr-2 h-4 w-4" />{" "}
          {!state
            ? "Mark all as read"
            : "Thanks for confirming you read them 🍕!"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const LIST = () => {
  return (
    <div>
      {notifications.map((notification, index) => (
        <div
          key={index}
          className="mb-4 grid text-base grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
        >
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-red-400" />
          <div className="space-y-1 text-base font-semibold">
            <p className="opacity-80">{notification.title}</p>
            <p className="text-xl text-muted-foreground">
              <Naira />
              {notification.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
Body.List = LIST;
