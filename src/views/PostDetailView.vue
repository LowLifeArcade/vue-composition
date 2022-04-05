<template>
  <div class="post-detail">
    <h1>A post detail</h1>
    <p>DIsplay content with ID of {{ $route.params.id }}</p>
    <div>
    <button @click="showPostId">show post id</button>
    </div>
    <div>
    <button @click="goHome">go home in 3 secs</button>
    </div>
    <p>
    <RouterLink to="/posts">Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { vAutofocus } from '../directives/vAutofocus';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const showPostId = () => {
  alert(`the id of this post: ${route.params.id}`)
}

const goHome = () => {
  setTimeout(() => {
    router.push('/')
  }, 3000);
}

</script>
