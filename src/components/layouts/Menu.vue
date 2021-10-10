<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/products">Products</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'nav-menu'
}
</script>
