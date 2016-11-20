# example-angular2-google-maps-getNativeMap
Example angular project with angular 2 google maps getting access to the underlying map object.

Picture of what this should look like: ![Alt](/img.png "Sample App")

# Getting Started
in order to run this project do the following.
*Clone it
* `npm install`
* update your apiKey in @NgModule
* `ng serve`


# Description of the example
The reason I put this example together is alot of people keep asking the same question on the
angular 2 google map chat about how to access the native map object. The approach is to create a component
within the google maps directive.  this is the only way to have the inject of the API service to work correctly.


```html
<sebm-google-map #map [latitude]="lat" [longitude]="lng">
  <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
  <app-map-content></app-map-content>
</sebm-google-map>
```

# References
Go play around with the angular 2 typescript maps API it works great.
https://angular-maps.com/