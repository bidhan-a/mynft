const { expect } = require('chai');

describe('MyNFT', function () {

  it('should return the correct name and symbol', async function () {

    const MyNFT = await hre.ethers.getContractFactory('MyNFT');

    const myNFT = await MyNFT.deploy('MyNFT', 'MNC');

    await myNFT.deployed();

    expect(await myNFT.name()).to.equal('MyNFT');

    expect(await myNFT.symbol()).to.equal('MNC');

  });

});
