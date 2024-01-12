<template>
  <section class="overlay">
    <div class="game">
      <div class="hints-list">
        <Hints />
        <WinningList />
      </div>
      <Questions />
    </div>
  </section>
</template>

<script setup lang="ts">
import Hints from '../components/Hints.vue'
import WinningList from '../components/WinningList.vue'
import Questions from '../components/Questions.vue'
</script>

<style lang="css">
.game {
  width: 80vw;
  margin: auto;
}

.hints-list {
  display: flex;
  justify-content: space-between;
}
</style>
