import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink],
})
export class HomePage implements OnInit {

  title = 'app';
  img1: boolean = false;
  img2: boolean = false;
  myLoading: boolean = false;

  constructor(
    private router: Router,
    private loading: LoadingController) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {

  }

   getGallery() {

   }

}
