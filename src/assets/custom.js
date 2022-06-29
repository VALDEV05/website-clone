import jQuery from "jquery";

function init() {
    consoleLogAuthor();
}

/* rotazione piatti */

/* let tl = gsap.timeline({ defaults: { duration: 3, ease: Power1.easeOut }, repeat: -1, repeatDelay: 1 })
tl.to('.contenitore-img', { rotation: 90 })
    .to('.contenitore-img', { rotation: "+=90" }, "+=1")
    .to('.contenitore-img', { rotation: "+=90" }, "+=1")
    .to('.contenitore-img', { rotation: "+=90" }, "+=1")


/* animazione titolo menu 



TweenLite.set('.facile-text-1, .facile-text-2', { x: '-101%' })

var lines = new TimelineMax({ yoyo: true, repeatDelay: 2 })


    .to('.facile-text-1', 1, { x: '0%' })
    .to('.facile-text-2', 1, { x: '0%' }, "+=0.3") */

function consoleLogAuthor() {
    console.log('Valerio Corda');

}


jQuery(document).ready(init);