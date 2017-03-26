import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
 
import { FieldDefinition } from '../field-definition';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() vm: any;
  @Input() vmDefinition : Array<FieldDefinition>;
  @Input() operation: string;
  @Input() errorMessage: string;

  form: FormGroup;
  vmCopy : any;
  status: string;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private location : Location) { }

  clearForm () {
    let group = {};
    this.vmCopy = Object.assign({}, this.vm);
    this.vmDefinition.forEach(field => {
      group[field.key] = field.required ? new FormControl(this.vmCopy[field.key], Validators.required) : new FormControl(this.vmCopy[field.key]);
    });
    this.form = new FormGroup(group);
  }

  ngOnInit() {
    this.clearForm();
    this.activatedRoute.params.subscribe(params => {
      this.operation = params['operation'];
      this.clearForm();
    });
  }

  onBack() {
    this.errorMessage = null;
    this.location.back();
  }

  onEdit(){

  }

}
