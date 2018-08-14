import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map, startWith, takeUntil } from "rxjs/operators";

export enum DEVICE {
  DESKTOP = 'DESKTOP',
  TOUCH = 'TOUCH',
}

export enum DEVICE_ORIENTATION {
  LANDSCAPE = 'LANDSCAPE',
  PORTRAIT = 'PORTRAIT'
}

@Injectable({
  providedIn: 'root'
})
export class MediaService implements OnDestroy {
  public device: DEVICE;
  public deviceOrientation: DEVICE_ORIENTATION;
  public resize$: Observable<number>;

  private resizeSubject$: Subject<number> = new Subject();
  private destroy$: Subject<void> = new Subject();

  constructor() {

    this.addResizeEventListener();
    this.setDevice();
    this.setDeviceOrientation();

    this.resize$ = this.resizeSubject$.asObservable().pipe(
      takeUntil(this.destroy$),
      startWith(window.innerWidth),
      map(() => this.setDeviceOrientation()),
      distinctUntilChanged(),
      debounceTime(300),
      map(()=>window.innerWidth)
    )
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }

  private setDevice(): void {
    this.device = 'ontouchstart' in document.documentElement
      ? DEVICE.TOUCH
      : DEVICE.DESKTOP;
  }

  private setDeviceOrientation(): DEVICE_ORIENTATION {
   return this.deviceOrientation = window.innerWidth > window.innerHeight
      ? DEVICE_ORIENTATION.LANDSCAPE
      : DEVICE_ORIENTATION.PORTRAIT;
  }

  private addResizeEventListener(): void {
    window.addEventListener('resize', () => {
      this.resizeSubject$.next(window.innerWidth);
    });
  }
}
