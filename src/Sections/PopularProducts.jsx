import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'
// Or we can import it like this:
// import { PopularProductCard } from '../components' since we have an index.js file in the constatnts folder

const PopularProducts = () => {
  return (
    <section id="products" className="max-container
    max-sm:mt-12">
      <div className="flex flex-col justify-start
      gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat
        text-slate-gray">Experience top-notch quality and style 
          with our most popular products, 
          handpicked just for you.</p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 
      sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts