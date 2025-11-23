import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("✅ Ya conectado a MongoDB");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
  }
};

export default connectDB;
// Database connection function for Twitter clone application, se conecta a la base de datos de mongodb atlas usando mongoose y la url de conexion en las variables de entorno. habia puesto export connectDB pero lo cambie a export default connectDB para que sea mas facil de importar. y no se puede hacer el export default y el const juntos porque da error