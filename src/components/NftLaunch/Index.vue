<template>
  <section class="nft-launch columns">
    <div class="column launch-content">
      <div class="launch-prelead">We are launching our game assets</div>
      <div class="launch-title has-text-weight-semibold">
        Sapienoids NFTs Launch
      </div>
      <div class="launch-description mt-4">
        Our trademark visuals, the headshot / profile pictures of RaidParty.
        Lead your fighters into battle with your hero!
      </div>
      <b-button class="coming-soon">Comming Soon</b-button>
    </div>
    <div class="column nft-assets">
      <div class="columns">
        <div class="column group-1">
          <NftCard />
          <NftCard />
        </div>
        <div class="column group-2">
          <NftCard />
          <NftCard />
        </div>
        <div class="column group-3">
          <NftCard />
          <NftCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NftCard from '@/components/NftCard/Index.vue';
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
  name: 'NftLaunch',

  /**
   * The components that the page can use.
   */
  components: {
    NftCard,
  },
};
</script>

<style lang="scss" scoped>
.nft-launch {
  margin-top: 5rem;
  align-items: center;
}

.launch-prelead {
  color: #74737d;
}

.launch-title {
  font-size: 2rem;
  line-height: 52px;
}

.launch-content {
  margin-right: 134px;
  padding: 0;
}
.coming-soon {
  margin-top: 22px;
  font-weight: 560;
}

.nft-assets {
  .group-1 {
    margin-top: 2rem;
  }

  .group-3 {
    margin-top: 4rem;
  }
}
</style>
