import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("FaucetERC20Module", (m) => {
  //deploy do token[moeda] e do faucet desse token ao mesmo tempo
  //const moeda = m.contract("VaiDarPeCoin");
  //const faucet = m.contract("FaucetERC20", [moeda]);
//  return { moeda, faucet };

//passando por parametro do token ja feito o deploy - desenv node
  //const enderecoToken = m.getParameter("tokenAddress", "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");
  const enderecoToken = m.getParameter("tokenAddress", "0xd464Ef6FC8c6a954d7dEC28fb6975ED3Cd3E75Bf");
  const meuContrato = m.contract("FaucetERC20", [enderecoToken]);
  return { meuContrato };
});
