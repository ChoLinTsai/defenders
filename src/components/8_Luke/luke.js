import React, { Component } from 'react';
import style from './luke.scss';
import YTReady from '../resource/youtubeReady';


export default class Luke extends Component {

  constructor(props) {

    super(props);

    this.state = {
      style: {
        opacity: 0.25
      },
      iframeId: "lukeIframe",
      videoSrc: "https://www.youtube.com/embed/",
      videoId: "FU4Xn__5Qjg",
      enableJS: "?enablejsapi=1",
      vidState: null
    }

  }

  componentDidMount() {

    let youtubeReady = YTReady;

    youtubeReady.then( (YT) => {
      this.lukePlayer = new YT.Player(this.state.iframeId, {
          events: {
            'onReady': () => this.onPlayerReady(),
            'onStateChange': () => this.onPlayerStateChange()
          }
      })
    })

  }

  onPlayerReady() {

    this.setState({
      vidState: this.lukePlayer.getPlayerState()
    });

  }

  onPlayerStateChange() {

    this.setState({
      vidState: this.lukePlayer.getPlayerState()
    });

  }


  mouseOver() {

    this.lukePlayer.playVideo();

    this.setState({
      style: {
        opacity: 1
      },
      vidState: this.lukePlayer.getPlayerState()
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
        vidState: this.lukePlayer.getPlayerState()
      });

      this.lukePlayer.pauseVideo();
    }

  }



  render() {


    return (
      <section className={style.lukeContent}>

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
