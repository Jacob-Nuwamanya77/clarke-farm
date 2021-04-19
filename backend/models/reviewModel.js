module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define('review', {
        visitorId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE', references: { model: 'visitors', key: 'id', as: 'visitorId' }
        },
        packageId: {
            type: Sequelize.INTEGER,
            onDelete: 'CASCADE', references: { model: 'packages', key: 'id', as: 'packageId' }
        },
        reviewTitle: {
            type: Sequelize.STRING
        },
        review: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.STRING
        }
    });
    Review.associate = (models) => {
        // Defining Association
        Review.belongsTo(models.visitorModel, { foreignKey: 'visitorId', onDelete: 'CASCADE' });
        Review.belongsTo(models.packageModel, { foreignKey: 'packageId', onDelete: 'CASCADE' });
    }
    // Note: using `force: true` will drop the table if it already exists
    // Now the `reviews` table in the database corresponds to the model definition
    Review.sync({ force: true })
    return Review;
};