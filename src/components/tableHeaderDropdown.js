
import React, { useState } from "react";
import helper from "../helpers/helper";
import Dropdown from "./dropdown"

function TableDropdown() {
    const [dropdownVisibility, setDropdown] = useState(true)

    const mouseEnter = (e) => {
        if(!helper.isUndefined(e.target)){
          if (e.target.className.includes("item")) setDropdown(true)
          else setDropdown(false)
        }
    }

    return (
        <div 
            onMouseDown={(e) => mouseEnter(e)}
            className="table_header_dropdownicon">
            <Dropdown hidden = {dropdownVisibility} />
        </div>

    );
}



export default TableDropdown;