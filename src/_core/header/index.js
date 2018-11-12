import './style.scss'
import { Component } from 'preact'
import { Link } from 'preact-router/match'
import { Login } from './login'
import { SideNav } from './sidenav'
import MenuIcon from 'preact-icons/md/menu'
import OptionsIcon from 'preact-icons/io/android-options'
import ColorIcon from 'preact-icons/go/color-mode'
import { Dropdown } from '../dropdown'
import { Modal, MODAL_TYPES } from '../modal'
import MobileIcon from 'preact-icons/md/phone-android'
import LaptopIcon from 'preact-icons/md/laptop-mac'
import InstallIcon from 'preact-icons/md/file-download'
import firebase from '../../firebase'


export class Header extends Component {

  constructor() {
    super()
    this.state = {
      sideNavDisplay: 'closed',
      dropdown: {
        open: false,
        lastchanged: null
      },
      modalOpen: false,
      modalType: null,
      installAsPWA: false,
      prompEvent: null,
      nbFails: 0
    }

    this.closeSideNav = this.closeSideNav.bind(this)
    this.switchDrop = this.switchDrop.bind(this)
    this.handleTujou = this.handleTujou.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleInstallPWA = this.handleInstallPWA.bind(this)
    this.handleInstallPrompt = this.handleInstallPrompt.bind(this)
  }

  openSideNav() {
    this.setState({ sideNavDisplay: 'open' })
    document.body.classList.add('scroll-lock')
  }

  closeSideNav() {
    this.setState({ sideNavDisplay: 'closed' })
    document.body.classList.remove('scroll-lock')
  }

  switchDrop() {
    if (Date.now() - this.state.dropdown.lastchanged > 100 || this.state.dropdown.lastchanged === null) {
      this.setState({ dropdown: { open: !this.state.dropdown.open, lastchanged: Date.now() } })
    }
  }

  handleTujou() {
    let email = 'le mail'
    let fname = 'le prénom'
    let lname = 'le nom'
    firebase.database().ref('Users/').set({
      email,
      lname,
      fname
  }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
    let res = Math.random()
    if (res < 0.9) {
      this.setState({ playin: 'NON', nbFails: this.state.nbFails + 1 })
      if (this.state.nbFails > 4) {
        this.setState({ playin: "C'est mort" })
      }
      this.setState({ modalType: MODAL_TYPES.ERROR })
    } else {
      this.setState({ playin: 'OUI', nbFails: 0 })
      this.setState({ modalType: MODAL_TYPES.SUCCESS })
    }
    this.setState({ modalOpen: true })
  }

  handleSuccess() {
    this.setState({ modalOpen: false })
    setTimeout(() => this.tujouHeader.focus(), 200)
  }

  handleInstallPWA() {
    this.setState({ installAsPWA: false, showDrop: false });
    this.state.prompEvent.prompt();
  }

  componentDidMount() {
    addEventListener('beforeinstallprompt', this.handleInstallPrompt);
  }

  handleInstallPrompt(e) {
    this.setState({ prompEvent: e, installAsPWA: true })
  }

  render(props, state) {
    const features = props.features
    const links = []
    features.forEach(feature => {
      links.push(
        <Link activeClassName='active' href={feature.path}>
          <button class={feature.main ? 'main' : ''}>{feature.name}</button>
        </Link>
      )
    })

    let deviceButton = {}
    if (this.props.device === 'mobile') {
      deviceButton = (
        <button onClick={this.props.changeDevice} aria-label='remove mobile restrictions'>
          <MobileIcon />
        </button>
      )
    } else {
      deviceButton = (
        <button onClick={this.props.changeDevice} aria-label='add mobile restrictions' >
          <LaptopIcon />
        </button >
      )
    }

    return (
      <div style="z-index: 1">
        <div class="header">
          <div class="start-bar">
            <div class='sidenav-switcher'>
              <button class='sidenav-button' onClick={() => this.openSideNav()} aria-label='sidenav switcher'>
                <MenuIcon />
              </button>
              <SideNav
                features={features}
                sideNavDisplay={this.state.sideNavDisplay}
                closeHandler={this.closeSideNav}
                changeTheme={props.changeTheme}
                device={props.device}
                changeDevice={props.changeDevice}
              />
              <div className={'behind-sidenav ' + this.state.sideNavDisplay} />
            </div>
            <nav class='menu-links'>{links}</nav>
          </div>
          <div class='end-bar'>
            <div class="dropdown-wrapper">
              <button class='options' onClick={() => this.switchDrop()} aria-label='options'>
                <OptionsIcon class='icon' />
              </button>
              <Dropdown show={this.state.dropdown.open} closeHandler={this.switchDrop}>
                <div class="dropdown-content">
                  <button onClick={this.props.changeTheme} aria-label='theme switch'>
                    <ColorIcon />
                  </button>
                  {deviceButton}
                  <button ref={tujouHeader => this.tujouHeader = tujouHeader} class="tujou" onClick={this.handleTujou}>
                    Tu joues ce soir ?
                </button>
                  {this.state.installAsPWA && <button onClick={this.handleInstallPWA}>
                    <InstallIcon /> Install
                </button>}
                </div>
              </Dropdown>
            </div>
            <Login />
          </div>
        </div>
        <Modal onSuccess={this.handleSuccess} type={this.state.modalType} modalOpen={this.state.modalOpen}>
          <h1>{this.state.playin}</h1>
          {this.state.nbFails > 4 &&
            <div>
              <p>({this.state.nbFails} échecs)</p>
              <div id="progress-bar" style={{ height: "10px", backgroundImage: "linear-gradient(to right, green, yellow, orange, red)", marginBottom: "10px", clipPath: `inset(0px ${100 - ((this.state.nbFails / 20) * 100)}% 0px 0px)` }}></div>
              {this.state.nbFails >= 20 && <img src="../../assets/neko.jpg" style={{ align: 'center', height: '300px', margin: '0 auto', display: 'block' }}></img>}
            </div>
          }
        </Modal>
      </div>
    )
  }
}
