import express from "express";
import { getUser } from "../controllers/general.js"
const router = express.Router()

/* in frontemd passing the id of user*/

router.get("/user/:id", getUser)
export default router
