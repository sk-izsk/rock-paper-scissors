import { useState } from 'react';
import { Status } from './PlayerStatus';
const useStatus = (initialValue: Status) => {
  const [status, setStatus] = useState<Status>(initialValue);
  const handleStatus = (updatedValue: Status) => {
    setStatus(updatedValue);
  };

  return [status, handleStatus];
};

export { useStatus };
