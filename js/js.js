//->���click��300ms�ӳ�
FastClick.attach(document.body);

//->��̬����REM��ֵ
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();

//->��ʼ��Swiper
new Swiper(".swiper-container", {
    loop: true,
    direction: "vertical",
    //->�����л�����:swiper->��ǰ���γ�ʼ��new Swiper����������ʵ��
    onSlidePrevEnd: changeEnd,
    //->�����л�����:swiper.activeIndex��ǰ��������
    onSlideNextEnd: changeEnd
});

//->���л�������ʱ��,������Ҫ��������:�������slide���ID,���õ�ǰ���ӵ�ж�Ӧ��ID����,ӵ�ж�Ӧ��ID�Ż��ж�Ӧ�Ķ���
function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;//->��ȡ��ǰ���еĻ��(��ȡ�Ľ����һ������)
    [].forEach.call(slideAry, function (slide, index) {
        if (n === index) {
            switch (n){
                case 1:
                    slide.id="page1";
                    break;
                case 2:
                    slide.id="page2";
                    break;
                case 3:
                    slide.id="page3";
                    break;
                case 4:
                    slide.id="page4";
                    break
            }
            return;
        }
        slide.id = null;
    });
}

//->��Ƶ���Զ�����
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();//->����Ƶ����:�������ʼ������Դ�ļ�,Ҳ�����������ŵ�����������Ҫһ��ʱ��,ֻ�з������������ǲŻ���ʾ���ֵ�ͼ��
    musicAudio.addEventListener("canplay", function () {
        //->canplay:��Ƶ�ļ��Ѿ����Բ�����,���ǲ�һ����������Դ�����������,�󲿷��Ǳ߲��ű߽�
        music.style.display = "block";
        music.className = "music move";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    //->��ǰ����ͣ״̬�����䲥��
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music move";
        return;
    }
    //->��ǰ�ǲ���״̬��������ͣ
    musicAudio.pause();
    music.className = "music";
}, false);





