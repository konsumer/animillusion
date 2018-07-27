import React from 'react'

const style = {
  wrapper: {
    overflow: 'auto',
    position: 'relative'
  },
  slider: {
    width: '200%',
    marginLeft: '100%'
  },
  slots: {
  },
  animillusion: {
  },
  top: {
    display: 'flex',
    alignItems: 'center'
  },
  links: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10
  }
}

const Demo = ({ im }) => {
  if (!im || !im.length) {
    return null
  }
  return (
    <div>
      <div style={style.top}>
        <h1>animillusion</h1>
        <div style={{...style.links, justifyContent: 'flex-end'}}>
          <a href='https://github.com/konsumer/animillusion'>github</a>
        </div>
      </div>
      <div>
        Scroll this box to see effect
      </div>
      <div style={{...style.wrapper, backgroundImage: `url(${im[0]})`}}>
        <div style={style.slider}>
          <img style={style.slots} src={im[1]} alt='slots' />
        </div>
      </div>
      <div style={{textAlign: 'center'}}>Drag images here to see the effect with your own.</div>
      <div style={style.links}>
        <a download='animillusion.png' href={im[0].replace(/^data:image\/[^;]+/, 'data:application/octet-stream')}>image</a>
        <a download='slots.png' href={im[1].replace(/^data:image\/[^;]+/, 'data:application/octet-stream')}>slots</a>
      </div>
    </div>
  )
}

export default Demo
