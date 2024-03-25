const menu = [
  {
    category: 'Pasta',
    name: 'Spaghetti Carbonara',
    price: 18,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/past%C4%B1rma-ve-krema-ile-makarna-carbonara-plaka-servis-gm1291754834-386781497',
    details: 'Spaghetti pasta with creamy egg sauce, pancetta, and Parmesan cheese.',
    ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese']
  },
  {
    category: 'Pasta',
    name: 'Fettuccine Alfredo',
    price: 20,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/bir-pot-tavuk-alfredo-makarna-do%C4%9Frudan-foto%C4%9Fraf-yukar%C4%B1da-gm1159438262-317036392',
    details: 'Fettuccine pasta in a creamy Alfredo sauce with Parmesan cheese.',
    ingredients: ['Fettuccine', 'Cream', 'Butter', 'Parmesan Cheese']
  },
  {
    category: 'Pasta',
    name: 'Penne Arrabbiata',
    price: 16,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/penne-pasta-with-chili-sauce-arrabiata-gm522393408-91619727',
    details: 'Penne pasta in a spicy tomato sauce with garlic and red pepper flakes.',
    ingredients: ['Penne', 'Tomato Sauce', 'Garlic', 'Red Pepper Flakes']
  },
  {
    category: 'Pasta',
    name: 'Lasagna',
    price: 22,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/portion-of-ground-beef-lasagna-topped-with-melted-cheese-and-garnished-with-fresh-gm1459977932-494256069',
    details: 'Layered pasta dish with tomato sauce, ground beef, and cheese.',
    ingredients: ['Lasagna Sheets', 'Tomato Sauce', 'Ground Beef', 'Mozzarella Cheese', 'Ricotta Cheese']
  },
  {
    category: 'Pasta',
    name: 'Ravioli',
    price: 24,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/homemade-spinach-and-ricotta-ravioli-with-tomato-sauce-and-parmesan-close-up-gm1439776229-479944031',
    details: 'Pasta parcels filled with ricotta cheese and spinach, served with marinara sauce.',
    ingredients: ['Ravioli', 'Ricotta Cheese', 'Spinach', 'Marinara Sauce']
  },
  {
    category: 'Pasta',
    name: 'Gnocchi',
    price: 19,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/plate-of-gnocchi-alla-sorrentina-from-above-at-the-restaurant-gm1446213240-484370262',
    details: 'Italian dumplings made from potato, flour, and egg, served with pesto sauce.',
    ingredients: ['Gnocchi', 'Potato', 'Flour', 'Egg', 'Pesto Sauce']
  },
  {
    category: 'Pasta',
    name: 'Pasta Primavera',
    price: 17,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/makarna-primavera-geleneksel-italyan-yeme%C4%9Fi-gm1314238744-402514520',
    details: 'Pasta with fresh vegetables such as bell peppers, broccoli, and carrots in a light cream sauce.',
    ingredients: ['Pasta', 'Bell Peppers', 'Broccoli', 'Carrots', 'Cream Sauce']
  },
  {
    category: 'Pasta',
    name: 'Linguine Vongole',
    price: 21,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/geleneksel-italyan-deniz-%C3%BCr%C3%BCnleri-istiridye-spagetti-alle-vongole-tavada-makarna-gm1129614168-298465645',
    details: 'Linguine pasta with clams, garlic, white wine, and parsley.',
    ingredients: ['Linguine', 'Clams', 'Garlic', 'White Wine', 'Parsley']
  },
  {
    category: 'Pasta',
    name: 'Pasta Puttanesca',
    price: 18,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/pasta-puttanesco-on-a-black-plate-with-a-reflection-gm1555590699-526759938',
    details: 'Pasta with a flavorful sauce made from tomatoes, olives, capers, and anchovies.',
    ingredients: ['Pasta', 'Tomatoes', 'Olives', 'Capers', 'Anchovies']
  },
  {
    category: 'Pasta',
    name: 'Pasta Bolognese',
    price: 23,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/mafalde-or-mafalda-or-mafaldine-pasta-bolognese-gm2063685706-564104101',
    details: 'Pasta with a rich meat sauce made from ground beef, tomatoes, and red wine.',
    ingredients: ['Pasta', 'Ground Beef', 'Tomatoes', 'Red Wine']
  },
 {
    category: 'Burger',
    name: 'Classic Beef Burger',
    price: 15,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/fresh-tasty-burger-on-wood-table-gm1448322070-485876303',
    details: 'Juicy beef patty with lettuce, tomato, onion, pickles, and ketchup.',
    ingredients: ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup']
  },
  {
    category: 'Burger',
    name: 'Cheeseburger',
    price: 17,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/delicious-double-burger-with-french-fries-and-vegetables-on-wooden-cutting-board-gm1471844577-502350522',
    details: 'Classic beef burger topped with melted cheese.',
    ingredients: ['Bun', 'Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup']
  },
  {
    category: 'Burger',
    name: 'Bacon Burger',
    price: 18,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/bacon-cheeseburger-on-a-toasted-bun-gm1398630614-452706020',
    details: 'Beef burger topped with crispy bacon slices.',
    ingredients: ['Bun', 'Beef Patty', 'Bacon', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup']
  },
  {
    category: 'Burger',
    name: 'Mushroom Swiss Burger',
    price: 19,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/mushroom-swiss-burger-gm539659420-96228749',
    details: 'Beef burger with sautéed mushrooms and Swiss cheese.',
    ingredients: ['Bun', 'Beef Patty', 'Mushrooms', 'Swiss Cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup']
  },
  {
    category: 'Burger',
    name: 'BBQ Bacon Burger',
    price: 20,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/steakhouse-double-bacon-cheeseburger-gm617759204-107338789',
    details: 'Beef burger with BBQ sauce, crispy bacon, and cheddar cheese.',
    ingredients: ['Bun', 'Beef Patty', 'BBQ Sauce', 'Bacon', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles']
  },
  {
    category: 'Burger',
    name: 'Turkey Burger',
    price: 16,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/turkey-burger-with-spinach-and-salsa-gm157685880-14547661',
    details: 'Grilled turkey burger with avocado, lettuce, and tomato.',
    ingredients: ['Bun', 'Turkey Patty', 'Avocado', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Mayonnaise']
  },
  {
    category: 'Burger',
    name: 'Veggie Burger',
    price: 14,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/sa%C4%9Fl%C4%B1kl%C4%B1-vejetaryen-burger-gm1183008025-332441616',
    details: 'Vegetarian burger made with a blend of vegetables and grains.',
    ingredients: ['Bun', 'Vegetable Patty', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup']
  },
  {
    category: 'Burger',
    name: 'Buffalo Chicken Burger',
    price: 18,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/buffalo-chicken-burger-with-sauce-and-lettuce-leaves-served-in-cutting-board-gm1850590497-551907949',
    details: 'Spicy buffalo chicken burger with blue cheese dressing.',
    ingredients: ['Bun', 'Chicken Patty', 'Buffalo Sauce', 'Blue Cheese Dressing', 'Lettuce', 'Tomato', 'Onion', 'Pickles']
  },
  {
    category: 'Burger',
    name: 'Guacamole Burger',
    price: 19,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/tatl%C4%B1-patates-sosu-ve-guacamole-ile-vegan-pancar-burger-bitki-bazl%C4%B1-diyet-konsepti-gm1266921389-371540328',
    details: 'Beef burger topped with homemade guacamole and salsa.',
    ingredients: ['Bun', 'Beef Patty', 'Guacamole', 'Salsa', 'Lettuce', 'Tomato', 'Onion', 'Pickles']
  },
  {
    category: 'Burger',
    name: 'Double Cheeseburger',
    price: 21,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/double-cheese-beef-burger-with-kitchen-background-gm1438143625-478734890',
    details: 'Beef burger with double the cheese, lettuce, tomato, and onion.',
    ingredients: ['Bun', 'Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Ketchup']
  },
{
    category: 'Pizza',
    name: 'Pizza Margherita',
    price: 20,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/italyan-pizza-margherita-gm1171008705-324259456',
    details: 'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Basil']
  },
  {
    category: 'Pizza',
    name: 'Pizza Pepperoni',
    price: 22,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/pizza-gm468098103-34166950',
    details: 'Pizza topped with pepperoni slices and mozzarella cheese.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni']
  },
  {
    category: 'Pizza',
    name: 'Pizza Hawaiian',
    price: 24,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/aerial-view-of-a-pizza-on-a-restaurant-table-gm2038985754-562554775',
    details: 'Pizza with ham, pineapple, and mozzarella cheese.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Ham', 'Pineapple']
  },
  {
    category: 'Pizza',
    name: 'Pizza Vegetarian',
    price: 21,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/pizza-ye%C5%9Fil-fesle%C4%9Fen-pesto-soslu-geleneksel-italyan-pizzas%C4%B1-%C3%BCst-g%C3%B6r%C3%BCn%C3%BCm%C3%BC-gm1193711857-339643745',
    details: 'Pizza topped with assorted vegetables and mozzarella cheese.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Mushrooms', 'Onions', 'Bell Peppers', 'Olives']
  },
  {
    category: 'Pizza',
    name: 'Pizza BBQ Chicken',
    price: 23,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/bbq-chicken-pizza-gm489593343-40054134',
    details: 'Pizza topped with BBQ sauce, chicken, onions, and mozzarella cheese.',
    ingredients: ['Dough', 'BBQ Sauce', 'Chicken', 'Mozzarella Cheese', 'Onions']
  },
  {
    category: 'Pizza',
    name: 'Pizza Four Cheese',
    price: 25,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/pizza-quattro-formaggi-on-a-black-background-pizza-four-cheeses-gm1337317100-418251735',
    details: 'Pizza topped with four types of cheese: mozzarella, cheddar, parmesan, and gorgonzola.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Cheddar Cheese', 'Parmesan Cheese', 'Gorgonzola Cheese']
  },
  {
    category: 'Pizza',
    name: 'Pizza Supreme',
    price: 26,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/hot-cheese-stringy-slice-lifted-of-full-baked-pizza-isolated-on-white-background-gm1387856824-445673465',
    details: 'Loaded pizza with pepperoni, sausage, mushrooms, onions, bell peppers, and olives.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni', 'Sausage', 'Mushrooms', 'Onions', 'Bell Peppers', 'Olives']
  },
  {
    category: 'Pizza',
    name: 'Pizza Meat Lovers',
    price: 28,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/bacon-and-sausage-meat-lovers-pizza-gm1393265769-449222763',
    details: 'Pizza topped with a variety of meats including pepperoni, sausage, ham, and bacon.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Pepperoni', 'Sausage', 'Ham', 'Bacon']
  },
  {
    category: 'Pizza',
    name: 'Pizza Mediterranean',
    price: 27,
    image: 'https://www.istockphoto.com/tr/foto%C4%9Fraf/regional-italian-pizza-pizza-with-zucchini-and-green-leaves-extraordinary-pizza-gm1456598279-491585134',
    details: 'Mediterranean-style pizza with feta cheese, olives, tomatoes, and spinach.',
    ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella Cheese', 'Feta Cheese', 'Olives', 'Tomatoes', 'Spinach']
  },
  {
    category: 'Pizza',
    name: 'Pizza Buffalo Chicken',
    price: 24,
    image: '/images/marga.jpg',
    details: 'Pizza with spicy buffalo chicken, ranch dressing, and mozzarella cheese.',
    ingredients: ['Dough', 'Buffalo Chicken', 'Ranch Dressing', 'Mozzarella Cheese']
  }
];

export default menu;