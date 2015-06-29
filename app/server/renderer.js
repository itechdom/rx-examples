module.exports = function(data){
    global.res.write(data);
    global.res.end();
};
