import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("VaiDarPeCoinModule", (m) => {
  const vaidarpe = m.contract("VaiDarPeCoin");

  return { vaidarpe };
});
