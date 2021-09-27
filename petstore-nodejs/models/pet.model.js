module.exports = (sequelize, Sequelize) => {
    const Pet = sequelize.define("pet", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        description: {
            type: Sequelize.STRING
        },
        inventory: {
            type: Sequelize.INTEGER
        }
    });

    return Pet;
};
