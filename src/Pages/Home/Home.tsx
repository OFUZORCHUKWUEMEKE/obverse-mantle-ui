import React from 'react'
import Hero from '../../sections/Hero/Hero'
import Herotext from '../../sections/Hero/Herotext'
import SendScanDone from '../../sections/SendScanDone/SendScanDone'
import BuiltFor from '../../sections/BuiltFor/BuiltFor'
import WhatMakes from '../../sections/WhatMakes/WhatMakes'
import PaymentApp from '../../sections/PaymentApp/PaymentApp'
import ReadyToAccept from '../../sections/ReadyToAccept/ReadyToAccept'

const Home = () => {
  return (
    <section>
      <Hero />
      <Herotext />
      <SendScanDone />
      <BuiltFor />
      <WhatMakes />
      <PaymentApp />
      <ReadyToAccept />
    </section>
  )
}

export default Home
