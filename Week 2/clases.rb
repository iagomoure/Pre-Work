class Car

	#Accessor Methods
	attr_accessor :color


	#constructor - Initailization
	def initialize(color)
		@color = color
	end

	#instace methods

	def honk
		puts "Beeeeeeeeeep!"
	end

	def print_color
		puts @color
	end
end


my_car = Car.new "red"
other_car = Car.new "grey"

#accessor access
my_car.color = "grey"

puts my_car.print_color
other_car.print_color


puts my_car.class
puts "cosa".class
puts 4.class

#Inheritance
class Animal
	def initialize(name)
		@name = name
	end

	def describe
		puts "This animal's name is #{@name}"
	end
end

class Dog < Animal
end

class Cat < Animal
end

class Human < Animal
	def initialize(name, salary)
		super(name)
		@salary = salary
	end

	def describe_with_salary
		puts "This human's name is #{@name} and its salary is #{@salary}"
	end
end

dog = Dog.new "Winston Furchill"
cat = Cat.new "David Meowie"
human = Human.new "Johny Appleseed", 12000

dog.describe
cat.describe
human.describe
human.describe_with_salary











