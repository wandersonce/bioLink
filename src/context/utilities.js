import { createContext, useContext, useState, useEffect } from 'react';
// Creating the user context
const UtilitiesContext = createContext();

export default function FetchWishlist({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    getWishlist();
  }, []);

  async function getWishlist() {
    fetch('/api/wishlist')
      .then((response) => response.json())
      .then((resData) => {
        setWishlistItems(resData.data);
      });
  }

  return (
    <UtilitiesContext.Provider
      value={{ wishlistItems, setWishlistItems, getWishlist }}
    >
      {children}
    </UtilitiesContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUtilitiesContext() {
  return useContext(UtilitiesContext);
}
