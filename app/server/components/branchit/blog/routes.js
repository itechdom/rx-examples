
module.exports = function (app,Controller) {


	var routes = {

		"get":[
			{
				"url":"/",
				"description":"Get the List of Blogs"
			},
			{
				url:"/:id",
				"description":"get one blog"
			}
		],
		"post":[
			{
				"url":"/",
				"description":"create a blog",
				"body":["title,content"]
			},
			{
				url:"/:id",
				"description":"Copy a blog over"
			}

		],
		"put":[
			{
				"url":"/:id",
				"description":"Update a blog",
				"body":["title,content"]
			}
		],
		"delete":[
			{
				"url":"/:id",
				"description":"Delete a blog"
			}
		]
	}

	app.param('id',Controller.load);
	app.get('/',Controller.index);
	app.post('/', Controller.create);

	//this will fork the blog
	app.post('/:id', Controller.fork);
	app.get('/:id', Controller.show);
	app.put('/:id', Controller.update);
	//we have to check the request, if it's delete it makes the owner only allowed to delete
	app.delete('/:id', Controller.destroy);


	return routes;

};
