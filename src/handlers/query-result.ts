import { Request, Response } from "express";

import * as path from "path";
import * as fs from "fs";

export const getQueryResult = (req: Request, res: Response) => {
  const filePath = path.join(__dirname, "..", "data", "products.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading file");
    }

    try {
      const parsedData = JSON.parse(data);
      const headers = Object.keys(parsedData[0]);
      res.json({ headers, rows: parsedData });
    } catch (parseErr) {
      return res.status(500).send("Error parsing JSON");
    }
  });
};
