import React, {useState} from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
 const [menuSelection, setMenuSelection] = useState("profile")

  
  const componentMap = {
    profile: <Profile />,
    photos: <Photos />,
    cocktails: <Cocktails />,
    pokemon: <Pokemon />
  }

  return (
    <div>
      <MenuBar  
      menuSelection={menuSelection}
      setMenuSelection={setMenuSelection}
      />
      {componentMap[menuSelection]}
     
    </div>
  );
}

export default MainBox;
