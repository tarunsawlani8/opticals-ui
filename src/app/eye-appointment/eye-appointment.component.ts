import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eye-appointment',
  templateUrl: './eye-appointment.component.html',
  styleUrls: ['./eye-appointment.component.css']
})
export class EyeAppointmentComponent {
  
   eyeAppointmentForm = new FormGroup({
    name: new FormControl(''),
    mobileNumber: new FormControl(''),
	address: new FormControl(''),
	email: new FormControl(''),
	date:new FormControl(''),
	
  });
  
   constructor(private http: HttpClient) { }
  
  scheduleAppointment () {

  console.warn(this.eyeAppointmentForm.value);
  
  this.http.post<any>('http://amaropticals.in/appointments/scheduleAppointment', this.eyeAppointmentForm.value).subscribe(data =>{console.info(data)});
}

}
