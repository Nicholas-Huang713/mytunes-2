import React from 'react'
import NavBar from '../NavBar/NavBar';
import './Layout.css';

export default function Layout({children}) {
    return (
        <div className="layout">
            <NavBar />
            <main className="layout__content">
                {children}
            </main> 
        </div>
    )
}
