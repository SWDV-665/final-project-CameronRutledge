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
      this.dataService.addItem(["Day 1 Breakfast: Bran Flakes, Banana, Fat-Free Milk", "Day 1 Lunch: Whole Wheat Turkey Sandwhich with Lettuce and Cheese", "Day 1 Dinner: Fish With Cheese and Broccoli", "Day 2 Breakfast: Fruit Smoothie and a Hard-Boiled Egg", "Day 2 Lunch: Vegetable Soup and Veggie Burger", "Day 2 Dinner: Chicken Breast and Spinach with Sweet Potato", "Day 3 Breakfast: Oats and Milk with Apple", "Day 3 Lunch: Chicken Salad and Banana", "Day 3 Dinner: Shrimp with Baked Potato and Yogurt", "Day 4 Breakfast: English Muffin and Apple with Yogurt", "Day 4 Lunch: Tomato Soup with Whole-Wheat Pita and Raw Vegetables", "Day 4 Dinner: Salmon with Cole Slaw", "Day 5 Breakfast: Cheerios with Berries and Yogurt", "Day 5 Lunch: Quesadilla", "Day 5 Dinner: Pork Tenderloin with Squash", "Day 6 Breakfast: Whole-Grain Waffle with Banana", "Day 6 Lunch: Tuna Pita with Carrots", "Day 6 Dinner: Jambalaya with Turkey and Brown Rice", "Day 7 Breakfast: English Muffin with Poached Egg", "Day 7 Lunch: Black Bean Salad", "Day 7 Dinner: Flank Steak with Sweet Potato"])


    } else if (data == "Bulk Up"){

      console.log("Bulk Up Plan Selected")
      this.dataService.addItem(["Day 1 Breakfast: Oats,Banana Pancakes with Protein Shake", "Day 1 Lunch: Multigrain roti along with palak chicken and Avocado bell pepper salad", "Day 1 Dinner: Brown rice, peas paneer curry, sprouts vegetable salad", "Day 2 Breakfast: Oatmeal with Greek Yogurt & Seasonal fruits Mango Juice", "Day 2 Lunch: Multigrain roti, fish curry, vegetable salad", "Day 2 Dinner: Broken wheat khichidi along with carrot raita, egg white, and vegetable salad", "Day 3 Breakfast: Poached Eggs Whole Grain Toast Protein Shake", "Day 3 Lunch: Quinoa upma, chicken and broccoli salad", "Day 3 Dinner: Lean Beef and vegetable curry, brown rice, cucumber raita Baby Potatoes Chocolate Milk", "Day 4 Breakfast: Oatmeal with Honey Apple Juice", "Day 4 Lunch: Grilled Chicken Salad Whole Grain Bread", "Day 4 Dinner: Methi Chicken Brown Rice Broccoli Protein Shake", "Day 5 Breakfast: Scrambled Egg Whole Grain Toast Smoothie", "Day 5 Lunch: Grilled chicken vegetable roti rolls Green Salad", "Day 5 Dinner: Chicken Stir Fry Spring Onion, Peppers & Broccoli Chocolate Milk", "Day 6 Breakfast: Oatmeal Whole Grain Toast Orange Juice", "Day 6 Lunch: Whole Grain Chicken Wrap Black Beans, Peppers & Greek Yogurt", "Day 6 Dinner: Keema bhurji and multigrain rotiLean Beef Mince Sweet Potato Protein Shake", "Day 7 Breakfast: Oatmeal with Nuts Smoothie", "Day 7 Lunch: Whole wheat pasta with chicken and Green Salad", "Day 7 Dinner: Fish curry, boiled green peas salad Brown Rice Garden Peas Milk"])

    } else {

      console.log("Vegan Gains Plan Selected")
      this.dataService.addItem(["Day 1 Breakfast: 1 serving Sprouted-Grain Toast with Peanut Butter & Banana", "Day 1 Lunch: 1 serving Green Salad with Edamame & Beets 1 clementine", "Day 1 Dinner: 1 serving Stuffed Sweet Potato with Hummus Dressing", "Day 2 Breakfast: 1 serving Strawberry-Pineapple Smoothie", "Day 2 Lunch: 1 serving Vegan Superfood Buddha Bowls", "Day 2 Dinner: 1 serving One-Pot Tomato Basil Pasta 2 cups mixed greens 1 serving Lemon-Garlic Vinaigrette", "Day 3 Breakfast: 1 serving Strawberry-Pineapple Smoothie", "Day 3 Lunch: 1 serving Vegan Superfood Buddha Bowls", "Day 3 Dinner: 1 serving Beefless Vegan Tacos 2 cups mixed greens 1 serving Lemon-Garlic Vinaigrette", "Day 4 Breakfast: 1 serving Sprouted-Grain Toast with Peanut Butter & Banana", "Day 4 Lunch: 1 serving Vegan Superfood Buddha Bowls", "Day 4 Dinner: 1 serving Vegan Coconut Chickpea Curry", "Day 5 Breakfast: 1 serving Sprouted-Grain Toast with Peanut Butter & Banana", "Day 5 Lunch: 1 serving Vegan Superfood Buddha Bowls", "Day 5 Dinner: 1 serving No-Cook Black Bean Salad 1-oz. slice whole-wheat baguette", "Day 6 Breakfast: 1 serving Strawberry-Pineapple Smoothie", "Day 6 Lunch: 1 serving Veggie & Hummus Sandwich 1 medium orange", "Day 6 Dinner: 1 serving Quinoa Avocado Salad", "Day 7 Breakfast: 1 serving Sprouted-Grain Toast with Peanut Butter & Banana", "Day 7 Lunch: 1 serving Veggie & Hummus Sandwich 1 medium orange", "Day 7 Dinner: 1 serving Chickpea & Quinoa Buddha Bowl"])

    }
  }

  
}