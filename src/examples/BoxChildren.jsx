import React from 'react'

const BoxChildren = ({titulo, children}) => {
  return (
    <div style={{backgroundColor:'pink', padding:'2rem', marginTop:15}}>
        <p>{titulo}</p>
        <div>
            {children}
        </div>
    </div>
  )
}

export default BoxChildren