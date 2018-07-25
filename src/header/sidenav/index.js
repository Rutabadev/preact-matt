import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

export const SideNav = ({ features, sideNavDisplay, closeHandler }) => {
  const links = [];
  features.forEach(feature => {
    links.push(
      <Link activeClassName="active" href={feature.path}>
        <button onClick={closeHandler} class={feature.main ? "main" : ""}>
          {feature.name}
        </button>
      </Link>
    );
  });

  return (
    <div class={"sidenav " + sideNavDisplay}>
      <div class="table-wrapper">
        <div class="close-button-wrapper">
          <button class="close-button" onClick={closeHandler}>
            X
          </button>
        </div>
      </div>
      {links}
    </div>
  );
};
