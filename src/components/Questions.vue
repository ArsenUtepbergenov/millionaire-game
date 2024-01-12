<template>
  <div class="questions">
    <div class="question"><strong></strong></div>
    <div class="answers">
      <button class="answer" type="button"><strong></strong></button>
      <button class="answer" type="button"><strong></strong></button>
      <button class="answer" type="button"><strong></strong></button>
      <button class="answer" type="button"><strong></strong></button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css">
.questions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  margin-top: 20px;
}

.questions .question {
  border-radius: 50px;
  height: 90px;
  border: 3px solid white;
  background: black;
  color: white;
  display: flex;
  font-size: 1.4rem;
  text-align: center;
  padding: 0 20px;
}

.questions .question strong {
  margin: auto;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
}

.answers .answer {
  border-radius: 50px;
  height: 80px;
  border: 3px solid white;
  background: black;
  color: white;
  display: flex;
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease;
}

.answers .answer:hover {
  border-color: #4caf50;
  color: #4caf50;
}

.answers .answer strong {
  margin: auto;
}

.answers .answer.error {
  background-color: #f44336;
}

.answers .answer.success {
  background-color: #4caf50;
}

.answers .answer.try {
  background-color: #bf7405;
}
</style>
