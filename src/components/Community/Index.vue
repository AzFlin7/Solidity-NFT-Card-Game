<template>
  <div class="community">
    <div class="community-title has-text-weight-semibold">
      Join Our Community
    </div>
    <div class="community-lead mb-5">
      If you want to help shape the future of the game, come and hang out
    </div>
    <div class="communities columns">
      <div class="column twitter">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="@/assets/images/twitter.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Twitter</p>
            <p class="subtitle is-6">Chat in real time with our community</p>
          </div>
        </div>
      </div>
      <div class="column discord">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="@/assets/images/discord.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Discord</p>
            <p class="subtitle is-6">Chat in real time with our community</p>
          </div>
        </div>
      </div>
      <div class="column telegram">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="@/assets/images/telegram.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Telegram</p>
            <p class="subtitle is-6">Chat in real time with our community</p>
          </div>
        </div>
      </div>
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
  name: 'NftCard',

  /**
   * The components that the page can use.
   */
  components: {},
};
</script>

<style lang="scss" scoped>
.community {
  padding: 2.5rem 0;
  background-color: #f6f5ff;
  margin-left: -5rem;
  margin-right: -5rem;
  padding-left: 5rem;
  padding-right: 5rem;

  &-title {
    font-size: 2rem;
    line-height: 52px;
  }

  &-lead {
    font-size: 20px;
    line-height: 32px;
  }

  .communities {
    margin: 0;
    > div {
      margin-right: 1.5rem;
      padding: 20px 24px;
      background: #fff;
      border: 1px solid #e6e5e8;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
      border-radius: 16px;
    }

    div:last-child {
      margin-right: 0;
    }
  }
}
</style>
