import { Sequelize } from "sequelize";

const DB_NAME = "filmes";
const DB_USER = "root";
const DB_PASSWORD = "root";
const DB_HOST = "localhost";
const DB_DIALECT = "mysql";
const DB_PORT = "3306"

export default new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD, {
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT
    }
);