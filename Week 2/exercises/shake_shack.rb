class ShakeShop

	def initialize
		@milkshakes = []
	end

	def add_milkshake(milkshake)
		@milkshakes.push(milkshake)
	end

	def checkout_milkshake
			puts @milkshake
	end
end
class MilkShake

	def initialize
		@base_price = 3
		@ingredients = []
	end

	def add_ingredient(ingredient)
		@ingredients.push(ingredient)
	end

	def price_of_milkshake
		#Let's establish what our counte should be before we start adding ingredientes into teh mix
		@total_price_of_milkshake = @base_price
		#Add each ingredients price to our total
		@ingredients.each do |ingredient|
			@total_price_of_milkshake += ingredient.price
		end
		#return our total price to whoever called for it
		@total_price_of_milkshake
	end
end

class Ingredient
	
	attr_reader :name, :price

	def initialize (name,price)
		@name = name
		@price = price
	end
end


nizars_milkshake = MilkShake.new

banana = Ingredient.new("Banana",2)
chocolate_chips = Ingredient.new("ChocolateChips",1)

nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)

puts nizars_milkshake.price_of_milkshake

shakeshop = ShakeShop.new
shakeshop.add_milkshake(nizars_milkshake)
shakeshop.checkout_milkshake





