import React from 'react'

export default function Footer() {
    const dt = new Date(Date.now())

    return (
        <div className='footer'>
            <span>Denoms &copy; {dt.getFullYear()}</span>
            <span className='version'>v 0.0.2</span>
        </div>
    )
}
