// t1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
    render:function(){
        return(
        <div className="commentList">
            Hi, comment list.
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
        <div className="commentForm">
            Hi, a comment form.
            </div>
        );        
    }    
});
    
ReactDOM.render(
  <CommentBox />,
  document.getElementById('example')
);