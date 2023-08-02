<template>
  <v-container>
    <v-row>
      <v-col
        v-for="tutorial in tutorials"
        :key="tutorial.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>{{ tutorial.title }}</v-card-title>
          <v-card-subtitle>{{ tutorial.subtitle }}</v-card-subtitle>
          <v-card-text>{{ tutorial.summary }}</v-card-text>
          <v-card-actions>
            <v-btn text :to="`/tutorials/${tutorial.id}`">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tutorials: ["How the Internet Works", "How API's work","How Nuclear Bombs work"], // this should be filled with your tutorials data
    };
  },
  created() {
    this.fetchTutorials();
  },
  methods: {
    async fetchTutorials() {
      // Fetch your tutorials data here. This could be from an API, a Vuex store, etc.
      // Once the data is fetched, assign it to this.tutorials
    },
  },
};
</script>
