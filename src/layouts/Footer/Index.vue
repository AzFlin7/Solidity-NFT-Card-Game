<template>
  <div class="navbar-container">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/images/logo.png" alt="This is Logo" />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item>
          Home
        </b-navbar-item>
        <b-navbar-item>
          The Lure
        </b-navbar-item>
        <b-navbar-item>
          Game Guide
        </b-navbar-item>
        <b-navbar-item>
          FAQs
        </b-navbar-item>
        <b-navbar-item>
          NFTs Sale
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

export default {
  /**
   * The name of the page.
   */
  name: 'Navbar',

  /**
   * The components that the page can use.
   */
  components: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  $root: &;
  &-brand {
    .navbar-item {
      padding-left: 0;
      padding-right: 378.5px;
    }
  }

  &-menu {
    #{$root}-start {
      #{$root}-item {
        font-weight: 700;
        padding: 1.5rem 0;
      }
    }
  }
}
</style>
