import React from 'react'

export default function Playbar() {
    return (
        <div style={style}>
                <button type="button">
                <i className="fa fa-backward fa-lg"></i>
				</button>
            <button type="button">
					<i className="fa fa-play fa-lg"></i>
				</button>
                <button type="button">
					<i className="fa fa-forward fa-lg"></i>
				</button>
        </div>
    )
}


const style = {
    position: 'fixed',
    bottom: '0', 
    left: '0',
    height: '15px',
    background: 'black',
    color: 'white',
    width: '100% ',
    padding: '20px'
}
