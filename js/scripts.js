
// Menu Mobile
  document.getElementById('hamburguer-icon').onclick = () => {
    document.getElementById('sliding-header-menu-outer').style.right = '0px';
  };
  document.getElementById('sliding-header-menu-close-button').onclick = () => {
    document.getElementById('sliding-header-menu-outer').style.right = '-320px';
  };

// About us Tab

const aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

const unselected_color = "#646872";
const selected_color = "#2A2D34";

const about_tags = document.getElementsByClassName('single-tab');

  for (let a = 0; a < about_tags.length; a++) {

    about_tags[a].onclick = function() {

      for (let b = 0; b < about_tags.length; b++) {
        about_tags[b].style["background-color"] = unselected_color;
        about_tags[b].style["font-weight"] = 'normal'; 
      }

     this.style["background-color"] = selected_color;
     this.style["font-weight"] = 'bold'; 

     let selecionado = this.innerHTML;

    document.getElementById('box-text').innerHTML = aboutUs[selecionado];

    }
    
  }


// Slider de serviços

const our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];


const servico_atual = 0;

document.getElementById('service-previous').onclick = function() {
  if (servico_atual == 0) {
    var servico_anterior = our_services.length - 1;
  } else {
    var servico_anterior = servico_atual - 1;
  }

  document.getElementById('service-title').innerHTML = our_services[servico_anterior].title;
  document.getElementById('service-text').innerHTML = our_services[servico_anterior].text;
  servico_atual = servico_anterior;
}



document.getElementById('service-next').onclick = function () {
 
  if (servico_atual == our_services.length - 1) {
    var servico_seguinte = 0;
  } else {
    var servico_seguinte = servico_atual + 1;
  }

  document.getElementById('service-title').innerHTML = our_services[servico_seguinte].title;
  document.getElementById('service-text').innerHTML = our_services[servico_seguinte].text;
  servico_atual = servico_seguinte;
};
// Data Footer:

const ano_atual = new Date();
ano_atual = ano_atual.getFullYear();
document.getElementById('current_year').innerHTML = ano_atual;




  
   


   