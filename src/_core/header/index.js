import "./style.scss";
import { Component } from "preact";
import { Link } from "preact-router/match";
import { Login } from "./login";
import { SideNav } from "./sidenav";
import MenuIcon from "preact-icons/md/menu";
import OptionsIcon from "preact-icons/io/android-options";
import { Dropdown } from "../dropdown";
import { Modal, MODAL_TYPES } from "../modal";
import MobileIcon from "preact-icons/md/phone-android";
import LaptopIcon from "preact-icons/md/laptop-mac";
import InstallIcon from "preact-icons/md/file-download";
import firebase from "../../firebase";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      sideNavDisplay: "closed",
      dropdown: {
        open: false,
        lastchanged: null
      },
      dropdown2: {
        open: false,
        lastchanged: null
      },
      modalOpen: false,
      modalType: null,
      installAsPWA: false,
      prompEvent: null,
      nbFails: 0
    };

    this.closeSideNav = this.closeSideNav.bind(this);
    this.switchDrop = this.switchDrop.bind(this);
    this.switchDrop2 = this.switchDrop2.bind(this);
    this.handleTujou = this.handleTujou.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleInstallPWA = this.handleInstallPWA.bind(this);
    this.handleInstallPrompt = this.handleInstallPrompt.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setUser(userParam) {
    this.setState({ user: userParam });
    this.props.setUser(userParam);
  }

  openSideNav() {
    this.setState({ sideNavDisplay: "open" });
    document.body.classList.add("scroll-lock");
  }

  closeSideNav() {
    this.setState({ sideNavDisplay: "closed" });
    document.body.classList.remove("scroll-lock");
  }

  switchDrop() {
    if (
      Date.now() - this.state.dropdown.lastchanged > 100 ||
      this.state.dropdown.lastchanged === null
    ) {
      this.setState({
        dropdown: { open: !this.state.dropdown.open, lastchanged: Date.now() }
      });
    }
  }

  switchDrop2() {
    if (
      Date.now() - this.state.dropdown2.lastchanged > 100 ||
      this.state.dropdown2.lastchanged === null
    ) {
      this.setState({
        dropdown2: { open: !this.state.dropdown2.open, lastchanged: Date.now() }
      });
    }
  }

  handleTujou() {
    let res = Math.random();

    if (res < 0.9) {
      this.setState({ playin: "NON", nbFails: this.state.nbFails + 1 });
      if (this.state.user) {
        let lastMax;
        firebase
          .database()
          .ref("Scores/" + this.state.user.uid)
          .once("value")
          .then(snapshot => {
            lastMax = snapshot.val();
            if (lastMax) {
              this.setState({ maxFails: lastMax.max });
            }
            if (!lastMax || lastMax.max < this.state.nbFails) {
              let displayName = this.state.user.displayName;
              let max = this.state.nbFails;
              this.setState({ maxFails: this.state.nbFails });
              firebase
                .database()
                .ref("Scores/" + this.state.user.uid)
                .set({
                  displayName,
                  max
                })
                .catch(error => {
                  console.log("error ", error);
                });
            }
          });
      }
      if (this.state.nbFails > 4) {
        this.setState({ playin: "C'est mort" });
      }
      this.setState({ modalType: MODAL_TYPES.ERROR });
    } else {
      this.setState({ playin: "OUI", nbFails: 0 });
      this.setState({ modalType: MODAL_TYPES.SUCCESS });
    }
    this.setState({ modalOpen: true });
  }

  handleSuccess() {
    this.setState({ modalOpen: false });
    setTimeout(() => this.tujouHeader.focus(), 200);
  }

  handleInstallPWA() {
    this.setState({ installAsPWA: false, showDrop: false });
    this.state.prompEvent.prompt();
  }

  componentDidMount() {
    addEventListener("beforeinstallprompt", this.handleInstallPrompt);
  }

  handleInstallPrompt(e) {
    this.setState({ prompEvent: e, installAsPWA: true });
  }

  render(props, state) {
    const features = props.features;
    const links = [];
    features.forEach(feature => {
      links.push(
        <Link activeClassName="active" href={feature.path}>
          <button class={feature.main ? "main" : ""}>{feature.name}</button>
        </Link>
      );
    });

    let deviceButton = {};
    if (this.props.device === "mobile") {
      deviceButton = (
        <button
          onClick={this.props.changeDevice}
          aria-label="remove mobile restrictions"
        >
          <MobileIcon />
        </button>
      );
    } else {
      deviceButton = (
        <button
          onClick={this.props.changeDevice}
          aria-label="add mobile restrictions"
        >
          <LaptopIcon />
        </button>
      );
    }

    return (
      <div style="z-index: 1">
        <div class="header">
          <div class="start-bar">
            <div class="sidenav-switcher">
              <button
                class="sidenav-button"
                onClick={() => this.openSideNav()}
                aria-label="sidenav switcher"
              >
                <MenuIcon />
              </button>
              <SideNav
                features={features}
                sideNavDisplay={this.state.sideNavDisplay}
                closeHandler={this.closeSideNav}
                switchTheme={props.switchTheme}
                device={props.device}
                changeDevice={props.changeDevice}
                user={this.state.user}
              />
              <div className={"behind-sidenav " + this.state.sideNavDisplay} />
            </div>
            <nav class="menu-links">{links}</nav>
          </div>
          <div class="end-bar">
            <div class="dropdown-wrapper">
              <button
                class="options"
                onClick={() => this.switchDrop()}
                aria-label="options"
              >
                <OptionsIcon class="icon" />
              </button>
              <Dropdown
                show={this.state.dropdown.open}
                closeHandler={this.switchDrop}
              >
                <div class="dropdown-content">
                  <div class="dropdown-wrapper ontop">
                    <button class='primary' onClick={() => this.switchDrop2()}>
                      theme
                    </button>
                    <Dropdown show={this.state.dropdown2.open} closeHandler={this.switchDrop2} direction={"left"}>
                      <div class="themes-wrap">
                        <button aria-label="light theme switch" onClick={() => this.props.changeTheme("light")}>light</button>
                        <button aria-label="dark theme switch" onClick={() => this.props.changeTheme("dark")}>dark</button>
                        <button aria-label="neon theme switch" onClick={() => this.props.changeTheme("neon")}>neon</button>
                      </div>
                    </Dropdown>
                  </div>
                  {deviceButton}
                  <button
                    ref={tujouHeader => (this.tujouHeader = tujouHeader)}
                    class="tujou"
                    onClick={this.handleTujou}
                  >
                    Tu joues ce soir ?
                  </button>
                  {this.state.installAsPWA && (
                    <button onClick={this.handleInstallPWA}>
                      <InstallIcon /> Install
                    </button>
                  )}
                </div>
              </Dropdown>
            </div>
            <Login setUser={this.setUser} />
          </div>
        </div>
        <Modal
          onSuccess={this.handleSuccess}
          type={this.state.modalType}
          modalOpen={this.state.modalOpen}
          focusOk={true}
        >
          <h1>{this.state.playin}</h1>
          {this.state.nbFails > 4 && (
            <div>
              <p>
                ({this.state.nbFails} échecs
                {this.state.user ? `, max ${this.state.maxFails}` : ""}){" "}
                <Link
                  style={{ color: "grey" }}
                  href="/highscores"
                  onClick={() => this.setState({ modalOpen: false })}
                >
                  {" "}
                  highscores
                </Link>
              </p>
              <div
                id="progress-bar"
                style={{
                  height: "10px",
                  backgroundImage:
                    "linear-gradient(to right, green, yellow, orange, red)",
                  marginBottom: "10px",
                  clipPath: `inset(0px ${100 -
                    (this.state.nbFails / 20) * 100}% 0px 0px)`
                }}
              />
              {this.state.nbFails >= 20 && (
                <img
                  src="../../assets/neko.jpg"
                  style={{
                    align: "center",
                    height: "300px",
                    margin: "0 auto",
                    display: "block"
                  }}
                />
              )}
            </div>
          )}
        </Modal>
      </div>
    );
  }
}
