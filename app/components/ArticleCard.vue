<script setup lang="ts">
  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
</script>
<template>
    <div>
        <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500">
                <div class="flex flex-wrap mb-2 mr-2 w-full"><span class="bg-primary-100 font-medium inline-flex items-center mb-2 mr-2 px-2.5 py-0.5 rounded text-primary-800 text-xs dark:bg-primary-200 dark:text-primary-800" v-for="(tag, index) in post.tags.nodes" :key="index"> <svg class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg> {{tag.name}} </span>
                </div>
                <span class="text-sm whitespace-nowrap">{{ post.timeAgo }}</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">{{ post.title }}</a></h2>
            <div class="mb-5 font-light text-gray-500 dark:text-gray-400">
                <div v-html="post.excerpt"></div>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <img class="w-7 h-7 rounded-full" :alt="post.author.node.name" :src="post.author.node.avatar.url"/>
                    <span class="font-medium dark:text-white">{{ post.author.node.name }}</span>
                </div>
                <NuxtLink class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline" :to="post.uri">
                    Read more
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </NuxtLink>
            </div>
        </article>
    </div>
</template>
<style scoped></style>
