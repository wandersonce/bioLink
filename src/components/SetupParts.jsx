import { useState, useEffect } from 'react';

export default function SetupParts({ allParts }) {
  const [setupParts, setSetupParts] = useState([]);
  const setupPartItems = allParts.setupParts.data;

  useEffect(() => {
    setSetupParts(setupPartItems);
  }, [setupPartItems]);

  return <div>SetupParts</div>;
}
