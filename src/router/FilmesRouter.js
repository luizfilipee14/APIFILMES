import { Router } from "express";
import FilmesController from "../controller/FilmesController.js";

const router = Router();

router.get("/filmes", FilmesController.findAll);
router.post("/filmes", FilmesController.cadastrarFilme);
router.put("/filmes/:id", FilmesController.atualizarFilme);
router.delete("/filmes/:id", FilmesController.deletarFilme);


export default router;