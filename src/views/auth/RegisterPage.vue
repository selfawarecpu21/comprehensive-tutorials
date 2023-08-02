<template>
    <v-container>
      <v-card class="mx-auto" max-width="400">
        <v-card-title>Register</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Name" required></v-text-field>
            <v-text-field label="Email" required></v-text-field>
            <v-text-field label="Password" type="password" required></v-text-field>
            <v-text-field label="Confirm Password" type="password" required></v-text-field>
            <v-btn color="primary">Register</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
</template>

<script>

export default {
  components: {

  },
}
</script>

<style>
</style>
