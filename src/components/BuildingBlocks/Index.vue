<template>
  <section class="building-blocks">
    <div class="columns title is-size-3 has-text-weight-semibold">
      Solis Building Blocks
    </div>
    <div class="columns description mb-5">
      Solis has several building blocks that makes the game a whole
    </div>
    <div class="columns blocks-content">
      <div
        v-for="item in blockItems"
        :key="item.title"
        class="column blocks-item sapienoids is-5"
      >
        <Block
          :title="item.title"
          :imageUrl="item.imageUrl"
          :description="item.description"
        />
      </div>
      <div class="column blocks-item">And more is comming soon</div>
    </div>
  </section>
</template>

<script>
import Block from '@/components/Block/Index.vue';
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
  name: 'BuildingBlocks',

  /**
   * The components that the page can use.
   */
  components: { Block },

  data() {
    return {
      blockItems: [
        {
          title: 'Sapienoids',
          description:
            'They are the character classes of the game. Each Sapienoid has a distinct appearance.',
          imageUrl: 'eye.png',
        },
        {
          title: 'Malisoids',
          description:
            'Malisoids support Sapienoids while not having battle stats. Instead, they buff the Sapienoid’s stats.',
          imageUrl: 'malisoid.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.building-blocks {
  margin-top: 5rem;

  > .columns {
    margin: 0;
  }

  .blocks-content {
    .blocks-item {
      border: 1px solid rgba(116, 115, 125, 0.24);
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
      border-radius: 1rem;

      margin-right: 1.5rem;

      &:last-child {
        margin-right: 0;
        background: #dcfcf4;
        color: #477d70;
        font-size: 2rem;
        padding: 24px;
      }
    }
  }
}
</style>
