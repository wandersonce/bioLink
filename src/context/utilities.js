import { createContext, useContext, useState, useEffect } from 'react';
// Creating the user context
const UtilitiesContext = createContext();

export default function FetchWishlist({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    async function getWishlist() {
      fetch('/api/wishlist')
        .then((response) => response.json())
        .then((resData) => {
          setWishlistItems(resData.data);
        });
    }
    getWishlist();
  }, []);

  // const getWishList = async () => {
  //   try {
  //     //Getting wishlist values
  //     const resWishlist = await fetch('/api/wishlist');
  //     const jsonWishlist = await resWishlist.json();
  //     return jsonWishlist.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const wishlistRes = getWishList();

  return (
    <UtilitiesContext.Provider value={{ wishlistItems }}>
      {children}
    </UtilitiesContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUtilitiesContext() {
  return useContext(UtilitiesContext);
}
