import './style.scss'
import { Roller } from './roller'

export const Footer = () => (
  <div class='footer'>
    <Roller content='Githeub' link='https://github.com/Puex' />
    <Roller content='Youtoube' link='https://www.youtube.com/user/OnchayTM' />
    <Roller content='Touitteur' link='https://twitter.com/MZPuex' />
    <Roller content='Sith' link='/' onClick={(e) => {
      e.preventDefault()
      alert(
        'Alors vous allez rire mais en fait vous êtes actuellement sur le site.'
      )
    }
    } />
    <Roller content='Einstagram' link='https://www.instagram.com/matt_mntl' />
    <Roller content='Blaugue' link='https://cestmoijuliettevoyons6.webnode.fr/' />
  </div>
)
