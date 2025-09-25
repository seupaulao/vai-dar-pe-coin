import { createPublicClient, createWalletClient, http } from "viem";
import { describe, it } from "node:test";

import assert from "node:assert/strict";
import { hardhat } from "viem/chains";
import { network } from "hardhat";

describe ("Teste no contrato ERC-20 VaiDarPeCoin", function(){

  it("owner (carteira 1) transfere 100 para carteira 2", async function () {
    
  });

  it("consultar o saldo do owner e ver que diminuiu 100", async function () {
    
  });

  it("consultar o saldo da carteira 2 e ver que virou 100", async function () {
    
  });

  it("consultar o saldo da carteira 3 e ver 0", async function () {
    
  });

  it("carteira 2 tentar transferir 200 para carteira 3 (deve dar erro)", async function () {
    
  });

  it("carteira 2 autoriza carteira 3 de fazer transferências em seu nome no valor de 50", async function () {
    
  });

  it("consultar allowance na carteira 2 para carteira 3 (deve retornar 50)", async function () {
    
  });

  it("consultar allowance na carteira 2 para carteira 1 (deve retornar 0)", async function () {
    
  });

  it("owner (1) tentar transferir da carteira 2 para a 3 (deve falhar, ele não tem permissão na carteira 2)", async function () {
    
  });

  it("carteira 3 transfere 30 da carteira 2 para owner (1)", async function () {
    
  });
  
  it("consultar saldos de 1 (deve ter +30) e 2 (deve ter -30)", async function () {
    
  });
  
  it("consultar allowance na carteira 2 para a 3 (deve ter 20 restante)", async function () {
    
  });
  
  it("carteira 3 tentar transferir 100 da carteira 2 para owner (deve falhar, o allowance restante é apenas 20)", async function () {
    
  });  
  
});