// pages/api/upload.ts
import fs from "fs";
import path from "path";
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";

import xlsx, { read, readFile, utils } from "xlsx";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  if (req.method === "POST") {
    const form = formidable({});
    const uploadDir = path.join(process.cwd(), "database/" + slug);
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "Error parsing form" });
        return;
      }
      const file = files.file[0];
      if (!file) {
        res.status(400).json({ error: "No file provided" });
        return;
      }

      if (path.extname(file.originalFilename as string) !== ".xlsx") {
        res.status(404).json({ error: "File is not spreadsheet" });
        return;
      }

      try {
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir);
        }

        const workbook = readFile(file.filepath);
        const sheetName = workbook.SheetNames[0];
        const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

        const jsonFileName = "users.json";
        const jsonFilePath = path.join(uploadDir, jsonFileName);
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

        res.status(200).json({ message: "File uploaded successfully" });
      } catch (error) {
        console.error("Error saving file:", error);
        res.status(500).json({ error: "Error saving file" });
      }
    });
  } else {
    console.error("method problem");
    res.status(405).json({ error: "Method not allowed" });
  }
};
