import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

//redux stuff

function SideMenu({ changeSideMenu }) {
  return (
    <Fragment>
      <div
        className="h-screen w-full absolute z-50 top-0 right-0 bg-black bg-opacity-5"
        id="SideMenu"
      >
        <div className="relative w-full h-full">
          <h3 className="absolute top-170/2 centerHorizontal font-semibold text-2xl text-white hover:text-gray-400">
            <a
              role="button"
              onClick={() => changeSideMenu()}
              className="border border-black py-2 px-3 rounded-lg bg-black bg-opacity-70 hover:bg-white hover:text-black"
            >
              CLOSE
            </a>
          </h3>
          <div className="w-full h-1/2 centerSom bg-black bg-opacity-90">
            <div className="relative w-full h-full">
              <div className="w-180/2 h-4/5 border-tb border-white centerSom">
                <ul className="w-full h-full divide-y text-white">
                  <a href="#" className="">
                    <li className="w-full h-1/5 text-2xl uppercase font-light relative border-b border-white menu-shadow">
                      <p className="absolute centerSom">Dashboard</p>
                    </li>
                  </a>
                  <a href="#" className="">
                    <li className="w-full h-1/5 text-2xl uppercase font-light relative border-b border-white menu-shadow">
                      <p className="absolute centerSom">About</p>
                    </li>
                  </a>
                  <a role="button" className="">
                    <li className="w-full h-1/5 text-2xl uppercase font-light relative border-b border-white menu-shadow">
                      <p className="absolute centerSom">Help</p>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

SideMenu.propTypes = {
  changeSideMenu: PropTypes.func.isRequired,
};

export default SideMenu;
