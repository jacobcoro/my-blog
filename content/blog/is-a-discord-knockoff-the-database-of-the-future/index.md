---
title: Is a Discord Knockoff the Decentralized Database of the Future? Will It Fix the Internet?
tags: [Programming, Development, Decentralization, Federation, Matrix]
# This needs to be removed when using markdown-to-medium
excerpt: Fight the enshittification of the internet with a decentralized database
createdAt: 2023-07-09 13:00:00
# These need to be added when using markdown-to-medium
# canonicalUrl: https://www.jacobcohen-rosenthal.me/blog/is-a-discord-knockoff-the-decentralized-database-of-the-future-will-it-fix-the-internet-as-we-know-it/
# license: 'public-domain'
---

That’s a bit hyperbolic I admit, but hear me out, there is something to this

## Internet, We Have a Problem

![this internet is getting shittier all the time](https://i.imgflip.com/7s44ea.jpg)

### Incessant, Unescapable Enshittification

The internet sucks (in many ways) and it could be a lot better. As The Guardian eloquently put it, [we are all trapped in the ‘enshittification’ of the internet](https://www.theguardian.com/commentisfree/2023/mar/11/users-advertisers-we-are-all-trapped-in-the-enshittification-of-the-internet). This term, coined by the famed tech author [Cory Doctorow](https://pluralistic.net/) describes a phenomenon in which tech companies amass market share and create a user dependency so strong that both users and advertisers feel trapped.

### Surveillance Capitalism

If you've ever heard the phrase "You're not the customer, you're the product", you're already familiar with the concept of [Surveillance Capitalism](https://en.wikipedia.org/wiki/Surveillance_capitalism). Popularized by the [The Social Dilemma](https://en.wikipedia.org/wiki/The_Social_Dilemma), this philosophy is central to the process of enshittification. Networks and platforms create walled gardens so impenetrable that users have no choice but to surrender their privacy, contacts, and content to the corporate hivemind.

### The Grip of Walled Gardens and Vendor Lock-In

Take a moment to think about platforms like Twitter, YouTube, and Instagram. How easy would it be for you to migrate your network to a different platform? If you disagree with the way they operate or their policies, what are your alternatives?

### Personal Lock-In

Adding another layer to this issue is personal lock-in. When you store data in an app - be it photos, notes, or videos - the more you accumulate, the more difficult it becomes to leave. Even when data exports are possible, they're often challenging to implement and rarely in a format that's compatible with other apps. Consequently, users get trapped within each app's data silo. If these apps don't support mods and plugins, they effectively become walled gardens, resulting in bloated software. Think of Evernote and Notion. [Obsidian](https://obsidian.md/) however serves is a great example of a note-taking app that promotes interconnectivity through plugins and third-party sync options.

![big tech cryptonite - Interoperability](https://i.imgflip.com/7s45vr.jpg)

## Part of the solution - Interoperability

Solving these issues requires combined efforts in both technology and regulatory measures.

Steps like the EU's [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) (GDPR) and California's [CCPA and CPRA](https://wirewheel.io/blog/ccpa-and-cpra-california-data-privacy-law-guide/) hint at some political progress. Although these actions strike a blow to Surveillance Capitalism, they're just the initial foray into a larger battle. We also need to start encouraging, if not enforcing interoperability of these giant platforms that have become the new public squares.

Technological advancements, such as federated apps like [Mastodon](https://joinmastodon.org/) and [Matrix](https://matrix.org/), also hold promise.

The federated model - akin to how email works - allows users to choose providers they trust or create their own while maintaining communication across the network. For instance, Mastodon servers may have unique rules and moderation policies, but users can follow feeds across servers. Similarly, Matrix users can have different 'homeservers' but still chat with one another.

## A Decentralized Database from a Discord Lookalike?

Calling Matrix a Discord knockoff is a bit cheeky, but essentially true. Similar to how Mastodon is a Twitter knockoff. But Matrix has potential to be more than just a chat app. It’s now a decentralized database.

The [Matrix-CRDT](https://github.com/YousefED/Matrix-CRDT) JavaScript library syncs a unique [CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (Conflict-free Replicated Data Type) database across Matrix servers. This synchronization happens even after servers have been offline, resulting in 'local-first' apps where data is primarily stored on the user's device and syncs whenever convenient. This allows for 'user-owned data' apps, offering users the choice of data storage server, or the option to create their own.

This feature positions Matrix not just as a database, but as a propagation and backup layer. It opens up possibilities for sharing and permissions, as each CDRT is stored in a separate chat room, allowing for different permissions and listener invites for each room.

## What can we build with this?

While we could use this technology to create improved, more interoperable social media apps, overcoming the network effects of the established giants is a colossal task.

### A Modest Beginning: Note Taking and Knowledge Management

Instead, a more immediate use case could be in note taking, knowledge management, flashcards, and similar apps. These apps often appeal to users who value privacy and decentralization and are already using multiple apps for different purposes. Building a robust note-taking app can serve as a foundation for other interoperable apps, like a flashcard app, kanban board app, or task manager.

Unlike the Obsidian plugin model, this approach allows you to use entirely different apps for different purposes while maintaining interoperability.

### Call to action

So will this change the internet and bring down monopolistic enshittification? Probably not, but it’s a start. At the very least this technology already can be used to create novel and better user experiences.

If you are a developer, I encourage you to check out my project [EweserDB](https://github.com/eweser/eweser-db) (pronounced like 'user'). It leverages Matrix CRDT, making a database that is super easy for developers to drop into a project. Right out of the box it enables developers to build local-first, user-owned, interoperable apps. It’s still in early development, but I’m hoping to get some feedback and contributions from the community.

Let's change the internet, starting from our little corner of it.
