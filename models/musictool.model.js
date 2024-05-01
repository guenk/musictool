module.exports = (sequelize, Sequelize) => {
    const Instrument = sequelize.define("instruments", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type: {
            type: Sequelize.STRING // Par exemple 'Cordes', 'Vents', 'Percussions', etc.
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    });

    return Instrument;
};