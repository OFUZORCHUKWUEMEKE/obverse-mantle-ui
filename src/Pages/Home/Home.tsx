import React from 'react'
import Hero from '../../sections/Hero/Hero'
import Herotext from '../../sections/Hero/Herotext'
import SendScanDone from '../../sections/SendScanDone/SendScanDone'
import BuiltFor from '../../sections/BuiltFor/BuiltFor'
import WhatMakes from '../../sections/WhatMakes/WhatMakes'

const Home = () => {
  return (
    <section>
      <Hero />
      <Herotext />
      <SendScanDone />
      <BuiltFor />
      <WhatMakes />
    </section>
  )
}

export default Home
