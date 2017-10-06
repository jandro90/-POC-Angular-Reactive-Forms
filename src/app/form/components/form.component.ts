import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ValueChangesService } from './../services/valuechanges.service';
import { FormModel } from './../models/form.model';
import { CitiesService } from './../services/cities.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  modelForm: FormGroup;
  cities: Object;

  constructor(
    private form: FormModel,
    private changesService: ValueChangesService,
    private citiesService: CitiesService
  ) {
    this.modelForm = this.form.model;
  }

  ngOnInit() {
    this.citiesService.getCities().subscribe(cities => this.cities = cities);
    this.changesService.getChanges(this.modelForm);
  }
}
