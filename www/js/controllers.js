angular.module('app.controllers', [])
  
.controller('notCiasCtrl', ['$scope', '$stateParams', '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

	firebase.database().ref('noticias').limitToLast(50).on('value', function(snapshot) {
		$scope.noticias = Object.keys(snapshot.val()).map(function (key) { return snapshot.val()[key]; });
		$scope.$apply();
	});

	$scope.goToNoticia = function(id) {
		$location.path('side-menu21/noticia').search({id: id});
	}

	$scope.formatDate = function(date) {
		return moment(date).format('LLL');
	};

}])

.controller('noticiaCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

	var id = $location.search().id;

	firebase.database().ref('noticias/' + id).once('value').then(function(snapshot) {
		$scope.noticia = snapshot.val();
		$scope.dataFormatada = moment($scope.noticia.data).format('LLL');
		$scope.$apply();
	});

	

}])

.controller('eventoCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

	var id = $location.search().id;

	firebase.database().ref('eventos/' + id).once('value').then(function(snapshot) {
		$scope.evento = snapshot.val();
		$scope.$apply();
	});

	

}])
   
.controller('sIFacisaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventosCtrl', ['$scope', '$stateParams', '$location', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $location) {

	firebase.database().ref('eventos').limitToLast(50).on('value', function(snapshot) {
		$scope.eventos = Object.keys(snapshot.val()).map(function (key) { return snapshot.val()[key]; });
		$scope.$apply();
	});

	$scope.goToEvento = function(id) {
		$location.path('side-menu21/evento').search({id: id});
	}

}])
   
.controller('sobreOCursoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	firebase.database().ref('sobre').once('value').then(function(snapshot) {
		$scope.sobre = snapshot.val();
		$scope.$apply();
	});


}])
   
.controller('planosDeCursoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	firebase.database().ref('periodos').on('value', function(snapshot) {
		$scope.periodos = snapshot.val();
		$scope.$apply();
	});

}])
   
.controller('professoresCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	firebase.database().ref('professores').on('value', function(snapshot) {
		$scope.professores = Object.keys(snapshot.val()).map(function (key) { return snapshot.val()[key]; });
		$scope.$apply();
	});

}])
   
.controller('contatoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	firebase.database().ref('contatos').on('value', function(snapshot) {
		$scope.contatos = snapshot.val();
		$scope.$apply();
	});

}])
   
.controller('sobreOAppCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	firebase.database().ref('sobreOApp').on('value', function(snapshot) {
		$scope.sobre = snapshot.val();
		$scope.$apply();
	});

}])
   
.controller('sIFacisa2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 