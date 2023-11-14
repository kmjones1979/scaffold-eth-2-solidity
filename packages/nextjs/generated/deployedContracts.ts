const contracts = {
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        A: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [],
              name: "foo",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
          inheritedFunctions: {},
        },
        B: {
          address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
          abi: [
            {
              inputs: [],
              name: "foo",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
          inheritedFunctions: {
            foo: "contracts/A.sol",
          },
        },
        C: {
          address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
          abi: [
            {
              inputs: [],
              name: "foo",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
          inheritedFunctions: {
            foo: "contracts/A.sol",
          },
        },
        D: {
          address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
          abi: [
            {
              inputs: [],
              name: "foo",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
          inheritedFunctions: {
            foo: "contracts/C.sol",
          },
        },
        E: {
          address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
          abi: [
            {
              inputs: [],
              name: "foo",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
          inheritedFunctions: {
            foo: "contracts/C.sol",
          },
        },
        F: {
          address: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
          abi: [
            {
              inputs: [],
              name: "foo",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
          ],
          inheritedFunctions: {
            foo: "contracts/B.sol",
          },
        },
      },
    },
  ],
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {},
    },
  ],
} as const;

export default contracts;
