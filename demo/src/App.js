/* global Image, FileReader */

import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import FileDrop from 'react-file-drop'

import Demo from './Demo'
import animillusion from 'index.js'

const style = {
  wrapper: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const App = ({im, onDrop}) => (
  <FileDrop onDrop={onDrop}>
    <div style={style.wrapper}>
      <Demo im={im} />
    </div>
  </FileDrop>
)

// Promise image-loader
const imgLoad = src => new Promise((resolve, reject) => {
  const i = new Image()
  i.onload = () => {
    resolve(i)
  }
  i.src = src
})

// load some demo images
const demoLoad = (name, size) => Promise.all([...Array(size)].map((v, i) => imgLoad(require(`./examples/${name}/${i}.gif`))))

// turn a FileList into an array of URLs
const readerLoad = files => Promise.all(Array.from(files).map(file => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = e => {
      resolve(imgLoad(e.target.result))
    }
    reader.readAsDataURL(file)
  })
}))

export default compose(
  withState('im', 'setIm', []),
  lifecycle({
    componentDidMount () {
      const { setIm } = this.props
      demoLoad('cat', 8)
        .then(images => {
          const im = animillusion(images)
          setIm(im)
        })
    }
  }),
  withHandlers({
    onDrop: ({ setIm }) => async (files, e) => {
      const images = await readerLoad(files)
      console.log(images)
      const im = animillusion(images)
      setIm(im)
    }
  })
)(App)
