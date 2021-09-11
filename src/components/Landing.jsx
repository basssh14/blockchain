import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import Header from "./individual/Header";
import SideMenu from "./individual/SideMenu";
//call moralis
import moralis from "moralis";
import {
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
  useMoralis,
} from "react-moralis";
moralis.initialize("J756LxKeX5k5jv5tGhUJ5PgtmjqLgcAiC5dJS1xp");
moralis.serverURL = "https://njddvgmirqqv.bigmoralis.com:2053/server";

function Landing(props) {
  //moralis stuff
  const Web3Api = useMoralisWeb3Api();
  const { authenticate, user, isAuthenticated } = useMoralis();
  const authenticateUser = async () => {
    try {
      const newUser = await authenticate({ provider: "walletconnect" });
    } catch (err) {
      console.log(err);
    }
  };
  const [sideMenu, setSideMenu] = useState(false);
  const changeSideMenu = () => {
    setSideMenu(!sideMenu);
    console.log("display");
  };
  if (isAuthenticated) {
    return <Redirect to="/appInside" />;
  } else {
    return (
      <div className="w-full h-full relative">
        <Header changeSideMenu={changeSideMenu} />
        <main className="w-full h-5/6 px-20 relative usm:px-5 bodyMinHeight">
          <div
            className="
          w-2/3
          h-4/5
          absolute
          centerVertical
          left-0
          sm3:w-full sm3:centerSom
        "
          >
            <div className="w-full h-full relative">
              <div className="w-4/5 h-2/3 absolute centerHorizontal top-0 usm:w-full">
                <div className="w-full h-full relative">
                  <p
                    className="
                  w-180/2
                  h-auto
                  nunitoFont
                  font-bold
                  font3dot5
                  text-white text-center
                  centerSom
                  lg3:text-5xl
                  lg2:text-4xl
                  usm:text-3xl usm:w-full usm:text-justify
                "
                  >
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="w-4/5 h-1/3 e absolute centerHorizontal bottom-0 usm:w-180/2">
                <div className="h-3/5 w-full e relative">
                  <button
                    className="
                  w-1/3
                  h-1/2
                  centerSom
                  text-3xl
                  nunitoFont
                  font-bold
                  bottom-0
                  text-white
                  rounded-lg
                  bgOrange
                  lg2:w-2/5
                  lg1:w-3/5
                  usm:w-full usm:text-2xl
                "
                    type="button"
                    onClick={() => authenticateUser()}
                  >
                    Connect Wallet
                  </button>
                </div>
                <div className="h-2/5 w-full e relative">
                  <p
                    className="
                  w-auto
                  h-auto
                  absolute
                  centerHorizontal
                  text-white
                  -top-5
                  text-2xl
                  nunitoFont
                  font-bold
                  uppercase
                  underline
                  lg2:text-xl
                  lg1:text-lg
                  usm:text-base usm:w-full usm:text-center
                "
                  >
                    or view a demo
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="
          w-1/3
          h-4/5
          absolute
          centerVertical
          right-0
          lg3:w-2/5
          lg2:w-1/2
          lg1:w-3/5
          sm3:hidden
        "
          >
            <div
              className="
            w-full
            h-full
            absolute
            -left-40
            -top-3
            lg3:-left-20
            lg2:-left-0
            lg1:left-20
          "
            >
              <img className="w-full h-full bg-cover" src="./img/image34.png" />
            </div>
          </div>
        </main>
        {sideMenu && <SideMenu changeSideMenu={changeSideMenu} />}
        {/* <SideMenu /> */}
      </div>
    );
  }
}

Landing.propTypes = {};

export default withRouter(Landing);
