const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  dob: { type: Date },
  currentCity: { type: String },
  nativeCity: { type: String },
  phone: { type: String },
  education: {
    school: { type: String },
    tenthPercent: { type: Number },
    twelfthPercent: { type: Number },
    bachelors: { type: String },
    college: { type: String },
    cgpa: { type: Number },
    masters: { type: String },
  },
  skills: {
    languages: [{ type: String }],
    frameworks: [{ type: String }],
    tools: [{ type: String }],
    projects: [{ type: String }],
  },
  extracurricular: {
    certifications: [{ type: String }],
    internships: [{ type: String }],
    achievements: [{ type: String }],
    hobbies: [{ type: String }],
  },
});

module.exports = mongoose.model('User', userSchema);