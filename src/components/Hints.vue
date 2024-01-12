<template>
  <div class="hints">
    <button
      ref="fiftyFiftyHint"
      type="button"
      class="hint fifty-fifty"
      @click="handleFiftyFiftyHint"
    ></button>
    <button ref="phoneHint" type="button" class="hint phone" @click="handlePhoneHint"></button>
    <button ref="peopleHint" type="button" class="hint people" @click="handlePeopleHint"></button>
    <button ref="x2Hint" type="button" class="hint x2" @click="handleX2Hint"></button>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'

const fiftyFiftyHint = ref<HTMLButtonElement | null>(null)
const phoneHint = ref<HTMLButtonElement | null>(null)
const peopleHint = ref<HTMLButtonElement | null>(null)
const x2Hint = ref<HTMLButtonElement | null>(null)

function handleFiftyFiftyHint() {
  disableHint(fiftyFiftyHint)
}

function handlePhoneHint() {
  disableHint(phoneHint)
}

function handlePeopleHint() {
  disableHint(peopleHint)
}

function handleX2Hint() {
  disableHint(x2Hint)
}

function disableHint(hintRef: Ref<HTMLButtonElement | null>) {
  if (hintRef?.value === null) return

  hintRef.value.classList.add('red-cross')
  hintRef.value.disabled = true
}
</script>

<style lang="css">
.game {
  display: flex;
  flex-direction: column;
}

.hints {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-left: 20px;
}

.hints .hint {
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
  width: 90px;
  height: 60px;
  background-color: black;
  border: 3px solid white;
  cursor: pointer;
  transition: border-color 0.5s ease;
}

.hints .hint:hover {
  border-color: #f44336;
}

.hints .hint.fifty-fifty {
  color: white;
}

.hints .hint.fifty-fifty {
  background-image: url('../assets/50-50.png');
  background-size: 60px 26px;
}

.hints .hint.phone {
  background-image: url('../assets/phone.png');
  background-size: 50px 40px;
}

.hints .hint.people {
  background-image: url('../assets/people.png');
  background-size: 50px 45px;
}

.hints .hint.x2 {
  background-image: url('../assets/x2.png');
  background-size: 90px 60px;
}

.hints .hint.red-cross {
  background-image: url('../assets/red-cross.png');
  background-size: 64px 54px;
}

.hints .hint.red-cross:disabled {
  border-color: white;
  background-color: #232222;
}
</style>
