angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('sIFacisa2.notCias', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notCias.html',
        controller: 'notCiasCtrl'
      }
    }
  })

  .state('sIFacisa2.eventos', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventos.html',
        controller: 'eventosCtrl'
      }
    }
  })

  .state('sIFacisa2.sobreOCurso', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobreOCurso.html',
        controller: 'sobreOCursoCtrl'
      }
    }
  })

  .state('sIFacisa2.planosDeCurso', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planosDeCurso.html',
        controller: 'planosDeCursoCtrl'
      }
    }
  })

  .state('sIFacisa2.professores', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/professores.html',
        controller: 'professoresCtrl'
      }
    }
  })

  .state('sIFacisa2.contato', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('sIFacisa2.sobreOApp', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobreOApp.html',
        controller: 'sobreOAppCtrl'
      }
    }
  })

  .state('sIFacisa2', {
    url: '/side-menu21',
    templateUrl: 'templates/sIFacisa2.html',
    controller: 'sIFacisa2Ctrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

});