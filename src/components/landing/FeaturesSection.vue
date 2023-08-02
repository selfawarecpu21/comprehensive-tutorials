<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="feature in features" :key="feature.title">
        <v-card>
          <v-img :src="feature.image" aspect-ratio="1.7"></v-img>
          <v-card-text>
            <v-card-title>{{ feature.title }}</v-card-title>
            <v-card-text>{{ feature.description }}</v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { title: 'Real-Time Collaboration', description: 'Collaborate with your team in real time.', image: '/Collaboration-Epic-Handshake.jpg' },
        { title: 'Version History', description: 'Track changes and revert to previous versions as needed.', image: '/version-history-code.jpg' },
        { title: 'Interactive Elements', description: 'Add interactive elements to engage users.', image: '/Interactive-blocks.jpg' },
        { title: 'Syntax Highlighting for Code', description: 'Make your code snippets easy to read.', image: '/Syntax-Highlighting.jpg' },
      ]
    }
  }
}
</script>

<style>

</style>
