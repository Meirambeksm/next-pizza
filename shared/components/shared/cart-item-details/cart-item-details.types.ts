export interface CartItemProps {
  id: number;
  imageUrl: string;
  details: string;
  name: string;
  price: number;
  quantity: number;
  disabled?: boolean /*4a*/;
}

// 4b(end). Go to cart-drawer-item.tsx
