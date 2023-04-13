<template>
<div class="home">


<!--  home-->
<!--  <p>My name is {{ name }} and my age is {{ age }}</p>-->
<!--  <button @click="handleClick">Click Me</button>-->
<!--  <button @click="age++">Age +1</button>-->
<!--  <input type="text" v-model.lazy="name" name="" id="">-->

<!--  <h1>Home</h1>-->
<!--  <h2>Refs</h2>-->
<!--  <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>-->
<!--  <button @click="updateNinjaOne">Update Ninja One</button>-->
  <h2>Reactive</h2>
  <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
  <button @click="updateNinjaTwo">Update Ninja Two</button>

<!--  <h1>Home</h1>-->
<!--  <input type="text" v-model="search">-->
<!--  <p>search term - {{ search }}</p>-->
<!--  <div v-for="name in matchingNames" :key="name">-->
<!--    {{ name }}-->
<!--  </div>-->
<!--  <button @click="handleClick">Stop Watching</button>-->

  <h1>Home</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList v-if="showPosts" :posts="posts" />
  </div>
  <div v-else>Loading...</div>
  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="posts.pop()">delete a post</button>
</div>
</template>
<script>
import PostList from "../components/PostList.vue";
import {ref, reactive, computed, watch, watchEffect} from "vue";
import getPosts from "../composables/getPosts";


export default {
  name: 'HomeView',
  components: { PostList },

    // --------Setup runs first before any lifecycle hooks-------
  setup() {
      // variables can make reactive and not (somposition api is customizable)
    const {posts, error, load } = getPosts()

    load()

    const showPosts = ref(true)

    // // Watch and Watch Effect
    // const search = ref('')
    // const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    // const stopWatch = watch(search, () => {
    //   console.log('watch')
    // })

    // const stopEffect = watchEffect(() => {
    //   console.log('watch effect ran', search.value )
    // })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    // const handleClick = () => {
    //   stopWatch()
    //   stopEffect()
    // }

    // const ninjaOne = ref({ name: 'mario', age: 32})
    // const ninjaTwo = reactive({name: 'luigi', age: 35})

    // const nameOne = ref('mario')
    // const nameTwo = reactive('luigi');

    // const updateNinjaOne = () => {
    //  // using ref we have to use .value
    //   ninjaOne.value.age = 40
    // }

    // const updateNinjaTwo = () => {
    //     // using reactive we dont have to use .value
    //     // the drawbacks of using reactive is it can't use primitive values
    //     // can retain reactivity when exposed to functions
    //   ninjaTwo.age = 45;
    // }
    //
    //

    // -------------Refs can make values reactive------------------
    // const p = ref(null) ------add reference to paragraph
    // console.log();

    // const name = ref('mario')
    // const age = ref(30)
    //
    // const handleClick = () => {
    //   // console.log(p.value)
    //   // p.value.classList.add('test')
    //   // p.value.textContent = 'hello ninjas'
    //   name.value = 'luigi'
    //   age.value = 35
    // }
    return {
      posts,
      showPosts,
      error,
      // names,
      // search,
      // matchingNames,
      // // age,
      // handleClick,
      // ninjaOne,
      // updateNinjaOne,
      // ninjaTwo,
      // updateNinjaTwo,
      // nameTwo,
    }
  }
  // created() {
  //   console.log('created')
  // },
  // mounted() {
  //   console.log('mounted')
  // }
}
</script>
