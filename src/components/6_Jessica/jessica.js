import React, { Component } from 'react';
import style from './jessica.scss';
import YTReady from '../resource/youtubeReady';

class Jessica extends Component {

  constructor(props) {

    super(props);

    this.state = {
      style: {
        opacity: 0.25
      },
      iframeId: "jessicaIframe",
      videoSrc: "https://www.youtube.com/embed/",
      videoId: "hSvnepZS26s",
      enableJS: "?enablejsapi=1",
      vidState: null
    }

  }


  componentDidMount() {

    let youtubeReady = YTReady;

    youtubeReady.then( (YT) => {
      this.player = new YT.Player(this.state.iframeId, {
        events: {
          'onReady': () => this.onPlayerReady(),
          'onStateChange': () => this.onPlayerStateChange()
        }
      })
    })

  }

  onPlayerReady() {

    this.setState({
      vidState: this.player.getPlayerState()
    });

  }

  onPlayerStateChange() {

    this.setState({
      vidState: this.player.getPlayerState()
    });

  }


  mouseOver() {

    this.player.playVideo();

    this.setState({
      style: {
        opacity: 1
      },
      vidState: this.player.getPlayerState()
    })

  }

  mouseLeave() {

    let getVidState = this.state.vidState;
    if (getVidState === 1) {
      this.setState({
        style: {
          opacity: 1
        }
      });
    } else if (getVidState === 2 || getVidState === 0) {
      this.setState({
        style: {
          opacity: 0.25
        },
        vidState: this.player.getPlayerState()
      });

      this.player.pauseVideo();
    }

  }

  render() {


    return (
      <section className={style.jessicaContent}>

        <iframe
          id={this.state.iframeId}
          src={`${this.state.videoSrc}${this.state.videoId}${this.state.enableJS}`}
          frameBorder="0"
          style={this.state.style}
          onMouseOver={ () => this.mouseOver() }
          onMouseLeave={ () => this.mouseLeave() } >
        </iframe>

      </section>
    )
  }
}

export default Jessica;
