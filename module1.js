class ImageUtils {

    static getCanvas(w, h) {
        var c = document.querySelector("canvas");
        c.width = w;
        c.height = h;
        return c;
    }

    static getPixels(img) {
        var c = ImageUtils.getCanvas(img.width, img.height);
        var ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        return ctx.getImageData(0,0,c.width,c.height);
    }

    static putPixels(imageData, w, h) {
        var c = ImageUtils.getCanvas(w, h);
        var ctx = c.getContext('2d');
        ctx.putImageData(imageData, 0, 0);
    }

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
    var img = new Image();
    img.src = "img/cat.jpg";
   // brighten(img,50);
    removingeyeColor(img);
    //makeInvert(img);
    //noise(img,40);
  //  colourise();
});


  //function hidePixels(img)
  //  var pixels = ImageUtils.getPixels(img);
   // var heightPixelsToHide = 100;
    //for(var i=0; i < img.width * heightPixelsToHide * 4; i++){
   //     pixels.data[i] = 255;
  //  }


function makeMoreBlue(img,adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i + 2] = data[i + 2] + adjustment;
    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}

function makeMoreGreen(img,adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i + 1] = data[i + 1] + adjustment;
    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}


function makeMoreRed(img,adjustment) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {
        data[i + 0] = data[i + 0] + adjustment;
    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}

function brighten(img, adjustment){
    var pixels= ImageUtils.getPixels(img);
    var length= pixels.data.length;
    var data=pixels.data;

    for(var i=0; i<length;i+=4){
        data[i]=data[i]+adjustment;
        data[i+1]=data[i+1]+adjustment
        data[i+2]=data[i+2]+adjustment;
    }

    ImageUtils.putPixels(pixels, img.width, img.height);
}

function removingeyeColor(img){

    var pixels= ImageUtils.getPixels(img);
    var length= pixels.data.length;
    var data=pixels.data;

    for(var i=0; i<length;i+=4){
        if (data[i]>90&&data[i]<120&&data[i+1]>120&&data[i+1]<145&&data[i+2]>110&&data[i+2]<135){
            data[i]=55;
            data[i+1]=255;
            data[i+2]=255;
        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 122 && data[i] < 146 && data[i + 1] > 155 && data[i + 1] < 175 && data[i + 2] > 160 && data[i + 2] < 185) {
            data[i] = 55;
            data[i + 1] = 255;
            data[i + 2] = 255;

        }

    }


    for (var i = 0; i < length; i += 4) {
        if (data[i] > 70 && data[i] <90 && data[i + 1] > 80 && data[i + 1] < 100 && data[i + 2] > 85 && data[i + 2] < 105) {
            data[i] = 55;
            data[i + 1] = 255;
            data[i + 2] = 255;

        }

    }


    for (var i = 0; i < length; i += 4) {
        if (data[i] > 100 && data[i] <130 && data[i + 1] > 140 && data[i + 1] <165 && data[i + 2] > 130 && data[i + 2] < 160) {
            data[i] = 55;
            data[i + 1] = 255;
            data[i + 2] = 255;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 70 && data[i] <95 && data[i + 1] > 115 && data[i + 1] <135 && data[i + 2] > 120 && data[i + 2] < 145) {
            data[i] = 55;
            data[i + 1] = 255;
            data[i + 2] = 255;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 50 && data[i] <70 && data[i + 1] > 60 && data[i + 1] <90 && data[i + 2] > 70 && data[i + 2] < 100) {
            data[i] = 0;
            data[i + 1] = 255;
            data[i + 2] = 255;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 60 && data[i] <90 && data[i + 1] > 90 && data[i + 1] <110 && data[i + 2] > 110 && data[i + 2] < 130) {
            data[i] = 108;
            data[i + 1] = 255;
            data[i + 2] = 255;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 40 && data[i] <75 && data[i + 1] > 40 && data[i + 1] <70 && data[i + 2] > 30 && data[i + 2] < 50) {
            data[i] = 225;
            data[i + 1] = 225;
            data[i + 2] = 0;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 90 && data[i] <120 && data[i + 1] > 85 && data[i + 1] <110 && data[i + 2] > 70 && data[i + 2] < 100) {
            data[i] = 225;
            data[i + 1] = 225;
            data[i + 2] = 0;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 130 && data[i] <160 && data[i + 1] > 100 && data[i + 1] <130 && data[i + 2] > 90 && data[i + 2] < 120) {
            data[i] = 225;
            data[i + 1] = 225;
            data[i + 2] = 0;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 180 && data[i] <240 && data[i + 1] > 200 && data[i + 1] <260 && data[i + 2] > 200 && data[i + 2] < 260) {
            data[i] = 137;
            data[i + 1] = 4;
            data[i + 2] = 140;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 135 && data[i] <180 && data[i + 1] > 155 && data[i + 1] <200 && data[i + 2] > 150 && data[i + 2] < 200) {
            data[i] = 137;
            data[i + 1] = 4;
            data[i + 2] = 140;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 130 && data[i] <150 && data[i + 1] > 90 && data[i + 1] <110 && data[i + 2] > 65 && data[i + 2] < 90) {
            data[i] = 112;
            data[i + 1] = 132;
            data[i + 2] = 81;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 180 && data[i] <210 && data[i + 1] > 150 && data[i + 1] <170 && data[i + 2] > 130 && data[i + 2] < 160) {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 180 && data[i] <210 && data[i + 1] > 150 && data[i + 1] <170 && data[i + 2] > 130 && data[i + 2] < 160) {
            data[i] = 174;
            data[i + 1] = 170;
            data[i + 2] = 166;

        }

    }


    for (var i = 0; i < length; i += 4) {
        if (data[i] > 140 && data[i] <165 && data[i + 1] > 138 && data[i + 1] <152 && data[i + 2] > 128 && data[i + 2] < 146) {
            data[i] = 245;
            data[i + 1] = 174;
            data[i + 2] = 41;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 155 && data[i] <175 && data[i + 1] > 125 && data[i + 1] <145 && data[i + 2] > 112 && data[i + 2] < 130) {
            data[i] = 245;
            data[i + 1] = 174;
            data[i + 2] = 41;

        }

    }
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 160 && data[i] <179 && data[i + 1] > 140 && data[i + 1] <160 && data[i + 2] > 120 && data[i + 2] < 140) {
            data[i] = 251;
            data[i + 1] = 93;
            data[i + 2] = 144;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 170 && data[i] <198 && data[i + 1] > 160 && data[i + 1] <189 && data[i + 2] > 164 && data[i + 2] < 192) {
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 255;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 184 && data[i] <201 && data[i + 1] > 168 && data[i + 1] <184 && data[i + 2] > 140 && data[i + 2] < 172) {
            data[i] = 176;
            data[i + 1] = 241;
            data[i + 2] = 105;

        }

    }

for (var i = 0; i < length; i += 4) {
    if (data[i] > 192 && data[i] <217 && data[i + 1] > 168 && data[i + 1] <186 && data[i + 2] > 157 && data[i + 2] < 178) {
        data[i] = 200;
        data[i + 1] = 168;
        data[i + 2] = 204;

    }

}
    for (var i = 0; i < length; i += 4) {
        if (data[i] > 190 && data[i] <215 && data[i + 1] > 170 && data[i + 1] <200 && data[i + 2] > 159 && data[i + 2] < 167) {
            data[i] = 244;
            data[i + 1] = 166;
            data[i + 2] = 128;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 167 && data[i] <185 && data[i + 1] > 150 && data[i + 1] <170 && data[i + 2] > 136 && data[i + 2] < 159) {
            data[i] = 5;
            data[i + 1] = 1;
            data[i + 2] = 90;

        }

    }

    for (var i = 0; i < length; i += 4) {
        if (data[i] > 190 && data[i] <210 && data[i + 1] > 162 && data[i + 1] <187 && data[i + 2] > 152 && data[i + 2] < 173) {
            data[i] = 5;
            data[i + 1] = 1;
            data[i + 2] = 90;

        }

    }
ImageUtils.putPixels(pixels, img.width, img.height);
}
function makeInvert(img) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length;i += 4) {
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
    }

        ImageUtils.putPixels(pixels, img.width, img.height);
    }

function noise(img, level) {
    var pixels = ImageUtils.getPixels(img);
    var length = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < length; i += 4) {

        var adjustment = getRandomInt(-level, level);

        data[i] = data[i] + adjustment;
        data[i + 1] = data[i + 1] + adjustment;
        data[i + 2] = data[i + 2] + adjustment;

    }
    ImageUtils.putPixels(pixels, img.width, img.height);

}

function colourise(img, colour, level) {

    var pixels = ImageUtils.getPixels(img);
    var all = pixels.data.length;
    var data = pixels.data;

    for (var i = 0; i < all; i += 4) {
        var originalRGBA = new RGBA(data[i], data[i+1], data[i+2], data[i+3]);
        var modifiedRGBA = colourisePixel(originalRGBA, colour, level);

        setPixel(data, i, modifiedRGBA);
    }
    ImageUtils.putPixels(pixels, img.width, img.height);
}