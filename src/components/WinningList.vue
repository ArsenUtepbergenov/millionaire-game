<template>
  <ol class="list" reversed>
    <li class="fireproof-amount">1000000</li>
    <li>500000</li>
    <li>250000</li>
    <li>125000</li>
    <li>64000</li>
    <li class="fireproof-amount">32000</li>
    <li>16000</li>
    <li>8000</li>
    <li>4000</li>
    <li>2000</li>
    <li class="fireproof-amount">1000</li>
    <li>500</li>
    <li>300</li>
    <li>200</li>
    <li>100</li>
  </ol>
</template>

<script setup lang="ts"></script>

<style lang="css">
.list {
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  align-self: end;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 16px;
  list-style: none;
}

.list li::marker {
  content: counter(list-item) '   ';
}

.list li.active {
  color: #8bc34a;
}

.fireproof-amount {
  color: orange;
}
</style>
