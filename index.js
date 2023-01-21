// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "!64Ttva",
//   database: "social network",
// });

// connection.query("SELECT * FROM users WHERE id = 1;", (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log(result);
// });

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("social network", "root", "!64Ttvatt_dfn", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define(
  "users",
  {
    // Model attributes are defined here

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    // Other model options go here
    tableName: "users",
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

(async () => {
  try {
    await User.sync({
      alter: true,
      force: false,
    });

    // __________________________________________________
    // Create a new user
    // const user = await User.create({
    //   first_name: "vatt",
    //   last_name: " Dfn",
    //   email: "vattdfn@dfn.com",
    //   password: "vdfndfn",
    // });
    // console.log("Jane's auto-generated ID:", user.id);
    // ___________________________________________
    // const user = await User.findAll({
    //   where: {
    //     country: "Россия",
    //     city: "Москва",
    //     balance: 90,
    //   },
    // });

    // const user = await User.findOne({
    //   where: {
    //     first_name: "vatt",
    //   },
    // });

    // const user = await User.findByPk(4);

    // ________________________________________
    // const user = await User.findOne({
    //   where: {
    //     first_name: "vatt",
    //   },
    // });
    // user.city = "New York";
    // user.save();
    // _______________________________________

    const user = await User.findByPk(10);
    user.destroy();
    // ___________________________________________

    console.log(user);
  } catch (error) {
    console.error(error);
  }
})();
