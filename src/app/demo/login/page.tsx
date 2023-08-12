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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password should be above 2 chars",
  }),
});

export default function InputForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Successful ✅",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <p className="text-white">Catch you in your dashboard.</p>
        </div>
      ),
    });
    setTimeout(() => router.replace("/demo/user"), 1500);
  }

  return (
    <main className="flex min-h-screen font-mono  text-sm flex-col items-center justify-between">
      <div className="max-w-5xl w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <div className="text-2xl">Access your cooperative account</div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="kelvin@yyy.xxx" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormDescription>Keep your password safe</FormDescription>
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
    </main>
  );
}
