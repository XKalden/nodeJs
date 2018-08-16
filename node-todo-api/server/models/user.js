var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var user = new User({
//     email: ' kaldne@hotmail.com'
// });


// user.save().then((doc) => {
//     console.log('User Save', doc);
// }, (e) => {
//     console.log('Unable to save ', e);
// });


module.exports = {User: User};

