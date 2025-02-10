<template>
  <div>
    <div :style="{ margin: '16px' }" class="test">
      username-text : {{ name }}
    </div>

    <md-form :model="formState" :rules="rules" ref="formRef" md-inline>
      <md-field :md-rules="rules.username" md-clearable>
        <label>v2Username</label>
        <md-input :value="name" @input="(value) => handleClick({ ...form, name: value })" />
        <span class="md-helper-text">This component shows the communication between the Vue3 and Vue2 components</span>
      </md-field>

      <md-field>
        <label>v2email</label>
        <md-input :value="form.email" />
      </md-field>

      <md-checkbox v-model="formState.remember">Remember me</md-checkbox>

      <md-button type="submit" class="md-raised md-primary" @click.prevent="onSubmit">Submit</md-button>
    </md-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formState: {
        username: '',
        email: '',
        remember: false,
      },
      rules: {
        username: [
          { required: true, message: 'Please input your username!' },
        ],
      },
    }
  },
  props: ['form', 'name', 'changeVue3Form'],
  methods: {
    onSubmit() {
      this.$refs.formRef.validate().then(valid => {
        if (valid) {
          // ...
        } else {
          // ...
        }
      })
    },
    handleClick(form) {
      this.$props.changeVue3Form(form)
    }
  }
}
</script>
