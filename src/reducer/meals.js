import { ERROR_MEALS, SUCCESS_MEALS, IDLE_MEALS } from '../actions/constants';

const defaultState = {
  meals: [{
    idCategory: '1',
    strCategory: 'Vegan',
    strCategoryThumb: 'https:www.themealdb.com/images/category/vegan.png',
    strCategoryDescription: 'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.',
  },
  {
    idCategory: '2',
    strCategory: 'Vegetarian',
    strCategoryThumb: 'https:www.themealdb.com/images/category/vegetarian.png',
    strCategoryDescription: 'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.',
  },
  {
    idCategory: '3',
    strCategory: 'Breakfast',
    strCategoryThumb: 'https:www.themealdb.com/images/category/breakfast.png',
    strCategoryDescription: 'The domestic goat or simply goat (Capra aegagrus hircus) is a subspecies of aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and,subfamily Caprinae have been used for milk, meat, fur and skins across much of the world. Milk from goats is often turned into goat cheese.',
  },
  {
    idCategory: '4',
    strCategory: 'Miscellaneous',
    strCategoryThumb: 'https:www.themealdb.com/images/category/miscellaneous.png',
    strCategoryDescription: "General foods that don't fit into another category",
  },
  {
    idCategory: '5',
    strCategory: 'Pasta',
    strCategoryThumb: 'https:www.themealdb.com/images/category/pasta.png',
    strCategoryDescription: 'Pasta is a staple food of traditional Italian cuisine,with the first reference dating to 1154 in Sicily. to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste,or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4]Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca).',
  },
  {
    idCategory: '6',
    strCategory: 'Pork',
    strCategoryThumb: 'https:www.themealdb.com/images/category/pork.png',
    strCategoryDescription: 'Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus).It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC.Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products.Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch ofcooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized inAsian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietarylaw, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.',
  },
  {
    idCategory: '7',
    strCategory: 'Seafood',
    strCategoryThumb: 'https:www.themealdb.com/images/category/seafood.png',
    strCategoryDescription: 'Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term "seafood" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.',
  },
  {
    idCategory: '8',
    strCategory: 'Side',
    strCategoryThumb: 'https:www.themealdb.com/images/category/side.png',
    strCategoryDescription: 'A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes',
  },
  {
    idCategory: '9',
    strCategory: 'Beef',
    strCategoryThumb: 'https:www.themealdb.com/images/category/beef.png',
    strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
  },
  {
    idCategory: '10',
    strCategory: 'Chicken',
    strCategoryThumb: 'https:www.themealdb.com/images/category/chicken.png',
    strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
  },
  {
    idCategory: '11',
    strCategory: 'Dessert',
    strCategoryThumb: 'https:www.themealdb.com/images/category/dessert.png',
    strCategoryDescription: 'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.',
  },
  {
    idCategory: '12',
    strCategory: 'Lamb',
    strCategoryThumb: 'https:www.themealdb.com/images/category/lamb.png',
    strCategoryDescription: 'Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.',
  }],
  status: IDLE_MEALS,
  error: null,
};

const mealsreducer = (state = defaultState, action) => {
  switch (action.type) {
    case SUCCESS_MEALS:
      return {
        ...state,
        status: SUCCESS_MEALS,
        meals: action.data,
        error: null,
      };
    case ERROR_MEALS:
      return {
        ...state,
        status: ERROR_MEALS,
        error: action.error,
      };
    default: {
      return state;
    }
  }
};

export default mealsreducer;
