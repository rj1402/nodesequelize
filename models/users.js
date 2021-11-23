


module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users",{
        name:{
            type: Sequelize.STRING
        },

        title: {
            type: Sequelize.STRING
        },

        tagline: {
            type: Sequelize.STRING
        },

        description: {
            type: Sequelize.STRING
        }
    });

    return Users;

}