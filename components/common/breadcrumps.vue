<template>
  <nav class="bg-grey-light p-3 rounded font-sans w-full ">
    <ol class="list-reset flex text-grey-dark">
      <!--  breadcrumps to show the router path -->
      <template v-for="item in list">
        <li :key="item.index">
          <a :href="item.path" class="text-blue font-bold">{{ item.title }}</a>
        </li>
        <li :key="item.index">
          <span class="mx-2">/</span>
        </li>
      </template>
    </ol>
  </nav>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
