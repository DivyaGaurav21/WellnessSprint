import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const DummyPage = () => {
    const { pathname } = useLocation();
    // console.log(pathname);


    return (
        <>
            <div style={{ height: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.3rem' }}>
                <h1 style={{ color: '#f44336' }}>Dummy Page :: {pathname.slice(1)}</h1>
                <p style={{ color: 'grey' }}>Static {pathname.slice(1)} Page cab be Implemented Easily with dynamic content. here i use react-router-dom library <br></br> Let's Start Application go back by clicking back button below</p>
                <h3>🔯🔯🔯</h3>
                <Link to='/' style={{ color: 'red', padding: '10px', border: '1px solid red' }}>🔙 Go Back Click Here</Link>
            </div>
        </>
    )
}

export default DummyPage