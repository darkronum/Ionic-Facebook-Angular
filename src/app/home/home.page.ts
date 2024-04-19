import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isMenuOpen: boolean = false;
  showPost: boolean = false;
  newPostText: string = '';
  newPostImages: string[] = [];

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  constructor() {}

  ngOnInit() {
    this.initSwiper();
  }

  initSwiper() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      loop: true,
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Convertendo a imagem para base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newPostImages.push(reader.result as string);
      };
    }
  }

  openFileSelector(event: Event) {
    this.fileInput.nativeElement.click();
    event.stopPropagation();
  }

  publishPost() {
    if (this.newPostText || this.newPostImages.length > 0) {
      this.showPost = true;
    }
  }
}
