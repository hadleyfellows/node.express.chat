module.exports = function Route(app){
  // app.get('/', function(req, res){
  //   res.render('index', {title:'Welcome Page', session_data:req.session});
  // });

  //Listens to the order_ice_cream event
  // app.io.route('form_submit_leg1', function(req) {
  //     console.log('Client wants ', req.data.name + ' ' + req.data.email);
  //     req.io.emit('form_submit_leg2', { name: req.data.name, email: req.data.email });
  // });

  // Broadcast the new visitor event on ready route.
  app.io.route('got_a_new_user', function(req) {
    //console.log(req);
    req.session.name = req.data.name;
    req.session.sessionID = req.sessionID; //unique sessionID for the user
    req.session.save(function(){
      req.io.emit('new_user', {sess: req.session.sessionID,  name: req.data.name } )
    });
  });  
  // Broadcast the new visitor event on ready route.
  app.io.route('typing', function(req) {
      //app.io.broadcast('new visitor', {name: req.session.name, message: req.data.message } );
      req.io.broadcast('typer', {name: req.session.name, } );
  });
  // Broadcast the new visitor event on ready route.
  app.io.route('not_typing', function(req) {
      //app.io.broadcast('new visitor', {name: req.session.name, message: req.data.message } );
      req.io.broadcast('non_typer', {name: req.session.name, } );
  });

  // Broadcast the new visitor event on ready route.
  app.io.route('ready', function(req) {
      app.io.broadcast('new visitor', {sess: req.session.sessionID, name: req.session.name, message: req.data.message } );
      //req.io.broadcast('new visitor', {sess: req.session.sessionID, name: req.session.name, message: req.data.message } );
  });

  // Broadcast the new visitor event on ready route.
  app.io.route('ready_update', function(req) {
      //app.io.broadcast('new visitor', {name: req.session.name, message: req.data.message } );
      req.io.broadcast('new visitor update', {sess: req.session.sessionID, name: req.session.name, message: req.data.message } );
  });

  // Broadcast the new visitor event on ready route.
  app.io.route('updater', function(req) {
    console.log(req);
      //app.io.broadcast('new visitor', {name: req.session.name, message: req.data.message } );
      req.io.broadcast('new update', {sess: req.session.sessionID, name: req.session.name, message: req.data.message } );
  });
  // Send client html.
  app.get('/', function(req, res) {
      res.render('chat', { session_data:req.session });
  })

}

