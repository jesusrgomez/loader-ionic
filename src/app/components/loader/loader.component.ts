import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class LoaderComponent  implements OnInit {
  public myImg1: boolean = false;
  public myImg2: boolean = false;

  constructor(
    private router: Router,
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    // const loading = await this.loading.create({
    //       message: 'Hola',

    //       duration: 5000
    //     })
        // loading.present();
    let image = this.myImg1;
    function PrimeraImagen() {
      // image = setTimeout(functionTwo, 5000);
    };

    function functionTwo() {
      // imageDos = setTimeout(functionTree, 5000);
    };

    function functionTree() {
      // clearTimeout(image)
    }
    this.getUrl();

  }

  getUrl() {
    this.router.navigate(['./gallery'])
  };

}
