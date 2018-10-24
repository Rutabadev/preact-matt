import './style.scss';
import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { Header, Footer } from './_core';
import { Home, CssShowcase, Fotos, Animals, DesTrucs, Clicks, NotFound, ParallaxMatt } from './features';
import Router from 'preact-router';
import { isMobile } from 'react-device-detect';

const features = [
  {
    name: 'Matthieu',
    path: '/',
    main: true
  },
  {
    name: 'CSS Showcase',
    path: '/css'
  },
  {
    name: 'Fotos',
    path: '/fotos'
  },
  {
    name: 'Animals',
    path: '/animals'
  },
  {
    name: 'Des trucs',
    path: '/trucs'
  },
  {
    name: 'Clicks',
    path: '/clicks'
  }
]

export default class App extends Component {
  changeTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
    this.updateStateTheme()
  }

  updateStateTheme() {
    if (localStorage.getItem('theme') !== null) {
      this.setState({ theme: localStorage.getItem('theme') })
    } else {
      this.setState({ theme: 'light' })
    }
  }

  changeDevice() {
    if (localStorage.getItem('device') === 'mobile') {
      localStorage.setItem('device', 'desktop')
    } else {
      localStorage.setItem('device', 'mobile')
    }
    this.updateStateDevice();
  }

  updateStateDevice() {
    if (localStorage.getItem('device') !== null) {
      this.setState({ device: localStorage.getItem('device') })
    } else {
      if (isMobile) {
        this.setState({ device: 'mobile' })
      } else {
        this.setState({ device: 'desktop' })
      }
    }
  }

  constructor() {
    super()
    this.state = {
      theme: '',
      device: ''
    }
    this.changeTheme = this.changeTheme.bind(this)
    this.changeDevice = this.changeDevice.bind(this)
  }

  componentDidMount() {
    this.updateStateTheme()
    this.updateStateDevice()
  }

  render() {
    return (
      <div class={`app ${this.state.theme}-theme ${this.state.device}`}>
        <Helmet
          meta={[
            { name: 'description', content: 'The Matthieu Montaillé showcase website' }
          ]}
        />
        <Header features={features} changeTheme={this.changeTheme} device={this.state.device} changeDevice={this.changeDevice} />
        <div class='content'>
          <Router>
            <Home path='/' />
            <ParallaxMatt path='/parallax' device={this.state.device} />
            <CssShowcase path='/css' />
            <Fotos path='/fotos' />
            <Animals path='/animals' />
            <DesTrucs path='/trucs' />
            <Clicks path='/clicks' device={this.state.device} />
            <NotFound type='404' default />
          </Router>
        </div>
        <Footer />
      </div >
    )
  }
}
