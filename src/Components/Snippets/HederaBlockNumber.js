import React, { useState, useEffect } from 'react';
import { getHederaBlocks } from '../../apifunction';

const HederaBlockNumber = ({timestamp}) => {
  const [blockNumber, setBlockNumber] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getHederaBlocks(timestamp);
        setBlockNumber(response);
      } catch (err) {
        console.error('Error fetching block number', err);
      }
    }

    fetchData();
  }, []);

  return (blockNumber);
};

export default HederaBlockNumber;
