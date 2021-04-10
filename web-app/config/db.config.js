module.exports = {
    // HOST: "sql6.freemysqlhosting.net",
    // USER: "sql6404258",
    // PASSWORD: "xQaqgIvTgn",
    // DB: "sql6404258",
    HOST: "206.189.91.59",
    USER: "user1",
    PASSWORD: "Ubuntu@123456",
    DB: "gobites",
    dialect: "mysql",
    // timezone: "-08:00",
    pool: {
        max: 9999,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};


// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "gobites",
//     PORT: 3307,
//     dialect: "mysql",
//     timezone: "-08:00",
//     pool: {
//         max: 10,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };
