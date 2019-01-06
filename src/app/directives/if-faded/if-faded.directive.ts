import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfFaded]'
})
export class IfFadedDirective {

  @Input()
  public set appIfFaded(value: boolean) {
    if (value) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.elementRef.nativeElement.nextSibling.classList.add('fade-in');
    } else {
      if (this.elementRef.nativeElement.nextSibling) {
        this.elementRef.nativeElement.nextSibling.classList.add('fade-out');
      }

      setTimeout(() => {
        this.viewContainer.clear();
      }, 300);
    }
  }

  constructor(
    private elementRef: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }
}
