import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import app from './src/app.js';

dotenv.config();
connectDB();

app.get('/db-test', async (req, res) => {
  try {
    await connectDB();
    res.json({ success: true, message: 'MongoDB connected' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
