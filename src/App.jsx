import React from "react";
// import ReactDOM from 'react-dom';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  // HydrateFallback,
} from "react-router-dom";

// import { HydrateFallback } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch(
      "https://react-jobs-backend-vax2.onrender.com/api/jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      }
    );
    return;
  };

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(
      `https://react-jobs-backend-vax2.onrender.com/api/jobs/${id}`,
      {
        method: "DELETE",
      }
    );
    return;
  };

  // Update Job
  const updateJob = async (job) => {
    const res = await fetch(
      `https://react-jobs-backend-vax2.onrender.com/api/jobs/${job._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      }
    );
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
