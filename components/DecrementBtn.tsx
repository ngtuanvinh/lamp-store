import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/types/productTypes";

interface DecrementProps {
  product: ProductType;
}

const DecrementBtn = ({ product }: DecrementProps) => {
  const cartStore = useCartStore();
  return (
    <button
      onClick={() =>
        cartStore.removeProduct({
          id: product.id,
          unit_amount: product.unit_amount,
          quantity: product.quantity,
          name: product.name,
          image: product.image,
        })
      }
      className=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
      </svg>
    </button>
  );
};

export default DecrementBtn;
