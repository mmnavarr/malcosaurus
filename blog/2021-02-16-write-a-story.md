---
title: Storytelling.dev
author: Malcolm Navarro
author_url: https://github.com/mmnavarr
author_image_url: ../static/img/whytho.jpg
tags: [non-technical, programming]
---

# Storytelling.dev

When I first started programming I was obsessed with getting things done as fast as possible. It's part of my competitive nature. It didn't just start in college when I picked up coding. Must. Be. First. Must. Be. The. Best. You can tell I was very liked in gym class during my youth days.

<!--truncate-->

In time, I learned that speed is not important if you do not achieve the right outcome. Then I learned that the right outcome doesn't always suffice. It must be done in an elegant manner. Big O teaches us that. But as I grew older, I grew wiser, and writing code began to take a different shape in my mind. It was not about getting it done fast and it was not just about about getting it done right either. It was about writing a clear story for myself, my future self and for others. But code is code, how the hell do I paint a clear picture and tell a good tale while writing if and elses and some loops?

## Indisputability
What I came to realize is that a lot of people are great at being engineers. People of all ages can be great and these different people can all take slightly different approaches to the same problem and come out with the same outcome. But which one is the best? I found the best solutions (aside from being correct, time/space efficient, etc.) are indisputably doing A, B, C in the process of achieving Z. The best solutions leave no doubt. You understand every single step. Because all it takes is a single step of you saying 'this sort of makes sense, I'll keep going' for an issue to be overlooked. Try to leave no stone unturned.

<div style="text-align:center">
  <img src="../static/img/whytho.jpg" width="300" height="300"/>
</div>

## Achieving Indisputability
I won't get into writing clean code because there are entire books on that. What I will say is that it is only the first step is writing a good story that will make the code great. In short, I think clean code should speak for itself, and some people argue that if you write clean code, you don't even need comments. Thats works in a world of whats, not in a world of whys. A piece of code can clearly depict what it is doing, but it's also our obligation as engineers to explain why it's doing it. How do we do that? Comments, comments, comments. Put them right there for you and the next person to read. The why is so important and it can't be overlooked. A car has a gas pedal that puts gas in the engine, that's what the pedal does mechanically. Why we do it is to create energy so that the axels can turn and the car can move forward. Sometimes the why is just as or more important.

### Go Deeper
Like all things in coding, we can go deeper. We can take this to the next level. We write clean code that indisputably does X for Y reason. But now it's time to check in the code and we must keep going. We must take the code and paint a clear picture in the git history of the repository as well. It takes 8 seconds to write a commit message, and it takes 15 seconds to write a great commit message.

##### Bad
```
$ git commit -m "Add IK to deposit api"
```
##### Good
```
$ git commit -m "fix: Added idempotency key to deposit API request to ensure it only processes once. Resolves #123"
```
This won't be immediately valuable to you until you have to cherry pick a commit for a production bug fix at 6PM on a Friday.


### Series of Small Things
Telling a good story is not just for others. You may come back in 6 months and not even recognize your own work. Nothing is worse than thinking "Who the hell wrote this?" and finding out it was a worse version of your prior self via git blame. What makes code great is a combination of little things. Consistent and comprehensible variables/method names, good documentation on both the what and the why, clear commit messages, and a good PR title. From start to finish the feature or bugfix should tell a story that anyone can follow.

### We're Not Done
Lastly, like all things in programming, it's important we keep improving. The story can always be better told :)