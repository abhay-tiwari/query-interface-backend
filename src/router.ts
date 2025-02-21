import { Router } from "express";
import { deleteQuery, getQueryResult, getSavedQueries, saveQuery, updateQuery } from "./handlers/query";

const router = Router();

router.get("/queries", getSavedQueries);
router.post("/queries", saveQuery);
router.put("/queries", updateQuery);
router.delete("/quries", deleteQuery);

router.get("/query-result", getQueryResult);

export default router;
