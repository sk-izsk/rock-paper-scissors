import { useState } from 'react';
import { Status } from './PlayerStatus';
const useStatus = (initialValue: Status) => {
  const [status, setStatus] = useState<Status>(initialValue);
  const handleStatus = (updatedValue: Status) => {
    setStatus(updatedValue);
  };

  return [status, handleStatus];
};

const useValueForTextField = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleValue = (event: any) => setValue(event.value);
  const reset = () => setValue(initialValue);

  return [value, handleValue, reset];
};

export { useStatus, useValueForTextField };
