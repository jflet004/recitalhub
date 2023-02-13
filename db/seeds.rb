puts "Deleting previous seeds"

Recital.destroy_all
Student.destroy_all

puts "Seeding!"

r1 = Recital.create(title: "Piano", description: "Get ready for a musical treat! Our Kids Piano Recital is a showcase of young and talented musicians, who will be playing beautiful pieces on the piano. The kids have been working hard to perfect their skills and are eager to share their love for music with you. They will be performing a variety of pieces, from classical to contemporary, that are sure to captivate and inspire. Not only will the kids be playing, but there will also be refreshments available and a chance to meet and greet with the performers after the show. Bring your family and friends to support these young musicians and experience an evening of music, fun, and inspiration!", img_url: "images/piano.jpg", capacity: 30)
r2 = Recital.create(title: "Guitar", description: "Come join us for a musical extravaganza! Our Kids Guitar Recital is an event for young and talented musicians to showcase their skills on the guitar. This recital is an opportunity for kids to show off their hard work and dedication to the world of music. They'll be playing a variety of pieces, ranging from classical to contemporary. Not only will the kids be performing, but there will also be refreshments and a chance to meet and greet with the performers after the show. Bring your family and friends to support and encourage the young musicians! This will be a fun-filled and musical evening that you don't want to miss! ", capacity: 30, img_url: "images/guitar.jpg")
r3 = Recital.create(title: "Cello", description: "Attention all music lovers! Get ready to immerse yourself in the mesmerizing sound of the cello at our upcoming recital. Our talented cellists have been working hard to bring you an evening of beautiful music, and you won't want to miss it! Whether you are a fan of the cello, classical music, or just appreciate the beauty of live performance, this is an event not to be missed. Our cellists are ready to share their love of music with you, and we guarantee that you will leave the recital with a sense of inspiration and wonder. ", img_url: "images/cello.jpg", capacity: 30)

s1 = Student.create(name: "Emma Watson", age: 12, recital_id: r1.id )
s2 = Student.create(name: "Liam Neeson", age: 13, recital_id: r1.id )
s3 = Student.create(name: "Jennifer Aniston", age: 14, recital_id: r1.id )
s4 = Student.create(name: "Tom Cruise", age: 12, recital_id: r2.id )
s5 = Student.create(name: "Angelina Jolie", age: 13, recital_id: r2.id )
s6 = Student.create(name: "George Clooney", age: 14, recital_id: r2.id )
s7 = Student.create(name: "Bradley Cooper", age: 12, recital_id: r3.id )
s8 = Student.create(name: "Sandra Bullock", age: 13, recital_id: r3.id )
s9 = Student.create(name: "Johnny Depp", age: 14, recital_id: r3.id )


puts "Done seeding!"