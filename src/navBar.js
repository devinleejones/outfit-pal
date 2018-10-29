import React from 'react'

const styles = {
  title: {
    fontFamily: 'Lora, serif',
    fontSize: '42px',
    color: 'white'
  },
  add: {
    fontFamily: 'Lora, serif',
    fontSize: '18px',
    color: 'white',
    position: 'absolute',
    bottom: '2rem',
    right: '1rem'
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
      </div>
    </nav>
  )
}
