import React from "react";

function MenuBar({menuSelection, setMenuSelection}) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <span className={menuSelection === "profile" ? "item active":"item"} onClick={()=>setMenuSelection('profile')}>
        <i className="user large icon" />
      </span>

      <span className={menuSelection === "photos" ? "item active":"item"} onClick={()=>setMenuSelection('photos')}>
        <i className="photo large icon" />
      </span>

      <span className={menuSelection === "cocktails" ? "item active":"item"} onClick={()=>setMenuSelection('cocktails')}>
        <i className="cocktail large icon" />
      </span>

      <span className={menuSelection === "pokemon" ? "item active":"item"} onClick={()=>setMenuSelection('pokemon')}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
