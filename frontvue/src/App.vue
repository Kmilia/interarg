<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-card-title>Constructive Feedback Demo</v-card-title>
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <HelloWorld />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
.conversation-container {
  background: #efe7dd
    url("https://cloud.githubusercontent.com/assets/398893/15136779/4e765036-1639-11e6-9201-67e728e86f39.jpg")
    repeat;
}
</style>
