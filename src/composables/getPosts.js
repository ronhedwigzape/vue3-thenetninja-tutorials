// Composables are great way for organizing functions if
// functions will be used in any component

// Ref can be used to import here
import {ref} from "vue";

// A function that is written on inside this JS file

// Ideally this function can be named like with the filename
const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok) {
                throw Error('no data available')
            }
            posts.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(err.value)
        }
    }
    // return var and function
    return { posts, error, load}
}

// exporting function
export default getPosts;