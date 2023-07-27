<template>
  <h1>cake builder</h1>
  <button type="button" class="btn btn-primary b" @click="addLayer">add layer</button>
  <button type="button" class="btn btn-primary b" @click="removeLayer">remove layer</button>

  //TODO 01.59.00

  <div class="row">
    <div class="col col-sm-6">
      <div class="cake " v-for="layer in layers">
        <div class="layer"
             :class="`layer-${layer.type}`"
             :style="{height:'10px'}"
        ></div>
      </div>
    </div>
    <div class="col col-sm-6">
      <table class="table table-bordered">
        <tr>
          <th>Type</th>
          <th>Height</th>
          <th>Actions</th>
        </tr>
        <tr v-for="layer in layers">
          <td><select>
            <option value="option1">Вариант 1</option>
            <option value="option2">Вариант 2</option>
            <option value="option3">Вариант 3</option>
          </select></td>
          <td><input/></td>
          <td><button>actions</button></td>

        </tr>
      </table>
    </div>
  </div>
  <div>Здесь иконка
    <font-awesome-icon icon="fa-solid fa-user-secret" />

  </div>

  <!--  <img alt="cake layer" :src="biscuit">-->
  <div v-show="hasLayers"> цена {{ totalPrice }} рублей</div>
</template>

//TODO 01.35.00


<script lang="ts">

type LayerType = {
  type: "biscuit" | "beze" | "curd"
  height: number
}


import { computed, defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "cake",
  props: {},
  setup() {
    const biscuit = "/assets/beze.jpg";
    const layers: Array<LayerType> = reactive([
      {
        type: "biscuit",
        height: 10
      },
      {
        type: "beze",
        height: 7
      }


    ]);
    const layersTypes = {
      biscuit: {
        price1sm: 50,
        label: "biscuit"
      },
      beze: {
        price1sm: 100,
        label: "beze"
      },
      curd: {
        price1sm: 60,
        label: "curd"
      }
    };

    const hasLayers = computed(() => {
      return layers.length > 0;
    });

    const totalPrice = computed(() => {
      return layers.reduce((acc, el) => {
        acc += el.height * layersTypes[el.type].price1sm;
        return acc;
      }, 0);
    });

    const defaultLayer = "biscuit";
    const defaultHeight = 5;

    const addLayer = () => {
      console.log(layers);
      layers.push({
        type: defaultLayer,
        height: defaultHeight
      });
    };

    // const removeLayer = (index: number) => {
    //   console.log(state)
    //   state.splice(index, 1);
    // };

    const removeLayer = () => {
      console.log(layers);
      layers.splice(layers.length - 1, 1);
    };

    return {
      layers,
      biscuit,
      totalPrice,
      addLayer,
      removeLayer,
      hasLayers
    };

  }
});
</script>


<style scoped lang="css">


.wrapper {
  padding: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.layer {
  width: 100%;
  transition: height 0.5s;
}

.layer-biscuit {
  background: url(../../../assets/biscuit.jpg);
}

.layer-beze {
  background: url(../../../assets/beze.jpg);
}

.layer-curd {
  background: url(../../../assets/curd.jpg);
}

.price {
  font-size: 26px;
  margin-right: 40px;
}

.layer-enter-active {
  animation: layerIn 0.5s;
}

@keyframes layerIn {
  from {
    transform: translateY(50px);
  }
  to {
    transform: translateY(0);
  }
}

</style>
