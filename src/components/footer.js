
import React, { useContext, useEffect, useRef } from "react";
import { RestaurantContext } from '../context/restaurantContext'

const Footer = () => {
    const { page, workArray, toggleForwardPage, toggleBackwardPage } = useContext(RestaurantContext)
    let refLeftArrow = useRef(null)
    let refRightArrow = useRef(null)

    const hideArrows = (value) => {
        refRightArrow.hidden = value
        refLeftArrow.hidden = value
    }

    const setStatusPageButton = () => {
        hideArrows(false)
        let lastpage = Math.ceil(workArray.length / 10)
        switch (page) {
            case 0: hideArrows(true)
                break
            case 1: refLeftArrow.hidden = true
                if (workArray.length < 10) refRightArrow.hidden = true
                break;
            case lastpage: refRightArrow.hidden = true
                break
            default:
                break;
        }

    }

    const mouseEnter = (e) => {
        if (e.target.className === "footer_pages_rightArrow")
            toggleForwardPage()
        else if
            (e.target.className === "footer_pages_leftArrow")
            toggleBackwardPage()
    }

    useEffect(() => {
        setStatusPageButton()
    //eslint-disable-next-line react-hooks/exhaustive-deps  
    }, [page, workArray])

    return (
        <div className="footer">
            <div className="footer_pages">
                <div
                    ref={el => { refLeftArrow = el }}
                    onMouseDown={(e) => mouseEnter(e)}
                    className="footer_pages_leftArrow"></div>
                <div
                    className="footer_pages_numberPage">{page > 0 ? page : ''}</div>
                <div
                    ref={el => { refRightArrow = el }}
                    onMouseDown={(e) => mouseEnter(e)}
                    className="footer_pages_rightArrow"></div>
            </div>
            <div className="footer_copyright">
                <p><span>&copy;</span> 2020 MENA</p>
                <p><a href="https://www.linkedin.com/in/elenamena-denver"  className="footer_signature">Elena Mena</a></p>
            </div>
        </div>
    )

}

export default Footer;