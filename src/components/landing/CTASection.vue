<template>
 <section class="cta cta-section">
      <div class="cta-content">
        <h1 class="cta-title spacing">Join Our Community of Knowledge Sharers</h1>
        <p class="cta-subtitle spacing">
          Create tutorials, share your expertise, and learn from others.
        </p>
          <v-btn class="spacing" color="primary" large @click="navigateTo('create-tutorial')">
            <v-icon left>mdi-pencil</v-icon> 
            Create a Tutorial
          </v-btn>
      </div>
  </section>
</template>


<script>
export default {
  components: {
    
  },
};

</script>

<style scoped>
.cta {
  position: relative;
  height: 60vh;
  background: url('/Working-Together.jpg');
   background-size: cover;
}
.cta-content {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
}

.cta-title {
  font-size: 2.5rem; /* Adjust size as needed */
  font-weight: bold;
  
}

.cta-subtitle {
  font-size: 1.5rem; /* Adjust size as needed */
  color: #ddd;
}
.spacing {
  margin-bottom: 1em;  /* Adjust as needed */
}
</style>