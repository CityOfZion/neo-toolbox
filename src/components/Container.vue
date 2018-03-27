<script>
console.log("hiya");
</script>

<style lang="scss" scoped>
.container {
  animation: right-pull .75s ease forwards;
  background-color: #ffffff;
  border: none;
  border-radius: 4%;
  box-shadow: 2px 4px 8px 0 rgba(0,0,0,.1);
  min-height: 386px;
  height: 40vw;
  max-height: 933px;
  min-width: 290px;
  width: 30vw;
  max-width: 700px;
  opacity: 0;
  overflow: hidden;

  .containerTop, .containerBot {
    height: calc(50% - 32px);
    width: calc(100% - 32px);
    padding: 16px;

    h2 {
      display: inline;
      font-size: 3rem;
      font-weight: lighter;
      margin: 0;
      padding-left: 8px;
    }
  }

  .containerTop {
    background: linear-gradient(to bottom left, #8bc34a, #a9e168);

    h2 {
      color: #ffffff;
    }
  }

  .containerBot {
    h2 {
      color: #8bc34a;
    }
  }
}

@keyframes right-pull {
	0% {
		opacity: 0;
		margin-right: -3em;
	}
	100% {
		opacity: 1;
		margin-right: 0;
	}
}
</style>

<template>
  <div class="container">
    <div class="containerTop">
      <h2>Input</h2>
    </div>
    <div class="containerBot">
      <h2>Output</h2>
    </div>
  </div>
</template>
