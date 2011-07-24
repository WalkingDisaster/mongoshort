/*Backbone.sync = function(method, model) {
  alert(method + ": " + JSON.stringify(model));
  model.id = 1;
};*/

var ShortenedUrl = Backbone.Model.extend({
  url: function () {
    return "/url";
  }
});

var ShortenedUrlCollection = Backbone.Collection.extend({
  model: ShortenedUrl,
  url: "/urls"
});

var urls = new ShortenedUrlCollection();
urls.fetch();

function saveUrl()
{
  var lulu = urls.create({
    full_url: $("#full_url").val()
  });
}
