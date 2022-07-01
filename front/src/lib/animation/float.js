// 浮动
import gsap from 'gsap'; // gsap 动画包



function floatUp(selector, options) {
    let selectNodes = document.querySelectorAll(selector);
    let windowHeight = document.body.clientHeight;
    let tween = gsap.timeline();
    options = options || {};
    if (selectNodes.length > -1) {
        selectNodes.forEach((el) => {
            let {offsetTop} = el; // 获取高度
            console.log(offsetTop)
            const animationConfig = Object.assign({
                y: offsetTop + windowHeight,
                duration: 0.3,
                ease: "power2",
            }, options)

            tween.from(el, animationConfig)
        })
    }
    console.log("这里")
}


export {
    floatUp
}
