import { Directive, ElementRef, Inject, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'app-actor'
})
export class ActorDirective extends UpgradeComponent {
  @Input() actorName: string;

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    super('appActor', elementRef, injector);
  }
}
