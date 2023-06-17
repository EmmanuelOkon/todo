import React from "react";
import Switch from "react-switch";

const ToggleButton = ({ checked, onChange }) => {
  return (
    <div>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        onColor="#f97316"
        boxShadow="0px"
        activeBoxShadow="0px 0px 0px 0px rgba(0, 0, 0, 0.2)"
        onChange={onChange}
        checked={checked}
        className="align-middle ml-[4px] "
      />
    </div>
  );
};

export default ToggleButton;
