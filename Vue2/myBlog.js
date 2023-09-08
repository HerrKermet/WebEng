
var myComment = {
    props: ["comment"],
    template:
        "<div>" +
        "<table><tr><td>{{comment.user}}:</td></tr><tr><td>{{comment.content}}</td></tr></table>" +
        "</div>"
}
var commentCreator = {
    data: function() {
        return {
            newComment: {
                user: "",
                content: ""
            }
        }
    },
    template: 
        "<div class='commentCreatorWrapper'>"+
            "<input v-model='newComment.user' placeholder='User'> <input v-model='newComment.content' placeholder='Content'> <button v-on:click='$emit(`commit-new-comment`, newComment)'>Post</button> "+
        "</div>"
};

var myBlog = {
    props: ["blog"],
    template:
        "<div class='blog'>"+
            "<table class='blogTable'><tr><td class='blogTitle'>{{blog.title}}</td></tr><tr><td class='blogContent'>{{blog.content}}</td></tr></table>"+
            "<div class='commentWrapper'><my-comment v-for='comment in blog.comments' v-bind:comment='comment'></my-comment></div>"+
            "<comment-creator v-on:commit-new-comment='createNewComment'></comment-creator>"+
        "</div>",
    components: {
        "my-comment": myComment,
        "comment-creator": commentCreator
    },
    methods: {
        createNewComment: function(newComment){
            if(newComment.user == "" || newComment.content == ""){
                alert("Input must not be empty");
                return;
            }
            this.blog.comments.push({
                user: newComment.user,
                content: newComment.content
            });
        }
    }
};


var blogCreator = {
    data: function(){
        return {
            newBlog: {
                title: "",
                content: ""
            }
        }
    },
    template: 
        "<div class='blogCreator'>"+
            "<input v-model='newBlog.title' placeholder='Title'> <input v-model='newBlog.content' placeholder='Content'> <button v-on:click='$emit(`commit-new-blog`, newBlog)'>Create</button> "+
        "</div>",
    components:{
    }
};

var vm = new Vue({
   el: "#app",
    data:{
       blogEntries: [
           {
               title: "Initial blog",
               content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
                   + " Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,"
                   + " sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

               comments: [{
                   user: "David",
                   content: "Test comment"
               },
               {
                   user: "David",
                   content: "Second test"
               }
                   ]

           }
       ]
    },
    methods: {
        createNewBlog: function (newBlog){
            if(newBlog.title == "" || newBlog.content == ""){
                alert("Input must not be empty");
                return;
            }
              this.blogEntries.push({
                  title: newBlog.title,
                  content: newBlog.content,
                  comments: []
              });
        }
    },
    components:{
       "my-blog": myBlog,
        "blog-creator": blogCreator
    }
});