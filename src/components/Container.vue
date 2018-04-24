<script>
import Input from "./Input.vue";
import Output from "./Output.vue";

export default {
  name: "Container",
  components: {
    Input,
    Output
  }
};
</script>

<style lang="scss">
.containerOut {
  height: 36vw;
  max-height: 933px;
  max-width: 700px;
  min-height: 386px;
  min-width: 290px;
  width: 27vw;

  .container {
    animation: right-pull 0.75s ease forwards;
    background-color: #ffffff;
    border: none;
    border-radius: 4%;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
    opacity: 0;
    overflow: hidden;

    .containerTop,
    .containerBot {
      height: 50%;
      padding: 5%;
      width: 100%;

      h2 {
        margin: 0;
        line-height: 3rem;
        font-size: 3rem;
        font-weight: lighter;
        display: inline;
      }

      .type {
        box-sizing: border-box;
        border: none;
        border-radius: 1px;
        float: right;

        height: 3rem;
        font-size: 1.5rem;

        &:focus {
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
      }

      .content {
        font-size: 1.5rem;
        max-width: 100%;
        margin-top: 8px;
        height: calc(100% - 3rem - 8px);
      }
    }

    .containerBot .content {
      align-items: flex-start;
    }

    @media (min-width: 1201px) {
      .containerTop,
      .containerBot {
        h2 {
          line-height: 3.5rem;
          font-size: 3.5rem;
        }

        .type {
          height: 3.5rem;
          font-size: 1.75rem;
        }

        .content {
          margin-top: 10px;
          height: calc(100% - 3.5rem - 10px);
          font-size: 1.75rem;
        }
      }
    }

    @media (min-width: 1400px) {
      .containerTop,
      .containerBot {
        h2 {
          line-height: 4rem;
          font-size: 4rem;
        }

        .type {
          height: 4rem;
          font-size: 2rem;
        }

        .content {
          margin-top: 12px;
          height: calc(100% - 4rem - 12px);
          font-size: 2rem;
        }
      }
    }

    @media (min-width: 1800px) {
      .containerTop,
      .containerBot {
        h2 {
          line-height: 5rem;
          font-size: 5rem;
        }

        .type {
          height: 5rem;
          font-size: 2.5rem;
        }

        .content {
          margin-top: 14px;
          height: calc(100% - 5rem - 14px);
          font-size: 2.5rem;
        }
      }
    }

    @media (min-width: 2200px) {
      .containerTop,
      .containerBot {
        h2 {
          line-height: 5.75rem;
          font-size: 5.75rem;
        }

        .type {
          height: 5.75rem;
          font-size: 2.88rem;
        }

        .content {
          margin-top: 16px;
          height: calc(100% - 5.75rem - 16px);
          font-size: 2.88rem;
        }
      }
    }

    @media (min-width: 2560px) {
      .containerTop,
      .containerBot {
        h2 {
          line-height: 6.5rem;
          font-size: 6.5rem;
        }

        .type {
          height: 6.5rem;
          font-size: 3.25rem;
        }

        .content {
          margin-top: 18px;
          height: calc(100% - 6.5rem - 18px);
          font-size: 3.25rem;
        }
      }
    }
  }
}

@keyframes right-pull {
  0% {
    opacity: 0;
    transform: translateX(6em);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>

<template>
  <div class="containerOut">
    <div class="container">
      <Input />
      <Output />
    </div>
  </div>
</template>
