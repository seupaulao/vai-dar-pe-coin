## Token ERC-20 VAI-DAR-PE-COIN

### Running Tests

To run all the tests in the project, execute the following command:

```shell
npx hardhat test
```

You can also selectively run the Solidity or `node:test` tests:

```shell
npx hardhat test solidity
npx hardhat test nodejs
```

Run tests specific contract:

```shell
 npx hardhat test solidity contracts/VaiDarPeCoin.t.sol 
 ```

### Rodando No Local

```shell
npx hardhat node
```

### Deploy Local

```shell
npx hardhat ignition deploy ignition/modules/VaiDarPeCoin.ts
```

### Deploy sepolia

SEPOLIA_RPC = https://ethereum-sepolia-rpc.publicnode.com

To run the deployment to Sepolia, you need an account with funds to send the transaction. The provided Hardhat configuration includes a Configuration Variable called `SEPOLIA_PRIVATE_KEY`, which you can use to set the private key of the account you want to use.

You can set the `SEPOLIA_PRIVATE_KEY` variable using the `hardhat-keystore` plugin or by setting it as an environment variable.

To set the `SEPOLIA_PRIVATE_KEY` config variable using `hardhat-keystore`:

```shell
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
```

After setting the variable, you can run the deployment with the Sepolia network:

```shell
npx hardhat ignition deploy --network sepolia ignition/modules/VaiDarPeCoin.ts
```

Para fazer o verify do contrato:

```shell
npx hardhat ignition verify --network sepolia NOME_DEPLOY_DA_PASTA_DEPLOYMENTS_IGNITION --show-stack-traces
```
