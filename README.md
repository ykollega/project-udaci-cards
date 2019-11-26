# "Udaci Flashcards" project

This app helps the user to learn on custom topics via flashcards, each having a question and the answer to remember. The user can setup learn topcis (here called "decks") and generate flashcards on it. Later on those cards in one deck are also quizzable to check the user's knowledge on a particular topic/deck.
For now it's designed only to run on **iOS**.

## setup & start

-   [NODE.JS](https://nodejs.org/en/download/) needs to be installed.
-   [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) eases the download of all app files
    `git clone git@github.com:ykollega/project-udaci-cards.git`
    But it could be downloaded as [Zip](https://github.com/ykollega/project-udaci-cards/archive/master.zip) as well.
-   Continue with these commands from inside of the project folder:
    1. `npm install` to install dependencies
    2. `npm start` to start the app

## usage

After `npm start` a browser window should pop up that shows an overview screen (DecksOverview view) to display all current decks (learn topics). New ones could be added as well. The user can hit any of them to further interact with it or generate new ones via the "Add Deck"

There are **5 different views** to jump to via buttons, which are inserted all over the app. There is no general navigation, since the user always first has to choose on which deck he wants to interact.

### 1. DecksOverview view

The initial view on all current decks. Click on one deck enables the user to interact with it in different ways: see some details on it, add more cards to it or start a quiz on it.

### 2. IndividualDeck view

To see details on this deck: How many cards are on it, and, if there are any a button to start a quiz on this deck.

### 3. AddDeck view

Via this view it's possible to add more decks / learn-topics to the app. Just enter a name and hit submit.

### 4. AddCard view

Via this view it's possible to add more cards to one deck. All that's needed: one question and the corresponding answer to it. After filling in both the user just needs to hit the submit button to add this new "card" to the earlier chosen deck.

### 5. Quiz view

This is the most fun of the app at all! As soon a deck as one or more cards, the user can hit the "Start quiz" button on the "IndividualDeck view" to run through all cards of this deck. If he thinks to have the right answer on a question and hence hits the "yes, next question"-button, his correct answer (in mind) gets counted . the user never has to fill in any answers. the app trusts on the users veracity :-). so don't cheat on yourself! as soon the last card in a deck gets answered, the quiz is finished and displays a procentual score.

## development

This app is based on [React](https://reactjs.org/), [React Native](https://facebook.github.io/react-native/), [create-react-native-app](https://github.com/react-community/create-react-native-app) and [Redux](https://redux.js.org/). The over all state is held by the redux store and gets saved in AsnycStorage on any modification. This way no data gets lost when the app refreshes or gets restarted.

## issues

-   not sure if the notifications are working correctly. everything seems to be setup properly but the emulator doesn't show any.

## thoughts on further improvement

-   decks and cards should be editable and removable
-   add a timeframe/countdown feature to the quiz view
-   the styling is pretty simple. add colors and more animations (e.g. when a card is flipped)

## license info

MIT License

Copyright (c) 2019 Yannick Kollega

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
