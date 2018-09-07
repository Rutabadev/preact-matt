import './style.scss'
import { Roller } from './roller'
import { Component } from 'preact'
import { Modal } from '../modal'
import { MODAL_TYPES } from '../modal/types'

export class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  }

  render () {
    return (
      <div class='footer'>
        <Roller content='Githeub' link='https://github.com/Puex' />
        <Roller content='Youtoube' link='https://www.youtube.com/user/OnchayTM' />
        <Roller content='Touitteur' link='https://twitter.com/MZPuex' />
        <Roller content='Sith' link='/' onClick={(e) => {
          e.preventDefault()
          this.setState({ modalOpen: true })
        }
        } />
        <Roller content='Einstagram' link='https://www.instagram.com/matt_mntl' />
        <Roller content='Blaugue' link='https://cestmoijuliettevoyons6.webnode.fr/' />
        <Modal title='Sith' onSuccess={() => this.setState({ modalOpen: false })} type={MODAL_TYPES.WARNING} modalOpen={this.state.modalOpen}>
          <p>Alors en fait vous allez rire mais vous êtes actuellement sur le site</p>
        </Modal>
      </div>
    )
  }
}
