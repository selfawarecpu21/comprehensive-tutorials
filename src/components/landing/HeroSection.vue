<template>
  <section class="hero hero-section">
      <div class="hero-content">
        <h1 class="hero-title spacing">Welcome to Comprehensive Tutorials</h1>
        <p class="hero-subtitle spacing">Learn and grow while documenting your own curated tutorial for any topic</p>
        <v-btn class="spacing" color="primary" large @click="navigateTo('tutorials')">Check out some Comprehensive Tutorials</v-btn>
      </div>
  </section>
</template>



<script>
export default {
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    },
  },
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 60vh; /* Change this to 60% of viewport height */
  background: url('/hero-section-books.jpg') no-repeat center center;
  background-size: cover; /* Ensure the image always covers the hero section */
}

.hero-content {
  position: relative; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the content */
  color: white; /* White text color */
  text-align: center;
  background: rgba(0, 0, 0, 0.5); /* Black background with 50% opacity */
  padding: 2rem;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #ddd; /* Light grey text color for the subtitle */
}

.spacing {
  margin-bottom: 1em;  /* Adjust as needed */
}
</style>


