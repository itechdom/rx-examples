module.exports = function (app,userController) {


	var routes = {

		"get":[
			{
				"url":"/",
				"description":"Get the List of users"
			},
			{
				url:"/:id",
				"description":"get one user"
			}
		],
		"post":[
			{
				"url":"/",
				"description":"register a user",
				"body":["email,password"]
			}
		],
		"delete":[
			{
				"url":"/:id",
				"description":"Delete a user"
			}
		]
	}



// Module's Routes. Please note this is actually under /users, because module is attached under /hello
	app.post('/', userController.register);
	app.post('/login', userController.login);
	app.get('/success', userController.success);
	app.get('/failure', userController.failure);
	app.post('/checkReq', userController.checkReq);


	return routes;
};



