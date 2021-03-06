export { default as Folder1CarouselProduct } from '../../components/Folder1/CarouselProduct.vue'
export { default as Folder1CartComponent } from '../../components/Folder1/CartComponent.vue'
export { default as Folder1ProductTile } from '../../components/Folder1/ProductTile.vue'
export { default as SharedNavbar } from '../../components/Shared/Navbar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
