var App = {
  Views: {},
  Routers: {},
  init: function () {
    var app = new App.Routers.Urls();
    app.initialize();
    Backbone.history.start({pushState: true});
  }
}

var ShortenedUrl = Backbone.Model.extend({
  url: function () {
    return "/url";
  }
});

var ShortenedUrls = Backbone.Collection.extend({
  model: ShortenedUrl,
  url: "/urls"
});

App.Routers.Urls = Backbone.Router.extend({
  routes: {
    "": "viewUrls",
    "add": "addNew"
  },
  initialize: function () {
    this.Urls = new ShortenedUrls();
    _.bindAll(this, "viewUrls", "addNew");
  },
  viewUrls: function () {
    var urls = this.Urls;
    this.Urls.fetch({
      success: function ()
      {
        new App.Views.Index({model: urls.toJSON()});
      }
    });
  },
  addNew: function () {
    new App.Views.Add({model: this.Urls});
  }
});

App.Views.Index = Backbone.View.extend({
  events: {
      "click #addNew": "addNew"
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    $(this.el).html(ich.urlTemplate({urls:this.model}));
    $("#content").html(this.el);
  },
  addNew: function () {
    Backbone.history.navigate("add");
    Backbone.history.loadUrl("add");
  }
});

App.Views.Add = Backbone.View.extend({
  events: {
    "click #create": "createNewUrl"
  },
  initialize: function () {
    _.bindAll(this, "render", "createNewUrl");
    this.render();
  },
  render: function () {
    $(this.el).html(ich.newTemplate());
    $("#content").html(this.el);
  },
  createNewUrl: function () {
    this.model.create({full_url: $("#full_url").val()});
  }
});
