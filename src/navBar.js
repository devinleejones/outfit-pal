import React from 'react'

const styles = {
  title: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '42px',
    color: 'white'
  },
  add: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    color: 'white',
    justifyContent: 'right',
    alignItems: 'right'
    // position: 'absolute',
    // bottom: '1.75rem',
    // right: '1rem'
  },
  closet: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    color: 'white',
    justifyContent: 'right',
    alignItems: 'right'
    // position: 'absolute',
    // bottom: '1.75rem',
    // right: '10rem'
  }
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="container">
        <a style={styles.title} className="nav-item nav-link" href="#home">
          OutfitPal <span className="sr-only">(current)</span>
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a style={styles.add} className="nav-item nav-link" href="#add">
                Add to Closet <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                style={styles.closet}
                className="nav-item nav-link"
                href="#closet">
                My Closet <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
