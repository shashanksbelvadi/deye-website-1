document.addEventListener("DOMContentLoaded", function(event) {
    loadFeaturedImages();
    loadDEyeLogo();
    debugger;
});

featuredImgSrc = "/Users/sbelvadi/Documents/personal_workspace/deye-website/deye/deye/src/views/images/featuredImage.jpg";
fI2 = "/Users/sbelvadi/Documents/personal_workspace/deye-website/deye/deye/src/views/images/tamalpaisSunset.jpg";
fI3 = "/Users/sbelvadi/Documents/personal_workspace/deye-website/deye/deye/src/views/images/images/twinPeaksSunrise.jpg"
fI4 = "/Users/sbelvadi/Documents/personal_workspace/deye-website/deye/deye/src/views/images/pfeifferBeachSunset.jpg"
fI5 = "/Users/sbelvadi/Documents/personal_workspace/deye-website/deye/deye/src/views/images/poovarBackwaters.jpg"
dEyeLogoImg = "/Users/sbelvadi/Documents/personal_workspace/deye-website/deye/deye/src/views/images/DEyeLogoWhite.png"

function loadFeaturedImages() {
    var featuredImage = document.getElementById("featured-image");
    var featuredImages = [featuredImgSrc, fI2, fI3, fI4, fI5];

    var i = 0;
    loadFeaturedImage(featuredImage, featuredImages[i]);
    i++;

    setInterval(function() {
        removeFeaturedImage(featuredImage);
        loadFeaturedImage(featuredImage, featuredImages[i]);

        i++;
        if (i == featuredImages.length) {
            i = 0;
        }
    }, 7000);
}

function removeFeaturedImage(featuredImage) {
    featuredImage.remove();
}

function loadFeaturedImage(featuredImage, imageSrcPath) {
    var featuredImg = document.createElement("img");
    featuredImg.src = imageSrcPath;

    var parent = document.getElementById("doc-body");
    parent.appendChild(featuredImage);

    featuredImage.removeAttribute("class");
    featuredImage.setAttribute("class", "featured-image");
    featuredImage.setAttribute("src", imageSrcPath);
}

function loadDEyeLogo() {
    var dEyeLogo = document.getElementById("deye-logo");
    dEyeLogo.setAttribute("class", "dEyeLogo");
    dEyeLogo.setAttribute("src", dEyeLogoImg);
}
