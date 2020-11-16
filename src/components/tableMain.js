
import React, { useEffect, useState, useContext } from "react";
import Bullet from "./bullet"
import Detail from "./detail"
import helper from "../helpers/helper"
import { RestaurantContext } from '../context/restaurantContext'

function TableMain() {

    const { page, filter, workArray } = useContext(RestaurantContext)
    let hooks = []
    const [elements, setElements] = useState()


    const putHookToArray = (ref) => {
        hooks.push(ref)
    }

    useEffect(() => {
        async function getUIForRestaurants() {
            let rows = []
            let arr = []
            let ref = null
            if (!helper.isUndefined(workArray)) {
                arr = helper.filter(workArray, filter, page)
                if (!helper.isUndefined(arr)) {
                    arr.forEach((element, index) => {
                        ref = React.createRef();
                        rows.push(
                            <div key={index} className="table_row">
                                <Bullet
                                    key={"iconKey" + index} />
                                <Detail
                                    ref={ref}
                                    key={"detailKey" + index}
                                    element={element}
                                />
                            </div>
                        )
                        putHookToArray(ref)

                    });
                    setElements(rows)

                }
            }
        }


        getUIForRestaurants()
    //eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [page, filter, workArray])

    return (
        <div className="table_main">
            {elements}
        </div>
    );
}

export default TableMain;