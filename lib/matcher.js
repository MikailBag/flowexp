module.exports=function matcher(string,tokList){
    let pos=0;
    tokList.forEach(function(token){
        switch(token.type){
            case 'equals':

            default:
                throw new Error('Unknown type')
        }
    })
};