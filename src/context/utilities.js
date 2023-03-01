import { createContext, useContext, useState, useEffect } from 'react';
// Creating the user context
const UtilitiesContext = createContext();

export default function UtilitiesFunc({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [partnersItems, setPartnersItems] = useState([]);
  const [setupItems, setSetupItems] = useState([]);

  useEffect(() => {
    getWishlist();
    getPartners();
    getSetupParts();
  }, []);

  async function getWishlist() {
    fetch('/api/wishlist')
      .then((response) => response.json())
      .then((resData) => {
        setWishlistItems(resData.data);
      });
  }

  async function getPartners() {
    fetch('/api/partners')
      .then((response) => response.json())
      .then((resData) => {
        setPartnersItems(resData.data);
      });
  }

  async function getSetupParts() {
    fetch('/api/setupParts')
      .then((response) => response.json())
      .then((resData) => {
        setSetupItems(resData.data);
      });
  }

  return (
    <UtilitiesContext.Provider
      value={{
        wishlistItems,
        setWishlistItems,
        getWishlist,
        partnersItems,
        setPartnersItems,
        getPartners,
        setupItems,
        setSetupItems,
        getSetupParts,
      }}
    >
      {children}
    </UtilitiesContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUtilitiesContext() {
  return useContext(UtilitiesContext);
}
