const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

// configuration database
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: 0,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

// constant DB
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models and tables
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.instrument = require("../models/musictool.model.js")(sequelize, Sequelize); // Importing the Instrument model

// Relation Many to Many between Role and Users
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

// Constants for Roles
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;