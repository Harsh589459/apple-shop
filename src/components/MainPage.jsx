import React from 'react'
import Navbar from './Navigation/Navbar';
import { CountContext } from '../CountContext'
import Banner from './Banner/Banner'
import Middle from './Middle/Middle'
import Footer from './Footer/Footer'



function MainPage() {

    const [count, setCount] = React.useState(0);


    return (

        <div>
            <CountContext.Provider value={{ count, setCount }}>
                <Navbar />
                <Banner />
                <Middle />
                <Footer />





            </CountContext.Provider>

        </div>
    )
}

export default MainPage