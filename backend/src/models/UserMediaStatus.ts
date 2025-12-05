import mongoose from 'mongoose';

const UserMediaStatusSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  mediaId: { type: Number, required: true },
  mediaType: { type: String, enum: ['manga', 'anime', 'tv'], required: true },
  status: { type: String, enum: ['None','Tracking', 'Dropped', 'Completed'], default: 'None' },
}, { timestamps: true });

export default mongoose.model('UserMediaStatus', UserMediaStatusSchema);