import './style.scss'
import { Component } from 'preact'
import { Link } from 'preact-router/match'
import CloseIcon from 'preact-icons/md/close'
import ColorIcon from 'preact-icons/go/color-mode'
import MobileIcon from 'preact-icons/md/phone-android'
import LaptopIcon from 'preact-icons/md/laptop-mac'
import InstallIcon from 'preact-icons/md/file-download';
import OutsideAlerter from '../../outside-alerter'
import { Modal, MODAL_TYPES } from '../../modal'
export class SideNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      playin: null,
      modalType: null,
      installAsPWA: false,
      prompEvent: null
    }

    this.handleTujou = this.handleTujou.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleInstallPWA = this.handleInstallPWA.bind(this)
    this.handleInstallPrompt = this.handleInstallPrompt.bind(this)
  }

  componentDidMount() {
    addEventListener('beforeinstallprompt', this.handleInstallPrompt);    
  }

  handleInstallPrompt(e) {
    this.setState({prompEvent: e, installAsPWA: true})
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
    setTimeout(() => this.tujou.focus(), 200)
  }

  handleInstallPWA() {
    this.setState({installAsPWA: false});
    this.state.prompEvent.prompt();
  }

  render() {
    const links = []
    this.props.features.forEach(feature => {
      links.push(
        <Link activeClassName='active' href={feature.path}>
          <button
            onClick={this.props.closeHandler}
            class={feature.main ? 'main' : ''}
          >
            {feature.name}
          </button>
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
      <OutsideAlerter thingDisplayed={this.props.sideNavDisplay} closeHandler={this.props.closeHandler} >
        <div class={'sidenav ' + this.props.sideNavDisplay}>
          <div class='table-wrapper'>
            <div class='close-button-wrapper'>
              <button class='sidenav-button' onClick={this.props.closeHandler} aria-label='sidenav switcher'>
                <CloseIcon />
              </button>
            </div>
          </div>
          {links}
          <div class="bottom-buttons">
            <button ref={tujou => this.tujou = tujou} class="tujou" onClick={this.handleTujou}>
              Tu joues ce soir ?
            </button>
            {deviceButton}
            <button onClick={this.props.changeTheme} aria-label='theme switch'>
              <ColorIcon />
            </button>
            {this.state.installAsPWA && <button onClick={this.handleInstallPWA}>
              <InstallIcon /> Install that shit
            </button>}
          </div>
        </div>

        <Modal onSuccess={this.handleSuccess} type={this.state.modalType} modalOpen={this.state.modalOpen}>
          <h1>{this.state.playin}</h1>
        </Modal>
      </OutsideAlerter>
    )
  }
}
