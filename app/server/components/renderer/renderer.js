//replaces VDom or Jquery in that it affects the output
module.exports = function(data){
    global.res.setHeader("content-type", "application/json")
    global.res.write(data);
    global.res.end();
};
