import './style.scss'

export const Footer = () => (
  <div class='footer'>
    <a href='https://github.com/Puex' native>
        Giteub
    </a>
    <a href='https://www.youtube.com/user/OnchayTM' native>
        Youtoube
    </a>
    <a href='https://twitter.com/MZPuex' native>
        Touitteur
    </a>
    <a
      onClick={() =>
        alert(
          'Alors vous allez rire mais en fait vous êtes actuellement sur le site.'
        )
      }
    >
      {/* Add popup "T'es déjà dessus patate" */}
        Sith
    </a>
    <a href='https://www.instagram.com/matt_mntl' native>
        Einstagram
    </a>
    <a href='https://cestmoijuliettevoyons6.webnode.fr/' native>
        Blaugue
    </a>
  </div>
)
