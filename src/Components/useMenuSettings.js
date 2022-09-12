import React, {useState, useEffect, useRef} from "react"
export const useMenuSettings=()=>{
    const [dropdown, setDropdown] = useState(false);
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
   return {dropdown,setDropdown,ref,onMouseEnter}
}