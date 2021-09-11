import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Header({ changeSideMenu }) {
  const [mobMenu, setMobMenu] = useState("hidden");
  function controlMobMenu() {
    mobMenu === "hidden" ? setMobMenu("block") : setMobMenu("hidden");
  }

  return (
    <header class="w-full h-1/6 px-20 md2:px-10 usm:px-2">
      <div class="w-full h-full relative">
        <div class="w-1/2 h-full float-left e relative">
          <h1
            class="
              w-1/4
              h-auto
              text-3xl
              fontColor
              nunitoFont
              font-extrabold
              absolute
              centerVertical
              lg2:w-2/4
              md2:w-full
            "
          >
            BOT APP
          </h1>
        </div>
        <div class="w-1/2 h-full float-right e relative">
          <div
            class="
              w-2/3
              h-1/3
              absolute
              centerVertical
              right-0
              e
              grid grid-cols-3
              col-span-4
              lg2:col-span-1 lg2:w-full
            "
          >
            <div class="w-full h-full e relative text-right block md2:hidden">
              <h3
                class="
                  w-full
                  h-auto
                  text-2xl text-white
                  nunitoFont
                  font-semibold
                  absolute
                  centerVertcial
                  right-0
                  top-1
                "
              >
                Dashboard
              </h3>
            </div>
            <div class="w-full h-full e relative text-right block md2:hidden">
              <h3
                class="
                  w-full
                  h-auto
                  text-2xl text-white
                  nunitoFont
                  font-semibold
                  absolute
                  centerVertcial
                  right-0
                  top-1
                  lg2:-right-3
                "
              >
                About
              </h3>
            </div>
            <div class="w-full h-full e relative text-right block md2:hidden">
              <h3
                class="
                  w-full
                  h-auto
                  text-2xl text-white
                  nunitoFont
                  font-semibold
                  absolute
                  centerVertcial
                  right-0
                  top-1
                "
              >
                Help
              </h3>
            </div>
          </div>
          <div class="w-full h-full relative hidden md2:block">
            <button type="button" onClick={() => changeSideMenu()}>
              <img
                src="./img/icons8-menu-96.png"
                alt="menu icon"
                class="w-10 h-10 absolute centerVertical right-0"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  changeSideMenu: PropTypes.func.isRequired,
};

export default Header;
