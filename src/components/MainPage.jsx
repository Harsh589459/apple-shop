import React from 'react'
import Navbar from './Navigation/Navbar';
import { CounterContext } from '../CounterContext'
import Banner from './Banner/Banner'
import Middle from './Middle/Middle'
import Footer from './Footer/Footer'




function MainPage() {

    const [counter, setCounter] = React.useState(0);


    return (

        <div>
            <CounterContext.Provider value={{ counter, setCounter }}>
                <Navbar />
                <Banner />
                <Middle />
                <Footer />






            </CounterContext.Provider>

        </div>
    )
}

export default MainPage