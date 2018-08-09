const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  profileData: {
    type: String,
    required: true
  }
});

Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;


