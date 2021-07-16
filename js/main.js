function changImg(r) {
  // console.log(r);
  switch (r) {
    case 1:
      return "./img/t1.png";
    case 2:
      return "./img/t2.png";
    case 3:
      return "./img/t3.png";
    case 4:
      return "./img/t4.png";
    case 5:
      return "./img/t5.png";
    case 6:
      return "./img/t6.png";
  }
}
function random() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}
function qs(selector) {
  return document.querySelector(selector);
}

let yao = qs(".yao");
var up2 = qs(".up2");
var up3 = qs(".up3");
var dleft = qs(".dleft");
var hide = qs(".hide");
var dright = qs('.dright')
var chu = qs('.chu')
var ru = qs('.ru')
var tz=qs('.tz')
var flag = true;
var check = true;
// var hide=document.querySelector('')
function touz() {
  up3.children[0].src = changImg(random());
  up3.children[1].src = changImg(random());
  up3.children[2].src = changImg(random());
  up2.children[0].src = changImg(random());
  up2.children[1].src = changImg(random());
}
yao.addEventListener("click", () => {
  if (check) {
    tz.play();
    setTimeout(() => {
      touz()
      setTimeout(() => {
        touz()
        setTimeout(() => {
          touz()
          setTimeout(() => {
            touz()
            setTimeout(() => {
              touz()
              setTimeout(() => {
                touz()
                setTimeout(() => {
                  touz()
                  setTimeout(() => {
                    touz()
                  }, 210);
                }, 210);
              }, 210);
            }, 210);
          }, 210);
        }, 210);
      }, 210);
    }, 210);
  }
});
dleft.addEventListener("click", () => {
  hide.style.display = flag ? "block" : "none";
  if (flag) {
    dleft.innerHTML = '取消隐藏'
    dleft.style.background='#EF5350'
  } else {
    dleft.innerHTML = '隐藏'
    dleft.style.background='#2BB55C'
  }
  flag = !flag;
});
dright.addEventListener('click', () => {
  if (check) {
    chu.play()
    dright.innerHTML = '取消锁定'
    dright.style.background = '#EF5350'
    yao.style.background='#FD4C5B'
  } else {
    ru.play()
    dright.innerHTML = '锁定'
    dright.style.background = '#2BB55C'
    yao.style.background='#23262E'
  }
  check = !check
})
