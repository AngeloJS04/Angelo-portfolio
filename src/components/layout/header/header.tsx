
import React from 'react'

const Header = () => {
    return (
        <React.Fragment>
            <div>
                <div className='containerHeader'>

                    {/* <h2 className='logo'>A</h2> */}
                    <div >
                        <div style={{float: 'left'}} className='containerHome'>
                            <a href='#home' className='logoHome'>A</a>
                        </div>
                        <nav>
                            <ul className='headerLinks'>


                                <a href='#about' className='headerlink'>About</a>
                                <a href='#projects' className='headerlink'>Projects</a>
                                <a className='headerlink'>Contact</a>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </React.Fragment>

    )
}

export default Header