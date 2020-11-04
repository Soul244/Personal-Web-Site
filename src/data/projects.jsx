import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiApollographql,
  SiStyledComponents
} from 'react-icons/si';

export default [
  {
    heading: 'Sambapos V5 Kiosks',
    description: `Sambapos V5 isimli uygulama ile entegre bir biçimde çalışan bir masaüstü uygulaması geliştirdim. Uygulama, 
    işletim sistemi üzerinde kurulu olan Sambapos isimli restoran otomasyon uygulaması ile graphql ile bağlantı kuruyor ve kullanıcı odaklı
    bir arayüz ile kulanıcının menü görüntüleme, ürün seçimi, ödeme gibi işlemleri gerçekleştirmesine olanak sağlıyor. 
    `,
    image: '/sambapos_kiosk.webp',
    backgroundColor: '#fdffb6',
    isReverse: true,
    technologies: [
      {
        icon: <SiJavascript />,
        name: 'Javascript',
        backgroundColor: '#f7df1e'
      },
      {
        icon: <SiReact />,
        name: 'React',
        backgroundColor: '#00d8ff'
      },
      {
        icon: <SiRedux />,
        name: 'Redux',
        backgroundColor: '#764ABC'
      },
      {
        icon: <SiApollographql />,
        name: 'Graphql',
        backgroundColor: '#E00098'
      },
      {
        icon: <SiStyledComponents />,
        name: 'Styled Components',
        backgroundColor: '#BE6AA3'
      }
    ]
  },
  {
    heading: 'Londoner React Admin Template',
    description: `Fonksiyonel, özelleştirilebilir ve geliştirilmeye açık bir admin template projesi geliştirdim. Birbirinden oldukça farklı configürasyon 
    seçenekleri ile temayı kullanmak isteyen kullanıcılara fırsatlar sunuyor. Geniş bir component desteği ekledim.
    `,
    image: '/londoner_web.webp',
    backgroundColor: '#caffbf',
    technologies: [
      {
        icon: <SiJavascript />,
        name: 'Javascript',
        backgroundColor: '#f7df1e'
      },
      {
        icon: <SiReact />,
        name: 'React',
        backgroundColor: '#00d8ff'
      },
      {
        icon: <SiStyledComponents />,
        name: 'Styled Components',
        backgroundColor: '#BE6AA3'
      }
    ]
  },
  {
    heading: 'Royal Air Force Presentation App',
    description: `Birleşik Krallık Hava Kuvvetleri içerisinde kullanılmak üzere geliştirmiş olduğum bir IOS projesi.
    Projeyi, Ipad tabletler üzerinde çalışmak üzere geliştirdim. Uygulama içerisinde önceden el ile eklenilmiş çeşitli video ve 
    resimlerin seçilmesi, bunlarla bir sunum hazırlanması, gösterilmesi ve kaydedilmesi sağlanmıştır.
    `,
    image: '/londoner_tablet.webp',
    backgroundColor: '#bdb2ff',
    color: 'white',
    isReverse: true,
    technologies: [
      {
        icon: <SiJavascript />,
        name: 'Javascript',
        backgroundColor: '#f7df1e'
      },
      {
        icon: <SiReact />,
        name: 'React',
        backgroundColor: '#00d8ff'
      },
      {
        icon: <SiStyledComponents />,
        name: 'Styled Components',
        backgroundColor: '#BE6AA3'
      }
    ]
  }
];
