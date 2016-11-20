import { ExampleAngular2GoogleMapsGetNativeMapPage } from './app.po';

describe('example-angular2-google-maps-get-native-map App', function() {
  let page: ExampleAngular2GoogleMapsGetNativeMapPage;

  beforeEach(() => {
    page = new ExampleAngular2GoogleMapsGetNativeMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
