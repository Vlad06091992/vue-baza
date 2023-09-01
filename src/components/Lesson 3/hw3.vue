//TODO 01.31.00

<template>
  <div class="wrapper">
    <div class="sample">
      <form>
        <div class="progress">
          <div class="progress-bar" :style="progressStyle"></div>
        </div>
        <div>
          <Input v-for="(field,i) in info" :key="i" :data-item="field" :onInput="onInput" />
        </div>
        <button class="btn btn-primary" @click="created" :disabled="isNotDisable">
          Send Data
        </button>
      </form>
      <pre>
				{{ info }}
			</pre>
      <div>
        <table class="table table-bordered">
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

//TODO 01.35.00


<script lang="ts">
import { computed, defineComponent, nextTick, onUpdated, reactive, ref } from "vue";
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

export default defineComponent({
  name: "hw3",
  props: {},
  components: { Input },
  setup(props, ctx) {

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


    return { info, onInput, created, progressStyle,isNotDisable };
  }
})
;
</script>


<style scoped lang="css">


</style>
