import Select from "react-select";

const Selection = ({ placeholder, options, onChange }) => {
  const style = {
    control: (baseStyles) => ({
      ...baseStyles,
      boxShadow: "none",
      width: "auto",
      padding: "4px 8px",

      backgroundColor: "#F7F7FB",
      borderRadius: "14px",
      border: "1px solid rgba(18, 20, 23, 0.20)",
      output: "none",
      "&:hover": {
        border: "1px solid rgba(18, 20, 23, 0.80)",
      },
      "&:focus": {
        border: "1px solid rgba(18, 20, 23, 0.80)",
      },
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      borderRadius: "14px",
      backgroundColor: "#F7F7FB",
      width: "199px",
      marginTop: "4px",
      "&::-webkit-scrollbar": {
        width: "0px",
      },
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      "&::-webkit-scrollbar": {
        width: "0px",
      },
    }),
    dropdownIndicator: (baseStyles, { isFocused }) => ({
      ...baseStyles,
      color: "rgba(18, 20, 23, 0.20)",
      "&:hover": {
        color: "rgba(18, 20, 23, 0.80)",
      },
      transition: "transform 0.25s ease-out",
      transform: isFocused && "rotate(180deg)",
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      display: "none",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
    }),
    input: (baseStyles) => ({
      ...baseStyles,
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "none",
      color: "rgba(18, 20, 23, 0.20)",

      "&:hover": {
        color: "rgba(18, 20, 23, 0.80)",
      },
    }),
  };

  const modifiedOptions = [];
  for (const option of options) {
    modifiedOptions.push({ value: option, label: option });
  }

  return (
    <>
      <Select
        placeholder={placeholder}
        options={modifiedOptions}
        styles={style}
        onChange={onChange}
        isClearable={true}
      />
    </>
  );
};

export default Selection;
