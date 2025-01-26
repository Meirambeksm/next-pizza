interface Props {
  name: string;
  details: string;
} /*14a*/

export const CartItemInfo: React.FC<Props> = ({ name, details }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details && <p className="text-xs text-gray-400 w-[90%]">{details}</p>}
    </div>
  );
}; /*14b*/

// 14c. Create and go to cart-item-details-price in cart-item-details folder
