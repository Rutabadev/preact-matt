import './style.scss'
import { Component } from 'preact'
import { MODAL_TYPES } from './types'
import Warning from 'preact-icons/md/warning'
import Error from 'preact-icons/md/error'
import Success from 'preact-icons/md/check'
import FocusTrap from 'focus-trap-react'

export class Modal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hidden: !props.modalOpen
    }
  }

  componentWillUpdate ({ modalOpen }) {
    if (modalOpen !== this.props.modalOpen) {
      if (!modalOpen && this.props.modalOpen) {
        this.timeout = setTimeout(() => this.setState({ hidden: true }), 200)
      } else {
        this.setState({ hidden: false })
        this.button.focus()
        clearTimeout(this.timeout)
      }
    }
  }

  render ({ title, children, onSuccess, onCancel, type, modalOpen }) {
    return (
      <FocusTrap active={modalOpen}>
        <div
          class={
            'modal-overlay' +
            (modalOpen ? ' open' : ' close') +
            (this.state.hidden ? ' hidden' : '')
          }
        >
          <div class='modal'>
            <h3 class='modal-title'>
              {(type === MODAL_TYPES.WARNING || !type) && (
                <Warning color='orange' />
              )}
              {type === MODAL_TYPES.ERROR && <Error color='red' />}
              {type === MODAL_TYPES.SUCCESS && <Success color='green' />}
              {title}
            </h3>
            <div class='hr' />
            <div class='modal-content'>{children}</div>
            <div class='modal-buttons'>
              {onCancel && (
                <button class='secondary' onClick={onCancel}>
                    Cancel
                </button>
              )}
              <button class='secondary' ref={(button) => { this.button = button }} onClick={onSuccess}>
                    OK
              </button>
            </div>
          </div>
        </div>
      </FocusTrap>
    )
  }
}
