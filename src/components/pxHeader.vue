<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <router-link :to="{ name: 'home' }">
            <px-icon class="mr-3" />
          </router-link>
          <router-link :to="{ name: 'home' }">
            <span class="font-semibold text-xl tracking-tight"
              >Exchange Bitcoin</span
            >
          </router-link>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              {{ l.title }}
            </router-link>
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import pxIcon from "@/components/pxIcon";

export default {
  name: "pxHeader",
  components: {
    pxIcon
  },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>
