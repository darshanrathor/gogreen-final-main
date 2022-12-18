import React from 'react'
import AboutEco from '../components/old/abouteco'
import Sectionthird from '../components/old/section3'
import Category from '../components/old/category'
import Banner from '../components/old/banner'
import FeturedProducts from '../components/product/feturedProducts'
import dynamic from "next/dynamic";
import Countdown from "../components/old/countdown"
import Phone from "../components/old/phone"
import What from "../components/old/what"
const FamilyComponent = dynamic(() => import("../components/review/review"), { ssr: false })



export default function Index() {
  return (

    <>
  
    <div>
   
      <Banner />
      <Category />
      <Sectionthird />
      <Countdown />
      <AboutEco />
      <FeturedProducts />
      <FamilyComponent />
      <Phone />
      <What />
    </div>
    </>
  )
}
