# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Site.create(url: 'https://www.google.com', http_response: 200)
Site.create(url: 'https://www.yahoo.com', http_response: 200)
Site.create(url: 'http://www.omdbapi.com/a/fake/path', http_response: 404)