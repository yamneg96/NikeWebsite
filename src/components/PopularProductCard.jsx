import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating}) => {
  return (
    <div className="flex flex-1 flex-col
    w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating"
        width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal 
        text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-2 leading-normal text-2xl 
      font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat
      text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}
// Next when these are clicked they take to details
// page of the product, we can use react-router-dom for this
// or we can use a simple anchor tag with href to the details page
export default PopularProductCard