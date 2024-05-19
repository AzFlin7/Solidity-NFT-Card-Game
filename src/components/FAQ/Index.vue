<template>
  <section class="faq">
    <div class="faq-title has-text-weight-semibold">
      <span class="yellow-square"></span>
      Frequently Asked Questions
      <span class="yellow-square"></span>
    </div>
    <div class="faq-content columns">
      <div class="faq-item column">
        <div class="faq-item-content p-5 mb-4">
          <div class="faq-item-title is-size-5 has-text-weight-semibold mb-4">
            {{ faqs[0].title }}
          </div>
          <div class="faq-item-description">{{ faqs[0].description }}</div>
        </div>
        <div class="faq-item-content p-5">
          <div class="faq-item-title is-size-5 has-text-weight-semibold mb-4">
            {{ faqs[1].title }}
          </div>
          <div class="faq-item-description">{{ faqs[1].description }}</div>
        </div>
      </div>
      <div class="faq-item column">
        <div class="faq-item-content p-5 mb-4">
          <div class="faq-item-title is-size-5 has-text-weight-semibold mb-4">
            {{ faqs[2].title }}
          </div>
          <div class="faq-item-description">{{ faqs[2].description }}</div>
        </div>
        <div class="faq-item-content p-5">
          <div class="faq-item-title is-size-5 has-text-weight-semibold mb-4">
            {{ faqs[3].title }}
          </div>
          <div class="faq-item-description">{{ faqs[3].description }}</div>
        </div>
      </div>
      <div class="faq-item column">
        <div class="faq-item-content p-5 mb-4">
          <div class="faq-item-title is-size-5 has-text-weight-semibold mb-4">
            {{ faqs[4].title }}
          </div>
          <div class="faq-item-description">{{ faqs[4].description }}</div>
        </div>
        <div class="faq-item-content p-5">
          <div class="faq-item-title is-size-5 has-text-weight-semibold mb-4">
            {{ faqs[5].title }}
          </div>
          <div class="faq-item-description">{{ faqs[5].description }}</div>
        </div>
      </div>
    </div>
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
  name: 'NftCard',

  /**
   * The components that the page can use.
   */
  components: {},
  data() {
    return {
      faqs: [
        {
          title: 'Is the game free to play?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate.  Condimentum diam orci pretium a pharetra, feugiat cursus.',
        },
        {
          title: 'Do I need to own any kind of NFTs to play the game?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate.',
        },
        {
          title: 'What do I need to start playing the game?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'When is the NFT sale for the game assets?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus.',
        },
        {
          title: 'Do I need to own any kind of NFTs to play the game?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate.',
        },
        {
          title: 'Does all cards improve?',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate.  Condimentum diam orci pretium a pharetra, feugiat cursus.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.faq {
  margin-top: 5rem;
  margin-bottom: 5rem;

  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;

    .yellow-square {
      display: inline-block;
      border: 4px solid #f9da75;
      transform: rotateZ(45deg);
      margin: 0 1.5rem;
    }
  }

  .faq-content {
    .faq-item-content {
      border: 1px solid #e6e5e8;
      border-radius: 1rem;

      &-title {
        line-height: 30px;
      }
    }
  }
}
</style>
