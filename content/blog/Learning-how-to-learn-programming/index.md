---
title: Learning how to Learn Programming by Programming a Learning Program
tags: Programming, Learning Programming, Development, CSS, SRS, Spaced Repetition, Motivation, Learning Strategies, IPFC
excerpt: As developers we are in a unique position that learning is a core and continuous part of our work.
createdAt: 2020-05-01 16:26:00
---

_There are highlights and flashcards for this page! Get the most out of this article by viewing and collecting them with the IPFC [Firefox](https://addons.mozilla.org/en-US/firefox/addon/inter-planetary-flash-cards/) or [Chrome](https://chrome.google.com/webstore/detail/inter-planetary-flash-car/ffjpplmcceibehbaofplbmcldkmmhcob) extension._

![META](https://media.giphy.com/media/gY5sEujrJbCve/giphy.gif)

## Learn how to learn

As developers we are in a unique position that learning is a **core and continuous part of our work.** Mislead by the oft-cited [10,000 hour rule](https://www.bbc.com/future/article/20121114-gladwells-10000-hour-rule-myth), you might be inclined to think that just putting in enough hours will be enough.

While a certain **quantity** of practice time is of course necessary, what’s more important is **quality**. We need to be constantly rethinking and experimenting with **how** we learn and practice. The most important factors in my studies have been:

- [**Motivation**](https://classroom.synonym.com/theories-motivation-education-5010005.html)
- [**Project-based learning**](https://en.wikipedia.org/wiki/Project-basedlearning)
- [**Deliberate practice**](https://en.wikipedia.org/w/index.php?title=Deliberatepractice&redirect=no).
- Efficient review using [**Active Recall**](https://en.wikipedia.org/wiki/Activerecall) and
- [**Spaced Repetition**](https://en.wikipedia.org/wiki/Spacedrepetition)
- **Immersion** and **community**

I’d like to share my learning journey and how I put these concepts to use to quickly gain proficiency in programming.

## Motivation

One topic that is often debated in education is **intrinsic vs extrinsic** motivation. Extrinsic motivators would be rewards and punishments, and intrinsic motivation is simply the joy of doing something. Many people claim that one or the other is more important, but I think it’s clear that we need to have both.

If you are learning programming because you want to make money that’s not an unreasonable extrinsic motivator, but if you don’t have any intrinsic interest, you might want to try something else. Of course, sometimes a certain level of proficiency is required before you can start to enjoy something, so it can take some time to tell.

> [Money] is not an unreasonable extrinsic motivator, but if you don’t have any intrinsic interest, you might want to try something else

Should you use **social pressure** as an extrinsic motivator? Be careful about announcing to your friends and family that you are planning to become a developer thinking they will provide social pressure to maintain your commitment. On the contrary, the dopamine boost we get from sharing those plans might actually make us _less_ likely to achieve our goals. This point is made by [Barbara Oakley](https://barbaraoakley.com/) in her excellent course _Learning how to Learn_.

Besides social pressure, other kinds of ultimatums, or commitments you can’t back out of are referred to as ‘throwing your backpack over the wall’ in _Happiness_ by [Tal Ben Shahar](http://www.talbenshahar.com/) and can also be effective motivators. Doing freelance work, or taking a paid class are good examples of this technique

![PERMA](http://www.authentichappiness.sas.upenn.edu/sites/default/files/PERMA.png)
_Source: Authentic Happiness Website — University of Pennsylvania_

Consider the [The PERMA Model](https://positivepsychology.com/perma-model/) of well being. Intrinsic enjoyment of coding and solving problems will help you achieve **P** (positive emotion) and **E** (engagement), and eventual mastery will give you **A** (achievement). But don’t overlook **M** (meaning) and **R** (relationships). You’ll find that when you can create a project that will help others, and that you can connect with others doing, you will have much greater motivation. I also recommend Happiness by [Tal Ben Shahar](http://www.talbenshahar.com/), [How to Have a Good Day by Caroline Webb](https://www.amazon.com/How-Have-Good-Day-Behavioral/dp/0553419633), and [Deep Work by Cal Newport](https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692) for great tips about how to stay happy, healthy, focused, and motivated along your learning journey.

Working on this learning app has given me _intrinsic_ satisfaction, and I have a strong _extrinsic_ motivator because I’m pursuing EdTech as a career. Knowing that the app might help people gives me a sense of _meaning_. The benefit you provide others from your work doesn’t have to be grandiose, even making someone laugh is public service. Not every project you make has to be meaningful, but if your end goal isn’t to help others, and _especially_ if you end up working on something like a scam ICO that ends up _harming_ others, you might feel a vacuum of meaning and a loss of motivation.

## Project-based Learning

I don’t think I need to explain the merits of this one too much. Most people learning programming know this to be the common wisdom by now. If you just do online courses and tutorials without building a real project you’ll never learn to code.

I started out doing [Codecademy](https://www.codecademy.com/) tutorials on Python, and took the MIT [Introduction to Computer Science and Programming Using Python](https://www.edx.org/course/introduction-to-computer-science-and-programming-7) course on EdX; both excellent courses. But when I set out to make something on my own I realized I had forgotten or not deeply understood many of the concepts.

So I made a text based [GitHub - text-based flashcard game in python](https://github.com/Jewcub/PythonFlashCards) and a [desktop flashcard app with PyQt](https://github.com/Jewcub/IPFCPythonapp). Then I realized that because I was more interested in apps and internet technology, I should shift to javascript. This time I spent less time on tutorials. After just doing some basic ones, I dived right in and started making things like a [personal website](https://jacobcohen-rosenthal.me/).

![IPFC webapp](https://www.jacobcohen-rosenthal.me/assets/static/IPFC-demo.4520fc0.52e09fe3da2aea497aeabab0f25fecf3.gif)

Then, moving to a large project I made a web app ([GitHub](https://github.com/IPFC/Inter-Planetary-Flash-Cards)) and a browser extension ([GitHub](https://github.com/IPFC/ipfc-extension)) with a Vue.js frontend and a Python Flask backend. The browser extension lets you create highlights and flashcards from pages you visited, and the web app lets you review the cards efficiently (links at the top of this article).

Over the course of my project, I’ve learned about topics like UX planning and Figma wireframes, PWAs, promises and async programming, service workers, web workers, debugging, CORS, authentication, and much more, not because some “JavaScript 2020 roadmap” told me I needed to, but because they were solving real problems in my app. The most awesome part about it is that I’m making a product that I’m actually using!

## Active Recall and Spaced Repetition

The next essential element is about how you first learn and then review information.
This is perhaps the most effective study technique, but it takes discipline. When I’m learning something new to use in my project I often just want to get hacking away with it immediately. But when I strictly apply this method I retain far, far more.

> Software development is an exercise of quiet, stoic self-discipline

First of all, When you are learning something new, don’t just mindlessly highlight or take notes copying right from the source. Stop every few minutes to write a summary of what you just learned without looking at the original source. Can you explain it in plain English? Try to explain why it’s important and how it relates to other things. More on this: [the 50/50 rule](https://medium.com/personal-growth/the-50-50-rule-how-to-retain-and-remember-90-of-everything-you-learn-fa5c99d2543d) and [How To Remember Everything You Learn - YouTube](https://www.youtube.com/watch?v=V-UvSKe8jW4&t=173s)

Next, review. Review. Review. Review! Did I mention you have to review?! We all too often get lulled into a false sense of security with our knowledge. When I went from working all in Python to almost all in Vue, and then went back to some python work a few months later I realized that my Python knowledge had slowly faded. I’m kicking myself now for not being stricter with my reviewing and using the tried and true technique of spaced repetition that I used to learn Chinese. Using spaced repetition, a small investment of review time every day can make sure that you will _never forget_ what you learned. It’s a super power.

![spaced repetition](https://miro.medium.com/max/1260/0*TDZY-oTNjr9yiDaz)
_from Wired_

Spaced repetition software (SRS) uses a simple algorithm to spaces out your review times to longer and longer intervals. It’s been proven time and again to be the most time efficient and effective way to retain information over a long period. Apps like [Anki](https://ankiweb.net/) can help you create flashcards and plan out your review schedule. Anki is especially popular with medical students and language learners who deal with large amounts of pure memorization.

It’s tempting to just dump every single pice of information you encounter into an SRS app, but it’s important to remember a few caveats: never memorize what you don’t understand. Don’t put too much info on one card. Try to use ‘active’ not ‘passive’ recall by removing hints from the answer. For learning programming that would mean writing: “how you write a for loop in python”. with the code on the back, instead of seeing the code on the front and asking what it does. Writing good cards is an art in its own and deserves a whole tutorial of its own. The creator of the first SRS, [Supermemo](https://super-memo.com/), has [some](https://www.supermemo.com/en/archives1990-2015/articles/20rules) [great thoughts](https://supermemo.guru/wiki/Donotmemorizebeforeyouunderstand)on the topic. [Here](https://www.jackkinsella.ie/articles/janki-method-refined)’s a very detailed article about using Anki for learning programming, and a [simpler](https://sivers.org/srs) and even [simpler](https://www.freecodecamp.org/news/use-spaced-repetition-with-anki-to-learn-to-code-faster-7c334d448c3c/) one.

> I realize more and more that software development is an exercise of quiet, stoic self-discipline.

I realize more and more that software development is an exercise of quiet, stoic self-discipline. Should I take good notes, review them regularly? Should I make clear documentation comments? Should I refactor code to be more readable, renaming variables and breaking up large functions etc…? It’s so _easy_ to just let it slide here or there.

One of the most important mindsets to develop is that these things aren’t chores, but the core of a professional habit. Try to look forward to the dopamine hit of getting them in order, and practice [mindfulness](https://www.psychologytoday.com/us/basics/mindfulness) and [savoring](https://www.psychologytoday.com/intl/blog/click-here-happiness/201807/what-is-savoring-and-why-is-it-the-key-happiness) of that emotion, instead of just rushing on to the next thing. Of course, like everything, balance is key. No code is perfect, and you shouldn’t waste time getting too obsessive.

## Immersion and Community

Immersion might be a familiar concept for language learning, and its definition is usually narrow and specific to that realm. I’m using this term to mean **steeping yourself** in the knowledge and culture of a field. For programming this could mean listening to programming podcasts on your commute, joining all the relevant Reddits, or watching youtube videos whenever you have downtime. Conference talks (like the [Vue conference](https://www.vuemastery.com/conferences)) are great because they are very up to date, and usually give history or context for the technology they are discussing and how it could be used in real world applications.

2x speed through tutorials of libraries or things you’re not really planning on using, just to get a familiarity. Subscribe to YouTubers who talk about the profession in general and not just tutorials, like [Traversy Media](https://www.youtube.com/watch?v=askbjJx-BQg&list=RDCMUC29ju8bIPH5as8OGnQzwJyA&startradio=1&t=14), [Chris Hawkes](https://www.youtube.com/user/noobtoprofessional) , [Stefan Mischook](https://www.youtube.com/channel/UCyUBW72KU30dfAYWLVNZO8Q), [Joshua Fluke](https://www.youtube.com/channel/UC-91UA-Xy2Cvb98deRXuggA), [Andy Sterkowitz](https://www.youtube.com/channel/UCZ9qFEC82qM6Pk-54Q4TVWA), and many more. Remember to take what they say with a grain of salt. You can also watch the cheesy clickbait-y videos like “what is the best frontend framework of 2020”, but take those with an even larger grain of salt.

Community might sound intimidating for a lot of people who don’t have friends who are are programmers, but online communities can be great too. Joining an open source project is wonderful, but often intimidating for beginners. It’s best that the community has **real and not forced ties**. You should be working on something together or involved in the same narrow interest. Taking a MOOC and creating a Slack/Discord server with your peers is a great idea. Even non-programming communities can help. Use whatever your interest are to drive your projects and community involvement. Into sports/painting/whatever? Ask what kind of apps other hobbiests would like, or how apps they currently use can be improved, and try to make something for the community. Real world projects and real world feedback will propel you to new heights.

In my project, I was able to discuss with my friends and associates who are teachers, programmers, and those interested in distributed networks. I was also gained a lot from the Reddits for Anki and other learning themed Reddits to inform me what real users of similar software are thinking and I was able to have some dialogue with them.

## How IPFC uses these concepts to help you learn

_Shameless plug in 3…2…1…_

Inter Planetary Flash Cards is a flashcard app that, like Anki, uses a spaced repetition algorithm to maximize review efficiency. **IPFC is fully open source**, including the API. Similar to a the idea of [self hosting](https://www.reddit.com/r/selfhosted/), IPFC gives you greater control and ownership of their data by automatically generating a [piñata.cloud](https://pinata.cloud) account for you, and using it to back up your data on the [Inter Planetary File System](https://ipfs.io/) at every sync.

Clearly, the project most directly uses the concepts of Active Recall and Spaced Repetition. IPFC seeks to make these habits easier to pick up and integrate into your work flow. For example, one that is especially **useful to programmers** is that with the IPFC browser extension for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/inter-planetary-flash-cards/) or [Chrome](https://chrome.google.com/webstore/detail/inter-planetary-flash-car/ffjpplmcceibehbaofplbmcldkmmhcob) you can effortlessly save answers you looked up on Stack Overflow or an online tutorial. You’ll have those instantly added to your review schedule on the [IPFC web app](https://www.ipfc.tech/home) and you’ll always have a reference for where you found that information.

IPFC is great for learning syntax, and memorizing APIs. Get the extension then follow the link to the [w3schools CSS Selectors Reference](https://www.w3schools.com/cssref/cssselectors.asp) and collect the ready made flashcards.

> You too can get all of the benefits that I’ve gotten from working on this project… by joining in on the development!

How can IPFC help with motivation, project-based learning, and immersion/community? IPFC is open source software. I’ve gotten immense benefit in **Motivation**, **Project-based Learning**, **Deliberate Practice**, **Immersion** and **Community** from working on this project. You can find the same benefit by joining in on the development! As for aspects of the software itself that promote these learning strategies, I have some ideas, and maybe you do too. Let’s work together and make it happen. Check out the [GitHub](https://github.com/ipfc) and my [website](https://www.jacobcohen-rosenthal.me/#contact) to get in touch and get involved.

![help me help you](https://media.giphy.com/media/fdLR6LGwAiVNhGQNvf/giphy.gif)

## In review

Boost your **motivation** by making **projects** that are interesting and meaningful.

Use **Active Recall** and **Spaced Repetition** to supercharge your study habits.

Resign yourself to be disciplined, and **savor** the fruits of your discipline.

**Immerse** yourself in the culture, and join an authentic **community**.

Use IPFC, and participate in its development, so you too can learn programming by programming a learning program which you’ll actually be able to use in your learning!
