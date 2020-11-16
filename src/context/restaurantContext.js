import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
import dexie from "dexie";
export const RestaurantContext = createContext();
const options = {
    headers: { 'Authorization': 'Api-Key q3MNxtfep8Gt' }

};

let db = new dexie("spectrum");

db.version(1).stores({
    shelf: "id, address1, attire, city, genre, hours, lat, long, name, state, tags, telephone, website, zip ",
});

db.open().catch(function (e) {
    console.error("Open failed: " + e.stack);
})

export const RestaurantContextProvider = (props) => {

    const [restaurantsShelf, setRestaurantsShelf] = useState([])
    const [filter, setFilter] = useState("name")
    const [filterOn, setFilterOn] = useState(false)
    const [page, setPage] = useState(1)
    const [workArray, setWorkArray] = useState([])



    const getData = async () => {
        ///let data = 
        await db.table("shelf").toArray()
            .then(async function (data) {
                if (data.length === 0) {
                    const res = await axios.get("https://code-challenge.spectrumtoolbox.com/api/restaurants", options)
                        .catch((err) => {
                            console.log(err)
                        })
                    db.shelf.bulkPut(res.data);
                    data = res.data
                } else {
                    setRestaurantsShelf(data)
                    setWorkArray(data)
                }
            })
            .catch((err) => {
                console.log(err)
            })



    }

    const toggleForwardPage = () => {
        let nowPage = page + 1
        let maxPage = Math.ceil(restaurantsShelf.length / 10)
        if (nowPage > maxPage) nowPage = maxPage
        setPage(nowPage)
    }
    const toggleBackwardPage = () => {
        let nowPage = page - 1
        if (nowPage < 1) nowPage = 1
        setPage(nowPage)
    }
    const toggleFilter = (filter) => {
        setFilter(filter)
    }

    const switchFilterOn = () => {
        filterOn ? setFilterOn(false) : setFilterOn(true)
    }


    useEffect(() => {
        getData()

    }, []);

    useEffect(() => {
        if (workArray.length > 0) setPage(1)
        if (workArray.length === 0) setPage(0)
    }, [workArray]);



    return (
        <RestaurantContext.Provider
            value={{
                restaurantsShelf: restaurantsShelf,
                filter: filter,
                filterOn: filterOn,
                page: page,
                workArray: workArray,
                setWorkArray: setWorkArray,
                toggleForwardPage: toggleForwardPage,
                toggleBackwardPage: toggleBackwardPage,
                toggleFilter: toggleFilter,
                setPage: setPage,
                switchFilterOn: switchFilterOn,
            }}>
            {props.children}
        </RestaurantContext.Provider>
    )


}
export default RestaurantContextProvider;