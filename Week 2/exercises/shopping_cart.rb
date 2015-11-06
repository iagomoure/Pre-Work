class ShoppingCart	
	
	def initialize
		@items = []
	end

	def add_item(item)
		@items.push(item)
	end
	
	def storewide_discount(total_price_shoppingcart)
		@items_count = 0
		@items.each do |items|
			@items_count = @items_count +1
		end
		if @items_count > 5
			@total_price_shoppingcart -= (@total_price_shoppingcart * 0.1) 
		else
			@total_price_shoppingcart
		end
	end

	def checkout
		@total_price_shoppingcart = 0
		@items.each do |items|
			@total_price_shoppingcart += items.price
		end
		@total_price_shoppingcart = storewide_discount(@total_price_shoppingcart)
		puts "Your total today is #{@total_price_shoppingcart}€. Have a nice day!"
	end
end


class Item

	attr_reader :name, :price

	def initialize(name, price)
		@name = name
		@price = price
	end

	def price
		@price
	end
end


class Housewares < Item

	def price
		if @price <= 100
			@price 
		else
			@price -= (@price * 0.05)
		end
	end	
end


class Fruit < Item

	def price
		t = Time.now
		if t.saturday? == true || t.sunday? == true
			@price -= (@price * 0.1)
		else
			@price 
		end
	end
end


cart = ShoppingCart.new

banana = Fruit.new("Banana", 10)
vacuum = Housewares.new("Vacuum Cleaner", 150)
oj = Item.new("Orange Juice", 10)
rice = Fruit.new("Rice", 1)
anchovies = Fruit.new("Anchovies", 2)

cart.add_item(banana)
cart.add_item(vacuum)
cart.add_item(oj)
cart.add_item(rice)
cart.add_item(anchovies)

cart.checkout

joshs_cart = ShoppingCart.new
joshs_cart.add_item(oj)
joshs_cart.add_item(rice)

joshs_cart.checkout

special_discount_cart = ShoppingCart.new
special_discount_cart.add_item(banana)
special_discount_cart.add_item(vacuum)
special_discount_cart.add_item(oj)
special_discount_cart.add_item(oj)
special_discount_cart.add_item(rice)
special_discount_cart.add_item(anchovies)

special_discount_cart.checkout



