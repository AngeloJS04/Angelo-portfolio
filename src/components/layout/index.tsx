
import Head from 'next/head'
import React from 'react'
import Header from './header/header'

const Layout = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <React.Fragment>
            <Head> <title>{title}</title> </Head>
            <div>
                <Header />
                {children}
            </div>
        </React.Fragment>
    )
}
export default Layout