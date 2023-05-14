import React from "react";

import "./Menu.module.css";

function Menu() {
  return (
    <ul className="menu">
      <li>
        <span>Home</span>
      </li>
      <li>
        <span>Communities</span>
      </li>
      <li>
        <span>Groups</span>
      </li>
      <li>
        <span>Badges</span>
      </li>
      <li>
        {" "}
        <span>Help</span>
      </li>
      <li>
        <span>Support</span>
      </li>
    </ul>
  );
}

export default Menu;
