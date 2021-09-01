import React from 'react'
import "./HomeScreen.css"
import Nav from "../Nav.js"
import Banner from "../Banner.js"
import requests from '../Requests'
import Row from '../Row.js'
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row 
            title='Netflix Originals'
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
        </div>
    )
}

export default HomeScreen
