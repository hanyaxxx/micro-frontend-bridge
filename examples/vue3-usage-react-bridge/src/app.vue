<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Use React in Vue3 Bridge Demo</el-menu-item>
        <el-menu-item index="2">Use Vue 2 in Vue3 Bridge Demo</el-menu-item>
      </el-menu>
    </el-header>
    <el-main v-if="selectkey === '1'">
      <el-row :gutter="20" class="mb-32">
        <el-col :span="12">
          <el-card>
            <div>
              <span>input this to React</span>
              <el-form :model="form" label-width="120px">
                <el-form-item label="Name">
                  <el-input v-model="form.name" placeholder="Name" />
                </el-form-item>
                <el-form-item label="Email">
                  <el-input v-model="form.email" placeholder="Email" />
                </el-form-item>
                <el-form-item label="Role">
                  <el-select v-model="form.role" placeholder="Select Role">
                    <el-option v-for="role in roles" :key="role" :label="role" :value="role" />
                  </el-select>
                </el-form-item>
                <el-form-item label="Address">
                  <el-input v-model="form.description.address" placeholder="Address" />
                </el-form-item>
                <el-form-item label="City">
                  <el-input v-model="form.description.city" placeholder="City" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm">Submit</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb-32">
        <el-col :span="12">
          <el-card>
            <template #header>
              <span>React Component Bridge</span>
            </template>
            <REACTHOMEACCESSTOR :props="{ form, name: form.name, changeVue3Form }" />
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb-32">
        <REACTDETAILACCESSTOR />
      </el-row>
    </el-main>
    <el-main v-if="selectkey === '2'">
      <el-row :gutter="20" class="mb-32">
        <el-col :span="12">
          <el-card>
            <div>
              <span>input this to vue2</span>
              <el-form :model="form" label-width="120px">
                <el-form-item label="Name">
                  <el-input v-model="form.name" placeholder="Name" />
                </el-form-item>
                <el-form-item label="Email">
                  <el-input v-model="form.email" placeholder="Email" />
                </el-form-item>
                <el-form-item label="Role">
                  <el-select v-model="form.role" placeholder="Select Role">
                    <el-option v-for="role in roles" :key="role" :label="role" :value="role" />
                  </el-select>
                </el-form-item>
                <el-form-item label="Address">
                  <el-input v-model="form.description.address" placeholder="Address" />
                </el-form-item>
                <el-form-item label="City">
                  <el-input v-model="form.description.city" placeholder="City" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm">Submit</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb-32">
        <el-col :span="12">
          <el-card>
            <template #header>
              <span>vue2 Component Bridge</span>
            </template>
            <HOME :props="{ form, name: form.name, changeVue3Form }" />
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb-32">
        <PRODUCT />
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import REACTHOMEACCESSTOR from './reactbridgeComponent/home'
import REACTDETAILACCESSTOR from './reactbridgeComponent/detail'
import VUE2ACCESSTOR from './vuebridgeComponent/main'
const { HOME, PRODUCT } = VUE2ACCESSTOR(h)//

interface Description {
  address: string
  city: string
}

interface FormState {
  name: string
  email: string
  role: string
  description: Description
}

const roles = ['Admin', 'Editor', 'Viewer']

const form = ref<FormState>({
  name: '',
  email: '',
  role: '',
  description: {
    address: '',
    city: ''
  }
})

const changeVue3Form = (data: FormState) => {
  console.log('changeVue3Form', data)
  form.value = data
}

const submitForm = () => {
  console.log('Form submitted:', form.value)
}
const selectkey = ref('1')
const handleSelect = (key: string) => {
  selectkey.value = key
}
</script>

<style scoped>
.el-header {
  background-color: #f8f9fa;
  padding: 0;
}

.el-main {
  padding: 20px;
}

.mb-32 {
  margin-bottom: 32px;
}
</style>