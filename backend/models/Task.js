const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: [String],
	workers: [String],
	isFinished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", taskSchema);