import './style.scss'
import { Component } from 'preact'
import { MODAL_TYPES } from './types'
import Warning from 'preact-icons/md/warning'
import Error from 'preact-icons/md/error'
import Success from 'preact-icons/md/check'
import FocusTrap from 'focus-trap-react'

export { MODAL_TYPES }

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: !props.modalOpen
    }
  }

  componentWillUpdate({ modalOpen, focusOk, ouf }) {
    if (modalOpen !== this.props.modalOpen) {
      if (!modalOpen && this.props.modalOpen) {
        if (ouf) {
          this.timeout = setTimeout(() => this.setState({ hidden: true }), 2000)
        } else {
          this.timeout = setTimeout(() => this.setState({ hidden: true }), 200)
        }
      } else {
        this.setState({ hidden: false });
        clearTimeout(this.timeout);
        if (focusOk) {
          this.button.focus()
        }
      }
    }
  }

  render({ title, children, onSuccess, onCancel, type, modalOpen, imbriquedModal, ouf }) {
    return (
      <FocusTrap active={modalOpen} paused={imbriquedModal}>
        <div
          class={
            'modal-overlay' +
            (ouf ? ' ouf' : '') +
            (modalOpen ? ' open' : ' close') +
            (this.state.hidden ? ' hidden' : '')
          }
        >
          <div class='modal'>
            <h3 class='modal-title'>
              {(type === MODAL_TYPES.WARNING || !type) && <Warning color='orange' />}
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
