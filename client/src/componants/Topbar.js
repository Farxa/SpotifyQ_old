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
    background: 'black',
    left: '200px',
    width: 'calc(100% - 200px)',
    padding: '20px'
}
