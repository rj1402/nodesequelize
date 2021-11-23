module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'ashokveena14',
    DB: 'newbase',
    dialect: 'mysql',
    pool: {
        max : 5,
        min : 0,
        acquire: 30000,
        idle: 10000
    }
};