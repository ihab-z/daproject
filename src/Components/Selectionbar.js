import clinical from '../arrayclinical';
import React from 'react';
import MenuItems from './MenuItems';
import './Menu.css'
const Selectionbar = () => {
  const method=()=>{return 0}
  return (
      //changed nav tag to div
    <div className='selectionbar'>
      <ul className="menus">
        {clinical.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems  menukey={(Object.keys(menu))[0]} items={menu} key={index} ancestorMethod={method} depthLevel={depthLevel} />;
        })}
      </ul>
    </div>
    //changed nav tag to div
  );
};

export default Selectionbar;