<template>
  <nav class="main-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/health-status">API Health Status</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  .main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>