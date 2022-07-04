import { gsap, Power1, /* Bounce */ } from "gsap";
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
    redirectGoogleMaps();
    redirectSection('.vinile-wrap-container', '#servizio-01', '#section-servizio-01');
    redirectSection('#header-menu', '.chi-siamo-menu', '#chi-siamo');
}

function consoleLogAuthor() {
    console.log("Valerio Corda");
}
/* MENU ANIMATION */
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
                width: "calc(250px)",
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
                width: "calc(250px)",
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
/* ANIMATION VINILE */
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
/* ScrollToTop */
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
/* sendEmailFooter */
function sendEmailHarem() {
    var linkToMail = jQuery(".sendEmailHarem");
    linkToMail.css('cursor', 'pointer')
    linkToMail.click(function() {
        window.location.href = "mailto:studio@millenarigroup.com";
    });
}

function redirectGoogleMaps() {
    var indirizzo = 'https://www.google.it/maps/place/Via+Antonio+Maria+Lorgna,+22,+00143+Roma+RM/@41.8248262,12.5043733,16.43z/data=!4m13!1m7!3m6!1s0x13258bca7b7a55b5:0xfc5461eddcf7cdf1!2sVia+Antonio+Maria+Lorgna,+22,+00143+Roma+RM!3b1!8m2!3d41.8242585!4d12.5076442!3m4!1s0x13258bca7b7a55b5:0xfc5461eddcf7cdf1!8m2!3d41.8242585!4d12.5076442'
    var button = jQuery('#top-header').find('#menu-item-1');
    button.mouseenter().css('cursor', 'pointer')
    button.click(function() {
        window.open(indirizzo);
    })

}

/* Redirect Serviczio */
function redirectSection(contenitore, partenza, arrivo) {
    jQuery(contenitore)
        .find(partenza)
        .click(function() {
            jQuery("html, body").animate({
                    scrollTop: jQuery(arrivo).offset().top,
                },
                "slow"
            );
            return false;
        });
    /* HOME */
}

jQuery(document).ready(init);