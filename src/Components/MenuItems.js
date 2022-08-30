import React, { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown';

const MenuItems = ({ menukey, items, depthLevel, ancestorMethod }) => {
    const isPropertyString=(typeof (items[menukey]) === 'string' || (items[menukey]) instanceof String)
    const isPropertyArray=Array.isArray(items[menukey])
    const isPropertyObject= (!isPropertyArray) && (!isPropertyString)
    const [dropdown, setDropdown] = useState(false);
  const method=()=>{depthLevel===0 ? setDropdown(false) : ancestorMethod()}
  const chosen= ()=>{
    console.log((isPropertyArray ? menukey : "")+(isPropertyString ? items[menukey] : ""))
    method()
  }
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);
   const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
   };
   
   const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
   };
  return (
    <li className="menu-items" ref={ref}
    onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}>
      {isPropertyObject ? (
        <>
        <button type="button" 
        aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
            {menukey}{' '}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
        </button>
        <Dropdown  depthLevel={depthLevel}
        ancestorMethod={method}
          submenus={items[menukey]}
          dropdown={dropdown} />
        </>
      ) : (
        // <a href={items.url}>{items.title}</a>
        <button type="button"
        onClick={chosen}
        >{isPropertyArray ? menukey : ""}{isPropertyString ? items[menukey] : ""}</button>
      )}
    </li>
  );
};

export default MenuItems;