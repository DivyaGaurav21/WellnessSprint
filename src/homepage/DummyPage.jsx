import React from 'react'
import { Link } from 'react-router-dom'

const DummyPage = () => {

    return (
        <>
            <div style={{ height: '95vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: '#f44336' }}>Dummy Page</h1>
                <p style={{ color: 'grey' }}>Static Page cab be Implemented Easily here i use react-router library <br></br> Let's Start Application go to home page by clicking logo</p>
                <h3>🔯🔯🔯</h3>
                <Link to='/' style={{ color: 'red', padding: '10px', border: '1px solid red' }}>🔙 Go Back Click Here</Link>
            </div>
        </>
    )
}

export default DummyPage