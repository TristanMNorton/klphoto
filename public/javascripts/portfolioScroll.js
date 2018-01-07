$('document').ready(function(){

    // retrieves contained elements
    var containedImagePaths = document.getElementsByClassName('galleryFrame');
    var containedImageNames = [];

    // parses out src paths from DOM array
    for (i = 0; i < containedImagePaths[0].children.length; i++) {
       containedImageNames[i] = containedImagePaths[0].children[i].src.substring(
           containedImagePaths[0].children[i].src.lastIndexOf('/') + 1, 
           containedImagePaths[0].children[i].src.length
        );
     };
    
    // declares image count with an index of 0 to be properly referenced in conditionals
    var imgNumber = containedImageNames.length - 1;
   
    // initiates image scroll on click
    $('.scrollButton').click(function(){
        var imgClasses = $(this).attr('class').split(/\s+/);
        var currImageSrc = $('#portItemDisplay').attr('src');
        var isolatedPath = currImageSrc.substring(0, currImageSrc.lastIndexOf("\\") + 1);
        var isolatedFile = currImageSrc.substring(currImageSrc.lastIndexOf("\\") + 1, currImageSrc.length);
        var finalFile = isolatedFile;

        //finds unique identifier to determine left or right
        for (i = 0; i < imgClasses.length; i++) { 

            //if left cycle backwards, includes conditional to determine if current image is the first one
            if (imgClasses[i] === 'fa-chevron-left') {
                console.log('click');
                for(i = 0; i < containedImageNames.length; i++) {
                    if (containedImageNames[i] === finalFile) {
                        if (i === 0) {
                            incr = imgNumber;
                        } else {
                            incr = i - 1;
                        }
                        var fileName = containedImageNames[incr];
                        var finalFilePath = isolatedPath + fileName;
                        $('#portItemDisplay').attr('src', finalFilePath);
                    } 
                }

            //if right cycle forwards, includes conditional to determine if current image is the last one
            } else if (imgClasses[i] === 'fa-chevron-right') {
                
                
                for(i = 0; i < containedImageNames.length; i++) {
                    if (containedImageNames[i] === finalFile) {
                        if (i === imgNumber) {
                            incr = 0;
                        } else {
                            incr = i + 1;
                        }
                        var fileName = containedImageNames[incr];
                        var finalFilePath = isolatedPath + fileName;
                        $('#portItemDisplay').attr('src', finalFilePath);
                    } 
                }
               

            } else {}; 
        };
        
    });
    

});