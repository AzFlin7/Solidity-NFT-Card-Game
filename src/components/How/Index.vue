<template>
  <div class="how-it-works">
    <div
      class="columns is-centered how-title is-size-3 has-text-weight-semibold"
    >
      How it Works?
    </div>
    <div class="columns how-content">
      <div class="column find-match">
        <img src="@/assets/images/match.png" alt="Find match" />
        <div class="match-item-title has-text-weight-semibold is-size-5">
          Find a Match
        </div>
        <div>
          A millennium prior to “The Witch’s Wrath”, 4 distant mainlands
          peacefully coincided.
        </div>
      </div>
      <div class="column battle">
        <img src="@/assets/images/battle.png" alt="Battle" />
        <div class="match-item-title has-text-weight-semibold is-size-5">
          Battle
        </div>
        <div>
          A millennium prior to “The Witch’s Wrath”, 4 distant mainlands
          peacefully coincided.
        </div>
      </div>
      <div class="column enhance-card">
        <img src="@/assets/images/enhance.png" alt="Enhance Your Cards" />
        <div class="match-item-title has-text-weight-semibold is-size-5">
          Enhance Your Cards
        </div>
        <div>
          A millennium prior to “The Witch’s Wrath”, 4 distant mainlands
          peacefully coincided.
        </div>
      </div>
    </div>
    <div class="columns add-repeat has-text-weight-semibold is-centered">
      And repeat...
    </div>
  </div>
</template>

<script>
/*
 * TODO: Enhance Your Cards image is 88 * 88 but others are 80 * 80.
 */

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
.how-it-works {
  $root: 'how';
  margin-top: 5rem;
  background-color: #faf3ed;
  border-radius: 1rem;
  padding: 2.5rem 7.5rem;

  .how-title {
    line-height: 52px;
  }

  .add-repeat {
    font-size: 22px;
    color: #943d1a;
  }

  .how-content {
    margin: 2.5rem 0;

    .find-match {
    }
  }

  .match-item-title {
    line-height: 2rem;
    margin-top: 1rem;
    margin-bottom: 6px;
  }
}
</style>
