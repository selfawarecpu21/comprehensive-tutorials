<template>
    <v-container>
      <v-card class="mx-auto" max-width="400">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Email" v-model="email" required></v-text-field>
            <v-text-field label="Password" type="password" v-model="password" required></v-text-field>
             <v-btn color="primary" @click="handleLogin">Log in</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
</template>

<script>

import { login } from '@/services/mockAuth.js';
import  router  from '@/router/index.js';

export default {
  components: {
    
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      const success = await login(this.email, this.password);
      if (success) {
        router.push("/dashboard");
      }
    }
  }
}
</script>

<style>
</style>
