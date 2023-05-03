import express, { Request, Response} from "express";
import utenteRoutes from "./utentes";
import medicosRoutes from "./medico";
import consultasRoutes from "./consulta";
import {name , version} from "../../package.json"
import authRoutes from "./auth";
const router = express.Router();

router.get("/", (req:Request,res:Response)=> {
    res.json({
    name,
    version
})
});

router.use("/auth",authRoutes)
router.use("/utentes", utenteRoutes);
router.use("/medicos", medicosRoutes);
router.use("/consultas", consultasRoutes);
export default router;