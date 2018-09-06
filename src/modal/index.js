import './style.scss'
import { Component } from 'preact'
import { MODAL_TYPES } from './types'
import Warning from 'preact-icons/md/warning'
import Error from 'preact-icons/md/error'
import Success from 'preact-icons/md/check'

export class Modal extends Component {
  render ({ title, children, onSuccess, onCancel, type }) {
    return (
      <div class='modal-overlay'>
        <div class='modal'>
          <h3 class='modal-title'>
            {(type === MODAL_TYPES.WARNING || !type) && <Warning color='orange' />}
            {type === MODAL_TYPES.ERROR && <Error color='red' />}
            {type === MODAL_TYPES.SUCCESS && <Success color='green' />}
            {title}
          </h3>
          <div class='hr' />
          <div class='modal-content'>
            {children}
          </div>
          <div class='modal-buttons'>
            {onCancel && <button class='secondary' onClick={onCancel}>Cancel</button>}
            <button class='secondary' onClick={onSuccess}>OK</button></div>
        </div>
      </div>
    )
  }
}
