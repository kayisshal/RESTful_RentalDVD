<template>
  <v-app>
      <Navbar title="Actor"/>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar,
 
  },

  data: () => ({
    //
  }),
};
</script>
