import Accordion from "accordion-js"

new Accordion(".faq-list", {
    elementClass: "faq-item",
    triggerClass: "faq-item-toggle",
    panelClass: "faq-item-description",
    showMultiple: true,
    duration: 300,
});