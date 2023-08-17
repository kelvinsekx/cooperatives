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
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "@/components/ui/use-toast";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Banner } from "@/components/dashboard";
import { BellRing } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Loan() {
  return (
    <div className="text-base">
      <Banner bannerFor="My loan" />
      <Body />
    </div>
  );
}

const Body = () => (
  <Tabs defaultValue="loan-history" className="md:w-[70%] mx-auto my-8">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="apply-for-new-loan">Apply for a Loan</TabsTrigger>
      <TabsTrigger value="loan-history">Loan History</TabsTrigger>
    </TabsList>
    <TabsContent value="apply-for-new-loan">
      <Body.AddPayment />
    </TabsContent>
    <TabsContent value="loan-history">
      <Body.EvidenceHistory />
    </TabsContent>
  </Tabs>
);

const AddPayment = () => (
  <Card>
    <CardHeader>
      <CardTitle>{"Let's get your payment evidence"}</CardTitle>
      <CardDescription>
        {" Make changes to your account here. Click save when you're done."}
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <Body.LoanForm />
    </CardContent>
    <CardFooter>
      <Button>Apply for Loan</Button>
    </CardFooter>
  </Card>
);
Body.AddPayment = AddPayment;

const FormSchema = z.object({
  loanType: z.string({
    required_error: "Please select an email to display.",
  }),
  duration: z.string({
    required_error: "Please select an email to display.",
  }),
  reason: z
    .string({
      required_error: "tell us why you are getting this loan",
    })
    .trim(),
  guarantor_1: z
    .string({
      required_error: "tell us why you are getting this loan",
    })
    .trim(),
  guarantor_2: z
    .string({
      required_error: "tell us why you are getting this loan",
    })
    .trim(),
});

const LoanForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter the reason and amount for this loan</FormLabel>
              <FormControl>
                <Input placeholder="your reason" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="loanType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>The Type of Loan</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of loan" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Cooperative Loan">
                      Cooperative Loan
                    </SelectItem>
                    <SelectItem value="Bank Loan">Bank Loan</SelectItem>
                    <SelectItem value="Land Loan">Land Loan</SelectItem>
                    <SelectItem value="Trade Loan">Trade Loan</SelectItem>
                    <SelectItem value="FBN Mortagage Financing">
                      FBN Mortagage Financing
                    </SelectItem>
                    <SelectItem value=" Building Development Loan">
                      Building Development Loan
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  This field is important so be intentional.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={"duration"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration of Loan</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Body.Guarantor guarantorFor="Guarantor 1" control={form.control} />
        <Body.Guarantor guarantorFor="Guarantor 2" control={form.control} />
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
      </form>
    </Form>
  );
};
Body.LoanForm = LoanForm;

const Guarantor = ({
  guarantorFor,
  control,
}: {
  guarantorFor: string;
  control: any;
}) => (
  <div className="">
    <div className="space-y-4 font-semibold text-base">{guarantorFor}</div>
    <div className="flex gap-2">
      <div className="w-3/5">
        <FormField
          control={control}
          name={guarantorFor.toLocaleLowerCase().replace("/ /", "_")}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of Guarantor</FormLabel>
              <FormControl>
                <Input placeholder="guarantor 1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-2/6">
        <FormField
          control={control}
          name={guarantorFor + "phone"}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="08000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
    <Label htmlFor="evidence-image">Scanned Guarantors Document</Label>
    <Input id="evidence-image" type="file" />
  </div>
);
Body.Guarantor = Guarantor;

const invoices = [
  {
    loan: "40,000",
    requested: "pending",
    duration: "10 months",
    startDate: "Jan 1, 2023",
    appliedOn: "Dec 1, 2022",
    approval: "pending",
  },
  {
    loan: "40,000",
    requested: "awaiting",
    duration: "7 months",
    startDate: "Feb 23, 2023",
    appliedOn: "Jan 1, 2022",
    approval: "pending",
  },
];

const EvidenceHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Table>
          <TableCaption>Your loan history.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Loan</TableHead>
              <TableHead>Request</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Approval</TableHead>
              <TableHead className="text-right">Applied On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{invoice.loan}</TableCell>
                <TableCell>{invoice.requested}</TableCell>
                <TableCell>{invoice.startDate}</TableCell>
                <TableCell>{invoice.duration}</TableCell>
                <TableCell>{invoice.approval}</TableCell>
                <TableCell className="text-right">
                  {invoice.appliedOn}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
Body.EvidenceHistory = EvidenceHistory;
