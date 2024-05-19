<template>
  <div class="navbar-container">
    <b-navbar class="is-fixed-top">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/images/logo.png" alt="This is Logo" />
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="#">
          Home
          <div class="yellow-square" />
        </b-navbar-item>
        <b-navbar-item href="#">
          The Lure
          <div class="yellow-square" />
        </b-navbar-item>
        <b-navbar-item href="#">
          Game Guide
          <div class="yellow-square" />
        </b-navbar-item>
        <b-navbar-item href="#">
          FAQs
          <div class="yellow-square" />
        </b-navbar-item>
        <b-navbar-item href="#">
          NFTs Sale
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button">
              <img
                src="@/assets/images/metamask.png"
                alt="Metamask Icon"
                class="mr-2"
              />
              <strong>Connect Wallet</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
// TODO: Need to add connect wallet button with web3.js library.

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
  padding: 0 24px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  border-radius: 16px;

  &-brand {
    .navbar-item {
      padding-left: 0;
      padding-right: 378.5px;
    }
  }

  &.is-fixed-top {
    top: 1.5rem;
    left: 5rem;
    right: 5rem;
  }

  &-menu {
    #{$root}-start {
      #{$root}-item {
        font-weight: 700;
        padding: 1.5rem 0;
      }
    }
  }

  &-start {
    > #{$root}-item {
      &:hover,
      &:focus {
        background-color: #fff;
      }
    }
  }
}

.navbar-container {
  padding: 0 24px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}

.yellow-square {
  border: 4px solid #f9da75;
  transform: rotateZ(45deg);
  margin: 0 1.5rem;
}

.navbar-end {
  .navbar-item {
    padding-right: 0;
  }
}
</style>
