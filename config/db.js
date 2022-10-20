const mongoose = require("mongoose");
const chalk = require("chalk");
const port = process.env.PORT || 5000;

module.exports = (app) => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      app.listen(port, () => {
        console.log(chalk.green(`App listening at : ${port}`));
      });
    })
    .catch(() => {
      console.log("Server error occurred");
    });
};