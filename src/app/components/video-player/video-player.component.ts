import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core'; // Native version
import { YoutubePlayerWeb } from 'capacitor-youtube-player'; // Web version

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit, AfterContentInit {

  @Input() urlVideo: any = null;
  showVideo = false;

  constructor() { }

  ngOnInit() {}

  async ngAfterContentInit() {
    if (this.urlVideo) {
      if (Capacitor.platform === 'web') {
        await this.initializeYoutubePlayerPluginWeb();
      } else { // Native
        await this.initializeYoutubePlayerPluginNative();
      }
    }
  }

  getIdYoutube(){
    if (this.urlVideo) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      const match = this.urlVideo.match(regExp);
      return (match && match[7].length === 11) ? match[7] : null;
    }

    return null;
  }

  async initializeYoutubePlayerPluginWeb() {
    const id = this.getIdYoutube();

    if (id) {
      const opts = {
        playerId: 'youtube-player',
        playerSize: {}, // { width: '100%', height: 'auto'},
        videoId: id,
        debug: false
      };
      const result: any = await YoutubePlayerWeb.initialize(opts);

      if (result && result.playerReady) {
        const elem = document.getElementById('youtube-player');
        elem.setAttribute('width', '100%');
        this.showVideo = true;
      }
    }
  }

  async destroyYoutubePlayerPluginWeb() {
    await YoutubePlayerWeb.destroy('youtube-player')
      .catch(e => console.error('e', e));
  }

  async initializeYoutubePlayerPluginNative() {
    console.log('native');
    const id = this.getIdYoutube();
    if (id) {
      const { YoutubePlayer } = Plugins;
      const playerReady = await YoutubePlayer.initialize({
        width: 640, height: 360, videoId: id
      });
    }
  }

}
