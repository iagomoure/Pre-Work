def sorting(phrase)	
	phrase_array = phrase.split(' ').sort.join(",").gsub(/(\W|\d)/, ' ')
	phrase_array = phrase_array.split(' ').sort{|a,b| a.upcase <=> b.upcase}
	#Demuestra que devuelve una clase array. Se tiene que forzar el value de la funcion
	#puts phrase_array.class
	#return phrase_array
end

puts "Introduce una frase:"
phrase = gets.chomp
puts sorting(phrase)

