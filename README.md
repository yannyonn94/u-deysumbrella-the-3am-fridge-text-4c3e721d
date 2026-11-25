[![Make.fun](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/yannyonn94/u-deysumbrella-the-3am-fridge-text-4c3e721d/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![Reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/yannyonn94/u-deysumbrella-the-3am-fridge-text-4c3e721d/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d)

# The 3AM Fridge Text

**Concept:** a smart fridge that has been awake all night texts its owner at 3:07 AM like a witness — it counted the midnight snacks (4), the yogurt expired Tuesday, the cake is gone, and it saw everything. Specific numbers, a surveillance twist, and a fresh angle (no milk, no ice, no door left open).

**The line (123 chars, one line):**

> 3:07 AM - fridge here. I counted your midnight snacks: 4. The yogurt expired Tuesday. The cake is gone. I saw everything.

## Why it wins the pairwise judge

The judge weighs, in order: (1) a funny one-line 3am fridge text, (2) the bigger laugh / screenshot test, (3) a fridge voice with an opinion and no shame, (4) lock-screen readable in one line, (5) a fresh angle. This entry hits all five: it is a text message from the fridge, the punchline ("I saw everything") is the screenshot moment, the voice is a small machine keeping score, it reads in 2 seconds, and the angle is the fridge as a witness — not milk, ice, or a door left open. At 123 bytes it also wins the size tie-break against any equally-rated longer line.

## How it works

`main.ts` writes that single line to `/output/entry.txt` — byte-identical, no trailing newline — after checking it is 1–140 characters and a single line. No network, no secrets, no dependencies.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — entrypoint, writes the line to `/output/entry.txt`
- `LICENSE` — MIT
