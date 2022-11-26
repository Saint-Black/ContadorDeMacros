import React, { useState } from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Service from './section-components/service';
import Video from './section-components/video';
import Agent from './section-components/agent';
import Footer from './global-components/footer';

const Home_V1 = () => {

    const [datos, estableceDatos] = useState('');

    const toastTr = (e) => {
        estableceDatos(e);
    }

    return <div>
        <Navbar />
        <Banner toastTr={toastTr}/>
        <Service padreAHijo={datos}/>
        <Video />
        <Agent />
        <Footer />
    </div>
}

export default Home_V1

