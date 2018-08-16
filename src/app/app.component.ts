import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UnsplashService } from './services/unsplash/unsplash.service';
import { MediaService } from './services/media/media.service';
import { switchMap } from 'rxjs/operators';
import { BOX_SIZE } from './components/box/box.component';
import { faCog, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  @ViewChild('app') public appElement: ElementRef;

  public boxSize: typeof BOX_SIZE = BOX_SIZE;
  public faSettings: IconDefinition = faCog;
  public isSettingsMode: boolean;

  constructor(private unsplashService: UnsplashService, private mediaService: MediaService) {
  }

  public ngOnInit(): void {
    // this.mediaService.resize$.pipe(
    //   switchMap((width) => this.unsplashService.getRandomPhoto(this.mediaService.deviceOrientation, width, 'mountains')))
    //     .subscribe((res) => {
    //       console.log(res);
    //       this.appElement.nativeElement.style.backgroundImage = `url("${res.urls.custom}")`;
    //     });
  }

  public toggleSettingsMode(): void {
    this.isSettingsMode = !this.isSettingsMode;
  }
}
