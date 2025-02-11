import VueAccesstor from '../../VueAccesstor'
import VueHome from '../pages/home/home.vue'
import products from '../pages/products/productDetail.vue'

export default (h) => ({
  HOME: VueAccesstor(VueHome)(h),
  PRODUCT: VueAccesstor(products)(h)
})
