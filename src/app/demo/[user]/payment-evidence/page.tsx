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

import {
  TableBody,
  Table,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Banner } from "@/components/dashboard";
import { BellRing } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function PaymentEvidence() {
  return (
    <div className="text-base">
      <Banner bannerFor="Payment Evidence" />
      <Body />
    </div>
  );
}

const Body = () => (
  <Tabs defaultValue="add-payment-evidence" className="md:w-[70%] mx-auto my-8">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="add-payment-evidence">
        Add Payment Evidence
      </TabsTrigger>
      <TabsTrigger value="evidence-history">
        Payment Evidence History
      </TabsTrigger>
    </TabsList>
    <TabsContent value="add-payment-evidence">
      <Body.AddPayment />
    </TabsContent>
    <TabsContent value="evidence-history">
      <Body.EvidenceHistory />
    </TabsContent>
  </Tabs>
);

Body.AddPayment = () => (
  <Card>
    <CardHeader>
      <CardTitle>Let's get your payment evidence</CardTitle>
      <CardDescription>
        Make changes to your account here. Click save when you're done.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="space-y-1">
        <Label htmlFor="name" className="font-semibold">
          Enter the reason and amount for this loan
        </Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="evidence-image" className="font-semibold">
          Select Payment Document Image
        </Label>
        <Input id="evidence-image" type="file" />
        <p className="text-sm opacity-80 flex items-center gap-2 pt-2">
          <BellRing size={"20px"} className="text-red-400" />
          Upload an image as a proof of evidence.
        </p>
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save changes</Button>
    </CardFooter>
  </Card>
);

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

Body.EvidenceHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Table>
          <TableCaption>A list of your payment evidence.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Reason</TableHead>
              <TableHead>Evidence</TableHead>
              <TableHead>Action</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
