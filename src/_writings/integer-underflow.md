---
layout: writing-item.njk
title: Integer Underflow
date: 2026-07-24
tags: ["cybersecurity", "C", "integer overflow", "integer underflow"]
---

A person finds a lamp and spawns a genie after rubbing it. 

The genie says, "I will grant you three wishes. The rules are: You can't wish for death or life, or make people fall in love, and you can't wish for more wishes."

The person asks, "Can I wish for less wishes?"

The genie finds this request silly and asks, "Why would you wish for that?"

The person simply makes their wish, "I wish I have zero wishes."

"Fine!" replies the genie. "Granted!

"You have four billion two hundred and ninty five million, nine hundred and sixty seven thousand two hundred and ninty five wishes left."

 <figure>
    <img src="https://i.programmerhumor.io/2025/03/cf52df1438a3094ae4e61dc02ff47f71a2f2ea580c94649d60ef9631bc1ed744.jpeg"
         alt="A funny programmer meme">
    <figcaption>Genie Integer Underflow [1]</figcaption>
</figure>

Below is an example of an 8-bit integer with the starting value 3. Subtract 1 until you come across an integer underflow. 

<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:1rem;">
  <div>
    <p style="font-size:13px;color:#666;margin:0;">unsigned int (8-bit)</p>
    <p style="font-size:24px;font-weight:500;margin:0;font-family:monospace;" id="decval">1</p>
  </div>
  <div style="display:flex;gap:8px;">
    <button id="subbtn" style="font-family:monospace;">subtract 1</button>
    <button id="resetbtn" style="font-family:monospace;">reset count</button>
  </div>
</div>

<div id="bits" style="display:grid;grid-template-columns:repeat(8,1fr);gap:6px;"></div>

<p style="font-size:13px;color:#666;margin-top:1rem;" id="explain">Starting value is 3. Subtracting past 0 wraps around.</p>

<script>
const bitsEl = document.getElementById('bits');
const decEl = document.getElementById('decval');
const explainEl = document.getElementById('explain');
const btn = document.getElementById('subbtn');
const resetBtn = document.getElementById('resetbtn');
let value = 3;
let boxes = [];

for (let i = 0; i < 8; i++) {
  const b = document.createElement('div');
  b.style.cssText = 'text-align:center;padding:8px 0;border-radius:4px;font-family:monospace;font-size:14px;background:#eee;color:#555;transition:background 0.25s,color 0.25s;';
  b.textContent = '0';
  bitsEl.appendChild(b);
  boxes.push(b);
}

function render(v, highlightAll) {
  const bin = (v & 0xFF).toString(2).padStart(8, '0');
  for (let i = 0; i < 8; i++) {
    boxes[i].textContent = bin[i];
    if (highlightAll) {
      boxes[i].style.background = '#cfe3fb';
      boxes[i].style.color = '#0c447c';
    } else {
      boxes[i].style.background = '#eee';
      boxes[i].style.color = '#555';
    }
  }
  decEl.textContent = (v & 0xFF).toString();
}

render(value, false);

btn.addEventListener('click', () => {
  if (value === 0) {
    value = 255;
    render(value, true);
    explainEl.textContent = 'No room to borrow from, so every bit flips to 1. This is the wraparound: 0 - 1 becomes 255.';
    setTimeout(() => render(value, false), 900);
  } else {
    value = (value - 1) & 0xFF;
    render(value, false);
    explainEl.textContent = 'Value decreased by 1.';
  }
});

resetBtn.addEventListener('click', () => {
  value = 3;
  render(value, false);
  explainEl.textContent = 'Starting value is 1. Subtracting past 0 wraps around.';
});
</script>

Unsigned integers have no sign bit. Every bit is used to store the number. When you subtract 1 from 0, the computer tries to borrow from a bit that does not exist. That borrow wraps around from the top instead, so 0 becomes the largest number the type can hold. The interactive thing above shows this on an 8-bit int. 00000000 minus 1 becomes 11111111, which is 255.

This is what the logic looked like on the server-side. 

```c
#include <stdio.h>
#include <stdint.h>

void print_binary(uint32_t num) {
    for (int i = 31; i >= 0; i--) {
        putchar((num & (1u << i)) ? '1' : '0');
    }
    putchar('\n');
}

/**
  * sets number of wishes to zero
  */
void grant_wish(int *num_wish, int value) {
    *num_wish = value;
}

/**
  * used to decrement number of wishes after wish has been granted.
  */ 
void decrement_wish_count(int *num_wish) {
    (*num_wish)--;
}

int main() {
    uint32_t num_wish = 3;
    printf("\nInitalize:\n");
    printf("bin: "); print_binary(num_wish);
    printf("dec: %u\n", num_wish); 

    // grant wish if wishes are available
    if (num_wish > 0) {
        grant_wish(&num_wish, 0);
    
        printf("\nGrant wish:\n");
        printf("bin: "); print_binary(num_wish);
        printf("dec: %u\n", num_wish); 

        decrement_wish_count(&num_wish);
        printf("\nDecrement wish count:\n");
        printf("bin: "); print_binary(num_wish);
        printf("dec: %u\n", num_wish); 
    }
    return 0;
}
```

Output:
```txt
Initalize:
bin: 00000000000000000000000000000011
dec: 3

Grant wish:
bin: 00000000000000000000000000000000
dec: 0

Decrement wish count:
bin: 11111111111111111111111111111111
dec: 4294967295
```

Notice that the `num_wish > 0` check only guards `grant_wish`. It stops a new wish from being granted when there are none left, but it does nothing to stop `decrement_wish_count` as the check only occurs once, which still runs right after. That is why the underflow happens in the output above. Guarding the wrong function is a common way bugs like this slip past a code review. The check looks like it is protecting the wish count, but it is not protecting the operation that actually breaks it.

A real fix needs to guard the decrement itself, not just the grant.

```c
void decrement_wish_count(int *num_wish) {
    if (*num_wish > 0) {
        (*num_wish)--;
    }
}
```
In 2015, a real bug in Android's media library worked almost the same way. A field in an MP4 file called `covr` had its size value decremented without a check, and the value underflowed. That underflowed number was then used to control a buffer copy, and it let an attacker run code on the phone just by sending it a crafted video file. This is known as CVE-2015-3827 [1], part of the "Stagefright" vulnerabilities. Nobody checked if a value could go below zero, and it cost every affected phone its security.

## References

- [1] [Genie Integer Underflow meme](https://programmerhumor.io/programming-memes/genie-overflow-bsgo)
- [2] [CVE-2015-3827 — Google Stagefright 'covr' MP4 Atom Integer Underflow Remote Code Execution](https://gbmaster.wordpress.com/2015/08/13/x86-exploitation-101-integer-overflow-adding-one-more-aaaaaaaaaaand-its-gone/)
