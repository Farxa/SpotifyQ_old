import React from 'react'

export default function Topbar({children}) {
    return (
        <div style={style}>
            {children}
        </div>
    )
}

const style = {
    position: 'absolute',
    top: '0',
    height: '15px',
    background: '#1B4E74',
    left: '200px',
    width: 'calc(100% - 200px)',
    padding: '20px'
}
