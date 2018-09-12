import './style.scss'
import Helmet from 'preact-helmet'
import { Component } from 'preact'
import { Footer } from './footer'
import { Header } from './header'
import { Home } from './home'
import { CssShowcase } from './css-showcase'
import { Fotos } from './fotos'
import { NotFound } from './not-found'
import Router from 'preact-router'

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
  }
]

export default class App extends Component {
  changeTheme () {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light')
      this.updateStateTheme()
    } else {
      localStorage.setItem('theme', 'dark')
      this.updateStateTheme()
    }
  }

  updateStateTheme () {
    if (localStorage.getItem('theme') !== null) {
      this.setState({ theme: localStorage.getItem('theme') })
    } else {
      this.setState({ theme: 'light' })
    }
  }

  constructor () {
    super()
    this.state = {
      theme: ''
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount () {
    this.updateStateTheme()
  }

  render () {
    return (
      <div tabIndex='-1' class={'app ' + this.state.theme + '-theme'}>
        <Helmet
          meta={[
            { name: 'description', content: 'The Matthieu Montaillé showcase website' }
          ]}
        />
        <Header features={features} changeTheme={this.changeTheme} />
        <div class='content'>
          <Router>
            <Home path='/' />
            <CssShowcase path='/css' />
            <Fotos path='/fotos' />
            <NotFound type='404' default />
          </Router>
        </div>
        <Footer />
      </div>
    )
  }
}
