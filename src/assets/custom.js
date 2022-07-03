import { gsap, Power1 /* Bounce */ } from "gsap";
import { TimelineMax } from "gsap/gsap-core";
import jQuery from "jquery";
import { TweenMax } from "gsap/gsap-core";

function init() {
    gsap.registerPlugin("TweenMax");
    gsap.registerPlugin("TimelineMax");
    consoleLogAuthor();
    animateMenu();
    controlVinile();
    scrolltToTop();
    sendEmailHarem();
    /* rotazioneVinile(); */
}

function consoleLogAuthor() {
    console.log("Valerio Corda");
}

function animateMenu() {
    jQuery(".animate-menu").mouseenter(function() {
        TweenMax.to(jQuery(this), 0.5, {
            x: 20,
        });

        var tlunderline = new TimelineMax();
        tlunderline.fromTo(
            jQuery(this).find(".underline"),
            0.5, {
                width: "0%",
                left: "0%",
            }, {
                width: "calc(60% + 20px)",
                marginLeft: "-20px",
                duration: 1,
            }
        );
    });

    jQuery(".animate-menu").mouseleave(function() {
        var tlunderline = new TimelineMax();
        tlunderline.fromTo(
            jQuery(this).find(".underline"),
            0.5, {
                width: "calc(60% + 20px)",
                right: "100%",
            }, {
                width: "0%",
                right: "0%",
                marginLeft: "0px",
                duration: 1,
            }
        );

        TweenMax.to(jQuery(this), 0.5, {
            x: -10,
        });
    });
}

/* function rotazioneVinile() {
    let tl = gsap.timeline({ defaults: { duration: 3, ease: Power1.easeOut }, repeat: -1, repeatDelay: 1 })

      tl.to('.vinile-wrap', { rotation: "+=90" }, "+=1") 
} */
function controlVinile() {
    var vinile = jQuery(".vinile");
    var servizio_01 = jQuery("#servizio-01");
    /* var servizio_02 = jQuery('#servizio-02'); */
    /* var next = jQuery('#next'); */
    let count = 0;

    let tl = gsap.timeline({ defaults: { duration: 3, ease: Power1.easeOut } });
    jQuery("#prev").click(function() {
        count = count + 1;
        tl.to(vinile, { rotation: "+=120" }, "+=1").to(
            servizio_01, { y: "-100%", x: "70%" },
            "+1"
        );
    });
}

function scrolltToTop() {
    jQuery("#back-top").click(function() {
        jQuery("html, body").animate({
                scrollTop: 0,
            },
            "slow"
        );
        return false;
    });
    jQuery(".back-top").click(function() {
        jQuery("html, body").animate({
                scrollTop: 0,
            },
            "slow"
        );
        return false;
    });
}

function sendEmailHarem() {
    var linkToMail = jQuery(".sendEmailHarem");
    linkToMail.css('cursor', 'pointer')
    linkToMail.click(function() {
        window.location.href = "mailto:studio@millenarigroup.com";
    });
}
jQuery(document).ready(init);