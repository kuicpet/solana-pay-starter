import { useState, useEffect } from 'react';

const useIPFS = (hash, filename) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    setFile(`https://gateway.pinata.cloud/ipfs/${hash}?filename=${filename}`);
  }, []);

  return file;
};

export default useIPFS;
