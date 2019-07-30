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
