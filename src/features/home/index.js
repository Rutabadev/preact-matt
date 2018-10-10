import './style.scss'
import { Link } from 'preact-router/match'

export const Home = () => (
  <div class='home'>
    <h1 class='main-title'>Bienvenue sur le site de Matthieu <i>"Puex"</i> Montaillé 🐼</h1>
    <Link href="/parallax" class="parallax-button">
      <button class="secondary">Splendide présentation</button>
    </Link>
    <div class='main'>
      <br />
      <h2>Biographie</h2>
      <p>De son vrai prénom Kim Jun Ho, Matthieu Montaillé est un jeune coréen natif, devenu catalan de force par une adoption dont les détails resteront secrets tellements ils vous regardent pas alors calmez vous bien.</p>
      <br />
      <p>Après une enfance difficile mais somme toute aisée, il devient adulte.</p>
      <br />
      <p>S'en suit alors une suite de péripéties tumulteuses sans intérêt ni saveur. Par exemple une fois il s'est cogné l'orteil contre le coin de son lit. C'est douloureux.</p>
      <br />
      <p>C'est sur les coups de l'année 1789 que Matthieu fit une découverte sans prédédent : il n'était pas encore né. Ça fait un choc sur le moment mais c'est pas déconnant quand on y réfléchit bien.</p>
      <br />
      <h2>Œuvre</h2>
      <p>On ne va pas se mentir, il a pas fait grand chose. On retiendra principalement ses classements au badmington. Une fois il a fait 16ème je crois, c'est pas dégueu.</p>
      <br />
      <img class="waka" src="../../assets/wakahr.png"></img>
      <h2>Conclusion</h2>
      <p>--. En fait c'est un smiley qui le représente bien parcequ'il vient du 66 et qu'il faut appuyer deux fois sur le 6 du clavier pour faire ça. Aussi ça lui ressemble parcequ'il est bridé.</p>
    </div>
  </div>
)
