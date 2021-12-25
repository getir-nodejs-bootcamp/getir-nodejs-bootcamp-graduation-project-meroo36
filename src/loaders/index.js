const mongoConnection = require("./mongoConnection")

module.exports = (app) => {
    //init env variables
    require("dotenv").config();
    mongoConnection().then(
        app.listen(process.env.PORT, () => console.log(`The app is listening on port => ${process.env.PORT}`))
    ).catch(e => {
        console.error("Error:", e)
    });
}