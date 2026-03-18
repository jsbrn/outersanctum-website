'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const listener = new Listener();

	listener.decode = function ()
	{
		const email = document.getElementById('contact-button');
        const obfuscated = "apogee . sheep ! com";
        console.log(email, obfuscated)
		email.setAttribute("href", `mailto:${obfuscated.replace("apogee", "contact").replace(".", "@").replaceAll(" ", "").replace("sheep", "outersanctum").replace("!", ".").replace("com", "ca")}`)
	}

	listener.on();
});


// Listener

function Listener ()
{
}

Listener.prototype.decode = null;

Listener.prototype.on = function ()
{
	this.listener = this.__onInteraction.bind(this);

    document.addEventListener('scroll', this.listener, true)
	document.addEventListener('mouseenter', this.listener, true);
	document.addEventListener('focus', this.listener, true);
}

Listener.prototype.off = function ()
{
	document.removeEventListener('mouseenter', this.listener, true);
	document.removeEventListener('focus', this.listener, true);

	delete this.listener;
}

Listener.prototype.__onInteraction = function ()
{
	this.off();
	this.decode();
}