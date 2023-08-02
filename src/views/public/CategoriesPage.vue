<template>
  <v-container>
    <v-row>
      <v-col
        v-for="category in categories"
        :key="category.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>
            <router-link :to="`/categories/${category.id}`">{{ category.title }}</router-link>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Anime", "Lesbian", "Taylor Swift"], // this should be filled with your categories data
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      // Fetch your categories data here. This could be from an API, a Vuex store, etc.
      // Once the data is fetched, assign it to this.categories
    },
  },
};
</script>
