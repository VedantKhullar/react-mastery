import React, { useState } from 'react'

const App = () => {
  const [charCount, setCurrentCount] = useState(0);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const maxCharCount = 280;

  const incrementCharCount = (val) => {
    if(val.target.value.length > maxCharCount){
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
    }
    setCurrentCount(val.target.value.length);
  }

  return (
    <div className='container'>
      <textarea rows={10} cols={40} style={{resize: 'none'}} onInput={incrementCharCount}></textarea>
      <span className={disableSubmit ? 'warning': ''}>{charCount} / {maxCharCount}</span>
      <button className={disableSubmit ? 'disabled': ''}>Submit</button>
    </div>
  )
}

export default App