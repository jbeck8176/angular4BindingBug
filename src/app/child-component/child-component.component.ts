import { Component, OnInit, Input } from '@angular/core';

import { IDataObject } from '../data-object.interface'

@Component({
	selector: 'app-child-component',
	templateUrl: './child-component.component.html',
	styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
	@Input() dataObjectInput: IDataObject;
	@Input() stringObjectInput: string;
	constructor() { }

	ngOnInit() {
		this.dataObjectInput.someProperty = "Parent shouldn't see this yet!";

		this.stringObjectInput = "Parent shouldn't see this yet!";
	}

	changeAfterInit() {
		this.dataObjectInput.someProperty = "This should never be seen!";
		this.stringObjectInput = "This should never be seen!";
	}

}
