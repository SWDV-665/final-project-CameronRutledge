import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
// import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { DietService } from '../diet.service';
import { ToastController } from '@ionic/angular';
import { ModalController, Platform, NavParams} from '@ionic/angular';
import { ViewController } from '@ionic/core';






@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  selectedVal:string="";
  constructor(public alertCtrl: AlertController, public dataService: DietService, public toastCtrl: ToastController, public modalCtrl: ModalController, /**private calendar: Calendar*/) {}

  loadItems() {
    return this.dataService.getItems();
  }

  removeItem(index) {
    console.log("Removing Item - ", index);
    const toast = this.toastCtrl.create({
          });
    

    this.dataService.removeItem(index);  
  }

  addEvents()
  {
    this.alertCtrl.create({
      header:"Select a Diet Plan",
      inputs:[{
        type:"radio",
        label:"Weight Loss",
        value:"Weight Loss"
      },
      {
        type:"radio",
        label:"Bulk Up",
        value:"Bulk Up"
      },
      {
        type:"radio",
        label:"Vegan Gains",
        value:"Vegan Gains"
      }],
      buttons:[{
        text:"OK",
        handler:(data)=>{
          this.selectedVal = data;
          console.log("Selecting Diet Plan")
          
          this.eventCalendar(data);
        }
      }]
    }).then((ele)=>{
      ele.present();
    })
  }

  eventCalendar(data)
  {
    /**  var startDate = new Date(2014,10,15,18,30,0,0); // beware: month 0 = january, 11 = december
     var endDate = new Date(2014,10,15,19,30,0,0);
     var title = "My nice event";
     var location = "Home";
     var notes = "Some notes about this event.";
     var success = function(message) { alert("Success: " + JSON.stringify(message)); };
     var error = function(message) { alert("Error: " + message); };
     this.calendar.createCalendar('Diet Calendar').then(
         (msg) => { console.log(msg); },
         (err) => { console.log(err); }
       );
    */

    if (data == "Weight Loss"){

      console.log("Weight Loss Plan Selected")
      this.dataService.addItem(["Day 1 Breakfast: 3/4 cup Bran Flakes, Banana, Fat-Free Milk", "Day 1 Lunch: ", "Day 1 Dinner: ", "Day 2 Breakfast", "Day 2 Lunch: ", "Day 2 Dinner: ", "Day 3 Breakfast", "Day 3 Lunch: ", "Day 3 Dinner: ", "Day 4 Breakfast", "Day 4 Lunch: ", "Day 4 Dinner: ", "Day 5 Breakfast", "Day 5 Lunch: ", "Day 5 Dinner: ", "Day 6 Breakfast", "Day 6 Lunch: ", "Day 6 Dinner: ", "Day 7 Breakfast", "Day 7 Lunch: ", "Day 7 Dinner: "])


    } else if (data == "Bulk Up"){

      console.log("Bulk Up Plan Selected")
      this.dataService.addItem(["Day 1 Breakfast: 3/4 cup Bran Flakes, Banana, Fat-Free Milk", "Day 1 Lunch: ", "Day 1 Dinner: ", "Day 2 Breakfast", "Day 2 Lunch: ", "Day 2 Dinner: ", "Day 3 Breakfast", "Day 3 Lunch: ", "Day 3 Dinner: ", "Day 4 Breakfast", "Day 4 Lunch: ", "Day 4 Dinner: ", "Day 5 Breakfast", "Day 5 Lunch: ", "Day 5 Dinner: ", "Day 6 Breakfast", "Day 6 Lunch: ", "Day 6 Dinner: ", "Day 7 Breakfast", "Day 7 Lunch: ", "Day 7 Dinner: "])

    } else {

      console.log("Vegan Gains Plan Selected")
      this.dataService.addItem(["Day 1 Breakfast: 3/4 cup Bran Flakes, Banana, Fat-Free Milk", "Day 1 Lunch: ", "Day 1 Dinner: ", "Day 2 Breakfast", "Day 2 Lunch: ", "Day 2 Dinner: ", "Day 3 Breakfast", "Day 3 Lunch: ", "Day 3 Dinner: ", "Day 4 Breakfast", "Day 4 Lunch: ", "Day 4 Dinner: ", "Day 5 Breakfast", "Day 5 Lunch: ", "Day 5 Dinner: ", "Day 6 Breakfast", "Day 6 Lunch: ", "Day 6 Dinner: ", "Day 7 Breakfast", "Day 7 Lunch: ", "Day 7 Dinner: "])

    }
  }

  
}