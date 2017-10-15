'use strict';

// angular
var app = angular.module('TeamApp', ['ngSanitize']);

app.controller('TeamCtrl', function($scope, $http, $window) {
  var ctrl = this;
  ctrl.$window = $window;
  ctrl.group_url = $window.forum_api + '/groups/' + $window.forum_group
  var group_info = ctrl.group_url + '.json';
  var group_members = ctrl.group_url + '/members.json';
  $http.get(group_info).then(function gotInfo(result) {
    ctrl.group_info = result.data.basic_group;
    console.log(ctrl.group_info);
    $http.get(group_members).then(function gotMembers(result) {
      ctrl.group_members = result.data;
      console.log(ctrl.group_members);
      for(var member of ctrl.group_members.members) {
        var member_url = $window.forum_api + '/users/' + member.username + '.json';

        // http://stackoverflow.com/questions/28927618/async-update-of-array-in-angular
        $http.get(member_url).then((function getMemberInfo(member) {
          return function(result) {
            var user = result.data.user;
            console.log(member.username, user);
            member.twitter = user.user_fields['1'];
            member.history = user.user_fields['2'];
            member.linkedin = user.user_fields['3'];
            member.facebook = user.user_fields['4'];
            member.website = user.website;
            member.website_name = user.website_name;
            member.location = user.location;
            member.bio = user.bio_cooked.split('\n')[0];
          }
        })(member));
      }
    })
  });
});
