"use client";
import React, { useState } from "react";
import users from "../../../../database/demo/users.json";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) {
      return;
    }
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("/api/upload/demo", {
          method: "POST",
          body: formData,
        });

        if (response.status == 404) {
          console.log("this is not spreadsheet");
        }

        if (response.ok) {
          console.log({ response: await response.json() });
        } else {
          console.error("Failed to upload file");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div>
      <h1>Upload .xls File</h1>
      <input type="file" accept=".xls" onChange={handleFileChange} />
      <Button onClick={handleUpload} variant={"block"}>
        Upload
      </Button>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Names</TableHead>
              <TableHead>Amount Paid</TableHead>
              <TableHead>Payment Plan</TableHead>
              <TableHead className="text-right">Tech Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  {" "}
                  <Link href={`${user["S/N"]}`} key={index}>
                    {user.Names}{" "}
                  </Link>
                </TableCell>
                <TableCell>{user["Amount Paid"]}</TableCell>
                <TableCell>{user["Payment Plan"]}</TableCell>
                <TableCell className="text-right">
                  {user["Tech Level"]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default UploadPage;
