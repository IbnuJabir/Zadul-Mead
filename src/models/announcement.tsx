const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Program name is required"],
  },
  description: {
    type: String,
    required: [true, "Program description is required"],
  },
  coverPicture: {
    type: String,
    default: "",
    require:true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  startingDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Announcement", announcementSchema);