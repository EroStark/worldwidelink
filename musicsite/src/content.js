import React from 'react';
import {animateScroll} from "react-scroll";
import axios from "axios";



class Content extends React.Component {
  constructor(){
    super();
    this.state = {
      newComment: "",
      newName: "",
      comments: []
    }
  }

  handleTextInput = e => {
    this.setState({
      [e.target.className]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { newComment, newName, comments } = this.state
    const history = new Date().toLocaleString()
    const newPacket = {username: newName , comment: newComment , history: history}
    
    console.log("Here", history)
    if(newComment !== "" && newName !== ""){
      this.addComment(newPacket)
        this.setState({
        newComment: "",
        newName: "",
        comments: [...comments, newPacket]
      }, this.scrollToBottom())
    }
  
  }

  scrollToBottom(){
    animateScroll.scrollToBottom({
      containerId: "chatbox"
    })
  }

  getComments = () => {
    axios
    .get("/getcomments")
    .then(res => {
      var madeComments = res.data.data
      var commentArray = []
      madeComments.forEach( comment => {
        commentArray = [...commentArray, comment]
      })
      this.setState({
        comments: commentArray
      })
    })
    .catch(err => {
      console.log(err);
    });
  };

  addComment = newComment => {
    
    axios
    .post('/newComment', {
      username: newComment.username,
      comment: newComment.comment,
      history: newComment.history
    })
    .then(res => {
      console.log('success')
    })
    .catch(err => {
      this.setState({
        message: "Error posting new image"
      })
    })
  }

  componentDidMount() {
    this.getComments();
  }

  render(){
    const {newComment, newName , comments} = this.state
    let commentCopy = [...comments]
    let commentsRefresh = commentCopy.reverse()
    console.log("normal", commentCopy, "reverse",commentCopy.reverse())
    return(
      <div className ="content">
       <div>
        <div className="cover">
        <iframe width="770" height="433.125" src="https://www.youtube.com/embed/TXSxwfJmvr8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>

        <div className="embeds">
            <iframe src="https://open.spotify.com/embed?uri=spotify:album:1pESV3wn7IZo2ywVb1HFjf" 
                  width="250" height="80" 
                  frameborder="0" allowtransparency="true" 
                  allow="encrypted-media">
            </iframe>

            <iframe allow="autoplay *; encrypted-media *;" 
                  frameborder="0" height="450" 
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/the-m-o-single/1418312884?app=music" 
                  width="250" height="80">
            </iframe>

            <iframe width="250" height="80" 
                  scrolling="no" frameborder="no" allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/477900072&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
        </div> 
          

       </div>
        
       <div className="submit container-1">
          <div className= "chatbox" id="chatbox" >
              {commentsRefresh.map(comment => (
                <div className="comContainer"> <div><b>{comment.username}</b> says "{comment.comment}" </div> <div className="history">{comment.history}</div></div>
              ))}
          </div>
          
          <form
          onSubmit={this.handleSubmit}
          >
          <input id="text" type="text" className="newName" value={newName} onChange={this.handleTextInput} placeholder="Name" />
          <input id="text" type="text" className="newComment" value={newComment} onChange={this.handleTextInput} placeholder="Leave a Comment" />
          <button >Submit</button>
          </form>

       </div>
      </div>
    )
  }
}

export default Content