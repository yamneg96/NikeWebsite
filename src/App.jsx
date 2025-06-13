// import Hero from './Sections/Hero'  => While we can import each section files manually there is more efficient way.
import {
  Hero,
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality
} from './Sections' //We can import all the sections at once using index.js file in Sections folder

import Nav from './components/Nav';

const App = () => (//parenthesis to immediately invoke(or RETURN) the function unlike curly braces which would require a return statement
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
{/* xl:padding-l gave us padding-left for large screens and wide:padding-r gave us padding-right for wide screens
to get padding for smaller screens we can use padding-x */}
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>//We use this when we don't have console.log or return statement
)

export default App;