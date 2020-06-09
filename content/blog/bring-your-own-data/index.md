---
title: B.Y.O.D. The Promise of User-Siloed Data in EdTech and Beyond

tags: ['Programming', 'EdTech', 'Decentralization', 'IPFC', 'IPFS']

created: '5-27-2020'
# These need to be added when using markdown-to-medium
# canonicalUrl: https://www.jacobcohen-rosenthal.me/blog/b-y-o-d-the-promise-of-user-siloed-data-in-ed-tech-and-beyond
# license: 'public-domain'
# This needs to be removed when using markdown-to-medium
excerpt: Developers we are in a unique position. Learning is a core and continuous part of our work. Mislead by the oft-cited 10,000 hour rule, you might be inclined to think that just putting in enough hours will be enough.
createdAt: 2020-05-27 16:26:00
---

_There are highlights and flashcards for this page! Get the most out of this article by viewing and collecting them with the IPFC [Firefox](https://addons.mozilla.org/en-US/firefox/addon/inter-planetary-flash-cards/) or [Chrome](https://chrome.google.com/webstore/detail/inter-planetary-flash-car/ffjpplmcceibehbaofplbmcldkmmhcob) extension._

I wrote recently about my [search for a practical architecture for a decentralized app](https://www.jacobcohen-rosenthal.me/blog/searching-for-a-practical-architecture-for-a-decentralized-app) and it seems I’ve found a solution. I discovered [Textile - A network of applications, connected through interoperable data, where data is owned by the users.](https://textile.io/)

[BYOD: bring you own data | Carson Farmer | textile.io - YouTube](https://www.youtube.com/watch?v=glbV7azZ0vY)

In this video, Carson Farmer from Textile lays out the big problems we are facing on the internet today and offers an innovative solution. Currently, most user data is owned by the big tech companies and “siloed”, or sequestered in huge data centers around the world. Just some of the issues this creates:

Centralized data silos worsen the impacts of **hacks and data breaches**, for example the [Equifax breach](https://en.wikipedia.org/wiki/Equifax#May%E2%80%93July_2017_data_breach).

Users have little idea about **how their data is being used**, and whether it is being used in ways that exploit them or abuse their privacy.

## Innovation and Interoperability

Corporate siloed data **stifles innovation**. if smaller companies or individual developers want to use users data in a new way, either they have no access to it or need to pay fees they can’t afford. The processes of finding, requesting, accessing and transferring that data can also be limiting.

Likewise, from the consumer perspective, corporate siloed data stifles **interoperability**. Big tech uses their data monopoly to force users to use their whole line of products, regardless of whether each app is really the best for the user. If users owned their own data, apps could just become ‘skins’ for that data, and they could try out new apps effortlessly.

## Benevolent big data

We expect our social media, Google searches, Netflix, etc. to be **tailored**. Our education is next. But we've seen the issues caused by huge corporations with opaque algorithms analyzing data they've collected without our permission. The data from education apps enable even more **intimate insights** into our minds. Is there a way to enter the age of AI-guided, personalized education, without giving the megacorps a **dystopian** level of personal information?

With user-owned data, sharing parts of your educational progress with AI providers would be opt-in, not opt-out. Learners could anonymize their data to reap the customization rewards without the privacy risks.

> there are benefits we can have today with user-owned EdTech data

Although AI-guided education is still in its infancy, there are benefits we can have today with user-owned EdTech data. Educational software benefits immensely from interoperability and innovation, especially **grassroots innovation**. The large tech companies are often several degrees removed from the real users in schools and elsewhere. Some of the best innovations have come from teachers and students themselves. For example Gimkit.com, which is similar to Kahoot and is an educational game my students love, was created by a high school student.

In my own teaching, I've used several apps which did _not_ let me easily share data between them. One example is the 3 apps below. Used together, they can help teachers implement the 'flipped classroom' approach, and enable more time in class for creative and cooperative project-based learning.

![flashcard apps interoperability](https://gateway.pinata.cloud/ipfs/QmVtSaEcjdsbKo4vrnwHvEZZmL4HenMnhK7n91Gy7W9zDE)

If educational data is not siloed by tech companies and instead, apps simply act as wrappers for users data, then **developing** the next Gimkit.com becomes much easier. Imagine how much more dynamic, hands on, and engaging programming courses could be if students could more easily create or edit the tools they use every day in their learning.

![IPFC webapp](https://gateway.pinata.cloud/ipfs/QmWojXZhkEDS6UsVaoWXaUCEKBfbJ4xvxNznGjg7TPAuV5)

My project **Inter Planetary Flash Cards** (IPFC) has already proven some of the benefits of openness and interoperability in EdTech data. Users can create flashcards from websites they are learning from with the browser extension, then have those **synced** to their phone or computer for review on the main flashcard app. Currently the app creates a Piñata.cloud account for each user and backs up their data to the IPFS. While a reasonable first step, the user-owned, decentralized nature of the app is not quite strong enough. Textile is a promising new option to take this to the next level.

## EduVault

![edu vault](https://gateway.pinata.cloud/ipfs/QmYWkfSqqVKAoBXhY4Xh8AuELHVgcvpBzBfpNAHZyDreYM)

IPFC can be a great example of what is possible with user owned data, but if we want more app developers and users to build up an ecosystem, we should have a **separately branded and maintained** data store for users. If and when it comes to that, EduVault should be a non-profit organization, whereas apps in the ecosystem like IPFC could be for profit.

![one login](https://gateway.pinata.cloud/ipfs/QmV6BKwzQY6pF6SbTi3w5ZRcMZRuy2a8gtzsKmtyqsunYK)

EduVault is essentially a **user owned, privately-hosted cloud storage database** that only the user has direct access to. “How can a cloud database be user-owned,” you might ask, “if the user is not running their own server?”

![one-login](https://gateway.pinata.cloud/ipfs/QmdvzeyHtmmitXLrZ6wPkCRDw1Z838Sq1as8Pft8qqyQXN)

That’s where [Textile](https://textile.io/) and [IPFS](https://ipfs.io/) come in. Textile “Threads” are databases built on IPFS that (among other interesting features) can set read/write **permissions** for different users. The data therein can be further encrypted so that no one without permission can even see it.

![Textile-homepage](https://gateway.pinata.cloud/ipfs/QmVwxgcCy8EUF8kRFEqPRBPrtVi2TYJavovq4zqBiNHiXR)

### Hosting

But who **pays** for it? Hosting data costs money in some form or another, and many web 3.0/blockchains answer that by levying transaction fees. While that makes sense for financial apps or apps that require a high level of censorship resistance, it doesn't for most apps. The incentive structure of IPFS, however, is more like web 2.0 where people pay for hosting not transactions.

Anyone can share files for free P2P on the IPFS, but if you’d like to have your file available to others when you are offline, you need a dedicated server, or to pay a ‘pinning’ service. Pinning services like [Pinata](https://pinata.cloud) handle this for you. Textile.io offers a service called ‘The Hub’ that offers pining and other services for app providers.

![IPFS homepage](https://gateway.pinata.cloud/ipfs/Qmc2ZUW9NDKXjbQBgNM9j3g9ugMy4HoiJ2vhbDt4a92jRG)

Ideally, I would prefer that app providers would pay, and in much the same way they already do. They would put up the pinning costs that are comparable if not cheaper than current cloud storage solutions like AWS. But currently it isan unsolved technical challenge, to figure out which apps are storing what in the EduVault and how to make sure they keep it pinned. The simpler solution is that users pay for data. Right now the pinning service Pinata offers 1GB free storage, and competative rates after that.

### Interoperability and compatibility with current apps

EduVault will provide both **authentication** and **data storage** solutions for apps. It would offer a simple, intuitive API for other apps to interact with the data stored within it, and components in common frameworks to drop into a project easily. The ThreadDB itself is very similar to MongoDB/Mongoose ORM, which is familiar to many developers. Another bonus is that ThreadDB would take care of a lot of the headache for developers in maintaining a backend, providing **_offline functionality_**, and resolving **merging conflicts** when using from multiple devices, or coming back online and syncing from the cloud.

![interoperability](https://gateway.pinata.cloud/ipfs/QmQ3sS8eMPT6efDFepQQzq6BcKwFhVPZYzWVPGjLKWvuRD)

It would be hard to enforce strict **standards** for exactly what format apps should store the data in, but luckily there are already EdTech industry standards of **SCORM and xAPI**, and large open source EdTech software projects like Anki that can help form a foundation. EduVault would create a **website with reference** about what current apps are storing there and what format that data is in. Formats would be encouraged to conform to existing standards like SCORM and xAPI to allow the smoothest interoperability between apps.

Unlike some other distributed network/blockchain type projects, EduVault could work in **conjunction** with mainstream databases. Data that a user approves to be public, for example a deck of flashcards they created to share, would give permission for the app to let that data leave the device. At that point, how and where the app stores that data is not a huge concern. Therefore app providers could continue using their current database architectures. Data that the app provider stores, they could offer to _all_ their users in a traditional manner.

Data that the user stores in EduVault can be accessed by _any_ new app the user permits. This lets the user try out any new app that uses the same data without the hassle of importing and exporting it over (if they even could have gotten access to it in the first place, in a traditional app).

![granular-sharing](https://gateway.pinata.cloud/ipfs/QmZ6YuXxM8faL1edixP2Qj17S9mnnbJcyXzCK14mkrw9ir)

How and when users’ data is shared would be completely up to the user. One of the most amazing features of the IPFS is that users can share data **Peer to Peer** with just a local connection and no connection to the wider internet. This is one of the major advantages over other web 3.0 technologies, and has is especially useful in educational settings where there is often **poor connectivity**. Textile’s ThreadDB offers a layer of permissions on top of that P2P sharing that also allows for targeted sharing and even collaboration on a shared dataset.

The **authentication architecture** is central to EduVault. In order to garner adoption with the widest number of users, the signup and login would need to be as close to a **web 2.0 user experience** as possible. Educational institutions are often excited about web 3.0 distributed networks, but also have reasonable reservations, especially if it seems related to cryptocurrencies. A progressive security model could offer the best experience for new users and high levels of security for experienced power users.

![auth-scheme-overview](https://gateway.pinata.cloud/ipfs/Qmf2Nk4ZkCHBhqn7WmiMB7kQRTGgQR6Ufs4NLvToRGaP9r)
_a more detailed technical outline_

The signup screen would recommend users to **start with 'level 2'**: Username and password. In this scheme, users would sign up just like any other site they are used to. Upon signup, the user would have created for them a EduVault which is a ThreadDB created in the Textile Hub. The **access keys** to that ThreadDB would be **encrypted** with the user’s password and stored by the EduVault organization in another database. Because the EduVault org does not have the actual keys, the user has actual ownership and control of the data wallet. This means the account cannot be restored in the even of a lost password. Therefore, these 'level 2' accounts should be only writable by the user, but readable by the public. If the user needs to reset the account because of a lost password, they could simply copy the contents to a new one.

> Because the EduVault org does not have the actual keys, the user has actual ownership and control of the data wallet

Frequent users would be prompted to consider **upgrading** their account to 'level 3', where the DB is **completely encrypted**. Users would be provided with a seed phrase acting as a backup password in case they forget their main password. Users would have to be responsible themselves for storing this properly. There would be prompts explaining different levels of recommended security options for storing seed phrases.

'Level 1' would be available but **discouraged** at sign up. In this situation, because **third-party oAuth** like google can only provide a JWT which changes all the time, the ThreadDB would not be able to use that as a private key. the EduVault org would have to generate and store a ThreadDB private key for the user in another database. In this situation the user does **not have ownership of their data** and there is a chance of data breach. Frequent users would be prompted, suggesting to upgrade to level 2 or 3, and the system would migrate their EduVault over, creating a new private key.

'Level 4' would be available to **blockchain and tech savvy** users who’d like to generate and store their ThreadDB keys themselves with their own auth system, or a cryptocurrency wallet. We could also offer integration with other popular crypto wallets like Metamask.

Thanks for reading! If you'd like to **get involved** in this exciting project, head over to our [Github](https://github.com/ipfc) or contact me directly.

_Further reading..._

This article was a follow up to my [quest for a way to let my app’s users have greater control and ownership of their data](https://www.jacobcohen-rosenthal.me/blog/searching-for-a-practical-architecture-for-a-decentralized-app)
For more about flashcard apps, learning programming, and learning in general, check out the article [Learning how to Learn Programming by Programming a Learning Program](https://www.jacobcohen-rosenthal.me/blog/learning-how-to-learn-programming-by-programming-a-learning-program/)
