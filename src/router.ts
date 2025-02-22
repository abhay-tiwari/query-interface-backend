import { Router } from "express";
import {
  deleteQuery,
  getSavedQueries,
  saveQuery,
  updateQuery,
} from "./handlers/query";
import getSqlTables from "./handlers/sql-tables";
import { getQueryResult } from "./handlers/query-result";

const router = Router();

router.post("/save-query", saveQuery);
router.get("/get-saved-queries", getSavedQueries);

router.get("/query-result", getQueryResult);

router.get("/sql-tables", getSqlTables);

export default router;
