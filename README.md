# Speed Reader Test - README

Describe Here

## Summary

  - [Version](#Version)
  - [Installation](#Installation)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Version

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

## Future Additions

- A way to upload your own cards from the front end
- Alternating turns (letting whoever won a trick play their card first)
- the ability to change the card, and then rename it and change it's rules.

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