import mongoose from 'mongoose';

const reelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true, // image URL
    },
    videoLink: {
      type: String,
      required: true, // reel / youtube / mp4 link
    },
    status: {
      type: String,
      default: 'active',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Reel', reelSchema);