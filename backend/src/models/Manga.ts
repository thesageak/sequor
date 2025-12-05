import mongoose from "mongoose";

const MangaSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // matches your frontend `id`
  title: { type: String, required: true },
  title_english: String,
  title_japanese: String,
  synopsis: { type: String, required: true },
  image_url: String,
  genres: [String],
  chapters: { type: Number, default: 0 }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Manga', MangaSchema);