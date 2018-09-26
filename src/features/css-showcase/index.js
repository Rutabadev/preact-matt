import './style.scss'
import CreditCardIcon from 'preact-icons/md/credit-card'
import DeliciousIcon from 'preact-icons/fa/delicious'
import LinkIcon from 'preact-icons/ti/link'
import MortarBoardIcon from 'preact-icons/go/mortar-board'
import RestaurantIcon from 'preact-icons/io/android-restaurant'
import { Modal } from '../../_core/modal'
import { MODAL_TYPES } from '../../_core/modal/types'
import { Component } from 'preact'

export class CssShowcase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      pause: false,
      modalOpen2: false
    }
  }

  render() {
    return (
      <div class='css-showcase'>
        <div class='elements-box'>
          <button class='primary'>primary</button>
          <button class='secondary'>secondary</button>
          <button disabled class='primary'>disabled</button>
          <button class='primary' onClick={() => this.setState({ modalOpen: true })}>modal</button>
        </div>
        <div class='elements-box icon-row'>
          <CreditCardIcon />
          <DeliciousIcon />
          <LinkIcon />
          <MortarBoardIcon />
          <RestaurantIcon />
        </div>
        <Modal title='Custom modal' imbriquedModal={this.state.pause} onSuccess={() => this.setState({ modalOpen: false })} onCancel={() => this.setState({ modalOpen: false })} type={MODAL_TYPES.SUCCESS} modalOpen={this.state.modalOpen}>
          <h1>Coucou</h1>
          <p>Ici on peut mettre ce que l'on veut</p>
          <button class='primary' ref={(button) => { this.buttonModal = button }} onClick={() => this.setState({ modalOpen2: true, pause: true })}>seconde modale parce qu'on est des oufs</button>
          <br />
          <br />
        </Modal>
        <Modal title='Custom modal imbriquée' onSuccess={() => this.setState({ modalOpen2: false, pause: false })} onCancel={() => this.setState({ modalOpen2: false, pause: false })} type={MODAL_TYPES.ERROR} modalOpen={this.state.modalOpen2}>
          <p>Paf la modale imbriquée</p>
        </Modal>
      </div>
    )
  }
}
