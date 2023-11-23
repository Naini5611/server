import { Sequelize } from "sequelize";

const db = new Sequelize('sql3664388', 'sql3664388', 'DMvXkczSBT', {
    host: 'sql3.freemysqlhosting.net',
    dialect: 'mysql',
})

export default db;