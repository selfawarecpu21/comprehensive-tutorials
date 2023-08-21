<template>
  <div>
    <h1>Create a Tutorial</h1>
    <v-row>
      <v-col cols="3" class="pt-5">
        <v-navigation-drawer permanent app>
          <h2>Add a section:</h2>
          <v-list>
            <v-list-item-group>
              <v-list-item
                v-for="(availableSection, index) in availableSections"
                :key="index"
                @click="addSection(availableSection.name)"
              >
                <v-list-item-icon>
                  <v-icon>{{ availableSection.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ availableSection.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="9">
        <div v-for="(section, index) in sections" :key="index">
          <v-text-field
            v-model="section.title"
            label="Section Title"
            outlined
          ></v-text-field>
          <v-textarea
            v-model="section.content"
            label="Section Content"
            outlined
          ></v-textarea>
          <v-btn color="error" @click="removeSection(index)">Remove this section</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [],
      availableSections: [
        { name: "Title", icon: "mdi-format-title" },
        { name: "Introduction", icon: "mdi-lead-pencil" },
        { name: "Prerequisites", icon: "mdi-check" },
        { name: "Materials/Tools Needed", icon: "mdi-tools" },
        { name: "Tips and Warnings", icon: "mdi-alert" },
        { name: "Conclusion/Summary", icon: "mdi-format-list-checks" },
        { name: "Step-by-Step Instructions", icon: "mdi-numeric" },
      ],
    };
  },
  methods: {
    addSection(sectionName) {
      this.sections.push({
        title: sectionName,
        content: "",
      });
    },
    removeSection(index) {
      this.sections.splice(index, 1);
    },
  },
};
</script>
