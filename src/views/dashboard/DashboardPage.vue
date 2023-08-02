<template>
  <DashboardLayout>
    <CTASection />
    <FeaturesSection />
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import CTASection from '@/components/landing/CTASection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'

export default {
  components: {
    DashboardLayout,
    CTASection,
    FeaturesSection,
  },
}
</script>



<style>
</style>
