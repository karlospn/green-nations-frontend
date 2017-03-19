import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { ScreenService } from '../service/screen.service';

import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[screenBelowLarge]'
})
export class ScreenBelowLargeDirective implements OnDestroy {

    private hasView = false;
    private subscription: Subscription;
    
    constructor (private templateRef: TemplateRef<any>,  private viewContainerRef: ViewContainerRef,  
                private screenService : ScreenService){
        this.subscription = this.screenService.resize$.subscribe(() => this.onResize());    
    }

    private onResize() :void {
        this.screenLarge = false;
    }


    @Input()
    set screenLarge(condition){
        condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
        if(condition && !this.hasView){
            this.hasView  = true;
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else if (!condition && this.hasView){
            this.hasView = false;
            this.viewContainerRef.clear();
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}