
(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;
	
    /*var news = $.ajax({
        url: url + 'News',
        type: "GET",
        headers: {},
        success: function(data){
            news = JSON.stringify(data);
            //console.log(news);
            //alert(JSON.stringify(data));
        },
        error: function(error){
            news = JSON.stringify(error);
            //alert(JSON.stringify(error));
        }
    });
    
    
    var el = new Everlive({
    apiKey: 'JDbXjaTJnh523bQz',
    masterKey: 'Zgi148ksrPsxupMqMxdYIwWNwImhQK2Z',
    scheme: 'https'
});
    var dataNews = el.data('News');
	var dataSourceNews = null;
    dataNews.get()
    .then(function(data){
        dataSourceNews = new kendo.data.DataSource(data);
        console.log(dataSourceNews);
    },
    function(error){
        console.log(JSON.stringify(error));
    });*/

    
    // create an object to store the models for each view
    window.APP = {
      models: {
        home: {
          title: 'Home'
        },
        settings: {
          title: 'Settings'
        },
        contacts: {
          title: 'Contacts',
          ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
          }),
          alert: function(e) {
            alert(e.data.name);
          }
        }
      }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {  
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();

      app = new kendo.mobile.Application(document.body, {
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/home.html'
      });

    }, false);


}());