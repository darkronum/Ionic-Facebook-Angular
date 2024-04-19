import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

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

  groupsYouBelongTo = [
    { name: "Grupo de Estudos de Matemática" },
    { name: "Clube de Leitura" },
    { name: "Time de Futebol Amador" },
    { name: "Grupo de Música" },
    { name: "Comunidade de Programação" },
    { name: "Clube de Fotografia" },
    { name: "Grupo de Yoga" },
    { name: "Clube de Culinária" },
    { name: "Grupo de Viagens" },
    { name: "Clube de Corrida" }
  ];

  suggestedGroups = [
    { name: "Clube de Cinema" },
    { name: "Grupo de Dança" },
    { name: "Comunidade de Artes Marciais" },
    { name: "Grupo de Voluntariado" },
    { name: "Clube de Astronomia" }
  ];

}
