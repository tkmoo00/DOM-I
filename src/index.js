const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

// ServicesProductVisionFeaturesAboutContact

const logo = document.querySelector("#logo-img");
logo.src = siteContent.images["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

const midImg = document.querySelector("#middle-img");
midImg.src = siteContent.images["accent-img"];

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add("bold");

const contact = document.querySelector("section.contact");
contact.querySelector("h4").textContent = siteContent.contact["contact-h4"];

contact.children[1].textContent = siteContent.contact["address"];
contact.querySelector("P:nth-of-type(2)").textContent =
  siteContent.contact["phone"];
contact.children[3].textContent = siteContent.contact["email"];

const topContent = document.querySelector(".top-content");
topContent.children[0].children[0].textContent =
  siteContent["main-content"]["features-h4"];
topContent.children[0].children[0].textContent =
  siteContent["main-content"]["features-content"];
topContent.children[0].children[0].textContent =
  siteContent["main-content"]["about-h4"];
topContent.children[0].children[0].textContent =
  siteContent["main-content"]["about-content"];

const bottomContent = document.querySelector(".bottom-content");
const h4Bottom = bottomContent.querySelectorAll("h4");
h4Bottom[0].textContent = siteContent["main-content"]["services-h4"];
h4Bottom[1].textContent = siteContent["main-content"]["product-h4"];
h4Bottom[2].textContent = siteContent["main-content"]["vision-h4"];
const psBottom = bottomContent.querySelectorAll("p");
psBottom[0].textContent = siteContent["main-content"]["services-content"];
psBottom[1].textContent = siteContent["main-content"]["product-content"];
psBottom[2].textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".cta .cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta .cta-text button").textContent =
  siteContent.cta.button;

const navLinks = document.querySelectorAll("header nav a");
const navLinkTexts = Object.values(siteContent.nav);
navLinks.forEach((link, i) => {
  link.textContent = navLinkTexts[i];
  link.classList.add("italic");
});

/*
const services = document.querySelector("nav a:nth-of-type(1)");
const product = services.nextElementSibling;
const vision = product.nextElementSibling;
const features = vision.nextElementSibling;
const about = features.nextElementSibling;
const contact = about.nextElementSibling;

services.textContent = "Services";
product.textContent = "Product";
vision.textContent = "Vision";
features.textContent = "Features";
about.textContent = "About";
contact.textContent = "Contact";

const logo = document.querySelector("#logo-img");
logo.src = "mocks/img/logo.png";

const h1Text = document.querySelector(".cta-text h1");
h1Text.textContent = "DOM IS AWESOME";

const button = document.querySelector(".cta-text button");
button.textContent = "Get Started";

const ctaIMG = document.querySelector("#cta-img");
ctaIMG.src = "../mocks/img/cta.png";

const featuresBold = document.querySelector(
  ".top-content .text-content h4:nth-of-type(1)"
);

const aboutBold = featuresBold.nextElementSibling;

const servicesBold = document.querySelector(
  ".bottom-content .text-content h4:nth-of-type(1)"
);

const productBold = servicesBold.nextElementSibling;
const visionBold = productBold.nextElementSibling;

featuresBold.textContent = "FEATURES";
aboutBold.textContent = "ABOUT";
servicesBold.textContent = "SERVICES";
productBold.textContent = "PRODUCT";
visionBold.textContent = "VISION";

const contatBold = document.querySelector(".contact h4");
contatBold.textContent = "CONTACT";
*/
