<template>
  <div id="app">
<!--    header-->
    <layout-header/>

<!--    Dynamic Content-->
    <div id="main-app" class="main-app container my-5">
      <router-view/>
    </div>

<!--    Footer-->
    <layout-footer/>
  </div>
</template>

<script>
import LayoutHeader from "@/components/layouts/Header";
import LayoutFooter from "@/components/layouts/Footer";

export default {
  name: 'App',
  components: {
    LayoutFooter,
    LayoutHeader
  },
}
</script>
