<template>
  <div class="container mx-auto">
    <ul class="flex flex-wrap justify-center gap-4">
      <li
        v-for="(post, i) in posts"
        :key="i"
        class="transition-all duration-300 ease-in-out"
        :class="{
          'hover:rotate-1': i % 2 === 0,
          'hover:-rotate-1': i % 2 != 0,
        }"
      >
        <NuxtLink :to="post.path" class="group relative block">
          <NuxtImg
            class="relative"
            width="300"
            height="300"
            fit="cover"
            :src="post.featuredImage || '/images/blog/placeholder-300x300.png'"
            :alt="post.title"
          />
          <h3 class="mt-2 text-center text-xl">{{ post.title }}</h3>
          <!-- Hover overlay -->
          <div
            class="absolute top-0 left-0 h-[300px] w-[300px] bg-stone-200/50 opacity-0 transition-all duration-1000 group-hover:opacity-100"
          >
            <ul v-if="post.tags" class="flex flex-col items-end space-y-1">
              <li
                v-for="(tag, i) in post.tags"
                :key="i"
                class="inline-flex items-center rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide"
                :class="{
                  'bg-green-100 text-green-800': tag === 'keto',
                  'bg-pink-100 text-pink-800': tag === 'dessert',
                  'bg-cyan-100 text-cyan-800': tag === 'fathead',
                }"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
      title: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
      featuredImage: {
        type: String,
        required: false,
      },
      tags: {
        type: Array,
        required: false,
      },
    },
  },
}
</script>
