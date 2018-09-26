import './style.scss';
import { Component } from 'preact';
import Helmet from 'preact-helmet';
import { Header, Footer } from './_core';
import { Home, CssShowcase, Fotos, Animals, DesTrucs, NotFound } from './features';
import Router from 'preact-router';

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
  }
]

export default class App extends Component {
  changeTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light')
      this.updateStateTheme()
    } else {
      localStorage.setItem('theme', 'dark')
      this.updateStateTheme()
    }
  }

  updateStateTheme() {
    if (localStorage.getItem('theme') !== null) {
      this.setState({ theme: localStorage.getItem('theme') })
    } else {
      this.setState({ theme: 'light' })
    }
  }

  constructor() {
    super()
    this.state = {
      theme: ''
    }
    this.changeTheme = this.changeTheme.bind(this)
  }

  componentDidMount() {
    this.updateStateTheme()
  }

  render() {
    return (
      <div class={'app ' + this.state.theme + '-theme'}>
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
            <Animals path='/animals' />
            <DesTrucs path='/trucs' />
            <NotFound type='404' default />
          </Router>
        </div>
        <Footer />
      </div>
    )
  }
}
