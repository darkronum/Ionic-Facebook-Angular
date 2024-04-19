import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor() { }


  ngOnInit() {
    this.initSwiper();
  }

  initSwiper() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      loop: true,
    });
  }

}
