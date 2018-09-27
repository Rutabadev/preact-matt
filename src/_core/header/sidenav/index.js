import './style.scss'
import { Component } from 'preact'
import { Link } from 'preact-router/match'
import CloseIcon from 'preact-icons/md/close'
import ColorIcon from 'preact-icons/go/color-mode'
import MobileIcon from 'preact-icons/md/phone-android'
import LaptopIcon from 'preact-icons/md/laptop-mac'
import OutsideAlerter from './outside-alerter'
import { isMobile } from 'react-device-detect'

export class SideNav extends Component {

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
      <OutsideAlerter sideNavDisplay={this.props.sideNavDisplay} closeHandler={this.props.closeHandler} >
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
            {deviceButton}
            <button onClick={this.props.changeTheme} aria-label='theme switch'>
              <ColorIcon />
            </button>
          </div>
        </div>
      </OutsideAlerter>
    )
  }
}
