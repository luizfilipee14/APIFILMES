import { DataTypes } from "sequelize";
import db from "../db/db.js";

export default db.define("filmes", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    ator:{
        type: DataTypes.STRING(145)
    },
    faixa_etaria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING(145),
        allowNull: false
    }
});