
posterFile =[
    {
        "imageUrl" : "https://ddz4ak4pa3d19.cloudfront.net/cache/56/62/5662bc2079ee7ffd491b65c29a360ac9.jpg",
        "title" : "Sprite Fright"
    },
    {
        "imageUrl" : "https://cdna.artstation.com/p/assets/covers/images/019/392/064/large/andy-goralczyk-agent-poster-street-small.jpg?1563288236",
        "title" : "Agent 327"
    },
    {
        "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Spring2019AlphaPosterBlender.jpg/1200px-Spring2019AlphaPosterBlender.jpg",
        "title" : "Spring"
    }
]

$(document).ready(function () {
const reviewerComments = $(".comments-section");
$.getJSON('/blender-movie_JSON/assets/js/video.json',function(json){

        const videoHolder = $("div.video-container");
        let video= $(`<video class=video-holder controls poster>`);
        let videoResource = $(`<source src=${json.videoUrl}>`);
        video.append(videoResource);
        videoHolder.append(video);
        
        const heading = $("div.video__title");
        let title = $(`<p class=heading>${json.title}</p>`)
        heading.append(title);
        
        const description = $("div.video__description");
        let brief = $(`<p class=description>${json.description}</p>`);
        description.append(brief);
        
        const commentHeading = $("div.comment-heading-holder");
        let commentTitle = $(`<p class=comment-title>Comments</p>`)
        commentHeading.append(commentTitle);
        
    $.each(json.comments, function(){
        let movieComments = $(`<div class=comment-holder></div>`);
        let reviewerImage = $(`<img src=${this.image}  class=reviewer-picture>`);
        let commentSection = $(`<div class=comment-section></div>`);
        let reviewerName = $(`<h5 class=reviewer-name>${this.name}</h5>`);
        let reviewerComment = $(`<p class=reviewer-comment>${this.comment}}</p>`);
    
        commentSection.append(reviewerName);
        commentSection.append(reviewerComment);
        movieComments.append(reviewerImage);
        movieComments.append(commentSection);
        
        reviewerComments.append(movieComments);

        commentSection.append(reviewerName);
        commentSection.append(reviewerComment);
    
        movieComments.append(reviewerImage);
        movieComments.append(commentSection);
        reviewerComments.append(movieComments);
    });
});


const posterProject = $("div.upcoming-projects__posters");
$(posterFile).each(function(){
    let poster = $(`<img src=${this.imageUrl} class=poster-image>`);
    posterProject.append(poster);
});
});