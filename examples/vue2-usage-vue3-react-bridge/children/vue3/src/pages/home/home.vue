<template>
  <div
    :style="{
      margin: '16px'
    }">
    username-text : {{ name }}
  </div>

  <div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed">
      <a-form-item label="v2Username" name="username">
        <a-input :value="name" @change="(e) => handleClick({ ...form, name: e.target.value })" />
        <p>This component shows the communication between the Vue3 and Vue2 components</p>
      </a-form-item>

      <a-form-item label="v2email" name="email">
        <a-input :value="form.email" />
      </a-form-item>

      <a-form-item label="v2address" name="address">
        <a-input :value="form.description.address" />
      </a-form-item>

      <a-form-item label="v2city" name="city">
        <a-input :value="form.description.city" />
      </a-form-item>

      <a-form-item
        label="v3Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="v3remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, defineProps, watch } from 'vue'

const formState = reactive({
  username: '',
  password: '',
  remember: true
})

const onFinish = (values) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const props = defineProps(['form', 'name', 'changeVue2Form'])
const handleClick = (form) => {
  props.changeVue2Form(form)
  // console.log('props', props)
}
</script>
