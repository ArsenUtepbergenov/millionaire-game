<template>
  <section class="overlay">
    <h1 class="title">Who want to be a millionaire?</h1>
    <nav class="links">
      <router-link to="/game" class="link">Start to play -></router-link>
    </nav>
  </section>
</template>

<style lang="css">
.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
}

.links .link {
  text-decoration: 0;
  border: 2px solid;
  border-color: white;
  border-radius: 30px;
  padding: 12px 40px;
  font-size: 1.4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  transition: background-color 0.5s ease;
}

.links .link:hover {
  background-color: rgba(0, 200, 0, 0.7);
}
</style>
