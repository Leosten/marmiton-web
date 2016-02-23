angular.module('marmiton').controller('NewRecipe', ['$scope', '$http', '$location', function($scope, $http, $uibModal, $location) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.newrecipe        = {};
    recipe                  = {};
    recipe_ingredients      = {};
    $scope.ingredients_list = [];
    $scope.selectedunit     = null;
    $scope.difficulty       = 'facile';
    $scope.categorie        = 'plat';
    $scope.img_url          = null;
    $scope.optionaltags     = null;
    $scope.unitlist         = ['g', 'mg', 'l', 'ml', 'cl', 'cm'];
    $scope.level            = ['facile', 'moyen', 'difficile'];
    $scope.category         = ['plat', 'entrée', 'dessert', 'patisserie', 'autre'];

    $scope.redirect = function () {
      $location.path("/#");
    }

    $scope.addIngredient = function() {
        $scope.ingredient = {
          nom:      $scope.ingredient_name,
          quantite: $scope.ingredient_quantity,
          unite:    $scope.selectedunit
        };
      if ($scope.ingredient.nom == undefined || $scope.ingredient.quantite == undefined) {
        $scope.error = "Ingrédients invalides!";
      } else {
        $scope.selectedunit        = null;
        $scope.error               = null;
        $scope.ingredient_name     = null;
        $scope.ingredient_quantity = null;
        $scope.ingredients_list    = $scope.ingredients_list.concat($scope.ingredient);
        console.log($scope.ingredients_list);
      }
    };

    $scope.removeIngredient = function(nom, quantite, unite) {
        console.log(nom, quantite, unite);
        var indexnom = $scope.ingredients_list.indexOf(nom);
        $scope.ingredients_list.splice(indexnom, 1);
        console.log($scope.ingredients_list);
    }

    $scope.submitRecipe = function() {
      recipe = {
        nom:        $scope.recipe_name,
        image_url : $scope.img_url,
        niveau:     $scope.difficulty,
        categorie:  $scope.categorie,
        tags:       $scope.optionaltags,
        pseudo:     $scope.recipe_pseudo,
        mail:       $scope.recipe_mail 
      };

      recipe_ingredients = {
        nom:         $scope.recipe_name,
        ingredients: $scope.ingredients_list
      };

      recipe_details = {
        nom:         $scope.recipe_name,
        preparation: $scope.preparation,
        remarque:    $scope.note,
      };
      $scope.jsonreturn = recipe;
      $scope.jsonreturnplus = recipe_ingredients;
      $scope.jsonreturnplusplus = recipe_details;

    $http({
        url: 'http://127.0.0.1/api/createrecipe/insertRecipeName.php',
        method: "POST",
        data: recipe,
    }).then(function(response) {
        $http({
          url: 'http://127.0.0.1/api/createrecipe/insertRecipeIngredients.php',
          method: "POST",
          data: recipe_ingredients,
        }).then(function(response) {
          $http({
            url: 'http://127.0.0.1/api/createrecipe/insertRecipeDetails.php',
            method: "POST",
            data: recipe_details,
          }).then(function(response) {
            $scope.error="Recette crée avec succès!";
            redirect();
          })
    })
  }), function(response) {
        $scope.error = "Erreur lors de la création de la recette!";
      };
  };

  $scope.resetAll = function() {
    $scope.selectedunit     = null;
    $scope.difficulty       = 'facile';
    $scope.categorie        = 'plat';
    $scope.recipe_name      = null;
    $scope.preparation      = null;
    $scope.optionaltags     = null;
    $scope.note             = null;
    $scope.ingredient       = null;
  }

  // $scope.animationsEnabled = true;

  // $scope.open = function (size) {

  //   var modalInstance = $uibModal.open({
  //     animation: $scope.animationsEnabled,
  //     templateUrl: 'components/modal/validModal.html',
  //     controller: 'ModalInstanceCtrl',
  //     size: size,
  //   });

  //   modalInstance.result.then(function (selectedItem) {
  //     $scope.selected = selectedItem;
  //   }, function () {
  //     $log.info('Modal dismissed at: ' + new Date());
  //   });
  // };

  // $scope.toggleAnimation = function () {
  //   $scope.animationsEnabled = !$scope.animationsEnabled;
  // };

}]);


