jQuery('.tablinks a').click(function(event){
    event.preventDefault();
    jQuery('.tablinks a').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('.tabcontent').removeClass('active');
    var id = jQuery(this).attr('data-id');
    jQuery('#'+id).addClass('active');
});
// // function opening(evt, cityName) {
// //   var i, tabcontent, tablinks;
// //   tabcontent = document.getElementsByClassName("tabcontent");
// //   for (i = 0; i < tabcontent.length; i++) {
// //     tabcontent[i].style.display = "none";
// //   }
// //   tablinks = document.getElementsByClassName("tablinks");
// //   for (i = 0; i < tablinks.length; i++) {
// //     tablinks[i].className = tablinks[i].className.replace("active", "");
// //   }
// //   document.getElementById(cityName).style.display = "block";
// //   evt.currentTarget.className="active";
// // }
$(document).on("click", ".input-footer-2",function(){
    location.href = "https://www.youtube.com/channel/UC9IG0DRkx6hnj-50Jtp2ibA";
})


//-------------------------------------------------------------------------

jQuery(document).ready(function(){
    jQuery('#slider1').change(function(){
        var go = jQuery(this).val();
        var xet = go-go/25
        jQuery('.color1').css({"width":go + '%'});   
        jQuery('.box1').css({"left":xet + "%"});
        jQuery('.number1').text(go+"%");
    })
    jQuery('#slider2').change(function(){
        var go = jQuery(this).val();
        var xet = go-go/25
        jQuery('.color2').css({"width":go + '%'});   
        jQuery('.box2').css({"left":xet + "%"});
        jQuery('.number2').text(go+"%");
    })
    jQuery('#slider3').change(function(){
        var go = jQuery(this).val();
        var xet = go-go/25
        jQuery('.color3').css({"width":go + '%'});   
        jQuery('.box3').css({"left":xet + "%"});
        jQuery('.number3').text(go+"%");
    })
    jQuery('#slider4').change(function(){
        var go = jQuery(this).val();
        var xet = go-go/25
        jQuery('.color4').css({"width":go + '%'});   
        jQuery('.box4').css({"left":xet + "%"});
        jQuery('.number4').text(go+"%");
    })
    jQuery('#slider5').change(function(){
        var go = jQuery(this).val();
        var xet = go-go/25
        jQuery('.color5').css({"width":go + '%'});   
        jQuery('.box5').css({"left":xet + "%"});
        jQuery('.number5').text(go+"%");
    })
})


//----------------------------------------------------------

var _constName = "";

$(document).ready(function(){
    setTimeout(show,1000);
    $('.popup-background').show();
    
    $(document).on('click','.skip',function(){
        hide();
    })

    $(document).on('click','.dontshow',function(){
        document.cookie = 'occho' + '=' + '1232';
        _constName = getCookiever2('occho');        
        checkgetCoookie();
    })

    _constName = getCookiever2('occho')
    checkgetCoookie(_constName);
})


function checkgetCoookie(){
    if(_constName !== undefined){
        if(_constName.localeCompare('1232')==0)
        {
            $('.popup-background').remove();
        }
    }
}

// Cách 1 
// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       console.log(ca[i])
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
// }


// Cách 2
function getCookiever2(name){
    var value = `; ${document.cookie}`;
    var valueSplit = value.split(`; ${name}=`);
    if(valueSplit.length === 2) return valueSplit.pop().split(';').shift();
}

function show(){
    $('.popup-background').show();
}

function hide(){
    $('.popup-background').hide();
}