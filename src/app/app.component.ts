import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //template: ``,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  imagePath : string = 'assets/panda.jpg';
  imagePathNext :string ='panda.jpg';
  isDisabled : boolean =true;
  headerDetails :string = 'Bescent Technology';
  badHtml : string ='Hello <script> alert("Hacked");</script>World';
  title : string = 'Angular2';
  pageHeader : string = 'Employee Details';
  pageName :string = 'Kundan';
  firstName :string = 'Rajiv';
  lastName : string = 'Thakur';
}
