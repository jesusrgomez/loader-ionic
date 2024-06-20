import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
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
  imports: [CommonModule, IonicModule, RouterLink, LoaderComponent],
})
export class HomePage implements OnInit {
  title = 'app';
  myLoading: boolean = false;
  mensjae:any;

  constructor(
    private router: Router) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { }

   getGallery() {
    this.myLoading = true;
        setTimeout(() => {
          this.myLoading = false;
          this.getUrl();
        }, 10000);
   }

   getUrl() {
    this.router.navigate(['./gallery'])
  };

}
