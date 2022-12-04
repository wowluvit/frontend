import { useMoralis, useWeb3Contract } from "react-moralis";

// const createPostTransaction = async (e) => {
//   e.preventDefault();
//   const { provider } = useMoralis();
//   const signer = provider.getSigner();
//   const address = await signer.getAddress(); //users public key
//   const messageRequested = (
//     await axios.get(
//       `https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`
//     )
//   ).data; //Get message
//   const signedMessage = await signer.signMessage(messageRequested); //Sign message
//   return {
//     signedMessage: signedMessage,
//     address: address,
//   };
// }

export default function Footer() {
  const {
    runContractFunction: addUser,
    data: userData,
    addUserLoading,
    addUserIsFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    functionName: "createPost",
    msgValue: "0x",
    params: {
      userName: "bob",
      email: "ae13@x.com",
    },
  });

  const {
    runContractFunction: addCard,
    data: cardData,
    addCardIsLoading,
    addCardIsFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    functionName: "createPost",
    msgValue: "0x",
    params: {
      title: "",
      content: "",
    },
  });

  const {
    runContractFunction: addGroup,
    data: groupData,
    addGroupIsLoading,
    addGroupIsFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    functionName: "createPost",
    msgValue: "0x",
    params: {
      groupName: "",
      description: "",
    },
  });

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    const { title, content, image } = e.target.elements;
    const post = {
      username: title.value,
      email: content.value,
    };
    await addUser(post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="tabs w-screen justify-around">
        <a className="tab tab-lg tab-lifted">Topics</a>
        <a className="tab tab-lg tab-lifted tab-active">Feed</a>
        <a className="tab tab-lg tab-lifted">
          <label for="my-modal" class="btn">
            +
          </label>
        </a>

        <a className="tab tab-lg tab-lifted">Discover</a>
      </div>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create new Post</h3>
          <p className="py-4">
            <form id="newPostForm" onSubmit={handleUserSubmit}>
              <input
                id="topCommment"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                id="topCommment"
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </form>
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Create post
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "streamId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "topic",
        type: "string",
      },
      {
        internalType: "bool",
        name: "foreignCard",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "shareableCard",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "dateTimeValue",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "topComment",
        type: "string",
      },
      {
        internalType: "string",
        name: "imageLine",
        type: "string",
      },
      {
        internalType: "string",
        name: "bottomComment",
        type: "string",
      },
    ],
    name: "addCard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "groupName",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "addGroup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "userName",
        type: "string",
      },
      {
        internalType: "string",
        name: "emailVal",
        type: "string",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "animals",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "appName",
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
    name: "appNameLC",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "cars",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
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
        name: "",
        type: "address",
      },
    ],
    name: "curators",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "accountAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "userName",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "followList",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "followersList",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "blockList",
            type: "address[]",
          },
        ],
        internalType: "struct WowLuvIt.User",
        name: "user",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "curatorStream",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "address",
                name: "accountAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "userName",
                type: "string",
              },
              {
                internalType: "string",
                name: "email",
                type: "string",
              },
              {
                internalType: "address[]",
                name: "followList",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "followersList",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "blockList",
                type: "address[]",
              },
            ],
            internalType: "struct WowLuvIt.User",
            name: "user",
            type: "tuple",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            components: [
              {
                internalType: "address",
                name: "accountAddress",
                type: "address",
              },
              {
                internalType: "string",
                name: "userName",
                type: "string",
              },
              {
                internalType: "string",
                name: "email",
                type: "string",
              },
              {
                internalType: "address[]",
                name: "followList",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "followersList",
                type: "address[]",
              },
              {
                internalType: "address[]",
                name: "blockList",
                type: "address[]",
              },
            ],
            internalType: "struct WowLuvIt.User[]",
            name: "followersList",
            type: "tuple[]",
          },
        ],
        internalType: "struct WowLuvIt.Curator",
        name: "curatorId",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCelebrityCurators",
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
    name: "getStandardTopics",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "groupList",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "groupStream",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "groupId",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
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
        name: "",
        type: "address",
      },
    ],
    name: "home",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
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
        name: "",
        type: "address",
      },
    ],
    name: "payWall",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "entryFee",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
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
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "counter",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "allowList",
            type: "address[]",
          },
          {
            internalType: "address[]",
            name: "blockList",
            type: "address[]",
          },
        ],
        internalType: "struct WowLuvIt.UserStream",
        name: "userStream",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "profilesList",
    outputs: [
      {
        internalType: "bool",
        name: "twoFactorSet",
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
        name: "",
        type: "address",
      },
    ],
    name: "sports",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
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
        name: "",
        type: "address",
      },
    ],
    name: "topics",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "travel",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
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
        name: "",
        type: "address",
      },
    ],
    name: "userSettings",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "defaultTopic",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "usersList",
    outputs: [
      {
        internalType: "address",
        name: "accountAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "userName",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wallet",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "balance",
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
        name: "",
        type: "address",
      },
    ],
    name: "web3",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
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
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "counter",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
