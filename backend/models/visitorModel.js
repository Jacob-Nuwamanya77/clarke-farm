module.exports = (sequelize, Sequelize) => {
    const Visitor = sequelize.define('visitor', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        }
    });
    Visitor.associate = (models) => {
        // Defining Association
        Visitor.hasMany(models.bookingModel, { foreignKey: 'visitorId' });
        Visitor.hasMany(models.reviewModel, { foreignKey: 'visitorId' });
    }
    // Note: using `force: true` will drop the table if it already exists
    // Now the `visitors` table in the database corresponds to the model definition
    Visitor.sync({ force: true })
    return Visitor;
};