# Responsive image

A simple implementation to replace images based on screen resolution.

It assumes a "loading image" that it will be replaced for the image refered at `data-img-*` attribute.

## Usage

It requires that you include `imgresponsive.js` at the end of document body. Then you are all set!

Just add `.imgresponsive` class to your images and define your images path at `data-img-*` attribute.

```html
<img src="images/loading.jpg" class='imgresponsive'
  data-img-lg="images/image-hashid.large.jpg"
  data-img-md="images/image-hashid.medium.jpg"
  data-img-sm="images/image-hashid.small.jpg" />
```

**Dependencies**

For now your application must have jQuery.

You also need [livereloadx](https://github.com/nitoyon/livereloadx) if you want to start server from the executable `server` on the root of application.
