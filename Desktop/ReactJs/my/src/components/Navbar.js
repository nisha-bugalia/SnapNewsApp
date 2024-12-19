/* eslint-disable no-template-curly-in-string */
import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div class="container-fluid">
              <a class="navbar-brand" href="/">TextUtils</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">About</a>
                  </li>
                </ul>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} checked={props.mode === 'dark'}/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode === 'dark' ? 'Disable DarkMode' : 'Enable DarkMode'}</label>
          </div>
              </div>
            </div>
        </nav>
         
    </div>
  )
}
