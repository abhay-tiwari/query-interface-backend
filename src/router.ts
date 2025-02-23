import { Router } from "express";
import { getSavedQueries, saveQuery } from "./handlers/query";
import getSqlTables from "./handlers/sql-tables";
import { executeQuery } from "./handlers/query-result";

const router = Router();

router.post("/save-query", saveQuery);
router.get("/get-saved-queries", getSavedQueries);

router.post("/execute-query", executeQuery);

router.get("/sql-tables", getSqlTables);

export default router;
