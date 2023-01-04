import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal({open, children, onClose}) {

    if (!open) return null

    return ReactDOM.createPortal(
    <>
    <div className='overlay'></div>
    <div className="modal1">
        <h3></h3>
        <button onClick={onClose}>X</button>
        {children}
    </div>
    </>,
    document.getElementById('portal')

  )
}
