<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
     <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
import {onMounted, onUnmounted, onUpdated} from "vue";


export default {
  name: "PostList",
  components: {SinglePost},
  props: ['posts'],
  setup(props) {
      console.log(props);
      // We can use lifecycle hooks inside the setup function
      // but it is like 'onMounted'.
    onMounted(() => console.log('component mounted'));
    onUnmounted(() => console.log('component unmounted'));
    onUpdated(() => console.log('component updated'));
  }
}
</script>

<style scoped>

</style>

