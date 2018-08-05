var pgp = require('pg-promise')({});
var connectionString = 'postgres://localhost/worldwidelink';
var db = pgp(connectionString)


function getComments(req,res,next){
    db.any('SELECT * FROM ALLCOMMENTS')
        .then(function (data){
            res.status(200)
                .json({
                    status: ' success',
                    data: data,
                    message: 'Retrieved ALL user'
                })
        })

}

function newComment(req,res,next){
    db.none(
      "INSERT INTO allcomments (username, comment, history) VALUES (${username}, ${comment}, ${history})",
      {
        username: req.body.username,
        comment: req.body.comment,
        history: req.body.history
      }
    )
    .then(data => {
        res.json({
            data: data,
            success: true
        });
        
    })
    .catch(error => {
      res.json(error);
    });

}



module.exports = {
    getComments,
    newComment
  };