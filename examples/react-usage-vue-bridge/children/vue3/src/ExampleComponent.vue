<template>
  <p>---------------------------------------------vue3 app---------------------------------------------</p>
  <v-btn :color="color" @click="showDialog = true">vue3 Dialog button</v-btn>
  <div>
    <v-btn style="margin-top: 20px" @click="changeCount">change R18 Count</v-btn>
  </div>
  <v-dialog v-model="showDialog" max-width="500">
    <v-card>
      <v-card-title class="headline">Vuetify Dialog</v-card-title>
      <v-card-text> Hello from Vuetify Dialog! </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="showDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ExampleComponent',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    changeCount: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      showDialog: false
    }
  }
}
</script>

<style scoped>
/* 样式 */
</style>
