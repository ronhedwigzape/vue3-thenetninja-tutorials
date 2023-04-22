<template>
    <div class="post">
        <router-link :to="{ name: 'Details', params: { id: post.id }}">
            <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ snippet }}</p>
        <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
    </div>
</template>

<script>
import {computed} from "vue";

export default {
    name: "SinglePost",
    // props here is from the PostList.vue
    props: ['post'],
    // The props in this setup() is based on the parent component
    // which is here PostList.vue
    // The props is also an object that is passed.
    setup(props) {
        const snippet = computed(() => {
            // props can be written props['ThePropertyName']['TheNestedObjectPropName']
            return props.post.body.substring(0, 100) + '...';
        })

        return {
            snippet
        }
    }
}
</script>

<style scoped>

</style>