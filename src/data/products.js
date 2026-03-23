export const products = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    category: "Shirts",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "A premium cotton white t-shirt for daily comfort and style."
  },
  {
    id: 2,
    title: "Navy Blue Oxford Shirt",
    category: "Shirts",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    description: "Classic blue oxford shirt, perfect for semi-formal occasions."
  },
  {
    id: 3,
    title: "Leather Wallet",
    category: "Accessories",
    price: 35.50,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted genuine leather wallet with multiple card slots."
  },
  {
    id: 4,
    title: "Designer Sunglasses",
    category: "Accessories",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1511499767390-91f1976100c7?auto=format&fit=crop&w=800&q=80",
    description: "Stylish sunglasses with UV protection and a sleek frame."
  },
  {
    id: 5,
    title: "Slim Fit Chinos",
    category: "Pants",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable slim-fit chinos for a modern look."
  },
  {
    id: 6,
    title: "Canvas Sneakers",
    category: "Shoes",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight canvas sneakers for all-day wear."
  },
  {
    id: 7,
    title: "Denim Jacket",
    category: "Shirts",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    description: "Durable denim jacket with a classic vintage wash."
  },
  {
    id: 8,
    title: "Minimalist Watch",
    category: "Accessories",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Elegant minimalist watch with a stainless steel band."
  }
];

export const categories = ["All", ...new Set(products.map(p => p.category))];
