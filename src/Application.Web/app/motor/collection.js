define(['motor/model','backbone.localStorage'], function(Model) {
    var store = new Backbone.LocalStorage(window.store || "Motor");
    var Collection = Backbone.Collection.extend({
        localStorage: store,
        model: Model,
        url: "motor/initMotor.json"
    });
    return Collection;
});
