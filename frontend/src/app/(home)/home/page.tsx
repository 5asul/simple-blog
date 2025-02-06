import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './components/hero'
import Footer from '../components/Footer'
import { Posts, Articles } from './components'

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
    <Navbar />
    <Hero />
    <Posts />
    <Articles />
    <Footer />
    </div> 
  )
}
