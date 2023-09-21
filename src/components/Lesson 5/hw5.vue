//TODO 01.31.00

<template>
  <div class="wrapper">
    <div class="sample">
      <form>
        <ProgressBar :percents-of-value="percentsOfValue" />
        <div>
          <Input v-for="(field,i) in info" :key="i" :data-item="field" :onInput="onInput" />
        </div>
        <form />
        <button class="btn btn-primary" @click="created" :disabled="isNotDisable">
          Send Data
        </button>
      </form>
      <div v-show="sendData">
        <Table :info="info" />
      </div>
      <el-dialog
        v-model="dialogVisible"
        title="Tips"
        width="30%"
        :before-close="handleClose"
      >
        <Table :info="info"/>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
      </template>
      </el-dialog>
    </div>
  </div>
</template>

//TODO 01.35.00


<script setup lang="ts">
import { computed, ref } from "vue";
import Input from "@/components/Lesson 3-4/Input.vue";
import "@/styles/styles.css";
import "@/styles/font-awesome.min.css";
import "@/styles/bootstrap.min.css";
import { DataType } from "@/components/Lesson 3-4/types";
import ProgressBar from "@/components/Lesson 3-4/ProgressBar.vue";
import Table from "@/components/Lesson 5/table.vue";
import { ElMessageBox } from 'element-plus'

const info: DataType[] = ref([
  {
    label: "Name",
    value: "",
    pattern: /^[a-zA-Z ]{2,30}$/
  },
  {
    label: "Phone",
    value: "",
    pattern: /^[0-9]{7,14}$/
  },
  {
    label: "Email",
    value: "",
    pattern: /.+/
  },
  {
    label: "Some Field 1",
    value: "",
    pattern: /.+/
  },
  {
    label: "Some Field 2",
    value: "",
    pattern: /.+/
  }
]).value;

let percentsOfValue = ref(0);
let sendData = ref(false);
const dialogVisible = ref(false);

const onInput = (field: DataType, value: string) => {
  field.value = value.trim();
  field.activated = true;
  field.valid = field.pattern.test(field.value);

  percentsOfValue.value = info.reduce((acc: number, el: DataType) => {
    if (el.valid) {
      acc++;
    }
    return (acc);
  }, 0) * 20;


};

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}


const isNotDisable = computed(() => {
  return info.some(el => !el.valid);
});

const created = () => {
  dialogVisible.value = true;
  sendData.value = true;
  info.forEach((field: DataType) => {
    field.valid = false;
    field.activated = false;
  });
};


</script>


<style scoped lang="css">


</style>
