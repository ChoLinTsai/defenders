import React, { Component } from 'react';
import style from './defenders.scss';
import YTReady from '../resource/youtubeReady';


export default class Defenders extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        opacity: 0.25
      },
      iframeId: "defendersIframe",
      videoSrc: "https://www.youtube.com/embed/",
      videoId: "H6eITQV7Xzs",
      enableJS: "?enablejsapi=1",
      vidState: null
    }
  }

  componentDidMount() {

    let youtubeReady = YTReady;

    youtubeReady.then( (YT) => {
      this.defendersPlayer = new YT.Player(this.state.iframeId, {
          events: {
            'onReady': () => this.onPlayerReady(),
            'onStateChange': () => this.onPlayerStateChange()
          }
      })
    })

  }

  onPlayerReady() {

    this.setState({
      vidState: this.defendersPlayer.getPlayerState()
    });

  }

  onPlayerStateChange() {

    this.setState({
      vidState: this.defendersPlayer.getPlayerState()
    });

  }


  mouseOver() {

    this.defendersPlayer.playVideo();

    this.setState({
      style: {
        opacity: 1
      },
      vidState: this.defendersPlayer.getPlayerState()
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
        vidState: this.defendersPlayer.getPlayerState()
      });

      this.defendersPlayer.pauseVideo();
    }

  }

  render() {

    return (
      <section className={style.defendersContent}>

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
