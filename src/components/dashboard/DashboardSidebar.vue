<template>
  <v-navigation-drawer permanent app>
    <v-list dense>
      <v-list-item @click="goToPage('/my-tutorials')" link>
        <v-list-item-icon>
          <v-icon>mdi-folder</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>My Tutorials</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/create-tutorial')" link>
        <v-list-item-icon>
          <v-icon>mdi-plus-box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Create Tutorial</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/drafts')" link>
        <v-list-item-icon>
          <v-icon>mdi-content-save-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Drafts</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/published')" link>
        <v-list-item-icon>
          <v-icon>mdi-publish</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Published</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="goToPage('/profile')" link>
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
