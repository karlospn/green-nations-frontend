import { Component, OnInit, Input } from '@angular/core';
import { FieldDefinition } from '../field-definition';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {

  @Input() field: FieldDefinition;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  constructor() { }

  ngOnInit() {
  }

  get IsValid() {
    return this.form.controls[this.field.key].valid;
  }

}
