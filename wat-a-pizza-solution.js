let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

let orderAmount = new Array();

//Write function to filter menu items by Category and sort them alphabetically

function category(menu,categoryType){

    let filtered = menu.filter(item =>item.category === categoryType).sort((item1,item2) =>{
        if(item1.name < item2.name)
        return -1;
        if(item1.name > item2.name)
        return 1;
        return 0;
    })
    return filtered;
}

console.log(category(menu,'Main Meal'))
console.log(category(menu,'Starters'))
console.log(category(menu,'Beverages'))

//Write function to calculate thie amoufnt of each ordered item

function calculateAmount(menu, order){

    order.map (item => {
    let orderAmounts={
            "itemName" : item.name, 
            "quantity" : item.quantity, 
            "price" : item.price,
            "category" : menu.filter(items => item.name===items.name)[0].category,
            "amount" : item.quantity*item.price
        }
         orderAmount.push(orderAmounts)
    })
    return orderAmount;
}

let orderAmounts = calculateAmount(menu,order.items);
console.log(orderAmount)

//Write function to calculate the subtotal amount for the main meal ordered
function calculateMainMealAmount(orderAmount){
     intialValue = 0;
    let mainMealAmount = 0;
    orderAmount.filter(item => item.category == "Main Meal").reduce((total,item) => {
       // total = total + item.amount
        mainMealAmount = mainMealAmount + item.amount
    },intialValue)

    if(mainMealAmount > 48){
        let cokePrice = orderAmount.filter(item => item.itemName == "Coke")[0].price
        // console.log(cokePrice)
        return mainMealAmount - cokePrice
    }
    return mainMealAmount; 
}

let mainMealAmount = calculateMainMealAmount(orderAmount);
console.log(mainMealAmount)

//Write function to find the totalAmount of the order based on the calculated mainMealAmount value

let totalBillAmount = 0;
function calculateTotalAmount(orderAmount, mainMealAmount){
    orderAmount.filter(item => item.category != "Main Meal").reduce((total,item) => totalBillAmount += item.amount,intialValue )
    return totalBillAmount + mainMealAmount;
}

let totalAmount1 = calculateTotalAmount(orderAmount,mainMealAmount)
//console.log(totalAmount1)

//Write function to calculate the final amount after discount
function calculatedFinalAmount(totalBill, discount){
    if(totalBill > 50)
    return totalBill -= totalBill/100*discount;

    return totalBill
}



//Write function to display the total amount 
function displayTotalAmount(totalAmount){
    console.log(`Total Amount payable: $ ${totalAmount1}`)
}

//Write function to display the final amount
function displayFinalAmount(finalAmount){
    console.log(`Final Amount payable after discount: $ ${finalAmount}`)
}

//Invoke  functions 
displayTotalAmount(totalAmount1);
displayFinalAmount(calculatedFinalAmount(totalAmount1,5));

