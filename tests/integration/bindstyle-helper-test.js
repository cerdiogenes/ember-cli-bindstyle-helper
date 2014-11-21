import Ember from "ember";
import { test } from "ember-qunit";
import startApp from "../helpers/start-app";
var App;

module('An Integration test', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Inline style", function() {
  visit('/').then(function() {
    equal(
      find('div[style="left:0px; top:0px; height:10px; width:10px;"]').length, 1,
      "Page have one element with style=\"left:0px; top:0px; height:10px; width:10px;\""
    );
    equal(
      find('div[style="left:30px; top:30px; height:10px; width:10px;"]').length, 1,
      "Page have one element with style=\"left:30px; top:30px; height:10px; width:10px;\""
    );
  });
});