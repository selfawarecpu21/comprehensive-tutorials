<template>
  <v-footer color="primary-darken-2" id="footer-style" class="white--text">
    <v-row justify="space-between" class="mb-4">
      <!-- Links Section -->
      <v-col cols="12" sm="6" md="3" class="py-4">
        <h5 class="title text-uppercase">Links</h5>
        <ul class="my-3">
          <li><router-link to="/tutorials" class="white--text footer-link">All Tutorials</router-link></li>
          <li><router-link to="/categories" class="white--text footer-link">All Categories</router-link></li>
          <li><router-link to="/sitemap" class="white--text footer-link">Site Map</router-link></li>
          <li><router-link to="/terms" class="white--text footer-link">Terms of Service</router-link></li>
        </ul>
      </v-col>

      <v-divider vertical class="hidden-xs-only mx-5"></v-divider>

      <!-- Contact and Social Media Section -->
      <v-col cols="12" sm="6" md="3" class="py-4">
        <h5 class="title text-uppercase">Contact</h5>
        <ul class="my-3">
          <li><a href="mailto:info@comprehensive-tutorials.com" class="white--text footer-link">Email us</a></li>
        </ul>
        <h5 class="title text-uppercase">Follow Us</h5>
        <ul class="my-3">
          <li>
            <a href="https://www.facebook.com/your-page" target="_blank" class="white--text footer-link">
              <v-icon class="mr-2">mdi-facebook</v-icon> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/your-handle" target="_blank" class="white--text footer-link">
              <v-icon class="mr-2">mdi-twitter</v-icon> Twitter
            </a>
          </li>
        </ul>
      </v-col>

      <v-divider vertical class="hidden-xs-only mx-5"></v-divider>

      <!-- Newsletter Section -->
      <v-col cols="12" sm="6" md="3" class="py-4">
        <h5 class="title text-uppercase">Newsletter</h5>
        <v-form action="/" method="post" class="my-3">
          <v-text-field label="Email" type="email" required></v-text-field>
          <v-btn type="submit" color="secondary">Subscribe</v-btn>
        </v-form>
      </v-col>
    </v-row>

    <!-- Copyright Section -->
    <v-row justify="flex-start" no-gutters>
      <v-col cols="12" class="text-left copyright">
        <div>© {{ new Date().getFullYear() }} Comprehensive Tutorials</div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  // Component logic goes here
}
</script>

<style>
#footer-style {
  width: 100%;
  padding: 20px;
  text-transform: none;
  background-color: var(--primary-darken-3);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.v-row{
  flex:1;
}

.title {
  font-size: 1.3rem;
  font-weight: 500;
}

.footer-link {
  display: block;
  margin: 5px 0;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffc107;
}

.copyright {
  margin-top: 20px;
  padding-left: 15px;
}
</style>
