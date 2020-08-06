import { useState } from 'react';
import { Status } from './PlayerStatus';
const useStatus = (initialValue: Status) => {
  const [status, setStatus] = useState<Status>(initialValue);
  const handleStatus = (event: any) => {
    console.log(event.target.value);
  };

  return [status, handleStatus];
};

export { useStatus };
