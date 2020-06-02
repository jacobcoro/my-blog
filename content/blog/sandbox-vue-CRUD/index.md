---
title: Simple sandbox- How to design and use a Vue CRUD app for testing and learning
tags:
  [
    'Learning Programming',
    'Software Development',
    'vue',
    'e2e Testing',
    'Unit Testing',
  ]

created: '6-01-2020'

canonicalUrl: https://www.jacobcohen-rosenthal.me/blog/sandbox-vue-CRUD/
license: 'public-domain'
# These need to be removed when using markdown-to-medium
excerpt: Developers are in a unique position. Learning is a core and continuous part of our work. Mislead by the oft-cited 10,000 hour rule, you might be inclined to think that just putting in enough hours will be enough.
createdAt: 2020-06-01 16:26:00
---

_There are highlights and flashcards for this page! Get the most out of this article by viewing and collecting them with the IPFC [Firefox](https://addons.mozilla.org/en-US/firefox/addon/inter-planetary-flash-cards/) or [Chrome](https://chrome.google.com/webstore/detail/inter-planetary-flash-car/ffjpplmcceibehbaofplbmcldkmmhcob) extension._

This project can be found here on [GitHub - Jewcub/sandbox-flashcard-app-vue: A simple flashcard app in vue with CRUD operations to try out new techniques and libraries](https://github.com/Jewcub/sandbox-flashcard-app-vue)

The javascript ecosystem is incredibly dynamic. There are new tools, libraries and frameworks coming out every day. Every time we see one of these shiny new objects we’d love to try it out in our app but sometimes we are held back by the complexity of inserting something new into a large project. I’ve found that a simple sandbox app can be a great way to try out new things!

> a simple sandbox app can be a great way to try out new things!

I’d like to introduce my sandbox app to you so that you can use it in your development, or build your own similar sandbox for testing. I’ll show you some of it’s **features**, my thought process in **designing** it, and examples of **how to use it** to test new libraries. You could use it as a front-end to practice building a back-end, or to test out frontend features in Vue.

Oftentimes when we are making a little sandbox to try out a feature, we don’t want to spend time making tests and end up wasting a lot of time manually testing. This sandbox takes care of that for you in an incredibly convenient way (see 'To create a new view and test suite' near the end of the article)

Most tutorials like to use a TO DO app as a default test app. TO DO apps have a nice simple UI and use all the basic CRUD (Create Read Update Delete) operations. Another advantage is that because many other tutorials also use TO DO apps as an example, it can help you notice what are the core differences in approach.

### Data structure

Instead of a TO DO app, I’ve made a slightly more complex flashcard app. One reason that it’s better as a sandbox test is that the data structure is a bit more complex and closer resembles data structuring issues you will encounter in real apps. Instead of just one simple `array` of to do `object`s, this flashcard app has another level on top of that. **cards** are an `object` in a **cards** `array`, in a **deck** `object`, in a **decks** `array.`

A sample data structure from the app might look like this:

```json
 "decks": [{
    "title": "Deck 1"
    "cards": [{
      "_id": "4f6cebab-8b44-44d7-ae37-2cbf4ec640a0",
      "frontText": "hello",
      "backText": "你好 ni hao"
    }, {
      "_id": "662325c8-c4ed-4c33-ad0f-1f1e48ccb5fd",
      "frontText": "world",
      "backText": "世界 shi jie"
    }],
  }, {
    "title": "Deck 2"
    "cards": [{
      "_id": "4af60c9c-95f3-4ed1-8df8-0e1718875188",
      "frontText": "How are you？",
      "backText": "你好吗 ni hao ma"
    }],
 }]
```

With these types if you are using TypeScript:

```ts
export interface State {
  decks: Deck[]; // an array of Decks
}
export interface Deck {
  _id: string;
  cards: Card[]; // an array of Cards
  title: string;
}
export interface Card {
  _id: string;
  frontText: string;
  backText: string;
}
```

So if you were thinking about how to store this in a database, you might just throw it all in one SQL table or NoSQL collection called **decks**. But you might also want to split it up into one table/collection for **decks** and one for **cards**, possibly with referential relationships between them. So with this sandbox we can test some of the challenges we might encounter handling those considerations like tricky one-to-many and many-to-many relationships. You could fill out the example even more by adding a **users** table/collection with even more relationships.

The UI of the app is simple. All of the operations are laid out on one page. The UX doesn’t necessarily make sense from a real world use case, but it lets you test out your CRUD operations very quickly. You can make different router views for each of your tests and switch between them at the top. When you try out the two initial test cases I included you’ll see that when you refresh the ‘Vanilla Vue CRUD’ view, your cards will be lost, but when you refresh the ‘Vuex Persisted’ view, your cards will still be there.

### CRUD operations

I tried to abstract everything I could from the components, such that the top level of the view contains just the CRUD operations. This is following the the ‘container component’ model also from [Marcus Oberlehner](~https://markus.oberlehner.net/blog/advanced-vue-component-composition-with-container-components/~). Components are all unit tested, but the container (in this case the views) are e2e tested. All API and vuex calls should only go through the container, and the components are only dealing with their props and emits, so they are reliable and easy to test. You can find all of the CRUD ops here in `methods:`

```ts
    createDeck: function(deck: Deck) {
      this.decks.push(deck);
      this.selectedDeck = deck.title;
    },
    addCard: function(payload: NewCardPayload) {
      const newCard: Card = {
        _id: uuid(),
        frontText: payload.frontText,
        backText: payload.backText,
      };
      for (const deck of this.decks) {
        if (deck.title === this.selectedDeck) {
          deck.cards.push(newCard);
          break;
        }
      }
    },
    editCard: function(payload: EditCardPayload) {
      for (const deck of this.decks) {
        if (deck.title === payload.deckTitle) {
          for (const card of deck.cards) {
            if (card._id === payload._id) {
              card.frontText = payload.frontText;
              card.backText = payload.backText;
              break;
            }
          }
          break;
        }
      }
      this.showEditor = false;
    },
    deleteCard: function(payload: DeleteCardPayload) {
      for (const deck of this.decks) {
        if (deck.title === payload.deckTitle) {
          for (const card of deck.cards) {
            if (card._id === payload._id) {
              deck.cards.splice(deck.cards.indexOf(card), 1);
              break;
            }
          }
          break;
        }
      }
    },
```

You’ll notice that some of these CRUD operations require a little more traversing of the data structure than a to do app might require. These functions could probably be rewritten several ways which would also be good practice. How else would you write these? Which method would be fastest? I’d love to hear your thoughts.

### Project file structure

I created this with the Vue CLI and checked most of the boxes, so there is a fair amount of files. Some aren’t doing much for the Vanilla CRUD, but it’s nice to have them ready, for example registerServiceWorker is there already if you want to add PWA features.

## How to use it

Fork it!

If you want to test a library that deals with CRUD operations. Create a new view and test suite, and manipulate the CRUD operations above.

If you want to practice further, you could add an auth scheme, a backend db, and integrate docker,or other tools you’d like to explore. You could add features like an options section, for example, customizing the font or other display options within the cards.

### To create a new view and test suite

- Create a new view by copying the VanillaCRUD.vue with a new name in the src/views folder.
- Add it to the routes in src/router/index.ts.
- Add it to the ‘routeNames’ list in tests/e2e/specs/e2etest.js and your new view will be included in e2e tests

### Strip it down

If you don’t want to use **Typescript**, you can remove `lang=“ts”` from `<script>` ,
remove the line `import { Deck, Card, NewCardPayload, DeleteCardPayload, EditCardPayload } from ‘@/types’;`
remove the typings: `as Deck[]`, `as string` and `NewCardPayload` etc.
and remove `Vue.extends(` from the beginning of components, along with the trailing )

If you don’t want to use **vuex**, delete that view, and the store folder, and the lines with ‘store’ in main.ts and src/router/index.ts

## How I used it

As you’ll see if you check out the project, the example use case is testing out two vuex libraries:

- A vuex typescript helper called direct-vuex [docs](~https://github.com/paleo/direct-vuex~) and [tutorial](~https://itnext.io/use-a-vuex-store-with-typing-in-typescript-without-decorators-or-boilerplate-57732d175ff3~)
- Vuex persist to persist user keys in cookies [github](~https://github.com/championswimmer/vuex-persist~) and flashcards in the local storage.

I also used this project to learn about unit, snapshot and e2e testing, typescript, and BEM style CSS. If you’d like to learn these techniques, you can read more about them from links in the README and then extend the sandbox with new features, while using these techniques. I also plan to use this to learn Vue 3, and to try out vuex-orm and other libraries.

Further reading....
Creating this project was in response to my [quest for a way to let my app’s users have greater control and ownership of their data](https://www.jacobcohen-rosenthal.me/blog/searching-for-a-practical-architecture-for-a-decentralized-app), and in preparation for testing out some new, more experimental libraries like web 3.0 decentralized/distributed data storage projects like [Textile](https://textile.io/). Stay tuned for the results of that project!
