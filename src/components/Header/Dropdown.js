import React from "react";
import { DropdownDiv, DropdownItem } from "./NavStyles";
import { IoIosArrowForward } from "react-icons/io";

function Dropdown() {
  return (
    <DropdownDiv>
      <DropdownItem>
        File{" "}
        <span>
          <IoIosArrowForward className="icon-arrow" />
        </span>
      </DropdownItem>
      <DropdownItem>
        Help{" "}
        <span>
          <IoIosArrowForward className="icon-arrow" />
        </span>
      </DropdownItem>
      <DropdownItem>
        Settings{" "}
        <span>
          <IoIosArrowForward className="icon-arrow" />
        </span>
      </DropdownItem>
    </DropdownDiv>
  );
}

export default Dropdown;
