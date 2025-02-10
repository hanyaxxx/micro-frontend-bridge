<template>
  <div>
    <p>---------------------------------------------vue2 app---------------------------------------------</p>
    <el-row>
      <el-col :span="12">
        <el-button :type="color" @click="showDialog = true">Open Dialog</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="12">
        <el-button @click="changeCount">change R18 Count</el-button>
      </el-col>
    </el-row>
    <el-dialog title="Element UI Dialog" :visible.sync="showDialog" width="30%">
      <span>{{ inputValue }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showDialog = false">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  props: ['color', 'changeCount'],
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form)
    }
  }
}
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
