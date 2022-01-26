<template>
  <!-- Outermost container sticks to top of screen, but is most necessary because it gets set to h-screen when mobile menu is open - and is a flex col container - which allows the pop-up menu to grow from the bottom of the navbar to fill the rest of the screen -->
  <div
    :class="[mobileMenuOpen ? 'h-screen' : '']"
    class="fixed top-0 left-0 z-[99] flex w-full flex-col"
  >
    <!-- Container for bg color while still allowing the nav container to have padding, via the very next element/container... -->
    <nav
      :class="[
        atTopOfPage
          ? 'bg-transparent text-white'
          : 'bg-gray-500 text-white shadow-lg shadow-gray-500/50',
      ]"
      class="transition-all duration-200"
    >
      <!-- Padding / main container -->
      <div class="container mx-auto flex justify-between p-4">
        <!-- Logos: colored and uncolored images for transparent and colored header -->
        <a href="/">
          <nuxt-img
            v-show="atTopOfPage"
            :src="logoLight"
            alt="Logo"
            class="w-64 max-w-[70%]"
            quality="60"
            width="128"
            height="77.7"
          />
          <nuxt-img
            v-show="!atTopOfPage"
            :src="logoDark"
            alt="Logo"
            class="w-64 max-w-[70%]"
            quality="60"
            width="128"
            height="77.7"
          />
        </a>
        <!-- Desktop Nav Items -->
        <ul
          class="font-heading hidden items-center space-x-4 text-lg font-semibold lg:flex lg:space-x-8 lg:text-xl"
        >
          <li v-for="(item, idx) in navItems" :key="idx">
            <a :href="item.href">{{ item.title }}</a>
          </li>
          <li>
            <a
              :href="cta.href"
              class="font-display flex items-center rounded px-4 py-2 antialiased"
              :class="[
                !atTopOfPage
                  ? 'bg-white text-gray-500'
                  : 'bg-gray-500 text-white shadow-lg shadow-gray-500/50',
              ]"
            >
              <span>{{ cta.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </li>
        </ul>
        <!-- Mobile Menu Buttons -->
        <div class="flex lg:hidden">
          <!-- Open Button -->
          <button
            @click="mobileMenuOpen = true"
            v-show="!mobileMenuOpen"
            class="flex items-center"
            type="button"
          >
            <span>Menu</span>
            <svg
              class="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewbox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <!-- Close Button -->
          <button
            @click="mobileMenuOpen = false"
            v-show="mobileMenuOpen"
            x-cloak
            class="ml-auto flex items-center"
            type="button"
          >
            <span>Close</span>
            <svg
              class="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewbox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <!-- Mobile pop-up menu -->
    <transition name="fade">
      <div
        @click="mobileMenuOpen = false"
        v-show="mobileMenuOpen"
        class="relative bottom-0 left-0 w-full flex-grow bg-white text-gray-500 transition-all duration-1000 lg:hidden"
      >
        <!-- Mobile pop-up menu content -->
        <ul
          class="font-heading mt-24 flex flex-col items-center space-y-8 text-xl"
        >
          <li v-for="(item, idx) in navItems" :key="idx">
            <a :href="item.href">{{ item.title }}</a>
          </li>
          <li class="pt-8">
            <a
              :href="cta.href"
              class="font-display flex items-center rounded bg-gray-500 px-4 py-2 text-white shadow-lg shadow-gray-200"
            >
              <span>{{ cta.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  data() {
    return {
      mobileMenuOpen: false,
      atTopOfPage: true,
      navItems: [
        {
          title: 'About',
          href: '#',
        },
        {
          title: 'Contact',
          href: '#',
        },
      ],
      cta: {
        title: 'Get Started',
        href: '#',
      },
      logoLight: '/images/site/logo-light.png',
      logoDark: '/images/site/logo.png',
    }
  },
  mounted() {
    this.atTopOfPage = window.scrollY <= 50
    window.addEventListener('scroll', () => {
      this.atTopOfPage = window.scrollY <= 50
    })
  },
  watch: {
    mobileMenuOpen(val) {
      if (val) {
        document.body.classList.add('overflow-hidden')
      } else {
        document.body.classList.remove('overflow-hidden')
      }
    },
  },
}
</script>
