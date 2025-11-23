import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true, // debe tener un autor
  },
  content: {
    type: String,
    required: true, // debe tener texto
  },
  tags: [String], // array de strings opcional
  reactions: {
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Tweet || mongoose.model("Tweet", tweetSchema); // se usa el models.tweet si ya existe o si no se crea el modelo tweet con el esquema tweetSchema para evitar errores


// Tweet model for Twitter clone application, es el modelo de los datos de tweets que aceptara la base de datos en mongodb, se crea la base y luego se exporta la funcion. 