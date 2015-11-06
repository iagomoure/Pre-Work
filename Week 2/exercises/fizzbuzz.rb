num = 1
result = ""

#Iteration used while
while num <= 100
	if num % 3 == 0 && num % 5 == 0
		result = "FizzBuzz"
		puts result
	elsif num % 3 == 0
		result = "Fizz"
		puts result
	elsif num % 5 == 0
		result = "Buzz"
		puts result
	else
		result = num
		puts result
	end
	num = num + 1
end


#Iteration used .each
(1..100).each do |n|
	if n % 3 == 0 && n% 5 == 0
		result = "FizzBuzz"
		puts result
	elsif n % 3 == 0
		result = "Fizz"
		puts result
	elsif n % 5 == 0
		result = "Buzz"
		puts result
	else
		result = n
		puts result
	end
	n = n + 1
end

#Iteration used for

