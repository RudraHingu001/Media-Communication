import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: String,
    client: String,

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },

    year: Number,
    thumbnail: String,
    videoUrl: String,
    description: String,
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
