import React, { Component } from 'react';
import style from './iron.scss';
import YTReady from '../resource/youtubeReady';


export default class Iron extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
        opacity: 0.25
      },
      iframeId: "ironIframe",
      videoSrc: "https://www.youtube.com/embed/",
      videoId: "f9OKL5no-S0",
      enableJS: "?enablejsapi=1",
      vidState: null
    }
  }


  componentDidMount() {

    let youtubeReady = YTReady;

    youtubeReady.then( (YT) => {
      this.ironPlayer = new YT.Player(this.state.iframeId, {
          events: {
            'onReady': () => this.onPlayerReady(),
            'onStateChange': () => this.onPlayerStateChange()
          }
      })
    })

  }

  onPlayerReady() {

    this.setState({
      vidState: this.ironPlayer.getPlayerState()
    });

  }

  onPlayerStateChange() {

    this.setState({
      vidState: this.ironPlayer.getPlayerState()
    });

  }


  mouseOver() {

    this.ironPlayer.playVideo();

    this.setState({
      style: {
        opacity: 1
      },
      vidState: this.ironPlayer.getPlayerState()
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
        vidState: this.ironPlayer.getPlayerState()
      });

      this.ironPlayer.pauseVideo();
    }

  }


  render() {

    return (
      <section className={style.ironContent}>

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
