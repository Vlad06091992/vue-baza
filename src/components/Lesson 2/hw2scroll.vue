<template>
  <div class="wrapper" >
    <div class="sample">
      <form v-show="!showTable">
        <div v-on:scroll="scrollEvent" class="content alert alert-info" >
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
        <div class="form-check" v-show="state.endScroll" >
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
        </div>

        <div class="form-check" v-show="state.endScroll">
        </div>
        <hr>
        <button :disabled="disabledButton" @click="showTableHandler" class="btn btn-primary" v-show="state.endScroll">
          Send Data
        </button>
      </form>
      <div>

      </div>
    </div>
    <table v-show="showTable" class="table table-bordered">
      <tr>
        <td>
          agree all
        </td>
        <td :class={green:!disabledButton}>
          yes
        </td>
      </tr>
      <tr>
        <td>
          get spam
        </td>
        <td :class={red:!state.getSpam,green:state.getSpam}>
          {{ state.getSpam ? "yes" : "no" }}
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
import { computed, defineComponent, reactive, ref, onMounted, onUpdated, nextTick } from "vue";

export default defineComponent({
  name: "hw2scroll",
  props: {},
  components: {},
  setup(props, ctx) {
    const state: any = reactive({
      endScroll: false,
      getSpam: false,
      spamSettings: null
    });

    const showTable = ref(false)
    const agreeAll = ref(null);
    const phoneSpam = ref(null);

    const showTableHandler = () =>{
      showTable.value = true
    }

    const scrollEvent = (e: any) => {
      console.log(e.target.scrollTop + e.target.clientHeight);
      console.log(e.target.scrollHeight);

      if (e.target.scrollTop + e.target.clientHeight + 1 >= e.target.scrollHeight) {
        state.endScroll = true;
      }
    };

    const changeGetSpam = () => {

    };

    const disabledButton = computed(() => {
      // return  !(state.getSpam && agreeAll.value)
      return !agreeAll.value;
      // return  !state.getSpam
    });


    return {
      state, scrollEvent, disabledButton, agreeAll, phoneSpam,showTable, showTableHandler
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

.green {
  color: green;
}

.red {
  color: red;
}

</style>