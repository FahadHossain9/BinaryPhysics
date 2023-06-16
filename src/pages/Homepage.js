import React from 'react'
import NavBar from '../components/NavBar'
import HeroArea from '../components/HeroArea'
import TopCategories from '../components/TopCategory'
import PopularCourses from '../components/PopularCourses'
import BlogSection from '../components/BlogSections'

function Homepage() {
  return (
    <>
    <NavBar/>
    <HeroArea/>
    <TopCategories/>
    <PopularCourses/>
    <BlogSection/>
    </>
  )
}

export default Homepage