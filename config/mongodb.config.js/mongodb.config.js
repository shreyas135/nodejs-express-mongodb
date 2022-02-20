const mongoose = require('mongoose')

module.exports = async () => {

    const username = process.env.DB_USER_NAME
    const password = process.env.DB_PASSWORD
    const cluster = process.env.DB_CLUSTER
    const dbname = process.env.DB_NAME
    const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
    
    await mongoose
    .connect(`${url}`, {
    })
    .then(() => {
      console.log("Connected to Database");
    }).catch((e) => {
      console.log("Connection Error", e);
    });
}