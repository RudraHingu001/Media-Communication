import Reel from '../models/Reel.js';

/**
 * CREATE (Admin)
 */
export const createReel = async (req, res) => {
  await connectDB();
  try {
    const reel = await Reel.create(req.body);
    res.status(201).json({ success: true, data: reel });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * GET ALL (Public)
 */
export const getAllReels = async (req, res) => {
  await connectDB();
  try {
    const reels = await Reel.find({ status: 'active' })
      .sort({ createdAt: -1 });

    res.json({ success: true, data: reels });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * GET BY ID (Public)
 */
export const getReelById = async (req, res) => {
  await connectDB();
  try {
    const reel = await Reel.findById(req.params.id);

    if (!reel) {
      return res.status(404).json({
        success: false,
        message: 'Reel not found',
      });
    }

    res.json({ success: true, data: reel });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * UPDATE (Admin)
 */
export const updateReel = async (req, res) => {
  await connectDB();
  try {
    const reel = await Reel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!reel) {
      return res.status(404).json({
        success: false,
        message: 'Reel not found',
      });
    }

    res.json({ success: true, data: reel });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * DELETE (Admin)
 */
export const deleteReel = async (req, res) => {
  await connectDB();
  try {
    const reel = await Reel.findByIdAndDelete(req.params.id);

    if (!reel) {
      return res.status(404).json({
        success: false,
        message: 'Reel not found',
      });
    }

    res.json({
      success: true,
      message: 'Reel deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
