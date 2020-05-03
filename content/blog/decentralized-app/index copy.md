---
title: Searching for a practical architecture for a decentralized app
tags: Programming, Development, Decentralization, IPFC, IPFS
excerpt: Because it’s easy to get lost in the weeds when combing through all the available options,keeping the end goal and user experience first and foremost is paramount to success.
createdAt: 2020-05-03 13:00:00
---

_There are highlights and flashcards for this page! Get the most out of this article by viewing and collecting them with the IPFC [Firefox](https://addons.mozilla.org/en-US/firefox/addon/inter-planetary-flash-cards/) or [Chrome](https://chrome.google.com/webstore/detail/inter-planetary-flash-car/ffjpplmcceibehbaofplbmcldkmmhcob) extension._

### Hopping on the hype train?

A lot of people want to create decentralized applications just because they are a cool buzzword.

I believe I have a use case that **genuinely warrants** such a solution. Perhaps a perfect solution does not exist with current technology. Perhaps I am constructing a Rube Goldberg machine. I’d love to hear your opinion and suggestions.

[Rube Goldberg machine](~https://media.giphy.com/media/BM61CKd08ypJ6/giphy.gif~)

Because it’s easy to get lost in the weeds when combing through all the available options, keeping the **end goal** and **user experience** first and foremost is paramount to success. I have some much grander ideas about what else the project could do once successful, but I’m starting very _small_, very _specific_, and very _useful_ to a very _targeted_ group of users who I would happen to be one of. The project is a flashcard app called [Inter Planetary Flash Cards](https://ipfc.tech)(IPFC) that I hope can have interoperability with other apps. This comes directly from my own experience as a teacher, student and independent learner.

---

### Problem.

First, I’ll give some examples of issues I’ve faced with current software.

### Proposal.

Next, I’ll describe what I’d like to make and how the user could use it.

### Solutions.

Finally, I’ll compare the strategies that I’m considering.

---

## State of the flashcard app

![flashcards](https://media.giphy.com/media/xT5LMNj95KDAoj2AEw/giphy.gif)

[Anki](https://ankiweb.net/) is an app that uses a [Spaced Repetition](https://en.wikipedia.org/wiki/Spacedrepetition) algorithm to plan your reviews in the most efficient schedule. It has a desktop app, and native mobile apps. It’s an open source project but the API that syncs user’s collections of cards (decks) is not open source nor publicly accessible. Its extremely **powerful** and customizable, but its UI is a bit **outdated**, and with 13 years of unrestrained feature creep, new users often find it overwhelming.

[Quizlet](https://quizlet.com/) is the[most popular](https://www.cnbc.com/2017/08/23/quizlet-a-popular-study-app-faces-a-moment-of-truth.html) flash card app in America, used by half of all high school students. It's **visually appealing** and has many features tailored to the **classroom setting**.

[Gimkit](https://www.gimkit.com) is a classroom game that my high school students _loved_. They literally begged me to play it. It’s a cooperative/competitive **game** created by a high school student. Students race to answer flashcards and earn coins and there are power-ups and weapons.

The [TedEdLessonCreator](https://ed.ted.com/editor/) is a tool that lets teachers create **video lessons** extremely quickly. It’s to encourage teachers to use the ‘flipped classroom’ approach, where new information and lectures are done at home with video lessons, and class time can be for practice, projects, and collaboration. It doesn’t have flashcards per se, but you can create prompts and questions which are functionally equivalent.

### Those sound great! What’s the problem?

They are great, but what if you want to take the cards that you **created in one app and use them in another**? Anki, Quizlet allow exporting and importing, but their formats are different and I often experienced data loss and corruption moving between them. You often can’t get the pictures, or the text formatting, or cards are broken up into two cards, etc. It was time consuming and annoying, even when it worked. TedEd Lesson Creator does not let you export the cards, and other popular language learning apps like Duolingo and Memrise don’t allow exporting at all!

For serious users of these programs, **ownership of their data** becomes more and more important with their reliance on the study system. Whether or not they can trust a platform not to hold their cards hostage will be an important factor for serious users considering investing time into a platform.

> users could carry their data with them between apps

So, very simply, I hope to find a way that users could carry their data with them between apps, and have it sync in close to real time, without manually importing and exporting. Ideally it would be free (in both senses of the word) and open, and that users ‘own’ their data.

Successfully implementing this would not just solve the minor hassle i’ve encountered, but would allow for a **plethora of new possibilities**. Quizlet has an interactive classroom game too, but the game made by a high schooler ended up being much more fun for real high schoolers. The fact that Quizlet allows exports is what enabled him to make the app, but the inconvenience in using it is certainly hindering its popularity. Companies like Duolingo want to create a walled garden, but the fact is it’s **not a zero-sum game**. More interoperability would make everyone’s apps more useful. So my next requirement is that the API or whatever method developers use to access the data must be open and not controlled by any one entity.

> the API or whatever method developers use to access the data must be open

Some examples of **benefits** to development in this open system would be **games** that use the vocabulary from cards (like this [developer](https://www.reddit.com/r/languagelearning/comments/fete7p/looking_for_german_alpha_testers_for_earthlingo/) is making), or apps that help you create flashcards more easily and in different contexts, like from **voice or character recognition**. If spaced recognition scheduling information could also be easily synced along with the cards, the efficacy of these programs would also increase. I have many ideas for use cases and I’ve already implemented one (making cards from your browser) in the project so far.

### Taking a stand on standards

Complaining about lack of standardization is a common theme in computer science. Those of you who’ve encountered the issue before might be worried that this will just further complicate the field and not end up bringing unity. I’d say that this case is different for a few reasons.

![standards](https://imgs.xkcd.com/comics/standards.png)

First off, flashcards are simple and the current field of platforms and formats is small. At the very simplest, they can just have a back and front text field. I’ve compared the file formats for the biggest platforms, and they are not incompatible at all. The difficulties I had were more about lack of effort from the platforms than anything else. Because Anki is open source, users have created plugins that successfully convert from all the major platforms.

Second, the standard just needs to be **inclusive**, not restrictive. The way I’ve conceived the JSON format, front and back text must be required, but everything else is optional, ensuring at least basic performance on any platform.

Thirdly, no one is doing it… yet. We aren’t competing with an existing standard. It just has to include the current platforms. Current platforms don’t need to change. It will be trivial to write import and export scripts to the current platforms.

### SCORM and xAPI

SCORM is a set of standards for how eLearning courses and learning performance data should be structured. It’s slowly becoming outdated in favor of xAPI. While SCORM And xAPI structured courses often have flashcards, there’s no standard for that in particular. Importing or exporting them, and **accessing them from a 3rd party app** is also difficult.

I propose that the data could live independently outside of the platforms, and that 3rd party apps could read or write to it without permission, or perhaps only with permission of the student. Of course there is a privacy issue to consider. Students might not want all of their notes, flashcards, course contents, performance records, etc. publicly available. So that is part of the technical challenge and perhaps pseudo anonymity could solve it.

> the data could live independently outside of the platforms, and that 3rd party apps could read or write to it

Eventually, maybe all educational data could be more fluidly shareable to enable new features and interoperability, But flashcards are rather simple, and generally not considered sensitive personal information so they are a great first use case before expanding this idea further.

### Possible technical solutions

Lets review the goals:

1. Users can **access and edit** their cards from any participating platform, online and offline.
2. Changes are **synced**.
3. API/database is **open** and not owned by any one platform.
4. Cards are **not ‘owned’** by any platform.
5. Users can **search, browse and collect** other’s cards.

When you think of a permissionless, open, public database, not owned by any one party, **blockchain** might be your first thought. Unfortunately, most blockchains seem to be **too slow, costly**, difficult to interface with, or unstable to consider as a direct solution. No one will want to pay an Ethereum gas charge every time they create and save a new flashcard! I’m willing to consider one, but from what I’ve looked into, I haven’t found one that fits my needs.

Some options that I find more intriguing are [Self-Hosting](https://www.reddit.com/r/selfhosted/), the [Inter Planetary File System](https://ipfs.io/) (IPFS), and [Conflict-free replicated data types](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (CDRT). I can’t explain these in depth here, so you might have to google (or better yet [DuckDuckGo](https://duckduckgo.com/)) it yourself, but I’ll try to say in one line what they are and in more detail why they might be a good choice.

**Self-hosting** were it not **too difficult to set up** would be a great option and would actually solve almost all the goals except for #5. If you had your cards posted on your own server, you could grant access to any app that needed them. I could write an API script that people could drop into their server and #5 might be possible by having a few databases run by the flashcard apps, and users could opt in to update them with changes. But until self hosting is easier, this scenario is not very realistic and is a horrible UX.

[Why IPFS? - Juan Benet - YouTube](https://youtu.be/zE_WSLbqqvo)

IPFS is an entirely new way of structuring the internet where the basic unit of sharing is not a URL address, but the hash of a piece of data. The hash essentially is the address. When you post, or ‘**pin**’ something to the IPFS, it’s really just still on your computer. You are just announcing that it’s available to the world. In a way it’s similar to self hosting. But if your computer that is pinning it goes offline, so does your data. There are pinning services like [Pinata.cloud](https://www.pinata.cloud) that can **keep your data online** all the time, and most have a generous free tier.

But unlike a self hosted server, the way that you can **interact with data** on the IPFS is completely different than we are used to and presents some unique challenges. For example, you can’t edit data on the IPFS, you can only unpin it and replace it. These are possible to work around, and if we are sticking to the self-hosted model, what we could do is offer apps a special API key (we would need pinata.cloud to develop this, although its very doable and it seems a competitor [temporal.cloud](https://temporal.cloud) has something similar). That key would let apps read our data, **add new entries, but not delete**(unpin).

This get’s us to #1., #2. #3., and progress but not perfect on goal #4. Piñata.cloud still has the ability to delete or withhold your data, although this is better than the card app owning it because it at least spreads out control, and they have have less incentive to withhold and ransom it. As with self-hosting, #5 is still an issue; where and how can users share cards and what would be their incentives to do so?

[CRDTs and the Quest for Distributed Consistency - YouTube](https://www.youtube.com/watch?v=B5NULPSiOGw)

Next up is CDRTs which are kind of like neat-o JSON files with built in conflict resolution. The library we’d probably use for this is called [automerge · GitHub](https://github.com/automerge) and it means users could sync their data against each other with no central authority, and really helps with requirement #2. It allows for better **offline use,** syncing across devices, and collaboration. Like IPFS, it can even be used by peers connecting to each other without going through a central server. These are some cool features, and It’d be nice if we had them, but they don’t solve our core goals. But maybe there is a way that CDRTs can fit into the plan.

Another consideration is that to enable efficient searching of others cards, we would probably want to set up relations in a [normalized](https://en.wikipedia.org/wiki/Database_normalization) **relational database**, so that for example we could search by card tags. We’d probably want to have a table for users, cards(sets of cards), decks, tags, etc. with relations between them. From what I understand, IPFS and CRDTs would be easier to interact with a **denormalized** database, although this requires more research to determine.

### State of the IPFC

Currently, the IPFC ([web app](https://www.ipfc.tech/home) and [GitHub](https://github.com/IPFC/)) achieves a partial solution to these 5 goals, but I’m looking for ways to take it to the next level.

![IPFC logo](https://github.com/IPFC/Inter-Planetary-Flash-Cards/blob/master/public/img/icons/icon-128x128.png)

IPFC is a Vue.js app with a Python Flask backend REST API and a Postgres database. It’s all **open source**, and the **API is open** for access by the public as well. When users sign up they receive a piñata.cloud account with 1GB of free storage. On every sync with my API, their decks are also pinned to their piñata account.This allows for a third-party **backup** and also provides versioning.

I also use the piñata account to **store user's media**. This reduces the load on the db/API and essentially transfers the storage cost to the customer. If they go over 1GB of storage they have to start paying piñata for it. Quizlet is freemium but you also have to pay for images and audio so it’s a comparable cost. This kind of storage scheme might be an attractive new model to start ups to provide more free value to users by lowering operational costs. As a bonus, if they pay piñata it’s supporting the decentralized web architecture.

I’m therefore able to achieve 1, 2, 5, and _sort of_ 4.

- [x] (1) _Users can access and edit their cards from any participating platform._
- [x] (2) _Changes are synced._
- [ ] (3) **API/database is open and not owned by any one platform.**
- [x] (4) _Cards are not ‘owned’ by any platform._
- [x] (5) _Users can search, browse and collect other’s cards._

One thing I’ve already accomplished to show the value of the interoperability made possible possible by greater sharing of educational data is the IPFC browser extension for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/inter-planetary-flash-cards/) and [Chrome](https://chrome.google.com/webstore/detail/inter-planetary-flash-car/ffjpplmcceibehbaofplbmcldkmmhcob). It’s especially **useful to programmers** because you can quickly highlight and create flashcards of answers you looked up on Stack Overflow or an online tutorial. You’ll have those instantly added to your review schedule and you’ll always have a reference for where you found that information.

![IPFC extension](https://lh3.googleusercontent.com/8gjdpATm7WBxmrtppGbhM18hX7FdCafNAMm8zKIeZtdX5EIfvfPtWDaP283YMsk7DeKtMA86iQ=w640-h400-e365)
_IPFC browser extension_

Some of the **next things** I want to work on are an Anki app that **syncs your Anki** collection with your IPFC collection. I’d also like to dig into some of the open source LMSs and see if we can help users extract quiz/flashcard data from online courses for reviewing on Anki/IPCF. I could take this project pretty far with it’s current architecture, and prove the case that **interoperability is powerful**, but for now I can probably only work with open source projects. If I want to convince companies like Quizlet to join such a network, I would need to find a way to **make the API/database more decentralized** so that they don’t fear being suddenly shut out or customers losing service to a feature they are enjoying.

I’d love to hear some feedback and ideas, or even better, for you to join the project and make it happen. Check out the [GitHub](https://github.com/ipfc) and my [website](https://www.jacobcohen-rosenthal.me/#contact) to get in touch and get involved.

want to read more? … previous article: [Learning how to learn programming by programming a learning program](~https://www.jacobcohen-rosenthal.me/blog/learning-how-to-learn-programming-by-programming-a-learning-program/~)
