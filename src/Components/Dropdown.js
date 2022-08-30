import React from "react";
import MenuItems from "./MenuItems";
const Dropdown = ({ func, submenus, dropdown, depthLevel, ancestorMethod }) => {
    const keys=Object.keys(submenus)
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
 return (
  <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
   {keys.map((key, index) => (
    <MenuItems func={func} menukey={key} depthLevel={depthLevel} ancestorMethod={ancestorMethod} items={submenus} key={index} />
   ))}
  </ul>
 );
};

export default Dropdown;