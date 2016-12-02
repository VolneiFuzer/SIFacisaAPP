angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('sIFacisa.notCias', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notCias.html',
        controller: 'notCiasCtrl'
      }
    }
  })

  .state('sIFacisa.eventos', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eventos.html',
        controller: 'eventosCtrl'
      }
    }
  })

  .state('sIFacisa.sobreOCurso', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobreOCurso.html',
        controller: 'sobreOCursoCtrl'
      }
    }
  })

  .state('sIFacisa.planosDeCurso', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planosDeCurso.html',
        controller: 'planosDeCursoCtrl'
      }
    }
  })

  .state('sIFacisa.gradeCurricular', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gradeCurricular.html',
        controller: 'gradeCurricularCtrl'
      }
    }
  })

  .state('sIFacisa.professores', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/professores.html',
        controller: 'professoresCtrl'
      }
    }
  })

  .state('sIFacisa.contato', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('sIFacisa.sobreOApp', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobreOApp.html',
        controller: 'sobreOAppCtrl'
      }
    }
  })

  .state('sIFacisa', {
    url: '/side-menu21',
    templateUrl: 'templates/sIFacisa.html',
    controller: 'sIFacisaCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});