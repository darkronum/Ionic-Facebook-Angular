import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor() { }
  notifications = [
    {
      title: "Nova mensagem",
      content: "Você recebeu uma nova mensagem.",
      time: "Há 5 minutos"
    },
    {
      title: "Novo comentário",
      content: "João comentou em sua postagem.",
      time: "Há 10 minutos"
    },
    {
      title: "Novo seguidor",
      content: "Maria começou a seguir você.",
      time: "Há 15 minutos"
    },
    {
      title: "Convite para evento",
      content: "Você foi convidado para o evento de aniversário de Pedro.",
      time: "Há 20 minutos"
    },
    {
      title: "Atualização disponível",
      content: "Uma nova versão do aplicativo está disponível para download.",
      time: "Há 25 minutos"
    },
    {
      title: "Parabéns!",
      content: "Felipe comemorou seu aniversário hoje.",
      time: "Há 30 minutos"
    },
    {
      title: "Aviso importante",
      content: "Por favor, leia as novas políticas de privacidade.",
      time: "Há 35 minutos"
    },
    {
      title: "Promoção especial",
      content: "Descontos de até 50% em produtos selecionados!",
      time: "Há 40 minutos"
    },
    {
      title: "Lembrete de reunião",
      content: "Sua reunião com a equipe começa em 1 hora.",
      time: "Há 45 minutos"
    },
    {
      title: "Novo artigo publicado",
      content: "Confira nosso último artigo sobre desenvolvimento web.",
      time: "Há 50 minutos"
    },
    {
      title: "Erro de sistema",
      content: "Detectamos um erro no sistema. Estamos trabalhando para corrigi-lo.",
      time: "Há 55 minutos"
    },
    {
      title: "Pedido confirmado",
      content: "Seu pedido foi confirmado e está a caminho!",
      time: "Há 1 hora"
    },
    {
      title: "Evento próximo",
      content: "Lembrete: A conferência começa amanhã. Não se atrase!",
      time: "Há 2 horas"
    },
    {
      title: "Novo vídeo disponível",
      content: "Assista ao nosso último vídeo no YouTube.",
      time: "Há 3 horas"
    },
    {
      title: "Atualização do status do pedido",
      content: "O status do seu pedido foi atualizado para 'Entregue'.",
      time: "Há 4 horas"
    },
    {
      title: "Promoção relâmpago",
      content: "Últimas horas para aproveitar nossas ofertas!",
      time: "Há 5 horas"
    },
    {
      title: "Lembrete de pagamento",
      content: "O pagamento da fatura vence amanhã. Não se esqueça!",
      time: "Há 6 horas"
    },
    {
      title: "Novo podcast disponível",
      content: "Ouça o nosso mais recente podcast sobre tecnologia.",
      time: "Há 7 horas"
    },
    {
      title: "Bem-vindo!",
      content: "Bem-vindo ao nosso aplicativo. Esperamos que goste da experiência!",
      time: "Há 8 horas"
    },
    {
      title: "Oferta exclusiva",
      content: "Aproveite esta oferta exclusiva para usuários premium!",
      time: "Há 9 horas"
    }
  ];



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
