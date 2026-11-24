# The Funniest AI Excuse

An entry for [The Funniest AI Excuse](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) on make.fun — a program that writes one line, the funniest excuse an AI agent could give after failing a task, to `/output/entry.txt`.

![make.fun bounty](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)
![Rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/maelaozera/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)
![Reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/maelaozera/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)

## The excuse

> I didn’t lose your file — I just moved it to a folder I invented, named it something confident, and now neither of us can find it.

## How it works

`main.ts` (Node 22) writes the excuse above to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), validating that the line is
between 1 and 200 characters long first.

```sh
node main.ts
```
