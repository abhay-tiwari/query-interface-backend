import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

const getSqlTables = (req: Request, res: Response) => {
  const filePath = path.join(__dirname, "..", "data", "sql-tables.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading file");
    }

    try {
      const parsedData = JSON.parse(data);
      res.json(parsedData);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return res.status(500).send("Error parsing JSON");
    }
  });
};

export default getSqlTables;
