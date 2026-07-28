---
layout: writing-item.njk
title: "How I Met Your IP Address"
date: 2026-07-18
tags: ["cybersecurity", "social engineering", "phishing", "true story"]
---

My professor received an email, seemingly from a compromised colleague's account, claiming to be in an emergency and desperately requiring gift card codes sent over right away. Classic social engineering. Instead of ignoring it, he decided to have some fun.

Playing along, he replied with great empathy, asking more questions to see how creative the attacker could get with their story. It eventually came down to him agreeing to the request, sharing two links that he claimed were the gift codes. The attacker anticipated there must be a trick with the links, didn't click on them, and pressed on for image attachments — calling him a *fool* when things didn't go his way.

But my professor already got what he wanted.

Hidden inside his email was a tracking pixel — a tiny 1×1 image, completely undetectable to the human eye, hosted on a server he controlled. The moment the attacker opened the email, their device automatically sent a request to fetch that image. No clicking required. That single request handed over their IP address, a rough geolocation, their device and operating system, their email client, and an exact timestamp.

This technique isn't illegal — in fact, it's used by email marketers every day to track whether you've opened their newsletters. In this case, it was turned into a honeytrap.

With those details in hand, my professor composed his response. He addressed the email directly to the attacker's IP address and signed off:

> *Sincerely,* <br>
*The Fool*

---

So what can someone actually do with your IP address?

As unsettling as that might sound, the reality is more reassuring than you'd think.

An IP address on its own gives someone your approximate city, your internet service provider, and some device metadata. It does not give them your home address, your name, or direct access to your device.

What it *can* do is give law enforcement a thread to pull on. Authorities can subpoena an ISP to match an IP address to a real subscriber account. So what my professor captured wasn't vigilante hacking — it was simply documented evidence.

And this is the same principle behind commercially available link trackers like Grabify or Canary Tokens. No server setup, no technical knowledge required, just whoever opens it hands over the same information. Which is exactly why people should be cautious about links sent to them, even from people they trust. 
