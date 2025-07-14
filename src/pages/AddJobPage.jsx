import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);

    toast.success("Job added successfully");

    return navigate("/jobs");
  };

  return (

      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2-xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Add Job
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Type
                </label>
                <select
                  name="type"
                  id="type"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Maimi"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows={4}
                  placeholder="Add any Job duties, expectations, requirements, etc"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="under -  $50K">under - $50K</option>
                  <option value="$50K - $60K">$50K - $60K</option>
                  <option value="$60K - $70K">$60K - $70K</option>
                  <option value="$70K - $80k">$70K - $80k</option>
                  <option value="$80K - $90k">$80K - $90k</option>
                  <option value="$90K - $100K">$90K - $100K</option>
                  <option value="$100K - $125K">$100K - $125K</option>
                  <option value="$125K - $150k">$125K - $150K</option>
                  <option value="$150k - $175K">$150k - $175K</option>
                  <option value="$175K - $200k">$175K - $200k</option>
                  <option value="Over $200k">Over $200k</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <h3 className="text-2xl mb-5">Company Info</h3>
              <div className="mb-4">
                <label
                  htmlFor=""
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {" "}
                  Description
                </label>
                <textarea
                  name="company_description"
                  id="company_description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {" "}
                  Contact Email
                </label>
                <input
                  name="contact_email"
                  type="email"
                  id="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                ></input>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  {" "}
                  Contact Phone
                </label>
                <input
                  name="contact_phone"
                  type="tel"
                  id="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                ></input>
              </div>
              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
   
  );
};

export default AddJobPage;
