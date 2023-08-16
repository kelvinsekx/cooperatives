"use client";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Banner } from "@/components/dashboard";

export default function DetailsPage() {
  return (
    <div className="text-base">
      <Banner bannerFor="Details" />
      <Body />
    </div>
  );
}

const Body = () => {
  return (
    <div className="my-8">
      <div className="text-2xl py-4">W. KYLIAN MBAPPE</div>
      <div className="flex justify-between mt-4">
        <Body.List />
        <Body.Form />
      </div>
    </div>
  );
};

const LIST = () => {
  return (
    <div className="w-[30%]">
      <div className="flex flex-col gap-2">
        <div>
          <span className="font-semibold">Email:</span>kelvinsekx@benin.ubtc.org
        </div>
        <div>
          <span className="font-semibold">PE Number:</span>PJ8044
        </div>
      </div>
    </div>
  );
};
Body.List = LIST;

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password should be above 2 chars",
  }),
});

const FORM = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Successful ✅",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">Your info is updated.</p>
        </div>
      ),
    });
  }

  return (
    <div className="w-[50%]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="kelvin@yyy.xxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button type="submit" size={"lg"}>
            Submit
          </Button>
        </form>
        <p className="mt-4">Forgot password?</p>
      </Form>
    </div>
  );
};
Body.Form = FORM;
