<script setup lang="ts">
  import { useTimeAgo } from '@vueuse/core'

  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description: 'Sip, Savor, and Spark Ideas at Cafe Bella Vista!',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const config = useRuntimeConfig()

  const {
    data: posts,
    refresh,
    pending,
  } = await useFetch(config.public.wordpressUrl, {
    method: 'get',
    query: {
      query: `
        query NewQuery {
          posts(first: 10) {
            nodes {
              title
              date
              excerpt
              uri
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
              tags {
                nodes {
                  name
                }
              }
            }
          }
        }`,
    },
    transform(data) {
      const posts = data.data.posts.nodes.map((post) => ({
        ...post,
        timeAgo: useTimeAgo(new Date(post.date)),
      }))
      return {
        data: {
          posts,
        },
      }
    },
  })
</script>
<template>
  <div>
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Our Blog
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <ArticleCard
            :post="post"
            v-for="(post, index) in posts.data.posts"
            :key="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped></style>
