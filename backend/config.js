const Config = require("./db");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(Config.DB, Config.USER, Config.PASSWORD, {
  host: Config.HOST,
  dialect: Config.DIALECT
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// DATABASE TABLES
db.users = require("./models/userModel.js")(sequelize, Sequelize);
db.visitors = require("./models/visitorModel.js")(sequelize, Sequelize);
db.packages = require("./models/packageModel.js")(sequelize, Sequelize);
db.bookings = require("./models/bookingModel.js")(sequelize, Sequelize);
db.reviews = require("./models/reviewModel.js")(sequelize, Sequelize);

module.exports = db;