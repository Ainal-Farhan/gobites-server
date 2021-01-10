// module.exports = {
//     HOST: "johnny.heliohost.org",
//     USER: "ainalfa_ainal3",
//     PASSWORD: "ainal3@123",
//     DB: "ainalfa_go-bites-db",
//     dialect: "mysql",
//     timezone: "-08:00",
//     pool: {
//         max: 9999,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };


module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "gobites",
    PORT: 3307,
    dialect: "mysql",
    timezone: "-08:00",
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};