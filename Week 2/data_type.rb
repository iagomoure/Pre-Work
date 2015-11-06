#Data Types: Strings, Integers, Arrays, and Hashes
#STRINGS

unescaped_string = 'This is Sharon´s unescaped string' 
escaped_string = 'This is Sharon\'s escaped string'

puts "#{unescaped_string} y #{escaped_string}"

movie = "Finding Nemo"
puts "My fauvorite move is #{movie}"

#methods for Strings

name ="mr. Bond"
capitalized_name = name.capitalize 
puts "Hello #{capitalized_name}"

flavours = "chocolate, mint, strawberry, vanilla, caramel, chilli"
puts "#{flavours}"
flavours_array = flavours.split(", ")
puts "#{flavours_array}"

"How many characters are in this string?".length

puts "awesome".include? "you"
puts "awesome".include? "me"
pharse = "Just kiddind, you're awesome too"
puts pharse.include? "aw"

#INTEGERS

age = 28
cats = 5
#Integers are for whole numbers. Integers are divided into two classes:
#Fixnum - for smaller number & Bignum - for huge numbers
#Floats are for numbers with decimals
stars_in_milkyway = 325_006_357_011


#methods for integers
print "#{cats} es impar?:"
puts cats.odd?
print "#{age} es par?:"
puts age.even?

puts age.round(-1)
puts cats.round(1)

3.times {puts "beetlejuice"}


#ARRAYS
animals = ["Lions", "Tigers", "Bears"]
puts animals

numbers = ["One", 2, "Three"]
puts numbers[0]
puts numbers [1]

#methods for arrays

my_array = []

my_array << "A"
my_array.push "B"
my_array.push "C"

puts my_array

my_array.delete_at 2

puts my_array

puts [4,6,2,4,7,12,9,12].sort
puts ["g", "e", "n", "w", "a"].sort

my_new_array = ["chocolate", "mint", "strawberry", "vanilla", "caramel", "chili"]
puts my_new_array

puts ["chocolate", "mint", "strawberry", "vanilla", "caramel", "chili"].join
puts ["chocolate", "mint", "strawberry", "vanilla", "caramel", "chili"].join(",")


#HASHES
#elements in a hash have a name associated to them. You can lookup values by its name or key

my_hash = {}

my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"

puts my_hash

#methods hashes

my_hash = {}

my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"

#to check if your hash contains a certain key or to check for a specific value: #has_key? or #has_value?

print "Tiene my hash la key AST?:"
puts my_hash.has_key?("AST")
print "Tiene my hash la key CAT?:"
puts my_hash.has_key?("CAT")
print "Tiene my hash el valor Galicia?:"
puts my_hash.has_value?("Galicia")

puts my_hash.select { |key, value| key.include?("G")}

puts "whats is this?".class
puts 3.class 
puts [1,2,3].class



































































