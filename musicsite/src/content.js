import React from 'react';
import {animateScroll} from "react-scroll";



class Content extends React.Component {
  constructor(){
    super();
    this.state = {
      newComment: "",
      comments: []
    }
  }

  handleTextInput = e => {
    this.setState({
      newComment: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { newComment, comments } = this.state
    this.setState({
      newComment: "",
      comments: [...comments, newComment]
    }, this.scrollToBottom())
  
  }

  scrollToBottom(){
    animateScroll.scrollToBottom({
      containerId: "chatbox"
    })
  }

  render(){
    const {newComment , comments} = this.state
    let commentCopy = [...comments]
    let commentsRefresh = commentCopy.reverse()
    console.log("normal", commentCopy, "reverse",commentCopy.reverse())
    return(
      <div className ="content">
       <div className="embeds">
          <iframe src="https://open.spotify.com/embed?uri=spotify:album:1pESV3wn7IZo2ywVb1HFjf" 
                width="300" height="80" 
                frameborder="0" allowtransparency="true" 
                allow="encrypted-media">
          </iframe>

          <iframe allow="autoplay *; encrypted-media *;" 
                frameborder="0" height="450" 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/the-m-o-single/1418312884?app=music" 
                width="300" height="200">
          </iframe>

          <iframe width="300" height="166" 
                scrolling="no" frameborder="no" allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/477900072&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
          </iframe>
       </div> 
        
       <div className="cover">
          <img src="http://i66.tinypic.com/25ic75v.jpg" alt="Smiley face" height="400" width="400" />
       </div>
        
       <div className="submit container-1">
          <div className= "chatbox" id="chatbox" >
              {commentsRefresh.map(comment => (
                <div className="comContainer"> {comment} </div>
              ))}
          </div>
          
          <form
          onSubmit={this.handleSubmit}
          >
          <input id="text" type="text" value={newComment} onChange={this.handleTextInput} placeholder="Leave a Comment" />
          <button >Submit</button>
          </form>

       </div>
      </div>
    )
  }
}

export default Content