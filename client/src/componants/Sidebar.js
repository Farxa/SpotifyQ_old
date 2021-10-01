import React, {useState, useRef} from 'react';
import './sidebar.css';
import Modal from './Modal';

export default function Sidebar() {
    
    const [sidebar, setSidebar] = useState({
        currentPlaylist: 'home',
        modal: false,
        playlists: {
            home: new Set(),
            playlists: new Set()
    }
    })

    const playlistRef = useRef(null)
    const playlists = Object.keys(sidebar.playlists);

    const addPlaylist = e => {
        e.preventDefault()
        const list = playlistRef.current.value

        setSidebar({
        ...sidebar,
        modal: false,
        playlists:{...sidebar.playlists, [list]: new Set()}
    })
  }
    
    return (
        <ul className="container">
            <div className="logo">LOGO or something</div>

          

            {playlists.map(list => (
                <li
                key={list}
                className={list === sidebar.currentPlaylist ? 'active' : ''}
                onClick={() => {
                setSidebar({ ...sidebar, currentPlaylist: list })
                }}
                >
                    {list}
                </li>
      ))}


      <li className="new-playlist" onClick={() => {
          setSidebar({...sidebar, modal: true})
      }}>
        <i className="fa fa-plus-circle" />
        <span>New Playlist</span>
      </li>

      <Modal show={sidebar.modal} close={() => {
         setSidebar({...sidebar, modal: false}) 
      }}>
          <form onSubmit={addPlaylist}>
          <div className="title">New Playlist</div>

          <div className="content-wrap">
            <input
              type="text"
              placeholder="My Playlist"
              ref={playlistRef}
              required
            />
            <br />
            <button type="submit">Create</button>
          </div>
        </form>
      </Modal>
        </ul>
    )
}



