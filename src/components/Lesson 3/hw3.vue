<script setup lang="ts">
import { computed, ref } from "vue";
import Input from "@/components/Lesson 3/Input.vue";
import "@/styles/styles.css";
import "@/styles/font-awesome.min.css";
import "@/styles/bootstrap.min.css";

export type DataType = {
  label: string,
  value: string,
  pattern: RegExp
  activated?: boolean
  valid?: boolean
}
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


const onInput = (field: DataType, value: string) => {
  field.value = value.trim();
  field.activated = true;
  field.valid = field.pattern.test(field.value);
};

const progressStyle = computed(() => {
  let step = info.reduce((acc: number, el: DataType) => {
    if (el.valid) {
      acc++;
    }
    return acc;
  }, 0);
  return { width: `${step * 20}%` };
});

const isNotDisable = computed(() => {
  return info.some(el => !el.valid);
});

const created = () => {
  debugger
  info.forEach((field: DataType) => {
    field.valid = false;
    field.activated = false;
  });
};


</script>


<style scoped lang="css">


</style>
