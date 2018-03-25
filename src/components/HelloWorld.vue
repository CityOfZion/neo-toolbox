<template>
  <div class="hello">
    <div>
    <input type="text" v-model="input" placeholder="Input"/>
    <button v-on:click="clear">X</button>
    </div>
    <div>
      <button v-on:click="reverseHex">Reverse Hex</button>
      <button v-on:click="account">Account</button>
      <button v-on:click="int2fixed8">Number -> Fixed8</button>
      <button v-on:click="fixed82int">Fixed8 -> Number</button>
    </div>
    <div>
      <p id="output"> {{ output }} </p>
    </div>
  </div>
</template>

<script>
import { u, wallet } from "@cityofzion/neon-js";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: function() {
    return {
      input: "",
      output: "Output"
    };
  },
  methods: {
    clear: function() {
      this.input = "";
    },
    account: function() {
      this.output = "Invalid Input!";
      try {
        const acct = new wallet.Account(this.input);
        this.output = "";
        if (this.input === "")
          this.output += `This is randomly generated using a secure random generator.\n`;
        this.output += `Address: ${acct.address}\n`;
        this.output += `ScriptHash: ${acct.scriptHash}\n`;
        this.output += `Public Key: ${acct.publicKey}\n`;
        this.output += `Private Key: ${acct.privateKey}\n`;
        this.output += `WIF: ${acct.WIF}\n`;
      } catch (err) {
        return;
      }
    },
    reverseHex: function() {
      if (!u.isHex(this.input)) {
        this.output = "Invalid Input! Expected a hexstring!";
        return;
      }
      this.output = u.reverseHex(this.input);
    },
    int2fixed8: function() {
      try {
        this.output = new u.Fixed8(this.input).toHex();
      } catch (err) {
        this.output = "Invalid Input! Expected a number!";
      }
    },
    fixed82int: function() {
      if (!u.isHex(this.input)) {
        this.output = "Invalid Input! Expected a hexstring!";
        return;
      }
      const f = u.Fixed8.fromHex(this.input);
      this.output = f.toNumber();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#output {
  white-space: pre-line;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
