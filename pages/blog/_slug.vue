<template>
  <div>
    <section class="px-4 pt-32 pb-10">
      <article class="prose prose-lg mx-auto">
        <NuxtImg
          v-if="post.featuredImage"
          preload
          :src="post.featuredImage"
          :alt="post.title"
          width="300"
          height="300"
          fit="cover"
        />
        <h1 class="mb-6">{{ post.title }}</h1>
        <p>{{ post.description }}</p>
        <h2>Table of Contents</h2>
        <BlogTableOfContents :toc="post.toc" />
        <nuxt-content :document="post" />
      </article>
    </section>
    <section>
      <BlogPrevAndNext :slug="post.slug" class="mt-32" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return {
      post,
    }
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
      ],
    }
  },
}
</script>
