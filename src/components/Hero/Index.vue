<template>
  <div class="hero-container">
    <div class="hero-content">
      <div class="hero-title">
        A grand card game of
        <div>
          <span class="highlight-text">battle, improvment</span>
          and more
        </div>
      </div>
      <div class="hero-description">
        DeFi Summer was just the beginning. Meet Inverse, part of the new wave
        of decentralized banking & finance. From a capital-effcient money
        market.
      </div>
      <div class="hero-buttons-group">
        <b-button type="is-primary"
          >Get Access
          <img
            src="@/assets/images/right-arrow.png"
            alt="Right arrow icon"
            class="ml-2"
        /></b-button>
        <b-button>Learn More</b-button>
      </div>
    </div>
    <img
      class="illustration"
      src="@/assets/images/Illustration.png"
      alt="Illustration"
    />
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
  name: 'Hero',

  /**
   * The components that the page can use.
   */
  components: {},
};
</script>

<style lang="scss" scoped>
.hero-container {
  $root: '.hero';
  display: flex;
  flex-direction: row;
  align-items: center;

  #{$root}-content {
    // width: 628px;
    #{$root}-title {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .highlight-text {
      font-weight: 900;
    }

    #{$root}-description {
      font-size: 20px;
      margin-bottom: 1rem;
    }

    #{$root}-buttons-group {
      > button {
        margin-right: 1rem;
        font-weight: 600;
      }
    }
  }

  .illustration {
    position: relative;
    // top: -2rem;
  }
}
</style>
