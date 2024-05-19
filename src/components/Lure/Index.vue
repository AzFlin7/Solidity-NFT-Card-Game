<template>
  <div class="lure">
    <img src="@/assets/images/final-lure-faded.png" alt="Final Lure" />
    <div class="lure-content">
      <div class="lure-title">It All has Begun When...</div>
      <div class="lure-description">
        A millennium prior to “The Witch’s Wrath”, 4 distant mainlands
        peacefully coincided. 3 of which were inhabited by mankind—each ruled by
        a king. However, the last was home to a coven of witches—under the rule
        of The High Priestess. As years passed, man grew more and more fearful
        of the ever-growing power and knowledge that the witches possessed.
        <p>
          As the summer solstice approached, the witches constructed towering
          shrines in order to harvest the sun’s essence to nourish their land.
          Thus, rumors—accompanied by panic—spread of the witches’ intent to
          deplete the sun of its energy. Henceforth, secret court meetings were
          held devising a scheme to rid the world of witchcraft once and for
          all.
        </p>
      </div>
      <b-button class="read-button">Read Solis Lure</b-button>
    </div>
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
  name: 'Lue',

  /**
   * The components that the page can use.
   */
  components: {},
};
</script>

<style lang="scss" scoped>
.lure {
  $root: &;

  display: flex;
  flex-direction: row;
  margin-top: 5rem;

  img {
    position: relative;
    left: -1rem;
  }

  &-content {
    // align-self: center;
    margin-left: 0.5rem;
    padding: 1rem 0;
    .lure-title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .lure-description {
      font-weight: 400;
      line-height: 2rem;
      margin-bottom: 1.5rem;

      p {
        margin-top: 1.5rem;
      }
    }

    .button {
      font-weight: 600;
      padding: 12px 16px;
    }
  }
}
</style>
