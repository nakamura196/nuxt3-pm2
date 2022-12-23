<script setup lang="ts">
const results = ref<any>([]);

const route = useRoute();

watch(route, () => {
  const url = "/api/demo?page=" + route.query.page;
  search(url);
});

const search = async (url: string) => {
  console.log({ url });
  const { data: results_ } = await useFetch(url);
  results.value = results_.value
};

search("/api/demo?page=" + route.query.page);
</script>
<template>
  <div>
    <NuxtLink to="/about">about</NuxtLink>

    <ul>
      <li v-for="(item, key) in results" :key="key">
        {{ item.title }}
      </li>
    </ul>

    <p>
      <NuxtLink to="/?page=1">1</NuxtLink>
    </p>

    <p>
      <NuxtLink to="/?page=2">2</NuxtLink>
    </p>
  </div>
</template>
