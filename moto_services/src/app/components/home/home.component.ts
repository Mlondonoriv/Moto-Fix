import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 digitalClock: string | undefined;
 day: string | undefined;
  
  date: any;

 ngOnInit(): void{


  setInterval(()=>{

    let clock = new Date();
    let hours: any = clock.getHours();
    let minutes:any = clock.getMinutes();
    let seconds:any = clock.getSeconds();
  //  let day:any = clock.getDay();
   let day = clock.toLocaleString('es-co', {weekday: 'long'})
   
   let date:any = clock.toLocaleDateString('es-co', {  year:"numeric", month:"short", day:"numeric"})

let day_night = "AM";
if(hours>12){
  day_night="PM";
  hours = hours - 12
}

if(seconds<10){

  seconds = "0" + seconds;
}

if(minutes<10){
  minutes = "0"+ minutes;
}

if (hours < 10) {
  hours = "0" + hours;
  
}

this.digitalClock= `${hours}:${minutes}:${seconds} ${day_night}`;
this.day = day;

this.date = date

  },1000)
 }

}
