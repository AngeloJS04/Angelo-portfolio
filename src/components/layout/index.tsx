
import Head from 'next/head'
import React from 'react'
import Header from './header/header'

interface LayoutPropsI {
    children: React.ReactNode
    title: string
}

const Layout = ({ children, title }: LayoutPropsI) => {
    return (
        <React.Fragment>
            <Head> <title>{title}</title> </Head>
            <div>
                <div>
                    <Header />
                </div>
                {children}
            </div>
        </React.Fragment>
    )
}

export default Layout