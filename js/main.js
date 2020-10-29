$(document).ready(function(){
	$(".mainSlider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow:'<div class="sliderBtn slidePrev">이전</div>',
		nextArrow:'<div class="sliderBtn slideNext">다음</div>'
      });
	$(".con03Slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		prevArrow:'<div class="sliderBtn con03SliderBtn con03PrevBtn">이전</div>',
		nextArrow:'<div class="sliderBtn con03SliderBtn con03NextBtn">다음</div>'
      });
});