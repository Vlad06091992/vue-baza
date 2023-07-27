<template>
  <h1>cake builder</h1>
  <button type="button" class="btn btn-primary b" @click="addLayer">add layer</button>
  <button type="button" class="btn btn-primary b" @click="removeLayer">remove layer</button>

  //TODO 01.59.00
<div class="container">
  <div class="row">
    <div class="col col-sm-6">
      <div class="cake " v-for="layer in layers">
        <div class="layer"
             :class="`layer-${layer.type}`"
             :style="{height:`${layer.height}0px`}"
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
        <tr v-for="(layer,index) in layers">
          <td><select v-model="layers[index].type" @change="changeProduct($event, index)">
            <option  value="biscuit">biscuit</option>
            <option  value="beze">beze</option>
            <option  value="curd">curd</option>
          </select></td>
          <td><input type="number" @input="changeLayerHeight($event,index)"/></td>
          <td><font-awesome-icon icon="fa-solid fa-delete-left" @click="removeLayer(index)" /></td>
        </tr>
      </table>
    </div>
  </div>

  <!--  <img alt="cake layer" :src="biscuit">-->
  <div v-show="hasLayers"> цена {{ totalPrice }} рублей</div>
</div>
</template>

//TODO 01.35.00


<script lang="ts">

type LayerType = {
  type: "biscuit" | "beze" | "curd"
  height: number
}

type Product = LayerType["type"]


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

    const changeProduct = (event:any, index:number) => {
      layers[index].type = event.target.value
    };

    const changeLayerHeight = (event:any, index:number) => {
      layers[index].height = event.target.value
    };



    const totalPrice = computed(() => {
      return layers.reduce((acc, el) => {
        debugger
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

    const removeLayer = (index: number) => {

      layers.splice(index, 1);
    };



    return {
      layers,
      biscuit,
      totalPrice,
      addLayer,
      removeLayer,
      hasLayers,
      changeProduct,
      changeLayerHeight
    };

  }
});
</script>


<style scoped lang="css">

*{
  box-sizing: border-box;
}

table {
  border-width: 0 1px;
}

td{
  border: 1px solid gray;
  padding:10px
}

.container{
  max-width: 80%;
}

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
