# ember-cli-bindstyle-helper

Transformed [https://github.com/yderidde/bindstyle-ember-helper](bindstyle-ember-helper) in an ember-cli addon.

A very simple handlebar helper for [ember.js](http://emberjs.com) which allow you to bind style properties in your templates. 

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage
---
{{bind-style}} is based on ember {{bind-attr}} and works pretty much the same way.


Imagine a view that contains the width of a bar in your bar-chart.

```javascript
App.MyBarChart = Ember.View.extend({
  barWidth: 200
});
```

In your handlebars template you will then do  

```html
<div class="bar" {{bind-style width="barWidth" width-unit="px"}}></div> 
```

You must define the unit for the value to be used. There are 2 ways to define units.  

Global unit   

```html
<div class="bar" {{bind-style unit="px" width="barWidth" height="barHeight"}}></div> 
```   

Specific unit    

```html
<div class="bar" {{bind-style width="barWidth" width-unit="px" height="barHeight" height-unit="%"}}></div> 
```    

If you define a global unit and specific units. The specific unit take precedence over the global when defined.

That's it

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
