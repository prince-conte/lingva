 $(document).ready(function() {
var widthSlide = $('.slide').width();
slideCol = $('.slide').length;
colMonts = $('.mont-sk li').length;
widthSliderBlock = widthSlide * slideCol;
leftSlDinamic = 0;
sliderClick = 0;
montSou = []; 
     
asClikc = 0;
     

montSou[0] = $('.mont-sk li:eq(0)').text();  // для текущего записываем переменную
montSou[1] = $('.mont-sk li:eq(1)').text();  // для текущего записываем переменную
montSou[2] = $('.mont-sk li:eq(2)').text();  // для текущего записываем переменную
montSou[3] = $('.mont-sk li:eq(3)').text();  // для текущего записываем переменную
montSou[4] = $('.mont-sk li:eq(4)').text();  // для текущего записываем переменную
montSou[5] = $('.mont-sk li:eq(5)').text();  // для текущего записываем переменную
montSou[6] = $('.mont-sk li:eq(6)').text();  // для текущего записываем переменную
montSou[7] = $('.mont-sk li:eq(7)').text();  // для текущего записываем переменную
montSou[8] = $('.mont-sk li:eq(8)').text();  // для текущего записываем переменную
montSou[9] = $('.mont-sk li:eq(8)').text();  // для текущего записываем переменную
montSou[10] = $('.mont-sk li:eq(8)').text();  // для текущего записываем переменную
montSou[11] = $('.mont-sk li:eq(8)').text();  // для текущего записываем переменную

     
     
$(function(slider){ 
$('#slider').css('width' , widthSliderBlock) 
});
$('#right').click(function(right) {
if (sliderClick + 1 < slideCol) {
leftSlDinamic = leftSlDinamic - widthSlide;
$('#slider').css('left' , leftSlDinamic);
sliderClick = sliderClick + 1;
$('#title-months').html(montSou[sliderClick]);}           
});             
$('#left').click(function(left) {   
if (sliderClick >= 1) {
leftSlDinamic = leftSlDinamic + widthSlide;
$('#slider').css('left' , leftSlDinamic);
sliderClick = sliderClick - 1;
$('#title-months').html(montSou[sliderClick]);
}
});  
     
     
     
     
$('#as-but').click(function () { 

if (asClikc == 0) { 
$('#as-table').fadeIn();
asClikc = 1;    
} else if (asClikc == 1) {
$('#as-table').fadeOut();
asClikc = 0;     
}


});   
     
}); 

     
     
     
    
     





























