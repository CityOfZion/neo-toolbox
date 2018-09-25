import { u, wallet } from "@cityofzion/neon-js";

const printAddress = u8a => {
  let result = "{ ";
  u8a.forEach((x, index) => {
    result += index !== u8a.length - 1 ? `${x}, ` : `${x} }`;
  });
  return result;
};

export default addressOrHash => {
  const account = new wallet.Account(addressOrHash);
  const u8Array = u.reverseArray(u.hexstring2ab(account.scriptHash));
  return printAddress(u8Array);
};
