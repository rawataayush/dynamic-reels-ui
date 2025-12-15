const reels = [
    {
    username: "tech.with.aarav",
    likeCount: 12400,
    isLiked: false,
    commentCount: 320,
    caption: "Master JavaScript by building projects — not by watching tutorials 😤",
    video: "https://www.pexels.com/download/video/5377700.mp4",
    userprofile: "https://images.pexels.com/photos/28452462/pexels-photo-28452462.jpeg",
    shareCount: 210,
    isFollowed: false
    },
    {
    username: "codebysia",
    likeCount: 9850,
    isLiked: true,
    commentCount: 190,
    caption: "Dark mode UI hits different 🔥",
    video: "https://www.pexels.com/download/video/34459460.mp4",
    userprofile: "https://images.pexels.com/photos/18252121/pexels-photo-18252121.jpeg",
    shareCount: 120,
    isFollowed: true
    },
    {
    username: "ranveer.fit",
    likeCount: 20400,
    isLiked: false,
    commentCount: 510,
    caption: "Small steps every day → big transformation.",
    video: "https://www.pexels.com/download/video/6254849.mp4",
    userprofile: "https://images.pexels.com/photos/35160676/pexels-photo-35160676.jpeg",
    shareCount: 340,
    isFollowed: false
    },
    {
    username: "travelwithkaira",
    likeCount: 7620,
    isLiked: false,
    commentCount: 160,
    caption: "Sunsets will always be my weakness 🌅✨",
    video: "https://www.pexels.com/download/video/4434242.mp4",
    userprofile: "https://images.pexels.com/photos/20367750/pexels-photo-20367750.jpeg",
    shareCount: 89,
    isFollowed: true
    },
    {
    username: "design.diaries",
    likeCount: 14200,
    isLiked: true,
    commentCount: 440,
    caption: "UI tip: Reduce clutter, increase clarity.",
    video: "https://filesamples.com/samples/video/mp4/sample_960x540.mp4",
    userprofile: "https://images.pexels.com/photos/27742317/pexels-photo-27742317.jpeg",
    shareCount: 275,
    isFollowed: true
    },
    {
    username: "streetfoodguru",
    likeCount: 50100,
    isLiked: false,
    commentCount: 980,
    caption: "If food is love, then this is pure romance 😍",
    video: "https://www.pexels.com/download/video/35152714.mp4",
    userprofile: "https://images.pexels.com/photos/27349277/pexels-photo-27349277.jpeg",
    shareCount: 640,
    isFollowed: false
    },
    {
    username: "fitnessbymeera",
    likeCount: 8300,
    isLiked: false,
    commentCount: 210,
    caption: "A quick 10-min workout you can do anywhere!",
    video: "https://samplelib.com/lib/preview/mp4/sample-30s.mp4",
    userprofile: "https://images.pexels.com/photos/32045375/pexels-photo-32045375.jpeg",
    shareCount: 150,
    isFollowed: true
    },
    {
    username: "coding.crush",
    likeCount: 19300,
    isLiked: true,
    commentCount: 480,
    caption: "When your code finally works… & you don’t know why 😂",
    video: "https://www.pexels.com/download/video/5495890.mp4",
    userprofile: "https://images.pexels.com/photos/20806678/pexels-photo-20806678.jpeg",
    shareCount: 310,
    isFollowed: false
    },
    {
    username: "minimalhomevibes",
    likeCount: 6100,
    isLiked: false,
    commentCount: 140,
    caption: "Clean space = clear mind.",
    video: "https://archive.org/download/BigBuckBunny_328/BigBuckBunny_512kb.mp4",
    userprofile: "https://images.pexels.com/photos/19415827/pexels-photo-19415827.jpeg",
    shareCount: 78,
    isFollowed: true
},
{
    username: "daily.motivation",
    likeCount: 45200,
    isLiked: true,
    commentCount: 1050,
    caption: "Discipline will take you where motivation can't.",
    video: "https://www.pexels.com/download/video/34767630.mp4",
    userprofile: "https://images.pexels.com/photos/30089247/pexels-photo-30089247.jpeg",
    shareCount: 900,
    isFollowed: true
}
];
const reelsSection = document.querySelector('.reels-section');

function renderData () {
    reelsSection.innerHTML = "";
    reels.forEach(function (elem, idx) {
        let reelDiv = document.createElement('div');
        reelDiv.className = 'reel';
        reelDiv.innerHTML = `
            <video id=${idx} src="${elem.video}"  loop muted ></video>
            <div class="reel-info">
                <div class="user-profile">
                    <img src="${elem.userprofile}" alt="${elem.username}">
                    <span>@${elem.username}</span>
                    <button class="follow-btn" id="${idx}" >${elem.isFollowed? 'Following' : 'Follow'}</button>
                </div>
                <p class="caption">${elem.caption}</p>
                <div class="engagement">
                    <div id="${idx}" class="like-section">
                    <i class="${elem.isLiked? 'liked ri-heart-fill' : 'like ri-heart-line'}"></i>
                        <span>${elem.likeCount}</span>
                    </div>
                <div class="comment-section">
                    <i class="comment ri-chat-1-line"></i>
                    <span>${elem.commentCount}</span>
                </div>
                <div class="share-section">
                    <i class="share ri-send-plane-line"></i>
                    <span>${elem.shareCount}</span>
                </div>
                <div class="more-section">
                    <i class="more ri-more-2-line"></i>
                </div>
                </div>
                </div>`;
        reelsSection.appendChild(reelDiv);
    })};
renderData();

const allLikeBtns = document.querySelectorAll('.like-section');

reelsSection.addEventListener('click', function(dets){
    const followButton = dets.target.closest('button');
    const likeButton = dets.target.closest('.like-section');

    if(followButton && followButton.id){
        const indexString = followButton.id;
        const reelIndex = +indexString;
        if(reels[reelIndex].isFollowed === false) {
            reels[reelIndex].isFollowed = true;
        }else{
            reels[reelIndex].isFollowed = false;
        }
    }

    if(likeButton){
        const indexString = likeButton.id;
        const reelIndex = +indexString;

        if (reels[reelIndex].isLiked === false){
            reels[reelIndex].likeCount++;
            reels[reelIndex].isLiked = true;
        }
        else if(reels[reelIndex].isLiked === true){
            reels[reelIndex].likeCount--;
            reels[reelIndex].isLiked = false;
        }
    }
    renderData();
})



