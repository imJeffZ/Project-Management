const Project = require("../models/project.js");

/**
 * @param  id      MongoDB ObjectId.
 */
async function findProject(id) {
	const res = await Project.findById(id);
	return res;
}

async function getAllProjects() {
	const res = await Project.find();
	return res;
}

async function createProject(project) {
	const newProject = new Project(project);
	const res = await newProject.save();
	return res;
}

async function deleteProject(project) {
	const res = await project.findByIdAndDelete(Project._id);
	return res;
}

/**
 * @param  id      MongoDB ObjectId.
 * @param  update  An object containing properties to update.
 */
async function updateProject(id, update) {
	const res = await Project.findOneAndUpdate(id, update);
	return res;
}

module.exports = {
	find: findProject,
	getAllProjects: getAllProjects,
	create: createProject,
	delete: deleteProject,
	update: updateProject
};
