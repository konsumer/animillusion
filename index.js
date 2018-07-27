/**
 * Generate the illusion image
 * @param  {[Image]} images   An array of images
 * @param  {Number}  slitSize size of slit in paper, in pixels
 * @return {Image}            An image object
 */
export default (images, slitSize = 1) => {
  const c = document.createElement('canvas')
  const c2 = document.createElement('canvas')

  c.width = images[0].width
  c.height = images[0].height
  c2.width = images[0].width
  c2.height = images[0].height
  const ctx = c.getContext('2d')
  const ctx2 = c2.getContext('2d')
  ctx2.fillStyle = '#000'
  for (let x = 0; x < c.width; x += images.length) {
    images.forEach(function (img, i) {
      ctx.drawImage(img, x + i, 0, slitSize, c.height, x + i, 0, slitSize, c.height)
    })
    ctx2.fillRect(x, 0, images.length - slitSize, c.height)
  }
  return [c.toDataURL('image/png'), c2.toDataURL('image/png')]
}
