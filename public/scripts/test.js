/*Backbone.sync = function(method, model) {
  alert(method + ": " + JSON.stringify(model));
  model.id = 1;
};*/

var ShortenedUrl = Backbone.Model.extend({
  url: function () {
    return "/url";
  }
});

var miku = new ShortenedUrl({
  full_url: "http://www.asadf.com"
});

function saveUrl()
{
  var lulu = new ShortenedUrl({
    full_url: $("#full_url").val()
  });
  lulu.save();
}
