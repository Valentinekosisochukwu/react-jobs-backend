import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Job model
const jobSchema = new mongoose.Schema({
  title: String,
  type: String,
  location: String,
  salary: String,
  description: String,
  company: {
    name: String,
    description: String,
    contactEmail: String,
    contactPhone: String,
  },
});
const Job = mongoose.model("Job", jobSchema);

// API endpoints
app.get("/api/jobs", async (req, res) => {
  const limit = parseInt(req.query._limit) || 0;
  const jobs = await Job.find().limit(limit);
  res.json(jobs);
});

app.get("/api/jobs/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

app.post("/api/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

app.put("/api/jobs/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job updated", job: updatedJob });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/api/jobs/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));
