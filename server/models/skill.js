var db = require('../dbConfig');
require('./user');
var TeachSkill = require('./teachSkill');
var LearnSkill = require('./learnSkill');

//////////////////////////////////////////////////////////////////
// Require statements for incomplete feature: UPVOTING OTHER USERS
//
var LikeTeacher = require('./likeTeacher');
var LikeLearner = require('./likeLearner');
//////////////////////////////////////////////////////////////////


var Skill = db.Model.extend({
  tableName: 'skills',
  hasTimestamps: true,

  teachers: function () {
    return this.belongsToMany('User', 'users_teach_skills').withPivot(['skill_level','blurb','stars']);
  },

  learners: function () {
    return this.belongsToMany('User', 'users_learn_skills').withPivot(['skill_level','blurb','stars']);
  },

  initialize: function () {
    // Place for creating event listener
    // e.g. this.on('creating', function(model, attrs, options){

  }

});


module.exports = db.model('Skill', Skill);
