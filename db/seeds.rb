# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Recital.destroy_all
User.destroy_all
Student.destroy_all
Ticket.destroy_all

puts "Seeding!"

r1 = Recital.create(title: "Piano", description: "Students play piano infront of strangers")
r2 = Recital.create(title: "Guitar", description: "Students play guitar infront of parents")

u1 = User.create(username: "Jose", password_digest: "1234")

s1 = Student.create(name: "Batboy", age: 3)

Ticket.create(price: 23, quantity:1)

puts "Done seeding!"