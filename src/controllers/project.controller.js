import Project from '../models/Project.js';

// CREATE
export const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json({ success: true, data: project });
};

// READ (Public)
export const getAllProjects = async (req, res) => {
  const projects = await Project.find()
    .populate('category', 'name')
    .sort({ createdAt: -1 });

  res.json({ success: true, data: projects });
};

// READ BY CATEGORY
export const getProjectsByCategory = async (req, res) => {
  const projects = await Project.find({ category: req.params.categoryId })
    .populate('category', 'name');

  res.json({ success: true, data: projects });
};

// READ ONE
export const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id)
    .populate('category', 'name');

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json({ success: true, data: project });
};

// UPDATE
export const updateProject = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json({ success: true, data: project });
};

// DELETE
export const deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  res.json({ success: true, message: 'Project deleted' });
};
