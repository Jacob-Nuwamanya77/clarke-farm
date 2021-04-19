module.exports = (sequelize, Sequelize) => {
    const Package = sequelize.define('package', {
        packageName: {
            type: Sequelize.STRING
        }
    });
    Package.associate = (models) => {
        // Defining Association
        Package.hasMany(models.bookingModel, { foreignKey: 'packageId' });
        Package.hasMany(models.reviewModel, { foreignKey: 'packageId' });
    }
    // Note: using `force: true` will drop the table if it already exists
    // Now the `packages` table in the database corresponds to the model definition
    Package.sync({ force: true })
    return Package;
};