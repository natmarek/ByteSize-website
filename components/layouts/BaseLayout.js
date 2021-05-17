import React from 'react'
import Nav from '../shared/Header'
import Head from 'next/head'
import Footer from '../shared/footer'

export default function BaseLayout(props) {

    const { children } = props



    return (
        <div className="layout-container">
            <Head>
              <title>ByteSize</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
              <Nav/>       
                
                  {children}
                
            <Footer/>
        </div>
    )
}
