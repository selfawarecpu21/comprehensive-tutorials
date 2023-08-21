<template>
  <v-navigation-drawer permanent app>
    <v-list dense class="nav-list">
      <v-list-item @click="goToPage('/dashboard/my-tutorials')" link class="nav-list-item">
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>My Tutorials</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/dashboard/create-tutorial')" link class="nav-list-item">
        <v-list-item-icon>
          <v-icon>mdi-plus-box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Create Tutorial</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/dashboard/tutorial-drafts')" link class="nav-list-item">
        <v-list-item-icon>
          <v-icon>mdi-content-save-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Drafts</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/dashboard/tutorial-published')" link class="nav-list-item">
        <v-list-item-icon>
          <v-icon>mdi-publish</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Published</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/dashboard/user-settings')" link class="nav-list-item">
        <v-list-item-icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Profile/Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    goToPage(route) {
      this.$router.push(route); 
    }
  }
}
</script>

<style scoped>

  .nav-list-item{
    margin-bottom: 20px;
  }
</style>

