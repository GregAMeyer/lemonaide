// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

var async = require('async'),
    mongoose = require('mongoose'),
    models = require('./models');

var data = {
    Youth: [{
        firstName: 'Steve',
        lastName: 'Jobs',
        password: 'apple',
        age: 14,
        businessName: 'Apple',
        businessSummary: "I'm going to sell cool gadgets. I mean these gadgets will be so cool that people will make 2 movies about me some day. Not one, but TWO!",
        selfSummary: "Hi my name is Steve and I'm a bit of a perfectionist. I also like fruit.",
        region: 'Cupertino',
        photo: '../../images/mini-steve-jobs.jpg',
        // photo: 'http://cdn.parenting.com/sites/parenting.com/files/styles/facebook_og_image/public/mini-steve-jobs.jpg?itok=1xtepyRi',
        products: [new models.Product({
                productName: 'iPhone',
                ingredients: [new models.Ingredient({
                    ingredientName: 'internet',
                    costPerUnit: 1,
                    unitsPerProduct: 1
                })],
                price: 2
            }),
            new models.Product({
                productName: 'iPod',
                ingredients: [new models.Ingredient({
                    ingredientName: 'music',
                    costPerUnit: 1,
                    unitsPerProduct: 1
                })],
                price: 2
            }), new models.Product({
                productName: 'iTunes',
                ingredients: [new models.Ingredient({
                    ingredientName: 'music',
                    costPerUnit: 1,
                    unitsPerProduct: 1
                })],
                price: 2
            })
        ]
    }, {
        firstName: 'Marissa',
        lastName: 'M',
        password: 'apple',
        age: 12,
        businessName: 'YeaWhoo',
        businessSummary: "I'm only 12, but I have a feeling this will be a big thing one day - I want to sell people's attention to advertisers, but I'm not sure how yet.",
        selfSummary: "Hi my name is Marissa and I'm going to be powerful when I'm older",
        region: 'California',
        photo: '../../images/mini-marissa-mayer.jpg',
        products: [new models.Product({
                productName: 'News',
                ingredients: [new models.Ingredient({
                    ingredientName: 'News',
                    costPerUnit: 1,
                    unitsPerProduct: 1
                })],
                price: 2
            }),
            new models.Product({
                productName: 'Finance',
                ingredients: [new models.Ingredient({
                    ingredientName: 'Finance',
                    costPerUnit: 1,
                    unitsPerProduct: 1
                })],
                price: 2
            }), new models.Product({
                productName: 'Sports',
                ingredients: [new models.Ingredient({
                    ingredientName: 'Sports',
                    costPerUnit: 1,
                    unitsPerProduct: 1
                })],
                price: 2
            })
        ]
    }, {
        firstName: 'Bobby',
        lastName: 'McLemon',
        password: 'apple',
        age: 8,
        businessName: "Bobby's Lemonade",
        businessSummary: 'I want to make sell lemonade to all my neighbors.',
        selfSummary: "Hey! I'm Bobby and I am an asipring AngelHacker. If I sell enough lemonade, my mom says she will help me buy the new MacBook! And by MacBook, I mean the MacBook Pro, of course...",
        region: 'Silicon Alley',
        photo: '../../images/angry_child.jpg',
        products: [new models.Product({
            productName: 'Lemonade',
            ingredients: [new models.Ingredient({
                ingredientName: 'Lemons',
                costPerUnit: 1,
                unitsPerProduct: 2
            })],
            price: 2
        }), new models.Product({
            productName: 'Chocolate Cookie',
            ingredients: [new models.Ingredient({
                ingredientName: 'Flour',
                costPerUnit: 4,
                unitsPerProduct: .25
            }), new models.Ingredient({
                ingredientName: 'Chocolate Chips',
                costPerUnit: 4,
                unitsPerProduct: .1
            }), new models.Ingredient({
                ingredientName: 'Eggs',
                costPerUnit: 2.50,
                unitsPerProduct: .125
            })],
            price: 3
        })]
    }, {
        firstName: 'Christian',
        lastName: 'E',
        password: 'apple',
        age: 13,
        businessName: 'Chocolate Bars',
        businessSummary: 'I want to sell chocolate bars for boy scouts',
        selfSummary: "Hi my name is Christain and I am a boy scout. I want to sell 200 chocolate bars so i can get a new badge! Then I'm gonna DJ about it and dodge the grenades at the club",
        region: 'California',
        photo: '../../images/pauly-d.jpg',
        products: [new models.Product({
            productName: 'Snickers',
            ingredients: [new models.Ingredient({
                ingredientName: 'Snicker Bar',
                costPerUnit: 1,
                unitsPerProduct: 1
            })],
            price: 2
        }), new models.Product({
            productName: 'Milky Way',
            ingredients: [new models.Ingredient({
                ingredientName: 'Milky Way Bar',
                costPerUnit: 1,
                unitsPerProduct: 1
            })],
            price: 2
        })]
    }, {
        firstName: 'Kaito',
        lastName: 'H',
        password: 'apple',
        age: 8,
        businessName: 'Dynamic Dollar Pizza',
        businessSummary: 'I want to make custom pizzas for people in my neighborhood',
        selfSummary: 'I looove pizza and putting different toppings on pizzas! My favorite is pepperoni.',
        region: 'New York',
        photo: '../../images/bart-simpson-mooning.jpg',
        products: [new models.Product({
            productName: 'Pizza',
            ingredients: [new models.Ingredient({
                ingredientName: 'pepperoni',
                costPerUnit: 3,
                unitsPerProduct: .25
            }), new models.Ingredient({
                ingredientName: 'mushrooms',
                costPerUnit: 4,
                unitsPerProduct: .5
            }), new models.Ingredient({
                ingredientName: 'sausage',
                costPerUnit: 4.50,
                unitsPerProduct: .125
            })],
            price: 0,
            numberSold: 0,
            secret: "thisOne"
        })]
    }, {
        firstName: 'Greg',
        lastName: 'M',
        password: 'apple',
        age: 9,
        businessName: 'Weapons',
        businessSummary: 'My plan is to take over the world.',
        selfSummary: 'I like to be evil and come up with evil plans to take over the world!',
        region: 'Boston',
        photo: '../../images/stewie.jpg',
        products: [new models.Product({
            productName: 'Rocket',
            ingredients: [new models.Ingredient({
                ingredientName: 'metal',
                costPerUnit: 20,
                unitsPerProduct: 1
            })],
            price: 30
        })]
    }]
}

mongoose.connection.on('open', function() {
    mongoose.connection.db.dropDatabase(function() {

        console.log("Dropped old data, now inserting data");
        async.each(Object.keys(data),
            function(modelName, outerDone) {
                async.each(data[modelName],
                    function(d, innerDone) {
                        models[modelName].create(d, innerDone);
                    },
                    outerDone
                );
            },
            function(err) {
                console.log("Did not work");
                console.log("Control-C to quit");
            }
        );
    });
});