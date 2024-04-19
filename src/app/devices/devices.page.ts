import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

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
  connectedDevices = [
    { name: "iPhone X" },
    { name: "Samsung Galaxy S20" },
    { name: "iPad Pro" },
    { name: "MacBook Pro" },
    { name: "Windows PC" },
    { name: "Smart TV" }
  ];

}
