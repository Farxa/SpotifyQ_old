import React from 'react';
import './modal.css'

export default function Modal({ children, show, close }) {
    if (!show) return null
    return (
        <div className="modal">
            <div className="modal-content">
                <i className="fa fa-times" onClick={close} />
                    {children}
            </div>
        </div>
    )
}
