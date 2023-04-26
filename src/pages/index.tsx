import React from 'react'
import AboutSection from '../components/about/about'
import HeroSection from '../components/hero/hero'
import Layout from '../components/layout'
import ProjectsSection from '../components/projects/projects'





const Home = () => {
  return (
    <React.Fragment>
      <Layout title="Angelo Dev">
        <HeroSection />
        <AboutSection />
        {/* <div style={{marginTop:'40rem'}}> */}
          {/* <ProjectsSection /> */}
        {/* </div> */}
      </Layout>
    </React.Fragment>
  )

}

export default Home
