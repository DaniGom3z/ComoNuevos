import React from 'react'

const title = ({text, styles,text2,style2}) => {
  return (
   <>
   <h2 className={styles}>{text}<span className={style2}>{text2}</span></h2>
   </>
  )
}

export default title