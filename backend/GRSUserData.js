import bcrypt from "bcryptjs";

// this creates an object to return users
const data = {
  //this defines data as an object

  users: [
    {
      id: 1,
      name: "Lorenzo",
      email: "lorenzo.matei@outlook.com",
      password: bcrypt.hashSync("Bucuresti!753"),
      isAdmin: true,
    },
    {
      id: 2,
      name: "George Sawaya",
      email: "george@germainers.com",
      password: bcrypt.hashSync("GRS-db!69&8===D~~~"),
      isAdmin: false,
    },
  ],
};
export default data;
