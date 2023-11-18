import { expect } from "chai";
import { ethers } from "hardhat";
import { YourContract } from "../typechain-types";

describe("YourContract", function () {
  // We define a fixture to reuse the same setup in every test.

  let yourContract: YourContract;
  before(async () => {
    const yourContractFactory = await ethers.getContractFactory("YourContract");
    yourContract = (await yourContractFactory.deploy()) as YourContract;
    await yourContract.deployed();
  });

  describe("Deployment", function () {
    it("Should have the right message on deploy", async function () {
      expect(await yourContract.greeting()).to.equal("Hello Builders!");
    });
    it("Should allow setting a new greeting", async function () {
      const newGreeting = "Learn Scaffold-ETH 2! :)";

      await yourContract.setGreeting(newGreeting);
      expect(await yourContract.greeting()).to.equal(newGreeting);
    });
    it("Should increment the counter after a new greeting", async function () {
      expect(await yourContract.totalCounter()).to.equal(1);
    });
    it("Should emit a GreetingChange event after a new greeting", async function () {
      const newGreeting = "Testing an event!";

      await expect(yourContract.setGreeting(newGreeting))
        .to.emit(yourContract, "GreetingChange")
        .withArgs("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", newGreeting);
    });
  });
});
