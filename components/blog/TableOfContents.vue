<template>
  <ul>
    <li
      v-for="link of toc"
      :key="link.id"
      :class="{ '': link.depth === 2, 'ml-4 text-sm': link.depth === 3 }"
    >
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
}
</script>
