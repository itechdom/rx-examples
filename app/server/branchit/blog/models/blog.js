/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var config = require('config');
var Schema = mongoose.Schema;
//TODO: register yourself as adminable


/**
 * post Schema
 */
//how to add ability to fork posts? fork of?
var postSchema = new Schema({
    title: {type: String, trim: true},
    content: {type: String, trim: true},
    owner: {type: Schema.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now}
});
/**
 * Validations
 */
postSchema.path('title').required(true, 'post title cannot be blank');

/**
 * Pre-remove hook
 */

postSchema.pre('remove', function (next) {
    next();
});
/**
 * Methods
 */

postSchema.methods = {
    /**
     * Save article and upload image
     *
     * @param {Object} images
     * @param {Function} cb
     * @api private
     */

    uploadAndSave: function (images, cb) {
        if (!images || !images.length)
            return this.save(cb)

        var imager = new Imager(imagerConfig, 'S3');
        var self = this;
        this.validate(function (err) {
            if (err)
                return cb(err);
            imager.upload(images, function (err, cdnUri, files) {
                if (err)
                    return cb(err);
                if (files.length) {
                    self.image = {cdnUri: cdnUri, files: files};
                }
                self.save(cb);
            }, 'article');
        });
    }

}

/**
 * Statics
 */

postSchema.statics = {
    /**
     * Find article by id
     *
     * @param {ObjectId} id
     * @param {Function} cb
     * @api private
     */

    load: function (id, cb) {
        this.findOne({_id: id})
            .populate('user', 'name email username')
            .populate('comments.user')
            .exec(cb);
    },
    /**
     * List articles
     *
     * @param {Object} options
     * @param {Function} cb
     * @api private
     */

    list: function (options, cb) {
        var criteria = options.criteria || {}

        this.find(criteria)
            //return the user inside posts (return only username and name)
            .populate('user', 'name username')
            .sort({'createdAt': -1}) // sort by date
            .limit(options.perPage)
            .skip(options.perPage * options.page)
            .exec(cb);
    }
}

mongoose.model('Post', postSchema);
module.exports = postSchema;