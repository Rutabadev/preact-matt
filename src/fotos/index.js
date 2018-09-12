import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { Component } from 'preact'

const fotos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/12294630_1233180236697364_5861399678131564970_n.jpg?_nc_cat=0&oh=f7515b44b48e31fc93cec0b9afc748a0&oe=5C01B89C', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/1150812_1307409675941086_1436400234092778953_n.jpg?_nc_cat=0&oh=54cd39d64eccf91541d3826ceef39a8b&oe=5C04BBB6', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/1013045_190425594452174_2079365519_n.jpg?_nc_cat=0&oh=eda73ed54884ee820c1d93c0224f2364&oe=5C375B65', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/37646162_2280680261947351_1336390812296019968_n.jpg?_nc_cat=0&oh=f707a65159e50b5862106a12081c0a8c&oe=5BFA9D45', width: 4, height: 7 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/21150324_1891212590894122_3485048031183971892_n.jpg?_nc_cat=0&oh=8da5edbc5306eb69059865537c78f71d&oe=5BF8BEF6', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 },
  { src: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/32562820_2180351731980205_9097307234819375104_n.jpg?_nc_cat=0&oh=fdeaf96bf834e00dc724274604ad4337&oe=5C31D46C', width: 1, height: 1 }
]

export default class Fotos extends Component {
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
