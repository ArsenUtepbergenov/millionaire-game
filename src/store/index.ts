import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'
import { randomIntByInterval } from '../utils'
import { Question } from '../models'

export const useQuestionsStore = defineStore('questions', () => {
  const content = shallowRef<{ questions: Question[] }>({ questions: [] })

  async function fetchQuestions() {
    try {
      const response = await fetch(`questions.json`, {
        headers: {
          accept: 'application/json',
        },
      })

      if (response.ok && response.status === 200) {
        content.value = await response.json()
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error)
      }
    }
  }

  const getRandomQuestions = computed(() => {
    if (!content.value.questions.length) return

    const indexes: number[] = []

    while (indexes.length < 15) {
      const i = randomIntByInterval(0, content.value.questions.length - 1)

      if (indexes.includes(i)) continue

      indexes.push(i)
    }

    const result: Question[] = []

    for (let i = 0; i < indexes.length; i++) {
      const e = content.value.questions[indexes[i]]

      result.push(e)
    }

    return result
  })

  return {
    fetchQuestions,
    getRandomQuestions,
  }
})
