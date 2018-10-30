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
    position: 'absolute',
    bottom: '1.75rem',
    right: '1rem'
  },
  closet: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    color: 'white',
    position: 'absolute',
    bottom: '1.75rem',
    right: '10rem'
  }
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="collapse navbar-collapse">
        <a style={styles.title} className="nav-item nav-link" href="#home">
          OutfitPal <span className="sr-only">(current)</span>
        </a>
        <a style={styles.add} className="nav-item nav-link" href="#add">
          Add to Closet <span className="sr-only">(current)</span>
        </a>
        <a style={styles.closet} className="nav-item nav-link" href="#closet">
          My Closet <span className="sr-only">(current)</span>
        </a>
      </div>
    </nav>
  )
}
