import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink]
})
export class GalleryPage  {
  title = 'Mi Galeria';

  constructor(private route: Router) { }

  back() {
     this.route.navigate(['./home'])
  };

}
