require("@nomiclabs/hardhat-web3");

async function main() {

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy(web3.utils.toWei('10000', 'ether'));

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });
