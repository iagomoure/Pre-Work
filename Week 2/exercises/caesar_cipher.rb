def solve_cipher_first_iteration(input)
  	array = input.split(//)
  	arr = []
  	array.each do |item| 
  		if item == "a" || item == "A"
  			cipher = item.ord + 25
  			cipher = cipher.chr
  		else
  			cipher = item.ord - 1
  			cipher = cipher.chr
  		end
  		arr.push("#{cipher}")	
	end
	puts arr.join
end

def solve_cipher_second_iteration(input,shift)
  	array = input.split(//)
  	arr = []
  	array.each do |item| 
  		if item == " "
  			cipher = item.ord
  			cipher = cipher.chr
  		else	
  			#el valor (+ o -) de shift se encarga de sumar hacia la dcha
  			# o de restar hacia la izq 
  			cipher = item.ord + shift 
  			cipher = cipher.chr
  		end
  		arr.push("#{cipher}")	
	end
	puts arr.join
end

def solve_cipher_third_iteration(input)
	str = input.chars.map {|c| c.ord}
	cipher_default = str.map {|c| c - 3}
	puts cipher_default.map {|c| c.chr}.join 
end

solve_cipher_first_iteration("ifmmp")
# should return "hello"
solve_cipher_first_iteration("ifmmpaAzZ")
# when one of the letters in the message is "a" it will become "z" 
solve_cipher_second_iteration("pb uhdo qdph lv grqdog gxfn", -3)
solve_cipher_third_iteration("grqdog")