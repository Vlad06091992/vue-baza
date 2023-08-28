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
import Lesson_3 from "@/components/Lesson 3/Lesson_3.vue";
import TodoComponents from "@/components/Lesson 3/TodoComponents.vue";

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
    component: Lesson_3,
    children: [
      {
        path: "todo-components",
        name: "todo-components",
        component: TodoComponents
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
