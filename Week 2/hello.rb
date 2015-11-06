print "Cookies"
print "are"
print "good"
print "too"#This also work for a comment
#This iis a comemnt	
puts "Hello, world!"
puts "I"
puts "like"
puts "pie."


#Variables, the convention is for variables to be in lowercase letters with undercores between words
operation_result = 12 * 34
puts "Operation result is "
puts operation_result


#Strings is a text. In Ruby we can define a string in many different ways
a_string = "This is a String"
another_string = 'This is also String'
multiline_string = """
A long time ago in a galaxy far, far away ...

It is a period of civil war. Rebel
sapceships, striking from a hidden
base, have won their first victory
against the evil Galactic Empire.
"""


#The main diferent between the double quotes and the single quotes syntax is that the former allows special uses of the backslash \ to form escape sequences
puts "Hello\nworld"
puts 'Hello\nworld'
#Use backslash to escape quotation marks within the String
unescaped_string = 'This is Sharon´s unescaped string'
escaped_string = 'This is Sharon\´s escaped string'
puts "Unescaped: #{unescaped_string}"
puts "Escaped: #{escaped_string}"

#String Interpolation values inside strings
name = "Rafael"
puts "HI #{name}"


#Asking questins from the standard input
puts "Whats your name?"
name = gets.chomp #we are receiving a string
puts "Hello, #{name}"
#If we want to turn it into a number we need to call the to_i method on that string
#i stand for integer
puts "Give me a number"
first_number = gets.chomp.to_i
puts "Give me another number"
second_number = gets.chomp.to_i
puts "#{first_number} x #{second_number} = #{first_number * second_number}"


#Reading and writing files with IO Class
file_contents  = IO.read("ruby.rb")
puts "The source file contains:\n #{file_contents}"
#IO.write takes two arguments: the first one is the name of the file that it wil create, and the second is the content of the file
puts "What's your name"
name = gets.chomp
IO.write('name.txt', name)











