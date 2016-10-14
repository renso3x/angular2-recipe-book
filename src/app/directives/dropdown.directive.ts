import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbdropdown]'
})
export class DropdownDirective {
	// bind this class in the element
	@HostBinding('class.open') get opened() {
		return this.isOpen;
	};

	//listen to the element if click and set to true to open
	@HostListener('click') open() {
		return this.isOpen = true;
	};
	// listen to the element if mouse leave the element
	@HostListener('mouseleave') close() {
		return this.isOpen = false;
	}

	private isOpen = false;
}
