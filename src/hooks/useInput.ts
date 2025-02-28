import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const resetValue = () => {
    setValue("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };
  return { value, onChange, resetValue };
};

export default useInput;
