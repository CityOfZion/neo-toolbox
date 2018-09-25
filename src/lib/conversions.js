import { u, wallet } from "@cityofzion/neon-js";
import bsqsq from "bsqsq";

import convertToCSharp from "./../lib/converToCSharp";

export const account = input => {
  let output = "";
  try {
    const acct = new wallet.Account(input);
    const python = bsqsq(acct.scriptHash, true);
    const cSharp = convertToCSharp(acct.scriptHash);

    output += `<p class="tag">Address</p><p>${acct.address}</p><br />`;
    output += `<p class="tag">Scripthash</p><p>${acct.scriptHash}</p><br />`;
    output += `<p class="tag">Python Account</p><p>${python}</p><br />`;
    output += `<p class="tag">C# Account</p><p>${cSharp}</p><br />`;
    output += `<p class="tag">Public Key</p><p>${acct.publicKey}</p><br />`;
    output += `<p class="tag">WIF</p><p>${acct.WIF}</p><br />`;
    output += `<p class="tag">Private Key</p><p>${acct.privateKey}</p><br />`;
    return output;
  } catch (err) {
    return output !== "" ? output : "Invalid Input!";
  }
};

export const reverseHex = input => {
  if (!u.isHex(input)) return "Invalid Input! Expected a hexstring!";
  return u.reverseHex(input);
};

export const int2fixed8 = input => {
  try {
    return new u.Fixed8(input).toHex();
  } catch (err) {
    return "Invalid Input! Expected a number!";
  }
};

export const fixed82int = input => {
  const error = "Invalid Input! Expected a hexstring!";
  try {
    if (!u.isHex(input)) return error;
    const f = u.Fixed8.fromHex(input);
    return f.toNumber();
  } catch (err) {
    return error;
  }
};
