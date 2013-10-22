'use strict';

eventsApp.factory('gravatar', function (crypto) {
    return{
        buildUrl: function (email) {
            var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";
            var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(email))
                return defaultGravatarUrl;

            return 'http://www.gravatar.com/avatar/' + crypto.MD5(email) + '.jpg?s=200&r=g';
        }
    }
})