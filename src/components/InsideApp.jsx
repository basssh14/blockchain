import React from "react";
import PropTypes from "prop-types";
import Header from "./individual/Header";
import { Redirect, withRouter } from "react-router-dom";
//call moralis
import moralis from "moralis";
import {
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
  useMoralis,
} from "react-moralis";
moralis.initialize("J756LxKeX5k5jv5tGhUJ5PgtmjqLgcAiC5dJS1xp");
moralis.serverURL = "https://njddvgmirqqv.bigmoralis.com:2053/server";

function InsideApp(props) {
  //moralis stuffs
  const { authenticate, user, isAuthenticated } = useMoralis();
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="w-full h-full relative">
        <Header />
        <main className="w-full h-5/6 px-20 relative">
          <div className="w-3/5 h-full centerSom lg3:w-3/4 lg1:w-180/2 sm3:w-full">
            <div className="w-full h-24/2 relative">
              <h3
                className="
              w-auto
              h-auto
              text-4xl text-white text-center
              nunitoFont
              font-semibold
              centerSom
              sm2:w-full
            "
              >
                Start using bot
              </h3>
            </div>
            <div
              className="
            w-full
            h-auto
            relative
            gap-x-20 gap-y-5
            grid grid-cols-2
            md3:gap-x-10
            sm2:grid sm2:grid-cols-1
          "
            >
              <div className="h-auto sm2:w-full">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  Base Currency Address
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="h-auto sm2:mt-3">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  Quote Currency Address
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="h-auto sm2:mt-3">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  From Exchange
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="h-auto sm2:mt-3">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  To Exchange
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="h-auto sm2:mt-3">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  Slipagge
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="h-auto sm2:mt-3">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  Gas
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="h-auto sm2:mt-3">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  Min profit
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="h-auto sm2:mt-3">
                <label
                  className="text-2xl nunitoFont fontColor font-light ml-2 md2:text-xl"
                  for=""
                >
                  Blockchain
                </label>
                <input
                  className="
                w-full
                h-12
                px-5
                nunitoFont
                bg-white
                border-4
                borderOrange
                rounded-full
                mt-3
                sm2:mt-1
              "
                  type="text"
                  name="bsCurrency"
                />
              </div>
              <div className="col-span-2 h-auto relative sm2:col-span-1">
                <button
                  id="startNowButton"
                  type="button"
                  className="
                w-1/5
                h-16
                text-white
                absolute
                centerHorizontal
                text-3xl
                bgOrange
                top-5
                rounded-3xl
                hover:bg-white
                md2:w-2/5
                usm:w-4/5
              "
                >
                  Start Now
                </button>
              </div>
            </div>
            <footer className="w-full h-32 block border-t-2 border-black px-5 pt-3 footerPos">
              <p className="text-gray-500 text-rsmall text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus efficitur sem velit, eu vulputate est aliquet in.
                Fusce vehicula sagittis turpis, quis condimentum mauris
                scelerisque id. Quisque non mauris velit. Nulla massa diam,
                auctor id tempus non, rutrum ac purus. Praesent gravida dictum
                mauris, eu volutpat dolor hendrerit ac. Vivamus convallis nec
                sapien ac sagittis. Sed sit amet maximus eros. Etiam imperdiet
                metus leo, a condimentum arcu sodales sed. Vivamus semper sapien
                ac neque tristique, id aliquet turpis bibendum. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Nullam varius
                nisl a dui viverra, in consectetur erat iaculis. Nam non
                interdum metus, a bibendum neque. In scelerisque convallis
                commodo.
              </p>
            </footer>
          </div>
        </main>
      </div>
    );
  }
}

InsideApp.propTypes = {};

export default withRouter(InsideApp);
