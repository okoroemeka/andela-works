class ShoppingCart(object):
    """initializiing total & items."""
    def __init__(self):
        self.total = 0
        self.items = {}

        """function for adding items to the cart"""
    def add_item(self,item_name,quantity,price):
        self.total += quantity * price
        if item_name not in self.items:
            self.items.update({item_name:quantity})
        else:
            self.item[item_name] + quantity

    """ funtion for removing items from the cart"""
    def remove_item(self,item_name,quantity,price):
        if item_name in self.items:
            if quantity >= self.items[item_name] and quantity >= 1:
                item_cost = (self.items[item_name] * price)
                self.items.pop(item_name)
                self.total -=  item_cost

            else:
                self.items[item_name] -=  quantity
                self.total = self.total - (quantity * price)

    """function for checking out"""
    def checkout(self,cash_paid):
        balance = 0
        if cash_paid > self.total:
            balance = cash_paid - self.total
            return balance
        return "Cash paid not enough"

class Shop(ShoppingCart):
    """docstring forshop."""
    def __init__(self):
        self.quantity = 100
    def remove_item(self):
        self.quantity -= 1
