import Header from '../components/header';
import Footer from '../components/footer'
import Section from '../components/sectionum'
import React, { Fragment } from 'react'
import SectionDois from '../components/sectiondois';

function Home() {


        return(
            
            <Fragment>
            <Header/>
            <Section/>
            <SectionDois/>
            <Footer/>
            </Fragment>
            
            )
            
        }

export default Home;