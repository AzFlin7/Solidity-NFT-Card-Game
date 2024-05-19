<template>
  <section class="block p-5">
    <img src="@/assets/images/eye.png" alt="Block image" class="columns mb-4" />
    <div class="columns block-title  has-text-weight-semibold">{{ title }}</div>
    <div class="columns description">{{ description }}</div>
  </section>
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
  name: 'Block',
  /**
   * The components that the page can use.
   */
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageSrc() {
      return `@/assets/images/${this.imageUrl}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.block-title {
  margin-bottom: 0.5rem;
  line-height: 52px;
  font-size: 20px;
}
</style>
