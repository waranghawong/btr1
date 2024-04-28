import { Label, Radio } from "flowbite-react";

export default function RadioGroup({ options, value, setValue }) {
    return (
      <>
        {options.map((option) => (
          <RadioButton
            key={option}
            value={option}
            checked={option === value}
            onChange={() => setValue(option)}
          >
            {option}
          </RadioButton>
        ))}
      </>
    );
  }