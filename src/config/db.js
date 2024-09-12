const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://dasilvaribeirokauane:W3eacObibOw7HTNM@cluster0.8pzqv.mongodb.net/', {

    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;



// const mongoose = require('mongoose');

// const conn = "mongodb+srv://Edson:ezZ92XfwQyPQkYHi@cluster0.th8hv.mongodb.net/teste"

// async function connect() {
//    await mongoose.connect(conn);
// }

// connect()
// .then(() => {
//     console.log("Conectado ao MongoDB");
// }).catch((err) => {
//     console.log(err);
// })

// module.exports = mongoose