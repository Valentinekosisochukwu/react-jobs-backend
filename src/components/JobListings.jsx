import React from "react";
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const Joblistings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "https://react-jobs-backend-vax2.onrender.com/api/jobs?_limit=3"
        : "https://react-jobs-backend-vax2.onrender.com/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const Joblistings = ({ isHome = false }) => {
  //   const [jobs, setJobs] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchJobs = async () => {
  //       console.log(isHome);
  //       const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
  //       try {
  //         const res = await fetch(apiUrl);
  //         if (!res.ok) {
  //           console.log("ok");
  //           throw new Error(`Error: ${res.status} ${res.statusText}`); // Check response status
  //         }
  //         const data = await res.json();
  //         console.log(data);
  //         setJobs(data.jobs || data); // Adjust based on how your data is structured
  //       } catch (error) {
  //         console.log("Error fetching data", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchJobs();
  //   }, [isHome]); // Ensure this effect runs when `isHome` changes

  //   if (loading) {
  //     return <div>Loading...</div>; // Show loading message
  //   }

  //   return (
  //     <div>
  //       {/* Render your jobs data */}
  //       {jobs.map((job) => (
  //         <div key={jobs.id}>{job.title}</div> // Adjust based on the structure of your job data
  //       ))}

  // <section className="bg-blue-50 px-4 py-10">
  //       <div className="container-xl lg:container m-auto">
  //         <h2 className="text-3xl fontbold text-indigo-500 mb-6 text-center">
  //           {isHome ? "Recent Jobs" : "Browse Jobs"}
  //         </h2>

  //         {loading ? (
  //           <Spinner loading={loading} />
  //         ) : (
  //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //             {jobs.map((job) => (
  //               <JobListing key={job.id} job={job} />
  //             ))}
  //           </div>
  //         )}
  //       </div>
  //     </section>
  //     </div>
  //   );

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl fontbold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job._id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Joblistings;
