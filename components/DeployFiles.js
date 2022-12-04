import React from "react";
import axios from "axios";
import lighthouse from "@lighthouse-web3/sdk";
import { useMoralis } from "react-moralis";
// import { useWeb3AuthContext } from "../contexts/SocialLoginContext";

function DeployFiles() {
  const sign_message = async () => {
    window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
      console.log("Account Connected: " + res[0]);
    });
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { provider } = useMoralis();
    // const { provider } = useWeb3AuthContext();
    const signer = provider.getSigner();
    const address = await signer.getAddress(); //users public key
    const messageRequested = (
      await axios.get(
        `https://api.lighthouse.storage/api/auth/get_message?publicKey=${address}`
      )
    ).data; //Get message
    const signedMessage = await signer.signMessage(messageRequested); //Sign message
    return {
      signedMessage: signedMessage,
      address: address,
    };
  };

  const deploy = async (e) => {
    // Sign message for authentication
    const signingResponse = await sign_message();

    // Get a bearer token
    const accessToken = (
      await axios.post(
        `https://api.lighthouse.storage/api/auth/verify_signer`,
        {
          publicKey: signingResponse.address,
          signedMessage: signingResponse.signedMessage,
        }
      )
    ).data.accessToken;

    // Push file to lighthouse node
    const output = await lighthouse.upload(e, accessToken);
    console.log("File Status:", output);
    /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

    console.log("Visit at https://ipfs.io/ipfs/" + output.data.Hash);
  };

  return (
    <div className="App">
      <input onChange={(e) => deploy(e)} type="file" />
    </div>
  );
}

export default DeployFiles;
