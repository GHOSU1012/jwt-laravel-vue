webpackJsonp([1,3],{4:function(t,a,e){"use strict";function o(t){if(t&&t.__esModule)return t;var a={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e]);return a["default"]=t,a}function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(a,"__esModule",{value:!0}),a.checkAuthentication=a.logout=a.login=void 0;var s=e(1),c=n(s),i=e(5),l=o(i),r=e(3),u=e(6);a.login=function(t,a){var e=t.dispatch;c["default"].http.post("auth",a).then(function(t){var a=t.data;e(l.LOGIN_SUCCESSFUL,a.token),(0,r.receiveAccount)({dispatch:e}),(0,u.addNotification)({dispatch:e},{type:"success",message:"Login successful!"}),window.router.go({name:"account.show"})},function(){(0,u.addNotification)({dispatch:e},{type:"danger",message:"Login failed!"})})},a.logout=function(t){var a=t.dispatch;a(l.LOGOUT),(0,r.clearAccount)({dispatch:a}),(0,u.addNotification)({dispatch:a},{type:"success",message:"Logout successful!"}),window.router.go({name:"login.index"})},a.checkAuthentication=function(t){var a=t.dispatch;a(l.CHECK_AUTHENTICATION)}},28:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e(4);a["default"]={vuex:{actions:{logout:o.logout}}}},30:function(t,a,e){"use strict";function o(t){if(t&&t.__esModule)return t;var a={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(a[e]=t[e]);return a["default"]=t,a}Object.defineProperty(a,"__esModule",{value:!0});var n=e(57),s=o(n);a["default"]={vuex:{getters:{account:function(t){var a=t.account;return a}}},components:{VLayout:s}}},51:function(t,a){t.exports='<div> <nav class="navbar navbar-default"> <div class=container> <div class=navbar-header> <button type=button class="navbar-toggle collapsed"> <span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span> </button> <a class=navbar-brand>Login Example</a> </div> <div class="collapse navbar-collapse"> <ul class="nav navbar-nav"> <li class=nav-item> <a class=nav-link v-link="{ name: \'account.show\' }">Account</a> </li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href=# @click.prevent=logout><i class="glyphicon glyphicon-log-out"></i></a></li> </ul> </div> </div> </nav> <div class=container> <div class=row> <div class=col-md-12> <slot></slot> </div> </div> </div> </div> '},53:function(t,a){t.exports='<v-layout> <div class="panel panel-primary"> <div class=panel-heading> <h1 class=panel-title> {{account.name}} </h1> </div> <div class=panel-body> <table class="table table-striped"> <thead> <tr> <th> Id </th> <th> Name </th> <th> Email </th> </tr> </thead> <tbody> <tr> <td> {{account.id}} </td> <td> {{account.name}} </td> <td> {{account.email}} </td> </tr> </tbody> </table> </div> </div> </v-layout> '},57:function(t,a,e){var o,n;o=e(28),n=e(51),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},59:function(t,a,e){var o,n;o=e(30),n=e(53),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}});
//# sourceMappingURL=1.3d88b0857ca58578af39.js.map