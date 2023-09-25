import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Methods_reactive_computed from "@/components/Lesson 1/Methods_reactive_computed.vue";
import Lesson_1 from "@/components/Lesson 1/Lesson_1.vue";
import Watch from "@/components/Lesson 1/Watch.vue";
import Vfor from "@/components/Lesson 1/Vfor.vue";
import Cake from "@/components/Lesson 1/cakeComponent/Cake.vue";
import hw1 from "@/components/Lesson 1/cakeComponent/hw1/hw-1.vue";
import Lesson_2 from "@/components/Lesson 2/Lesson_2.vue";
import One from "@/components/Lesson 2/lifecycles.vue";
import hw1Refs from "@/components/Lesson 2/hw1Refs.vue";
import ClassesAndForms from "@/components/Lesson 2/ClassesAndForms.vue";
import hw2scroll from "@/components/Lesson 2/hw2scroll.vue";
import Lesson_3_4 from "@/components/Lesson 3-4/Lesson_3_4.vue";
import TodoComponents from "@/components/Lesson 3-4/TodoComponents.vue";
import hw3 from "@/components/Lesson 3-4/hw3.vue";
import ParentComponentForInput from "@/components/Lesson 3-4/ParentComponentForInput.vue";
import Slot from "@/components/Lesson 3-4/Slot.vue";
import Lesson_5 from "@/components/Lesson 5/Lesson_5.vue";
import Transition from "@/components/Lesson 5/Transition.vue";
import Animation from "@/components/Lesson 5/Animation.vue";
import Classnames from "@/components/Lesson 5/Classnames.vue";
import BetweenTwoElements from "@/components/Lesson 5/Between_two_elements.vue";
import Group from "@/components/Lesson 5/Group.vue";
import Hw5 from "@/components/Lesson 5/hw5.vue";
import PiniaExample from "@/components/pinia-train/root/pinia-example.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/Lesson_1",
    name: "lesson1",
    component: Lesson_1,
    children: [
      {
        path: "methods-reactive-computed",
        name: "methodsReactiveComputed",
        component: Methods_reactive_computed
      },
      {
        path: "watchers",
        name: "watchers",
        component: Watch
      },
      {
        path: "v-for__ref",
        name: "v_for and ref",
        component: Vfor
      },
      {
        path: "cake",
        name: "cake",
        component: Cake
      },
      {
        path: "hw1",
        name: "hw1",
        component: hw1
      }
    ]
  },
  {
    path: "/Lesson_2",
    name: "lesson2",
    component: Lesson_2,
    children: [
      {
        path: "lifecycles",
        name: "lifecycles",
        component: One
      },
      {
        path: "hw1refs",
        name: "hw1refs",
        component: hw1Refs
      },
      {
        path: "ClassesAndForms",
        name: "ClassesAndForms",
        component: ClassesAndForms
      },
      {
        path: "hw2scroll",
        name: "hw2scroll",
        component: hw2scroll
      }

    ]
  },
  {
    path: "/Lesson_3",
    name: "lesson3",
    component: Lesson_3_4,
    children: [
      {
        path: "todo-components",
        name: "todo-components",
        component: TodoComponents
      },
      {
        path: "hw3",
        name: "hw3",
        component: hw3
      },
      {
        path: "ParentComponentForInput",
        name: "ParentComponentForInput",
        component: ParentComponentForInput
      },
      {
        path: "Slot",
        name: "Slot",
        component: Slot
      }

    ]
  },
  {
    path: "/Lesson_5",
    name: "lesson5",
    component: Lesson_5,
    children: [
      {
        path: "transition",
        name: "transition",
        component: Transition
      },
      {
        path: "animation",
        name: "animation",
        component: Animation
      },
      {
        path: "classnames",
        name: "classnames",
        component: Classnames
      },
      {
        path: "betweenTwoElements",
        name: "betweenTwoElements",
        component: BetweenTwoElements
      },
      {
        path: "group",
        name: "group",
        component: Group
      },
      {
        path: "hw5",
        name: "hw5",
        component: Hw5
      },

    ]
  },
  {
    path: "/pinia-example",
    name: "pinia-example",
    component: PiniaExample
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
