import { Component, OnInit } from '@angular/core';

import { IDataObject } from '../data-object.interface'

@Component({
	selector: 'app-parent-component',
	templateUrl: './parent-component.component.html',
	styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
	dataObject: IDataObject = { id: 3, someProperty: 'parent' };
	stringObject: string = 'parent';
	constructor() { }

	ngOnInit() {
	}

}
