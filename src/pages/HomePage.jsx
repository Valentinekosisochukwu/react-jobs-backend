import React from 'react'
import Hero from "../components/Hero";
import Homecards from "../components/HomeCards";
import Joblistings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <Joblistings  isHome={true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage
