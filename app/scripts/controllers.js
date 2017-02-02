'use strict';
 var app = angular.module('confusionApp');
app.controller('MenuController',['$scope','menuFactory', function ($scope,menuFactory) {
    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    
    $scope.dishes = menuFactory.getDishes();
    $scope.test="abc";
    $scope.select = function (setTab) {
        $scope.tab = setTab;
        if (setTab === 2) {
            $scope.filtText = "appetizer";
        }
        else if (setTab === 3) {
            $scope.filtText = "mains";
        }
        else if (setTab === 4) {
            $scope.filtText = "dessert";
        }
        else {
            $scope.filtText = "";
        }
    };
    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };
    $scope.toggleDetails = function () {
        $scope.showDetails = !$scope.showDetails;
    };
    
  
    
    
}]);

  app.controller('ContactController',['$scope',function($scope)
                                 {
                                var feedback=
                                 {
                                 mychannel:"", firstName:"", lastName:"",
                               agree:false, email:""
                                 };
                                       var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                              
                                $scope.feedback=feedback;
                                 }]);
                                 
app.controller('FeedbackController', ['$scope', function($scope) {
      $scope.sendFeedback = function() {
                                console.log($scope.feedback);
                                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
                                     $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };

        }]);

        app.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            var dish= menuFactory.getDish(parseInt($stateParams.id,10));
                        $scope.dish = dish;
                    }])
       
        app.controller('DishCommentController', ['$scope', function($scope) {
            
            //Step 1: Create a JavaScript object to hold the comment from the form
           var com1 =[{
                rating:"5",
                comment:"",
                author:"",
                date:""
            }];
            $scope.com1=com1;
           
         
            
            $scope.submitComment = function () {
                
                
//                //Step 2: This is how you record the date
//                "The date property of your JavaScript object holding the comment" = 
                var date = new Date().toISOString();
                $scope.com1.date =date;
                console.log($scope.com1.date);
                $scope.dish.comments.push({rating:$scope.com1.rating,comment:$scope.com1.comment,author:$scope.com1.author,date:$scope.com1.date});
                
//                
//                // Step 3: Push your comment into the dish's comment array
//                $scope.dish.comments.push("Your JavaScript Object holding the comment");
                
                //Step 4: reset your form to pristine
                
                //Step 5: reset your JavaScript object that holds your comment
                $scope.com1.author="";
                $scope.com1.rating="";
                $scope.com1.comment="";
                $scope.com1.date="";
                $scope.commentForm.$setPristine();
                
            }
        }]);
            
    


