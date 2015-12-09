var repl=require('repl');

function startRepl(){
  var session=  repl.start({});
    session.context.FE=require('./..');
}
if(module.parent){
    module.exports=startRepl;
} else{
    startRepl();
}