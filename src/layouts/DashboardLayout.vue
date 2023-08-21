<template>
  <v-app>
    <DashboardHeader />
    <v-main>
      <v-row no-gutters>
        <v-col cols="3" sm="2" md="2">
          <DashboardSidebar />
        </v-col>

        <v-col cols="9" sm="10" md="10">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
    
    <DefaultFooter />
  </v-app>
</template>

<script>
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue'
import DefaultFooter from '@/components/global/DefaultFooter.vue'

export default {
  components: {
        DashboardHeader,
        DashboardSidebar,
    DefaultFooter,
    
  }
}
</script>

<style>

</style>