#Functions with arguments

def say_hello (name)
	puts "Hello, #{name}"
end

say_hello("Iago")
say_hello("Laura")
say_hello("Agustin")

#Expresions: +, -, *, etc

say_hello("Iago" + " Laura")

def add(a, b)
  puts a + b
end

add((5 * 5), 10)
add(30, (5-4) * 3 / 3)


#Using flow control in a function

def taste (food)
	if food == "bacon"
		puts "Yummy !!Bacon!!"
	elsif food == "spinach"
		puts "Urgh"
	else
		puts "Can I have some bacon on the side?"
	end
end

taste ("spinach")
taste("bacon")
taste("cheese")


#The funtions will always return return the value of the last line of the function

#def square (number)
	#This is the last line of the function
	#puts number * number
	#We are calling another function PUTS, It wil return NIL
#end

def square (number)
	number * number
end
def multiply(a,b)
	a * b
end

puts square(3)
puts multiply(4,2)

#Keyword return in your function, it to return the value and stop there

def add (a,b)
	return a + a
	return a + b
	return b + b
end

puts add(1,3)


#The good practice to use keyword RETURN is when we mean to stop the execution and return some value

def square_100(num)
	sqr_num = num * num
	if sqr_num > 100
		return "Number too big!!"
	end
	sqr_num
end

puts square_100(8)
puts square_100(15)


#If you want to return more than one value...

def add(a,b)
	calc1 = a + a
	calc2 = a + b
	calc3 = b + b
	return calc1, calc2, calc3
end

puts add(2,4)






















