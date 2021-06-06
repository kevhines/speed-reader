# Speed Reader Test - README

Describe Here

## Summary

  - [Versions](#Versions)
  - [Installation](#Installation)
  - [Future Additions](#Future-Additions)
  - [Error Modal](#Error-Modal)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Versions

This code was written in:
ruby-2.6.1 
react 17.0.2
react-redux 7.2.4

## Installation

Clone this repository.

Install the gems:

    $ cd speed-reader-backend
    $ bundle install

Migrate Databases:
    
    $ rake db:migrate

Add Seed Data (neccessary for the game to work):

    $ rake db:seed

Host the server:

    $ rails s -p3001

Go to the frontend and install react and dependencies:

    $ cd ../speed-reader-frontend
    $ npm install

Launch server

    $ npm start

Go to local web page: http://localhost:3000/

## Future-Additions

- Keep track of difficulty of sentences based on scores people get on them.
- List difficulties on Sentence Management Page
- allow users to choose difficulty, number of reps, and maybe time a sentence is on the screen before taking the test.
- Add User Ownership for Sentences (can only edit your own sentences, won't be tested on your sentenced)
- ability to flag bad sentenced (gibberish, typos) to take them out of game rotation. Also allow users to correct and unflag those flagged sentences
- Better comparison. Right now if someone adds word the rest of the sentenced will test as wrong. Sentenced should scan rest of the sentenced if a word doesn't match and give some points.

## Error-Modal

Error Modal code was adapted from Eden Ella's code from his blog post, [Build a simple Modal Component with React](https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6).
Error Modal styling adapted from Kumar Muthalier's css on his [jsfiddle page](https://jsfiddle.net/kumarmuthaliar/GG9Sa/1/)  

## Contributing

Original Code was written by the author, Kevin Hines.

## Authors

  - Kevin Hines

    github: [kevhines](https://github.com/kevhines/)

## License

The gem is available as open source under the terms of the [MIT License](LICENSE.md).

## Acknowledgments

- Thanks to Annabel Wilmerding
- Thanks to my classmates
- Thanks to Jackbox's Trivia Muder Party 2 for inspiring this app.
- Thanks to The Flatiron School