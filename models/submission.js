const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  title: { type: String, required: true },
  github: { type: String },
  deployed: { type: String },
  document: { type: Buffer },
  description: { type: String },
  timestamp: { type: Date, required: true },
});


module.exports = mongoose.model("Submission", SubmissionSchema);
