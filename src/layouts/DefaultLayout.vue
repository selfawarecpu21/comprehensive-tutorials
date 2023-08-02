<template>
  <v-app>
    <DefaultHeader />
    <DefaultMain>
      <router-view />
    </DefaultMain>
    <DefaultFooter />
  </v-app>
</template>

<script>
import DefaultHeader from '@/components/global/DefaultHeader.vue'
import DefaultMain from '@/components/global/DefaultMain.vue'
import DefaultFooter from '@/components/global/DefaultFooter.vue'

export default {
  components: {
        DefaultHeader,
        DefaultMain,
    DefaultFooter
  }
}
</script>

<style>
</style>

