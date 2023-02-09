import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    release_date: { type: String, required: true },
    genre: { type: String, required: true },
    running_time: { type: String, required: true },
    release_state: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    view_time: { type: String, required: true },
    price: { type: Number, required: true },
    trailer: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
