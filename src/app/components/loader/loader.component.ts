import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class LoaderComponent implements OnInit {
  public myImg1: boolean = false;
  public myImg2: boolean = false;

  constructor(private router: Router) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.getLoader();
  }

  getLoader() {
    this.myImg1 = true;
    setTimeout(() => {
      this.myImg1 = false;
      this.myImg2 = true;
    }, 5000);
  }
}
