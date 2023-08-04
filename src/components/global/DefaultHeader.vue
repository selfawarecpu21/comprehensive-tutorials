<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/" id="title-link" class="white--text">
      <v-toolbar-title class="toolbar-title">
        Comprehensive Tutorials
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn text color="white" to="/tutorials">
      All Tutorials
    </v-btn>
    <v-btn text color="white" to="/categories">
      All Categories
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn text color="white" to="/login">
      Login
    </v-btn>
    <v-btn outlined color="white" to="/register">
      Register
    </v-btn>
  </v-app-bar>
</template>



<script>

</script >

<style scoped>

.toolbar-title {
  padding-left: 20px; /* Adds some space to the left of the title */
}

#title-link {
  text-decoration: none; /* Removes underline from link */
}

#title-link:visited {
  color: white; /* Changes color of link when visited, so its stays white */
}

#title-link:hover {
  opacity: 0.7; /* Decreases opacity when hovered for a subtle effect */
}
</style>


