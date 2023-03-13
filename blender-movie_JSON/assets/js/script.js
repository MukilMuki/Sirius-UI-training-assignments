$(document).ready(function () {
const reviewerComments = $(".comments-section");
const documentFragment= document.createDocumentFragment();
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
    });
});


const posterProject = $("div.upcoming-projects__posters");
$.getJSON('/blender-movie_JSON/assets/js/posters.json',function(poster){
    $.each(poster, function(){
    let poster = $(`<img src=${this.imageUrl} class=poster-image>`);
    posterProject.append(poster);
});
});
});