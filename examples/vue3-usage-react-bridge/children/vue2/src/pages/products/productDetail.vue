<template>
  <div class="product-detail">
    <md-card>
      <md-card-header>
        <div class="md-title">Product Detail</div>
      </md-card-header>

      <md-card-content>
        <md-layout md-gutter="20">
          <md-layout md-flex="25">
            <img :src="product.image" alt="Product Image" class="product-image" />
          </md-layout>
          <md-layout md-flex="75">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <md-chip class="md-success">{{ product.price }}</md-chip>
            <md-button class="md-primary" @click="addToCart">Add to Cart</md-button>
          </md-layout>
        </md-layout>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: 'Sample Product',
        description: 'This is a sample product description.',
        price: '\$99.99',
        image: 'https://via.placeholder.com/150'
      }
    }
  },
  methods: {
    addToCart() {
      console.log('Product added to cart:', this.product)
    }
  }
}
</script>
