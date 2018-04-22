<style lang="scss">
.containerBot {
  h2 {
    color: #8bc34a;
  }

  .type {
    background-color: rgba(139, 195, 74, 0.1);
    color: #8bc34a;
  }

  .content::selection {
    color: #ffffff;
    background: rgba(139, 195, 74, 1);
  }
}
</style>


<template>
  <div class="containerBot">
    <h2>Output</h2>
    <select class="type">
      <option>Reverse Hex</option>
      <option>Account</option>
      <option>Fixed8</option>
      <option>Fixed8 > Num</option>
    </select>
    <div class="content">
      Output
    </div>
  </div>
</template>
