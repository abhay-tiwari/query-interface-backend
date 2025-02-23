import { Request, Response } from "express";

import * as path from "path";
import * as fs from "fs";

export const executeQuery = (req: Request, res: Response) => {
  const query: string = String(req.body.query).toLowerCase();
  if (!query) {
    res.status(400).send("Query is Required!");
  }

  console.log(query);

  let dataSource: string = "";

  if (query.toLowerCase().indexOf("products") !== -1) {
    dataSource = "products.json";
  } else if (query.toLowerCase().indexOf("categories") !== -1) {
    dataSource = "categories.json";
  } else if (query.toLowerCase().indexOf("employees") !== -1) {
    dataSource = "employees.json";
  } else if (query.toLowerCase().indexOf("orders") !== -1) {
    dataSource = "orders.json";
  } else if (query.toLowerCase().indexOf("regions") !== -1) {
    dataSource = "regions.json";
  } else if (query.toLowerCase().indexOf("shippers") !== -1) {
    dataSource = "shippers.json";
  } else if (query.toLowerCase().indexOf("suppliers") !== -1) {
    dataSource = "suppliers.json";
  } else if (query.toLowerCase().indexOf("territories") !== -1) {
    dataSource = "territories.json";
  }

  console.log(dataSource);

  const filePath = path.join(__dirname, "..", "data", dataSource);

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
