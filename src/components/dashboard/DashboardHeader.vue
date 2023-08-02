<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="white--text">
      Dashboard
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    
    <v-btn icon>
      <v-icon>mdi-bell</v-icon> <!-- notifications icon -->
    </v-btn>
    
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account-circle</v-icon> <!-- user profile icon -->
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="goToProfile">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goToProfile() {
      this.$router.push('/profile'); // assumes you have a '/profile' route
    },
    logout() {
      // Implement your logout logic here
      console.log('User logged out.');
    }
  }
}
</script>
