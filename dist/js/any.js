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
     
     
$('.close').click(function () {  
    
$('#popup').fadeOut(0);
$('#popup1').fadeOut(0);
$('#popup2').fadeOut(0);
$('#popup3').fadeOut(0);
     
});       
     
// teams
     
// 1   
$('#b-team-1').click(function () {
$('.info-block_item_man').fadeOut(0);
$('#team-1').fadeIn(0);

$('.info-block_item_grup').removeClass('active');
$('#b-team-1').addClass ('active');
    
    
    
    
    
});     
 
      
// 2   
$('#b-team-2').click(function () { 
$('.info-block_item_man').fadeOut(0);    
$('#team-2').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-2').addClass ('active');
});     
       
// 3   
$('#b-team-3').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-3').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-3').addClass ('active');
});     
        
// 4   
$('#b-team-4').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-4').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-4').addClass ('active');
});     
          
// 5   
$('#b-team-5').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-5').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-5').addClass ('active');
});     
           
// 6   
$('#b-team-6').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-6').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-6').addClass ('active');
});     
            
// 7   
$('#b-team-7').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-7').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-7').addClass ('active');
});     
             
// 8   
$('#b-team-8').click(function () {
$('.info-block_item_man').fadeOut(0);
$('#team-8').fadeIn(0);

    
$('.info-block_item_grup').removeClass('active');
$('#b-team-8').addClass ('active');
});     
             
// 9   
$('#b-team-9').click(function () {
$('.info-block_item_man').fadeOut(0);
$('#team-9').fadeIn(0);

    
$('.info-block_item_grup').removeClass('active');
$('#b-team-9').addClass ('active');
});     
              
// 10   
$('#b-team-10').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-10').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-10').addClass ('active');
});     
               
// 11   
$('#b-team-11').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-11').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-11').addClass ('active');
});     
                
// 12   
$('#b-team-12').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-12').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-12').addClass ('active');
});     
                 
// 13   
$('#b-team-13').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-13').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-13').addClass ('active');
});     
                  
// 14   
$('#b-team-14').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-14').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-14').addClass ('active');
});     
                   
// 15   
$('#b-team-15').click(function () { 
$('.info-block_item_man').fadeOut(0);
$('#team-15').fadeIn(0);
    
$('.info-block_item_grup').removeClass('active');
$('#b-team-15').addClass ('active');
});     
 
     
     
     
}); 

     
     
     
    
     





























