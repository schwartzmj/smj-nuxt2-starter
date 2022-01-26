<template>
  <div>
    <section
      class="relative flex min-h-[700px] items-center justify-center bg-gray-800 text-white md:min-h-[800px]"
    >
      <h1 class="text-xl">Home page</h1>
    </section>
    <section class="container mx-auto py-24 px-4">
      <BlogPostsList :posts="posts" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('blog').fetch()
    return {
      posts,
    }
  },
}
</script>
