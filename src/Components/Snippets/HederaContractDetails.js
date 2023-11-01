import React, { useState, useEffect } from 'react';
import { getHederaContracts } from '../../apifunction';

const HederaContractDetails = ({timestamp}) => {
  const [inputArg, setInputArg] = useState(null);

  useEffect(() => {
    async function fetchData() {
     try {
        const response = await getHederaContracts(timestamp);
        console.log("InputArg", await response);
        console.log("InputArg-------------------------------------------------------------------------------");
        setInputArg(response);
      } catch (err) {
        console.error('Error fetching InputArg', err);
      }
    }

    fetchData();
  }, []);

  return (inputArg);
};

export default HederaContractDetails;
