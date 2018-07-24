import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";

export const SideNav = ({ features, sideNavDisplay, closeHandler }) => {
  const links = [];
  features.forEach(feature => {
    links.push(
      <Link activeClassName="active" href={feature.path}>
        <button class={feature.main ? "main" : ""}>{feature.name}</button>
      </Link>
    );
  });

  return (
    <div class={sideNavDisplay}>
      <div class="sidenav">
        <button class="close-button" onClick={closeHandler}>
          X
        </button>
        {links}
      </div>
    </div>
  );
};
