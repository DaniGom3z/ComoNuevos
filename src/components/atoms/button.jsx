import React from 'react'

const button = ({text,styles}) => {
  return (
        <>
        <button className={styles}>{text}</button>
        </> 
 )
}

export default button