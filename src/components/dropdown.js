
import React, { useRef, useEffect, useContext } from "react";
import { RestaurantContext } from '../context/restaurantContext'

const Dropdown = (props) => {
    let refDropdown = useRef(null)

    const { toggleFilter, setWorkArray, restaurantsShelf, filterOn } = useContext(RestaurantContext)

    const setArray = () => {
        if (!filterOn) setWorkArray(restaurantsShelf)
    }
    const mouseDown = (e) => {

        switch (e.target.className) {

            case 'dropdown_list-item_genre':
                toggleFilter("genre")
                setArray()

                break;
            case 'dropdown_list-item_state':
                toggleFilter("state")
                setArray()

                break;
            case 'dropdown_list-item_name':
                toggleFilter("name")

                break;
            default:
                break;
        }


    }



    useEffect(() => {
        refDropdown.hidden = props.hidden
    }, [props])

    return (
        <div className="dropdown"
            ref={el => { refDropdown = el }} >
            <ul className="dropdown_list">
                <li 
                    className="dropdown_list-item"
                    onMouseDown={(e) => mouseDown(e)}>
                    <span className="dropdown_list-item_name">by Name</span>
                </li>
                <li 
                    className="dropdown_list-item"
                    onMouseDown={(e) => mouseDown(e)}>
                    <span className="dropdown_list-item_state">by State</span>
                </li>
                <li 
                    className="dropdown_list-item"
                    onMouseDown={(e) => mouseDown(e)}>
                    <span className="dropdown_list-item_genre">by Genre</span>
                </li>

            </ul>
        </div>

    );
}



export default Dropdown;