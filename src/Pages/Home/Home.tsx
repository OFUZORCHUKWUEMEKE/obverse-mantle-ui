import React from 'react'
import Hero from '../../sections/Hero/Hero'
import Herotext from '../../sections/Hero/Herotext'
import SendScanDone from '../../sections/SendScanDone/SendScanDone'
import BuiltFor from '../../sections/BuiltFor/BuiltFor'

const Home = () => {
  return (
    <section>
      <Hero />
      <Herotext />
      <SendScanDone />
      <BuiltFor />
    </section>
  )
}

export default Home
