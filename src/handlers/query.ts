import { Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";

export const getSavedQueries = (req: Request, res: Response) => {
  const filePath = path.join(__dirname, "..", "data", "sql-queries.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading file");
    }

    try {
      let parsedData = JSON.parse(data);
      res.json({ data: parsedData });
    } catch (parseErr) {
      return res.status(500).send("Error parsing JSON");
    }
  });
};

export const saveQuery = (req: Request, res: Response) => {
  const query = req.body.queryText;
  const filePath = path.join(__dirname, "..", "data", "sql-queries.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error reading file");
    }

    try {
      let parsedData = JSON.parse(data);
      if (parsedData.length === 0) {
        parsedData = [query];
      } else {
        parsedData.push(query);
      }

      try {
        fs.writeFile(filePath, JSON.stringify(parsedData), (err) => {
          if (err) {
            return res.status(500).send("Error parsing JSON");
          } else {
            res.json({ message: "data updated" });
          }
        });
      } catch (err) {
        return res.status(500).send("Error parsing JSON");
      }
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      return res.status(500).send("Error parsing JSON");
    }
  });
};

export const deleteQuery = () => {};

export const updateQuery = () => {};
