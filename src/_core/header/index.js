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
import InstallIcon from 'preact-icons/md/file-download';


export class Header extends Component {
  openSideNav() {
    this.setState({ sideNavDisplay: 'open' })
    document.body.classList.add('scroll-lock')
  }

  closeSideNav() {
    this.setState({ sideNavDisplay: 'closed' })
    document.body.classList.remove('scroll-lock')
  }

  closeDrop() {
    this.setState({showDrop: false});
  }

  handleTujou() {
    let res = Math.random()
    if (res < 0.9) {
      this.setState({ playin: 'NON' })
      this.setState({ modalType: MODAL_TYPES.ERROR })
    } else {
      this.setState({ playin: 'OUI' })
      this.setState({ modalType: MODAL_TYPES.SUCCESS })
    }
    this.setState({ modalOpen: true })
  }

  handleSuccess() {
    this.setState({ modalOpen: false })
    setTimeout(() => this.tujouHeader.focus(), 200)
  }

  handleInstallPWA() {
    this.setState({installAsPWA: false});
    this.state.prompEvent.prompt();
    // this.state.prompEvent.userChoice.then(handleA2HSResponse);
  }

  constructor() {
    super()
    this.state = {
      sideNavDisplay: 'closed',
      showDrop: false,
      modalOpen: false,
      modalType: null,
      installAsPWA: false,
      prompEvent: null
    }

    this.closeSideNav = this.closeSideNav.bind(this)
    this.closeDrop = this.closeDrop.bind(this)
    this.handleTujou = this.handleTujou.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleInstallPWA = this.handleInstallPWA.bind(this)
  }

  componentDidMount() {
    // this.setState({installAsPWA: true})
    addEventListener('beforeinstallprompt', this.handleInstallPrompt);    
  }

  handleInstallPrompt(e) {
    console.log("is ok pour l'event PWA")
    this.setState({prompEvent: e, installAsPWA: true})
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
            <button class='options' onClick={() => this.setState({showDrop: true})} aria-label='options'>
              <OptionsIcon class='icon' />
            </button>
            <Dropdown show={this.state.showDrop} closeHandler={this.closeDrop}>
              <div class="dropdown-content">
                <button onClick={this.props.changeTheme} aria-label='theme switch'>
                  <ColorIcon />
                </button>
                {deviceButton}
                <button ref={tujouHeader => this.tujouHeader = tujouHeader} class="tujou" onClick={this.handleTujou}>
                  Tu joues ce soir ?
                </button>
                {this.state.installAsPWA && <button onClick={this.handleInstallPWA}>
                  <InstallIcon /> Install that shit
                </button>}
              </div>
            </Dropdown>
          </div>
            <Login />
          </div>
        </div>
        <Modal onSuccess={this.handleSuccess} type={this.state.modalType} modalOpen={this.state.modalOpen}>
          <h1>{this.state.playin}</h1>
        </Modal>
      </div>
    )
  }
}
