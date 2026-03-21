"use strict";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("no-js").remove();

    const listener = new Listener();
    listener.decode = function () {
        const button = document.getElementById("email-address");
        const obfuscated = "apogee . sheep ! com";
        const revealed = obfuscated
            .replace("apogee", "contact")
            .replace(".", "@")
            .replaceAll(" ", "")
            .replace("sheep", "outersanctum")
            .replace("!", ".")
            .replace("com", "ca");
        button.setAttribute("href", `mailto:${revealed}`);
        button.innerText = revealed;
    };

    listener.on();
});

function Listener() {}

Listener.prototype.decode = null;

Listener.prototype.on = function () {
    this.listener = this.__onInteraction.bind(this);

    document.addEventListener("mouseenter", this.listener, true);
    document.addEventListener("focus", this.listener, true);
};

Listener.prototype.off = function () {
    document.removeEventListener("mouseenter", this.listener, true);
    document.removeEventListener("focus", this.listener, true);

    delete this.listener;
};

Listener.prototype.__onInteraction = function () {
    this.off();
    this.decode();
};
