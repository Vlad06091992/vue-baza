<template>
  <div class="wrapper">
    <div class="sample">
      <form v-show="!showTable">
        <div @scroll="scrollEvent" class="content alert alert-info">
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

        <div class="scrollProgress" :style="progressStyle"></div>
        <hr>
        <div class="form-check" v-show="scrollDone">
          <div>
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="agreeAll">
              agree all
            </label>
          </div>
          <div>
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" v-model="state.getSpam">
              get spam
            </label>
            <div class="spamSettings" v-show="state.getSpam">
              <div>
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" value="phone" v-model="state.spamSettings">
                  phone
                </label>
              </div>
              <div>
                <label class="form-check-label">

                  <input class="form-check-input" type="radio" value="email" v-model="state.spamSettings">
                  email
                </label>
              </div>
            </div>
          </div>

          <hr>
          <button :disabled="disabledButton" type="button" @click="showTableHandler" class="btn btn-primary">
            Send Data
          </button>
        </div>


      </form>
      <div>

      </div>
    </div>
    <table v-show="showTable" class="table table-bordered">
      <tr>
        <td>
          agree all
        </td>
        <!--        <td :class=tableStyles>-->
        <td>
          <TableCellSpan :value="agreeAll? agreeAll : undefined" />

        </td>
      </tr>
      <tr>
        <td>
          get spam
        </td>

        <td>
          <TableCellSpan :value=" isSpam
          " />
        </td>


      </tr>
      <tr v-show="state.spamSettings">
        <td>
          spam type
        </td>
        <td>
          {{ state.spamSettings }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, onMounted, onUpdated, nextTick, watch } from "vue";
import TableCellSpan from "./TableCellSpan.vue";

export default defineComponent({
  name: "hw2scroll",
  props: {},
  components: { TableCellSpan },
  setup(props, ctx) {
    const state: any = reactive({
      getSpam: false,
      spamSettings: null,
      scrollValue: 0
    });

    const one = 1;

    const showTable = ref(false);
    const agreeAll = ref(null);
    const phoneSpam = ref(null);

    const isSpam = computed(() => {
      return state.getSpam ? "yes" : null;
    });


    const showTableHandler = () => {
      showTable.value = true;
    };


    const scrollEvent = (e: any) => {
      let currentScrollValue = Math.floor((e.target.scrollTop + 1) / (e.target.scrollHeight - e.target.clientHeight) * 100);
      state.scrollValue = Math.max(currentScrollValue, state.scrollValue);
    };


    const scrollDone = computed(() => {
      return state.scrollValue > 99;
    });

    const disabledButton = computed(() => {
      return !agreeAll.value;
    });

    const progressStyle = computed(() => {
      return { width: `${state.scrollValue}%` };
    });


    return {
      state,
      scrollEvent,
      disabledButton,
      agreeAll,
      phoneSpam,
      showTable,
      showTableHandler,
      isSpam,
      progressStyle,
      scrollDone
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


.scrollProgress {
  background: blue;
  height: 20px;
}

</style>