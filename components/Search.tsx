"use client";
import Image from "next/image";
import {
  useState,
  useId,
  CSSProperties,
  SetStateAction,
  Dispatch,
} from "react";
import Select, {
  DropdownIndicatorProps,
  StylesConfig,
  components,
} from "react-select";


export interface SearchProp {
  value: number;
  label: string;
}

const customControlStyles: CSSProperties = {
  color: "white",
  borderColor: "black",
  height: "250px",
  padding: "50px",
  fontSize: "90px",
  textTransform: "uppercase",
  borderRadius: "15px",
};

const customMenuStyles: CSSProperties = {
  color: "rgba(217, 217, 217, 1)",
  padding: "50px",
  fontSize: "90px",
  textTransform: "uppercase",
};

const customMenuListStyles: CSSProperties = {
  maxHeight: "100%",
};

const customOptionStyles: CSSProperties = {
  padding: "25px",
  backgroundColor: "white",
  color: "rgba(217, 217, 217, 1)",
};

type IsMulti = false;

type MyOptionType = {
  label: string;
  value: number;
};

const options: MyOptionType[] = [
  { value: 1, label: "Первый стол" },
  { value: 2, label: "Второй стол" },
  { value: 3, label: "Третий стол" },
  { value: 4, label: "Четвертый стол" },
];

const selectStyle: StylesConfig<MyOptionType, IsMulti> = {
  control: (provided, state) => {
    // provided has CSSObject type
    // state has ControlProps type

    // return type is CSSObject which means this line will throw error if uncommented
    // return false;

    return {
      ...provided,
      ...customControlStyles,
    };
  },
  menu: (provider, state) => {
    return {
      ...provider,
      ...customMenuStyles,
    };
  },
  option: (provider, state) => {
    return {
      ...provider,
      ...customOptionStyles,
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
      "&:focus": {
        backgroundColor: "white",
        color: "black",
      },
    };
  },
  menuList: (provider, state) => {
    return {
      ...provider,
      ...customMenuListStyles,
    };
  },
};

const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="bg-transparent-black h-full w-[350px]">
        <Image
          style={{ width: 118, height: 118 }}
          src="/lopa.svg"
          alt="Vercel Logo"
          width={0}
          height={0}
          priority
        />
      </div>
    </components.DropdownIndicator>
  );
};

interface ISearch {
  setSelectedOption: Dispatch<SetStateAction<SearchProp | null>>;
  selectedOption: SearchProp | null;
}

export default function Search({ setSelectedOption, selectedOption }: ISearch) {
  const [layout, setLayout] = useState("default");
  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };
  return (
    <div className="w-full">
      <Select

        noOptionsMessage={({ inputValue }) => "Результатов не найдено"}
        instanceId={useId()}

        onChange={(option: SearchProp | null) => {
          setSelectedOption(option);
        }}

        options={options}
        isSearchable
        isClearable
        value={selectedOption}
        styles={selectStyle}
        placeholder="Введите имя"
      />
    </div>
  );
}
