def solve_cipher_first_iteration(input)
  	array = input.split(//)
  	arr = []
  	array.each do |item| 
      cipher = item.ord - 1
      if cipher < 97
        cipher += 26
      end
  		arr.push("#{cipher.chr}")	
	end
	puts arr.join
end

solve_cipher_first_iteration("ifmmp")
# should return "hello"
solve_cipher_first_iteration("ifmmpaAzZ")
# when one of the letters in the message is "a" it will become "z" 


