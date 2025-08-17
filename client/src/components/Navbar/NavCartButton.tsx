import { ShoppingCart } from "lucide-react";

type Props = { qty: number };

export default function NavCartButton({ qty }: Props) {
  return (
    <div className="relative">
      <button className="p-2 w-10 h-10 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 text-gray-500 transition-colors duration-200">
        <ShoppingCart className="w-5 h-5 stroke-current stroke-2" />
      </button>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 leading-none">
        {qty}
      </span>
    </div>
  );
}
