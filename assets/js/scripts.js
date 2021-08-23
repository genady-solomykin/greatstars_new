
/* Portfolio */
$(window).load(function() {
    var $cont = $('.portfolio-group');


    $cont.isotope({
        itemSelector: '.portfolio-group .portfolio-item',
        masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: -20, isFitWidth: true},
        filter: '*',
    });

    $('.portfolio-filter-container a').click(function() {
        $cont.isotope({
            filter: this.getAttribute('data-filter')
        });

        return false;
    });

    var lastClickFilter = null;
    $('.portfolio-filter a').click(function() {

        //first clicked we don't know which element is selected last time
        if (lastClickFilter === null) {
            $('.portfolio-filter a').removeClass('portfolio-selected');
        }
        else {
            $(lastClickFilter).removeClass('portfolio-selected');
        }

        lastClickFilter = this;
        $(this).addClass('portfolio-selected');
    });

});

/* Image Hover  - Add hover class on hover */
$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".image-hover figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".image-hover figure").hasClass("hover")) {
                $(this).closest(".image-hover figure").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".image-hover figure").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

// thumbs animations
$(function () {
    
    $(".thumbs-gallery i").animate({
             opacity: 0
    
          }, {
             duration: 300,
             queue: false
          });

   $(".thumbs-gallery").parent().hover(
       function () {},
       function () {
          $(".thumbs-gallery i").animate({
             opacity: 0
          }, {
             duration: 300,
             queue: false
          });
   });
 
   $(".thumbs-gallery i").hover(
      function () {
          $(this).animate({
             opacity: 0
    
          }, {
             duration: 300,
             queue: false
          });

          $(".thumbs-gallery i").not( $(this) ).animate({
             opacity: 0.4         }, {
             duration: 300,
             queue: false
          });
      }, function () {
      }
   );

});

// Mobile Menu
    $(function(){
        $('#hornavmenu').slicknav();
    });

// Sticky Divs
// $('#header').affix({
//     offset: {
//       top:42
//     }
//   });
// $('#hornav').affix({
//   offset: {
//     top:42
//   }
// });

  $(window).load(function(){
    $("#hornav").sticky({ topSpacing: 120 });
  });
  $(window).load(function(){
    $("#header").sticky({ topSpacing: 0 });
  });



  let list = document.querySelector('.follower-wrapper__list');
  
let str = 'Абигейл, Аделаида, Аделин, Адель, Адриана, Айлин, Алета, Альбина, Аманда, Амара, Амели, Амелия, Анджела, Анджелина, Анжела, Анжелика, Анжелина, Ариана, Ариэль,Барбара, Беатрис, Белла, Бетти, Бренда, Бриана, Бьянка,Ванесса, Виола, Вирджиния,Габриэлла, Габриэль, Гленн, Голди, Грейс, Грета,Дебора, Джеклин, Дженна, Дженни, Дженнис, Дженнифер, Джессика, Джоан, Джоанна, Джозефина, Джуди, Джулиан, Джулиана, Джулия, Джун, Доминика, Донна, Дорис, Дороти, Дэна,Жаклин,Идэн, Изабелла, Иззи, Изикиэл,Кайла, Каролин, Кат, Катрин, Кейт, Келли, Киара, Клара, Клер, Клэр, Кэнди, Кэрол, Кэролин, Кэт, Кэтрин, Лайза, Лайла, Лаура, Лаурен, Леа, Лесли, Лиза, Лили, Лилиан, Лиллиан, Линда, Лора, Люси, Люсинда,Майя, Макензи, Мара, Маргарет, Марил, Мария, Марта, Матильда, Мелисса, Миранда, Митчелл, Мия, Молли, Моника, Мэг, Мэдисон, Мэри, Мэрилин,Наоми, Натаниэль, Ниа, Николь, Нора, Нэнси,Одри, Оливия, Офелия,Палмер, Памела, Патрисия, Пегги, Пейтон, Пенелопа,Ребекка, Реджина, Риана, Рикарда, Рита, Розмари, Рокси, Роуз, Руби, Рут, Рэйчел,Сабрина, Саванна, Салли, Саманта, Санди, Сандра, Сания, Сара, Сидни, Сильвия, Синтия, Скарлетт, Стелла, Стефани, Сьерра, Сью, Сьюзан, Сэнди,Тара, Теа, Тера, Тереза, Тина, Тифани, Тринити,Флоренс, Фрида, Фрэнсис,Ханна, Харпер, Хезер, Хейли, Хелен, Хизер, Хилар, Хилари, Хлоя, Холли,Челси,Шанель, Шарлотта, Шейла, Шелли, Шерил, Ширли, Шэрон,Эбигейл, Эвелин, Эддисон, Эзра, Эйвери, Эйлин, Элейна, Элиа, Элиана, Элиза, Элизабет, Элионор, Элис, Элла, Элмер, Эльза, Эмбер, Эмили, Эмилия, Эмма, Эрика, Эрин, Эсмеральда, Этель,Аарон, Адам, Аден, Айдан, Айзек, Алан, Алекс, Алексис, Альберт, Андреа, Арчер,Бадди, Барни, Беверли, Бен, Бенджамин, Билл, Блез, Блейк, Боб, Бобби, Брайн, Брендон, Брук, Брэндон, Брюс,Вайолет, Вивиан, Вильям, Винсент,Гарольд, Гарри, Генри, Говард, Грейсон, Грэг, Грэгори, Гэвин, Гэри,Давид, Дайан, Даниэль, Дарси, Дастин, Джастин, Джейден, Джейкоб, Джеймс, Джейсон, Джек, Джексон, Джереми, Джерри, Джоди, Джозе, Джозеф, Джойс, Джон, Джонатан, Джордан, Джордж, Джош, Джошуа, Диего, Дилан, Дилон, Доминик, Дональд, Дуглас, Дункан, Дэвид, Дэймон, Дэстени,Зейн, Зури, Зэкери,Иаков, Иан, Илай, Ирвин, Истон, Итан, Итен,Калеб, Карен, Каспер, Квентин, Квинн, Кевин, Келвин, Кен, Кимберли, Кинг, Кларк, Коди, Коннор, Коул, Кристиан, Кристофер, Ксавье, Кэмерон,Лайонел, Ларри, Лео, Леон, Лиам, Ллойд, Логан, Лоренс, Луис, Лукас, Люк,Майкл, Макс, Максвел, Марвин, Марк, Марлон, Меган, Мейсон, Мелани, Мелвин, Микки, Мозес, Морган, Мэделин, Мэйсон, Мэть,Натан, Николас, Ноа, Ной, Нолан, Норвуд,Олби, Оливер, Оскар, Остин, Оуэн,Патрик, Пауль, Перри, Пирс, Питер, Пол,Райан, Райли, Райян, Рассел, Рафаэль, Рей, Рейнольд, Риан, Рик, Ричард, Роберт, Робин, Роджер, Рональд, Руди, Рэй, Рэйлан, Рэймонд,Саймон, Самир, Себастиан, Сет, Скайлар, Скотт, Спенсер, Стивен, Стэнли, Стэнфорд, Сэм, Сэмуэль,Тейлор, Теодор, Тим, Тимоти, Тодд, Том, Томас, Тони, Тристан, Тумас,Уайатт, Уилсон, Уильям, Уинслоу, Уоллис, Уолтер,Феликс, Фил, Филипп, Флойд, Форд, Фостер, Франклин, Франциско, Фред, Фрейзер, Фрэнк,Хадсон, Хантер, Харви, Хардин, Харрис, Харрисон, Хью, Хьюго,Чарли, Чарльз, Черри,Шелдон, Шервуд, Шон,Эдвард, Эдгар, Эдриан, Эйден, Элвин, Элиас, Энджелл, Эндрю, Энтони, Эрик, Эрл, Этан, Эшли, Эштон';

let res = str.split(",");

res.forEach((item, i) => {
   let crtElmLi = document.createElement('li');
        crtElmLi.innerHTML = i + ' - ' + item;
        list.appendChild(crtElmLi);
});








