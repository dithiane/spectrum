
import React from "react";

const Detail = React.forwardRef((props, ref) => {

    return (
        <div
            ref={ref}
            className="table_row_details">
            <div className="table_row_name text-bold">{props.element.name}</div>
            <div
                className="table_row_city">
                {props.element.city}, {props.element.state}, {props.element.telephone}
            </div>
            <div className="table_row_genre">{props.element.genre}</div>
        </div>
    );

})

export default Detail;