<template>
  <div class="landing-page-container">
    <div class="landing-page-grabber">
      <HeroSection />
      <CTASection />
    </div>
    <div class="landing-marquee">
      <LandingMarquee :items="marqueeItems" />
    </div>
    <div class="landing-page-features">
      <FeaturesSection />
    </div>
    </div>
</template>


<script>
import HeroSection from '@/components/landing/HeroSection.vue'
import CTASection from '@/components/landing/CTASection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import LandingMarquee from '@/components/landing/LandingMarquee.vue';

export default {
  components: {
   HeroSection,
    CTASection,
    FeaturesSection,
    LandingMarquee
  },
}
</script>



<style>
.landing-page-grabber {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 50px 0;
}

.hero-section {
  width: 100%;
  height:60%;
  margin-bottom: 20px;
}

.cta-section {
  width: 100%;
  height: 40%;
  margin-bottom: 20px;

}

.landing-marquee{
  width: 100%;
  position: relative;
}
</style>
