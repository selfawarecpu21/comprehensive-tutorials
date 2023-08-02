<template>
  <section class="hero">
    <v-img class="hero__image" src="/hero-section-books.jpg">
      <div class="hero__content">
        <h1 class="hero__title">Welcome to Comprehensive Tutorials</h1>
        <p class="hero__subtitle">Learn and grow with our curated tutorials</p>
        <v-btn color="primary" large @click="navigateTo('tutorials')">Check out some Comprehensive Tutorials</v-btn>
      </div>
    </v-img>
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

<style>
.hero {
  position: relative;
}

.hero__image {
  width: 100%;
  height: box-sizing;
}

.hero__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Black background with 50% opacity */
  color: white; /* White text color */
  padding: 2rem 0;
  text-align: center;
}

.hero__title {
  font-size: 2.5rem;
  font-weight: bold;
}

.hero__subtitle {
  font-size: 1.5rem;
  color: #ddd; /* Light grey text color for the subtitle */
}

</style>
