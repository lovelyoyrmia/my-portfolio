import React, { useState } from "react";
import { Div1, Div1Child, Div2, Div2Child, NavStyles } from "./NavStyles";

function Nav() {
  let date = new Date().toDateString().slice(0, 7);
  let time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(time);
  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }, 1000);
  return (
    <NavStyles>
      <Div1>
        <Div1Child>
          <img /> <span>Lovelyo Yeremia</span>
        </Div1Child>
        <Div1Child>File</Div1Child>
        <Div1Child>Help</Div1Child>
        <Div1Child>Settings</Div1Child>
      </Div1>
      <Div2>
        <Div2Child>mokalulovelyo@gmail.com</Div2Child>
        <Div2Child>{date}</Div2Child>
        <Div2Child>{cTime}</Div2Child>
      </Div2>
    </NavStyles>
  );
}

export default Nav;
