import React, {useEffect, useState} from "react";
import moralis from "moralis";
import axios from "axios";
import {ParaSwap} from 'paraswap';
import { useMoralisWeb3Api, useMoralisWeb3ApiCall, useMoralis } from "react-moralis";
//call moralis
moralis.initialize("J756LxKeX5k5jv5tGhUJ5PgtmjqLgcAiC5dJS1xp");
moralis.serverURL = "https://njddvgmirqqv.bigmoralis.com:2053/server";
const paraSwap = new ParaSwap();

function App() {
  
  //basic variables 
  const [tokenPrice, setTokenPrice] = useState({
    usdPrice: 0,
  });
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [srcAmount, setSrcAmount] = useState("");
  const [sourceInch, setSourceInch] = useState("");
  const [destinationInch, setDestinationInch] = useState("");
  const [srcAmountInch, setSrcAmountInch] = useState("");
  const [sourceMatcha, setSourceMatcha] = useState("");
  const [destinationMatcha, setDestinationMatcha] = useState("");
  const [srcAmountMatcha, setSrcAmountMatcha] = useState("");
  const [token, setToken] = useState("");
  const Web3Api = useMoralisWeb3Api();
  let tokenMetadata;
  let newPrice;
  let swapPrice;
  let inchPrice;
  let matchaPrice;

  //Functions
  //Get token price on PancakeSwap v2 BSC
  async function getPrice(userToken){
    const options = {
      chain: "eth",
      address: userToken,
    };
    try{
     newPrice = await Web3Api.token.getTokenPrice(options)
     return newPrice;
  } catch(e){
    return e;
  }
}
  //Get tokens Swap by paraswap
  async function getSwap(source, destination, srcAmount){  
    try{
    swapPrice = await paraSwap.getRate(source, destination, srcAmount);
    return swapPrice;
  } catch(e){
    return e;
  }
}
//Get tokens Swap by 1inch
async function getSwapInch(source, destination, srcAmount){  
  const url = "https://api.1inch.exchange/v3.0/1/quote?fromTokenAddress=" + source + "&toTokenAddress=" + destination + "&amount=" + srcAmount;
  try{
  inchPrice = await axios.get(url);
  return inchPrice;
} catch(e){
  return e;
}
}
//Get tokens Swap by matcha
async function getSwapMatcha(source, destination, srcAmount){  
  const url = "https://api.0x.org/swap/v1/price?sellToken=" + source + "&buyToken=" + destination + "&sellAmount=" + srcAmount;
  try{
  matchaPrice = await axios.get(url);
  return matchaPrice;
} catch(e){
  return e;
}
}
  //update the token value in state
  function onChangeToken(e){
    setToken(e.target.value);
  }
  //update the source value in state
  function onChangeSource(e){
    setSource(e.target.value);
  }
  //update the srcamount value in state
  function onChangeSrcAmount(e){
    setSrcAmount(e.target.value);
  }
  //update the Destination value in state
  function onChangeDestination(e){
    setDestination(e.target.value);
  }
  //update the sourceInch value in state
  function onChangeSourceInch(e){
    setSourceInch(e.target.value);
  }
  //update the srcamountInch value in state
  function onChangeSrcAmountInch(e){
    setSrcAmountInch(e.target.value);
  }
  //update the DestinationInch value in state
  function onChangeDestinationInch(e){
    setDestinationInch(e.target.value);
  }
  //update the sourceMatcha value in state
  function onChangeSourceMatcha(e){
    setSourceMatcha(e.target.value);
  }
  //update the srcamountMatcha value in state
  function onChangeSrcAmountMatcha(e){
    setSrcAmountMatcha(e.target.value);
  }
  //update the DestinationMatcha value in state
  function onChangeDestinationMatcha(e){
    setDestinationMatcha(e.target.value);
  }

  //funtion to get the user token price
  async function onSubmit(e){
    e.preventDefault();
    //await getPrice(token)
    setTokenPrice(await getPrice(token))
  }
  //funtion to get the swap price
  async function onSubmitSwap(e){
    e.preventDefault();
    //await getPrice(token)
    //setTokenPrice(await getPrice(token))
    console.log(await getSwap(source, destination, srcAmount))
  }
  //funtion to get the swap price
  async function onSubmitInch(e){
    e.preventDefault();
    //await getPrice(token)
    //setTokenPrice(await getPrice(token))
    console.log(await getSwapInch(sourceInch, destinationInch, srcAmountInch))
  }
  //funtion to get the swap price
  async function onSubmitMatcha(e){
    e.preventDefault();
    //await getPrice(token)
    //setTokenPrice(await getPrice(token))
    console.log(await getSwapMatcha(sourceMatcha, destinationMatcha, srcAmountMatcha))
  }

  // async function logPromiseResult(){
  //   console.log(await getPrice());
  // }
  // logPromiseResult();
  
  return(
    <div>
      <form onClick={(e) => onSubmit(e)} >
        <h1>Get currency value USD</h1>
        <input type="text" name="address" value={token} onChange={(e) => onChangeToken(e)}/>
        <button type="submit">Check</button>
      </form>
        <p>{"Your price is: " + tokenPrice.usdPrice}</p>
      <form onClick={(e) => onSubmitSwap(e)} >
        <h1>Paraswap exchange</h1>
        <input type="text" name="source" value={source} onChange={(e) => onChangeSource(e)}/>
        <input type="text" name="destination" value={destination} onChange={(e) => onChangeDestination(e)}/>
        <input type="text" name="srcAmount" value={srcAmount} onChange={(e) => onChangeSrcAmount(e)}/>
        <button type="submit">Check</button>
      </form>
      <form onClick={(e) => onSubmitInch(e)} >
        <h1>1inch exchange</h1>
        <input type="text" name="source" value={sourceInch} onChange={(e) => onChangeSourceInch(e)}/>
        <input type="text" name="destination" value={destinationInch} onChange={(e) => onChangeDestinationInch(e)}/>
        <input type="text" name="srcAmount" value={srcAmountInch} onChange={(e) => onChangeSrcAmountInch(e)}/>
        <button type="submit">Check</button>
      </form>
      <form onClick={(e) => onSubmitMatcha(e)} >
        <h1>Matcha exchange</h1>
        <input type="text" name="source" value={sourceMatcha} onChange={(e) => onChangeSourceMatcha(e)}/>
        <input type="text" name="destination" value={destinationMatcha} onChange={(e) => onChangeDestinationMatcha(e)}/>
        <input type="text" name="srcAmount" value={srcAmountMatcha} onChange={(e) => onChangeSrcAmountMatcha(e)}/>
        <button type="submit">Check</button>
      </form>
    </div>
  )
}

export default App;



