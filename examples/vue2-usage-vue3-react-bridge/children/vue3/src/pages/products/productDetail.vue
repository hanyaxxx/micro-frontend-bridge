<template>
  <div class="product-detail">
    <a-card>
      <template #title>
        <span>Product Detail</span>
      </template>
      <a-row :gutter="20">
        <a-col :span="8">
          <img :src="product.image" alt="Product Image" class="product-image" />
        </a-col>
        <a-col :span="16">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <a-tag color="success">{{ product.price }}</a-tag>
          <a-button type="primary" @click="addToCart">Add to Cart</a-button>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ProductDetail',
  setup() {
    const product = reactive({
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: '$99.99',
      image: 'https://via.placeholder.com/150'
    })

    const addToCart = () => {
      console.log('Product added to cart:', product)
    }

    return {
      product,
      addToCart
    }
  }
})
</script>

<style scoped>
.product-detail {
  padding: 20px;
}
.product-image {
  width: 100%;
  height: auto;
}
</style>
