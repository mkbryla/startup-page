import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @Output() public hovered: EventEmitter<boolean> = new EventEmitter();

  @HostListener('mouseenter')
  public mouseEnter(): void {
    this.elementRef.nativeElement.classList.add('hovered');
    this.hovered.emit(true);
}

  @HostListener('mouseleave')
  public mouseLeave(): void {
    this.elementRef.nativeElement.classList.remove('hovered');
    this.hovered.emit(false);

  }

  constructor(private elementRef: ElementRef) {
  }

}
