<template>
  <div class="wrapper">
    <div class="sample">
      <form>
        <div v-on:scroll="scrollEvent" class="content alert alert-info">
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
          <p>This text no one reads. This text no one reads. This text no one reads.</p>
        </div>
        <div class="form-check" v-show="state.endScroll">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox"  v-model="agreeAll">
            agree all
          </label>
        </div>
        <div class="form-check" v-show="state.endScroll">
<!--          <label class="form-check-label">-->
<!--&lt;!&ndash;            <input class="form-check-input" type="radio" v-model="getSpam">&ndash;&gt;-->
<!--            2-->
<!--          </label>-->
        </div>
        <hr>
        <button :disabled="disabledButton" class="btn btn-primary" v-show="state.endScroll">
          Send Data
        </button>
      </form>
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

<script lang="ts">
import { computed, defineComponent, reactive, ref, onMounted, onUpdated, nextTick } from "vue";

export default defineComponent({
  name: "hw2scroll",
  props: {},
  components: {},
  setup(props, ctx) {
    const state: any = reactive({
      endScroll:false,
      // endScroll: true,
      // agreeAll:false
    });

    debugger

    const agreeAll = ref(false)
    const getSpam = ref()

    const scrollEvent = (e: any) => {
      console.log(e.target.scrollTop + e.target.clientHeight);
      console.log(e.target.scrollHeight);

      if (e.target.scrollTop + e.target.clientHeight + 1 >= e.target.scrollHeight) {
        state.endScroll = true;
      }
    };

    const disabledButton = computed(() => {
      debugger
      // return getSpam.value && agreeAll.value
      return agreeAll.value

    });


    return {
      state, scrollEvent,disabledButton,agreeAll,getSpam
    };
  }
})
;


</script>

<style scoped lang="css">
.content {
  height: 300px;
  overflow: auto;
}

.wrapper {
  max-width: 900px;
  padding: 15px;
}

</style>