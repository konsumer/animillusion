# animillusion

Make printable linear zoetropes of animations with javascript

See it in action, [here](http://konsumer.github.io/animillusion/)

![animillusion](demo.gif)

This technique is called "linear zoetrope".

It tends to work well with less than 10 frames, but your animation may work with more, especially if you make it really big (in terms of pixels.) Sillouettes, especially in colors other than black work really well, even with many frames.

You can also print the images on paper/plastic, and it works pretty well.

If you'd like some nice animation examples, I put some [here](https://github.com/konsumer/animillusion/tree/master/demo/src/examples). Just drag the images on to the [demo](http://konsumer.github.io/animillusion/).

## installation

You can import/require it in webpack/browserify/etc:

```
npm i animillusion
```

now you can do this:
```js
const animillusion = require('animillusion')
```

or you can point to the js file in your HTML:

```html
<script src="http://konsumer.js.org/animillusion/animillusion.min.js"></script>
```

## usage

All your frames should be images, of the same dimensions.

```js
// get 2 image URLS for the slotted image, and the slots:
const images = animillusion([
  'image1.png',
  'image2.png',
  'image3.png',
  'image4.png'
])
```

The [demo](demo/) is also made with react, if you want an example of that.