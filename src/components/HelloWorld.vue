<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script lang="ts">
// import { defineComponent, ref } from 'vue'

// export default defineComponent({
//   props: {
//     msg: String
//   },
//   setup(props) {
//     const count = ref<number>(0)

//     return {
//       count
//     }
//   }
// })
</script>

<script setup="{ props }" lang="ts">
import { defineComponent,  ref } from 'vue'

export default defineComponent({
  props: {
    msg: String
  }
})

export const count = ref<number>(0)
</script>
