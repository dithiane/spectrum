
import React, { useContext } from "react";
import { RestaurantContext } from '../context/restaurantContext'

const CheckboxButton = () => {

    const { switchFilterOn } = useContext(RestaurantContext)

    const mouseDown = (e) => {
        switchFilterOn()
    }

    return (
        <div className="checkboxButton">
            <input
                onMouseDown={(e) => mouseDown(e)}
                type="checkbox"
                id="check" value="On" />
            <label htmlFor="radio">Apply filter</label>
        </div>
    );
}

export default CheckboxButton;