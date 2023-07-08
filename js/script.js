$(function () {
  //読み込みが完了したら実行する
  $(window).on('load', function () {
    //ローディングアニメーションをフェードアウト
    $('.loader').delay(600).fadeOut(600);
    //背景色をフェードアウト
    $('.loader-bg').delay(900).fadeOut(800);
  });

  //ページの読み込みが完了してなくても5秒後にアニメーションを非表示にする
  setTimeout(function () {
    $('.loader-bg').fadeOut(600);
  }, 5000);
});

(function (d) {
  var config = {
    kitId: 'hsd0uya',
    scriptTimeout: 3000,
    async: true
  },
    h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);



$(function () {
  if (window.matchMedia('(min-width: 960px)').matches) {
    winH = $(window).height();
    fvH = $('#first-view').outerHeight(true);
    $('#table-area, #ta-title-short').outerHeight(winH, true);
    $('#table-area').css('padding-top', fvH / 2)
  }
});

$(window).on('resize', function () {
  if (window.matchMedia('(min-width: 960px)').matches) {
    winH = $(window).height();
    fvH = $('#first-view').outerHeight(true);
    $('#table-area, #ta-title-short').outerHeight(winH, true);
    // $('#table-area').css('padding-top', fvH / 2)
  }
});

$(function () {
  if (window.matchMedia('(min-width: 960px)').matches) {
    winH = $(window).height();
    $('#title-area').outerHeight(winH, true);
  }
});

$(window).on('resize', function () {
  if (window.matchMedia('(min-width: 960px)').matches) {
    winH = $(window).height();
    $('#title-area').outerHeight(winH, true);
  }
});

$(function () {
  if (window.matchMedia('(min-width: 960px)').matches) {
    $(window).on("scroll", function () {
      transHeight = $('#first-view').outerHeight(true);
      if ($(window).scrollTop() > transHeight) {
        $(".header-art").addClass("trans");
        $('#table-area').css('padding-top', '72px')
      } else {
        $(".header-art").removeClass("trans");
        $('#table-area').css('padding-top', fvH / 2)
      }
    });
  }
  else if (window.matchMedia('(max-width: 559px)').matches) {
    $(window).on("scroll", function () {
      transHeight = $('#first-view').outerHeight(true);
      if ($(window).scrollTop() > transHeight) {
        $(".header-art").addClass("trans");
        $(".header-art" + ".trans").find('img').attr('src', '../../images/icon_ILC.svg')
      } else {
        $(".header-art").removeClass("trans");
        $(".header-art").find('img').attr('src', '../../images/logo_ILC.svg')
      }
    });
  }
});


$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = $(window).height() * -0.3;
    var speed = 250;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor');

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('mouseover', function (e) {
    cursor.classList.add('cursor--hover');
  });
  link[i].addEventListener('mouseout', function (e) {
    cursor.classList.remove('cursor--hover');
  });
}


$(function () {
  $('.menu-btn').on('click', function () {
    $('.index-menu').toggleClass('is-active');
  });
}());


// fvのheightをブラウザに合わせる。from https://webdesignday.jp/inspiration/technique/css/3875/


// $('.header-col').outerHeight($(window).height());
// $(window).on('resize', function () {
//   winH = $(window).height();
//   $('.header-col').outerHeight(winH);
// });

$(function () {
  if (window.matchMedia('(min-width: 960px)').matches) {
    winH = $(window).height();
    $('.header-col').outerHeight(winH, true);
  }
});
$(window).on('resize', function () {
  if (window.matchMedia('(min-width: 960px)').matches) {
    winH = $(window).height();
    $('.header-col').outerHeight(winH, true);
  }
});
