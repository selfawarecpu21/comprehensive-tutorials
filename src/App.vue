<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

export default {
  components: {
    DefaultLayout,
    DashboardLayout
  },
  setup() {
    const route = useRoute()

    const layout = computed(() => {
      return route.meta.layout || 'DefaultLayout'
    })

    return { layout }
  }
}
</script>
