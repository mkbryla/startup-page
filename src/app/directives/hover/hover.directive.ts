import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[hover]'
})
export class HoverDirective {
  @Output() public hover: EventEmitter<boolean> = new EventEmitter();

  @HostListener('mouseenter')
  public mouseEnter(): void {
    this.elementRef.nativeElement.classList.add('hovered');
    this.hover.emit(true);
}

  @HostListener('mouseleave')
  public mouseLeave(): void {
    this.elementRef.nativeElement.classList.remove('hovered');
    this.hover.emit(false);

  }

  constructor(private elementRef: ElementRef) {
  }

}
