module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define('booking', {
        visitorId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE', references: { model: 'visitors', key: 'id', as: 'visitorId' }
        },
        packageId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE', references: { model: 'packages', key: 'id', as: 'packageId' }
        },
        checkinDate: {
            type: Sequelize.DATE
        },
        numGuests: {
            type: Sequelize.INTEGER
        }
    });
    Booking.associate = (models) => {
        // Defining Association
        Booking.belongsTo(models.visitorModel, { foreignKey: 'visitorId', onDelete: 'CASCADE' });
        Booking.belongsTo(models.packageModel, { foreignKey: 'packageId', onDelete: 'CASCADE' });
    }
    // Note: using `force: true` will drop the table if it already exists
    // Now the `bookings` table in the database corresponds to the model definition
    Booking.sync({ force: true })
    return Booking;
};