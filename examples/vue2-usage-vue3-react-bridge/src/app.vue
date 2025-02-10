<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Use Vue 3 in Vue2 Bridge Demo</el-menu-item>
        <el-menu-item index="2">Use React in Vue2 Bridge Demo</el-menu-item>
      </el-menu>
    </el-header>
    <el-main v-if="selectedMenu === '1'">
      <el-row :gutter="20" style="margin-bottom: 32px">
        <el-col :span="12">
          <el-card>
            <div>
              <span>input this to vue3</span>
              <el-form :model="form" label-width="120px">
                <el-form-item label="Name">
                  <el-input v-model="form.name" placeholder="Name"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                  <el-input v-model="form.email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item label="Role">
                  <el-select v-model="form.role" placeholder="Select Role">
                    <el-option v-for="role in roles" :key="role" :label="role" :value="role"> </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Address">
                  <el-input v-model="form.description.address" placeholder="Address"></el-input>
                </el-form-item>
                <el-form-item label="City">
                  <el-input v-model="form.description.city" placeholder="City"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm">Submit</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 32px">
        <el-col :span="12">
          <el-card>
            <div slot="header">
              <span>Vue 3 Component Bridge</span>
            </div>
            <VUE3HOMEACCESSTOR :props="{ form: form, name: form.name, changeVue2Form }" />
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 32px">
        <VUE3DETAILACCESSTOR />
      </el-row>
    </el-main>
    <el-main v-if="selectedMenu === '2'">
      <el-row :gutter="20" style="margin-bottom: 32px">
        <el-col :span="12">
          <el-card>
            <div>
              <span>input this to react</span>
              <el-form :model="form" label-width="120px">
                <el-form-item label="Name">
                  <el-input v-model="form.name" placeholder="Name"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                  <el-input v-model="form.email" placeholder="Email"></el-input>
                </el-form-item>
                <el-form-item label="Role">
                  <el-select v-model="form.role" placeholder="Select Role">
                    <el-option v-for="role in roles" :key="role" :label="role" :value="role"> </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Address">
                  <el-input v-model="form.description.address" placeholder="Address"></el-input>
                </el-form-item>
                <el-form-item label="City">
                  <el-input v-model="form.description.city" placeholder="City"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm">Submit</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 32px">
        <el-col :span="12">
          <el-card>
            <div slot="header">
              <span>React Component Bridge</span>
            </div>
            <REACTHOMEACCESSTOR :props="{ form: form, name: form.name, changeVueForm: changeVue2Form }" />
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-bottom: 32px">
        <REACTDETAILACCESSTOR />
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import VUE3HOMEACCESSTOR from './vue3bridgeComponent/vue3home'
import VUE3DETAILACCESSTOR from './vue3bridgeComponent/vue3detail'
import REACTHOMEACCESSTOR from './reactbridgeComponent/home'
import REACTDETAILACCESSTOR from './reactbridgeComponent/detail'

export default {
  name: 'App',
  components: {
    VUE3HOMEACCESSTOR,
    VUE3DETAILACCESSTOR,
    REACTHOMEACCESSTOR,
    REACTDETAILACCESSTOR
  },
  data() {
    return {
      selectedMenu: '1',
      form: {
        name: '',
        email: '',
        role: '',
        description: {
          address: '',
          city: ''
        }
      },
      roles: ['Admin', 'Editor', 'Viewer']
    }
  },
  methods: {
    handleSelect(key) {
      this.selectedMenu = key
    },
    changeVue2Form(data) {
      console.log('changeVue2Form', data)
      this.form = data
    },
    submitForm() {
      console.log('Form submitted:', this.form)
    }
  }
}
</script>

<style>
.el-header {
  background-color: #f8f9fa;
  padding: 0;
}

.el-main {
  padding: 20px;
}
</style>
