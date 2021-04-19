module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING,
            unique: true,
            required: true
        }
    });
    
    // Note: using `force: true` will drop the table if it already exists
    // Now the `users` table in the database corresponds to the model definition
    User.sync({ force: true })
    return User;
};