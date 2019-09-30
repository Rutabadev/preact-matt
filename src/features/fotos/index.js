import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { Component } from 'preact'

const fotos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', alt: 'forêt avec rayons de soleils transpersants', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', alt: 'champigon dans forêt', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', alt: 'bicoque sur bord de montagne forestière avec lac au pied', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', alt: "forêt brumeuse au bord d'un lac", width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', alt: "feuilles sur sol en automne", width: 3, height: 4 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', alt: "branches de pin", width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', alt: "gland macro", width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', alt: "arbres orangés sur bords de nationnale", width: 4, height: 3 },
  { src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80', alt: "regard en haut vers les arbres", width: 3, height: 4 },
  { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', alt: "lumière forêt dense", width: 4, height: 3 },
  { src: 'https://images.unsplash.com/photo-1494825514961-674db1ac2700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', alt: "mi forêt mi ciel blanc", width: 1, height: 1 },  
  { src: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80', alt: "petit ilot forestier sur lac brumeux", width: 4, height: 3 },  
]

export class Fotos extends Component {
  openLightbox (event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    })
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  constructor () {
    super()
    this.state = { currentImage: 0 }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }

  render () {
    return (
      <div class='fotos'>
        <Gallery photos={fotos} onClick={this.openLightbox} />
        <Lightbox images={fotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
