
import React, { useState, useContext, useEffect } from "react";
import helper from "../helpers/helper";
import { RestaurantContext } from '../context/restaurantContext'
import CheckBoxButton from "./checkBoxbutton";


const TableHeaderSearch = () => {
    let refInput = useState("")
    const { restaurantsShelf,  setWorkArray, filter, filterOn } = useContext(RestaurantContext)

    // const mouseEnter = (e) => {
    //     if(!helper.isUndefined(e.target)){
    //       if (e.target.className.includes("item")) setDropdown(true)
    //       else setDropdown(false)
    //     }
    // }
    const keyEnter = (e) => {
        if (e.key === "Enter")  {
            setWorkArray(helper.searchString(restaurantsShelf, refInput.value))
        }
    }
    const onChange= (e) => {
        if (!refInput.value)  {
            if (!filterOn)
                setWorkArray(restaurantsShelf)
        }
    }

    useEffect(() => {
        if (!filterOn) refInput.value = ""
    },[filter])

    return (

        <div className = "table_header_search">
                <input 
                    ref={el => { refInput = el }}
                    type = "text"
                    onKeyDown ={(e) => keyEnter(e)}
                    onChange ={(e) => onChange(e)}
                    className ="table_header_search_input" 
                    placeholder="Search..." />
                <div
                     className = "table_header_search_switch">
                     <CheckBoxButton/>
                </div>
        </div>
       
    );
}



export default TableHeaderSearch;