const contracts = {
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Token: {
          address: "0x2ADe24d39F35C46322C56E1Ccccb99294F59E548",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bool",
                  name: "_isFrozen",
                  type: "bool",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              name: "AddressFrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
              ],
              name: "ComplianceAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "IdentityRegistryAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "Paused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_lostWallet",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_newWallet",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_investorOnchainID",
                  type: "address",
                },
              ],
              name: "RecoverySuccess",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "TokensFrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "TokensUnfrozen",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "from",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "Unpaused",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "_newName",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "_newSymbol",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "_newDecimals",
                  type: "uint8",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "_newVersion",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "_newOnchainID",
                  type: "address",
                },
              ],
              name: "UpdatedTokenInformation",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "addAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
              ],
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchBurn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_fromList",
                  type: "address[]",
                },
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchForcedTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchFreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchMint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "bool[]",
                  name: "_freeze",
                  type: "bool[]",
                },
              ],
              name: "batchSetAddressFrozen",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_toList",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchTransfer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "batchUnfreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "burn",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "compliance",
              outputs: [
                {
                  internalType: "contract IModularCompliance",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "decimals",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_subtractedValue",
                  type: "uint256",
                },
              ],
              name: "decreaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "forcedTransfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "freezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "getFrozenTokens",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "identityRegistry",
              outputs: [
                {
                  internalType: "contract IIdentityRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_spender",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_addedValue",
                  type: "uint256",
                },
              ],
              name: "increaseAllowance",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "_decimals",
                  type: "uint8",
                },
                {
                  internalType: "address",
                  name: "_onchainID",
                  type: "address",
                },
              ],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "isAgent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "isFrozen",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "mint",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "name",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "onchainID",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "paused",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_lostWallet",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newWallet",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_investorOnchainID",
                  type: "address",
                },
              ],
              name: "recoveryAddress",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "removeAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "_freeze",
                  type: "bool",
                },
              ],
              name: "setAddressFrozen",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_compliance",
                  type: "address",
                },
              ],
              name: "setCompliance",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "setIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "setName",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_onchainID",
                  type: "address",
                },
              ],
              name: "setOnchainID",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_symbol",
                  type: "string",
                },
              ],
              name: "setSymbol",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "symbol",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "totalSupply",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "unfreezePartialTokens",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "unpause",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "version",
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
        },
        ModularCompliance: {
          address: "0x25cebE283Ca60bc52eE73e4538Bc6213C10A9E37",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "ModuleAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes4",
                  name: "selector",
                  type: "bytes4",
                },
              ],
              name: "ModuleInteraction",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "ModuleRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "TokenBound",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "TokenUnbound",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "addModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "bindToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "callData",
                  type: "bytes",
                },
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "callModuleFunction",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "canTransfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "created",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "destroyed",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getModules",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTokenBound",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "isModuleBound",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_module",
                  type: "address",
                },
              ],
              name: "removeModule",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_from",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_value",
                  type: "uint256",
                },
              ],
              name: "transferred",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
              ],
              name: "unbindToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        IdentityRegistry: {
          address: "0xD675753A7Ee0D2E694b33fc13C6d9788a95667c2",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "claimTopicsRegistry",
                  type: "address",
                },
              ],
              name: "ClaimTopicsRegistrySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint16",
                  name: "country",
                  type: "uint16",
                },
              ],
              name: "CountryUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityRegistered",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "identityStorage",
                  type: "address",
                },
              ],
              name: "IdentityStorageSet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "oldIdentity",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "newIdentity",
                  type: "address",
                },
              ],
              name: "IdentityUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "trustedIssuersRegistry",
                  type: "address",
                },
              ],
              name: "TrustedIssuersRegistrySet",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_userAddresses",
                  type: "address[]",
                },
                {
                  internalType: "contract IIdentity[]",
                  name: "_identities",
                  type: "address[]",
                },
                {
                  internalType: "uint16[]",
                  name: "_countries",
                  type: "uint16[]",
                },
              ],
              name: "batchRegisterIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "contains",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "deleteIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "identity",
              outputs: [
                {
                  internalType: "contract IIdentity",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "identityStorage",
              outputs: [
                {
                  internalType: "contract IIdentityRegistryStorage",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "investorCountry",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "isVerified",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "issuersRegistry",
              outputs: [
                {
                  internalType: "contract ITrustedIssuersRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "registerIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_claimTopicsRegistry",
                  type: "address",
                },
              ],
              name: "setClaimTopicsRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistryStorage",
                  type: "address",
                },
              ],
              name: "setIdentityRegistryStorage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_trustedIssuersRegistry",
                  type: "address",
                },
              ],
              name: "setTrustedIssuersRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "topicsRegistry",
              outputs: [
                {
                  internalType: "contract IClaimTopicsRegistry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "updateCountry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
              ],
              name: "updateIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        ClaimTopicsRegistry: {
          address: "0xD53740915653D119Df744FbFeBb51fB477AC57f4",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "claimTopic",
                  type: "uint256",
                },
              ],
              name: "ClaimTopicAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "claimTopic",
                  type: "uint256",
                },
              ],
              name: "ClaimTopicRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_claimTopic",
                  type: "uint256",
                },
              ],
              name: "addClaimTopic",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getClaimTopics",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_claimTopic",
                  type: "uint256",
                },
              ],
              name: "removeClaimTopic",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        IdentityRegistryStorage: {
          address: "0x679429F26871a3B2A3736BE6C65f5D65fB806D9c",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "AgentRemoved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "uint16",
                  name: "country",
                  type: "uint16",
                },
              ],
              name: "CountryModified",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "oldIdentity",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "newIdentity",
                  type: "address",
                },
              ],
              name: "IdentityModified",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "identityRegistry",
                  type: "address",
                },
              ],
              name: "IdentityRegistryBound",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "identityRegistry",
                  type: "address",
                },
              ],
              name: "IdentityRegistryUnbound",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityStored",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "investorAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "contract IIdentity",
                  name: "identity",
                  type: "address",
                },
              ],
              name: "IdentityUnstored",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "addAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "addIdentityToStorage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "bindIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "isAgent",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "linkedIdentityRegistries",
              outputs: [
                {
                  internalType: "address[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "contract IIdentity",
                  name: "_identity",
                  type: "address",
                },
              ],
              name: "modifyStoredIdentity",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
                {
                  internalType: "uint16",
                  name: "_country",
                  type: "uint16",
                },
              ],
              name: "modifyStoredInvestorCountry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_agent",
                  type: "address",
                },
              ],
              name: "removeAgent",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "removeIdentityFromStorage",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "storedIdentity",
              outputs: [
                {
                  internalType: "contract IIdentity",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_userAddress",
                  type: "address",
                },
              ],
              name: "storedInvestorCountry",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_identityRegistry",
                  type: "address",
                },
              ],
              name: "unbindIdentityRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        TrustedIssuersRegistry: {
          address: "0x9fF90Afc253dbD746c1eB803f613ADb84d7Dd316",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IClaimIssuer",
                  name: "trustedIssuer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "ClaimTopicsUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IClaimIssuer",
                  name: "trustedIssuer",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "TrustedIssuerAdded",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "contract IClaimIssuer",
                  name: "trustedIssuer",
                  type: "address",
                },
              ],
              name: "TrustedIssuerRemoved",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "_claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "addTrustedIssuer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
              ],
              name: "getTrustedIssuerClaimTopics",
              outputs: [
                {
                  internalType: "uint256[]",
                  name: "",
                  type: "uint256[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTrustedIssuers",
              outputs: [
                {
                  internalType: "contract IClaimIssuer[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "claimTopic",
                  type: "uint256",
                },
              ],
              name: "getTrustedIssuersForClaimTopic",
              outputs: [
                {
                  internalType: "contract IClaimIssuer[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_issuer",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_claimTopic",
                  type: "uint256",
                },
              ],
              name: "hasClaimTopic",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "init",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_issuer",
                  type: "address",
                },
              ],
              name: "isTrustedIssuer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
              ],
              name: "removeTrustedIssuer",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract IClaimIssuer",
                  name: "_trustedIssuer",
                  type: "address",
                },
                {
                  internalType: "uint256[]",
                  name: "_claimTopics",
                  type: "uint256[]",
                },
              ],
              name: "updateIssuerClaimTopics",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        TREXFactory: {
          address: "0x1794f49351E54EC46CD0D087664444d386605eAC",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementationAuthority_",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "idFactory_",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_addr",
                  type: "address",
                },
              ],
              name: "Deployed",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_idFactory",
                  type: "address",
                },
              ],
              name: "IdFactorySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_implementationAuthority",
                  type: "address",
                },
              ],
              name: "ImplementationAuthoritySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "_token",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_ir",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_irs",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_tir",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_ctr",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "_mc",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "_salt",
                  type: "string",
                },
              ],
              name: "TREXSuiteDeployed",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_salt",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "address",
                      name: "owner",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "uint8",
                      name: "decimals",
                      type: "uint8",
                    },
                    {
                      internalType: "address",
                      name: "irs",
                      type: "address",
                    },
                    {
                      internalType: "address",
                      name: "ONCHAINID",
                      type: "address",
                    },
                    {
                      internalType: "address[]",
                      name: "irAgents",
                      type: "address[]",
                    },
                    {
                      internalType: "address[]",
                      name: "tokenAgents",
                      type: "address[]",
                    },
                    {
                      internalType: "address[]",
                      name: "complianceModules",
                      type: "address[]",
                    },
                    {
                      internalType: "bytes[]",
                      name: "complianceSettings",
                      type: "bytes[]",
                    },
                  ],
                  internalType: "struct ITREXFactory.TokenDetails",
                  name: "_tokenDetails",
                  type: "tuple",
                },
                {
                  components: [
                    {
                      internalType: "uint256[]",
                      name: "claimTopics",
                      type: "uint256[]",
                    },
                    {
                      internalType: "address[]",
                      name: "issuers",
                      type: "address[]",
                    },
                    {
                      internalType: "uint256[][]",
                      name: "issuerClaims",
                      type: "uint256[][]",
                    },
                  ],
                  internalType: "struct ITREXFactory.ClaimDetails",
                  name: "_claimDetails",
                  type: "tuple",
                },
              ],
              name: "deployTREXSuite",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getIdFactory",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getImplementationAuthority",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_salt",
                  type: "string",
                },
              ],
              name: "getToken",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_contract",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "recoverContractOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "idFactory_",
                  type: "address",
                },
              ],
              name: "setIdFactory",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "implementationAuthority_",
                  type: "address",
                },
              ],
              name: "setImplementationAuthority",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "tokenDeployed",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
