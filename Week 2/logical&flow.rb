#Logical operators and flow control

puts 2 == 3
puts "two" == 2
puts "two" > "three"
puts "a" > "b"
puts 2 <= 3
puts 3 >= 2

puts 1 == 1 && 1 > 2
puts 1 == 1 && 3 > 2

puts 1 == 1 || 1 > 2
puts 1 == 1 || 3 > 2
puts 1 == "one" || 1 > 2

1 != 2
true == !false

#IF, ELSIF, ELSE

puts "What animal do you like?"
animal = gets.chomp
if animal == "Dog"
	puts "You like dogs. Woof!"
elsif animal == "Cat"
	puts "You like cats. Meow!"
else
	puts "You don´t like cats or dogs? Okey."
end


#FOR

numbers = []
print "First number:"
num1 = gets.chomp 
numbers.push num1
print "Second number:"
num2 = gets.chomp
numbers.push num2
for element in numbers
  puts "-> #{element}"
end


#WHILE

string = ""
while string.length < 10
	string = string + 'a'
end
puts "Te final string is #{string}"


#EACH in Array

nums = ["One", 2, "Three"]
puts "Array: [#{nums.join (",")}]"
nums.each do |item|
	puts "--> #{item}"
end


#EACH in HASHES

my_hash = {}
my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"
my_hash["CAT"] = "Catalunya"

puts "Hash: #{my_hash}"
my_hash.each do |key,value|
	puts "#{key} stands of #{value}"
end























