<template>
  <div class="questions">
    <div class="question">
      <strong>{{ questions[current]?.question }}</strong>
    </div>
    <div class="answers">
      <button ref="answer0" class="answer" type="button" @click="handleAnswer(answer0)" value="0">
        <strong>{{ questions[current]?.answers[0] }}</strong>
      </button>
      <button ref="answer1" class="answer" type="button" @click="handleAnswer(answer1)" value="1">
        <strong>{{ questions[current]?.answers[1] }}</strong>
      </button>
      <button ref="answer2" class="answer" type="button" @click="handleAnswer(answer2)" value="2">
        <strong>{{ questions[current]?.answers[2] }}</strong>
      </button>
      <button ref="answer3" class="answer" type="button" @click="handleAnswer(answer3)" value="3">
        <strong>{{ questions[current]?.answers[3] }}</strong>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Question } from '../models'
import { useQuestionsStore } from '../store'
import { watch, ref } from 'vue'

const questionsStore = useQuestionsStore()

const questions = ref<Question[]>([])
const current = ref<number>(0)

const answer0 = ref<HTMLButtonElement | null>(null)
const answer1 = ref<HTMLButtonElement | null>(null)
const answer2 = ref<HTMLButtonElement | null>(null)
const answer3 = ref<HTMLButtonElement | null>(null)

function handleAnswer(currentAnswer: HTMLButtonElement | null) {
  if (!currentAnswer?.value) return

  currentAnswer?.classList.add('try')
  disableAllAnswers()

  const c = Number.parseInt(currentAnswer?.value)

  setTimeout(() => {
    if (c === questions.value[current.value]?.correct) {
      currentAnswer?.classList.add('success')
      next()
    } else {
      currentAnswer?.classList.add('error')
    }
  }, 2000)
}

function disableAllAnswers() {
  answer0.value!.disabled = true
  answer1.value!.disabled = true
  answer2.value!.disabled = true
  answer3.value!.disabled = true
  answer0.value?.classList.add('disabled')
  answer1.value?.classList.add('disabled')
  answer2.value?.classList.add('disabled')
  answer3.value?.classList.add('disabled')
}

function undisableAllAnswers() {
  answer0.value!.disabled = false
  answer1.value!.disabled = false
  answer2.value!.disabled = false
  answer3.value!.disabled = false
  answer1.value?.classList.remove('disabled', 'try', 'success')
  answer2.value?.classList.remove('disabled', 'try', 'success')
  answer3.value?.classList.remove('disabled', 'try', 'success')
  answer0.value?.classList.remove('disabled', 'try', 'success')
}

function next() {
  current.value++
  undisableAllAnswers()
}

watch(
  () => questionsStore.getRandomQuestions,
  v => {
    questions.value = v as Question[]
  },
)
</script>

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

.questions .question strong,
.answers .answer strong {
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

.answers .answer.try {
  background-color: #bf7405;
}

.answers .answer.error {
  background-color: #f44336;
}

.answers .answer.success {
  background-color: #4caf50;
}

.answers .answer.disabled {
  user-select: none;
  border-color: white;
  color: white;
}
</style>
