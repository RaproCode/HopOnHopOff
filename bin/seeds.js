// connects seed.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// get the user model to do our database query
const User = require("../models/user-models.js");

mongoose
  .connect("mongodb://localhost/hoponhop", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const blueLine = [
  {
    cities: "Paris – Reims – Luxembourg",
    hotel: "Novotel Luxembourg Kirchberg",
    image: "",
    visit:
      "The Red Line tour leaves from Paris for a delightful scenic journey through the rolling countryside of the Champagne region, famous the world over for the sparkling white wine produced here. Enjoy seeing the historic attractions of provincial capital Reims, including the city’s cathedral – a key national heritage site, where coronations of French kings took place from the 11th century onwards. History and tradition are equally evident in your next location: Luxembourg, the world’s only remaining Grand Duchy. After arriving in refined Luxembourg City, you’ll be introduced on foot to the main places of interest, including the Place de Constitution and Pont Adolphe, before having time for further exploration on your own. "
  },
  {
    cities: "Luxembourg – Trier – Koblenz – Rudesheim am Rhein – Frankfurt",
    hotel: "Hotel NH Frankfurt airport West",
    image: "",
    visit:
      "Today we leave Luxembourg behind and head across another European border into Germany. The first stop is historic Trier, Germany’s oldest city and the birthplace of Karl Marx. You’ll have the chance to see from the outside the house where the influential philosopher was born, which now functions as the Karl Marx Haus museum. Your walking tour then takes you into the centre of Trier; here you can look around the city’s impressive cathedral, where the celebrated Holy Robe – said to be the tunic of Christ – is preserved and occasionally displayed. Trier is also known as ‘The Second Rome’ (Constantine served as an administrator here for 10 years), and significant legacies of the once-great empire remain today. The highlight is undoubtedly Porta Nigra, the best-preserved Roman city gate north of the Alps, which you’ll get to see and photograph. After an exciting morning in Trier, you’ll drive on to Koblenz, famous as the location of the confluence of the Rhine and Mosel rivers. Here you have the option of indulging in a relaxing lunch alongside the water, and then afterwards you can also choose to add on a scenic Rhine boat cruise for some memorable city vistas. Back on dry land you’ll drive through the wine-making town of Rüdesheim.  Then it’s on to Frankfurt am Main, where you’ll discover the delights of Römerberg, a charming plaza with a distinctive medieval town hall as its centrepiece"
  },
  {
    cities: "Frankfurt – Bonn – Cologne – Amsterdam",
    hotel: "Hilton Amsterdam Airport Schiphol",
    image: "",
    visit:
      "The morning begins with a leisurely drive north-west from Frankfurt to Bonn, the capital of the former West Germany until reunification. The national government is now run from Berlin, but Bonn retains a rich history that is well worth exploring. Discover the city’s secrets on an orientation stroll through its streets, walking past highlights such as the Rococo-fronted town hall and Ludwig Van Beethoven Haus, a museum celebrating the life of the much-loved composer. Then it’s on to Cologne, where you’ll head inside the city’s glorious Gothic Cathedral, a UNESCO World Heritage Site. The rest of the afternoon is yours to explore Cologne further, to do a spot of local shopping or to simply relax with a suitably refreshing German brew.  After lunch the day is rounded off with a drive to the Netherlands."
  },
  {
    cities: "Amsterdam – Zaanse Schans – Amsterdam",
    hotel: "Hilton Amsterdam Airport Schiphol",
    image: "",
    visit:
      "A day of delights begins with a leisurely trip through the Dutch countryside, where you’ll get to sample at close quarters some of the things that the Netherlands is traditionally famous for: clogs, cheese and windmills. Call in at the hugely popular model town of Zaanse Schans. Next, you’ll head from the quiet countryside to the cosmopolitan city as your journey takes you back to Amsterdam. After visiting a well-known diamond factory, where you’ll see the unique cutting techniques that have been practised here since the 16th century, you can take an optional hour-long pre-dinner canal cruise, which is a great way to discover more about this unique European city.  After disembarking you’ll walk to one of the city’s grandest areas, Dam Square, where the Royal Palace is located and the Queen’s birthday celebrations take place. You’ll have photo opportunities here, free time for shopping or further sightseeing, and then round the day off with dinner"
  },
  {
    cities: "Amsterdam – Brussels – Paris",
    hotel: "Hotel Campanile Paris",
    image: "",
    visit:
      "After leaving Amsterdam in the morning you’ll head south across the border into Brussels, the Belgian capital and political centre of the European Union. On the way, the tour stops to see the distinctive Atomium monument, a cell-shaped structure of stainless steel spheres and tubes built for the 1958 World’s Fair. In the centre of Brussels itself an orientation tour will call in at the exquisite Grand Place, as well as seeing the famous playful Manneken Pis statue. After some free time, during which you can try some gourmandise Belgian delights.  Then from Brussels it’s south again across the French border and on to the bright lights of Paris."
  },
  {
    cities: "Paris – Versailles – Paris",
    hotel: "Hotel Campanile Paris",
    image: "",
    visit:
      "Paris is your oyster over the next two days as you enjoy guided tours around one of the world’s most celebrated cities. Your Parisian adventures get off to a spectacular start with a drive along the famous Champs Élysées to the Place de la Concorde which played such a key part in the French Revolution. You’ll also get to see the iconic Arc de Triumph too, the imposing monument that sits near the western end of the avenue and commemorates the fallen of the revolution and Napoleonic wars. You’ll take in another significant historical building next as you head to L’Hôtel National des Invalides, where Napoleon’s tomb is located, followed by a stop at the most legendary of all Paris’s icons: the Eiffel Tower.  You can either take time to explore the neighbourhood and have some lunch or scale the Eiffel Tower. Choice is yours. Finally, you’ll travel on the coach out through the Parisian suburbs to the splendid Palace of Versailles, the vast regal château that was the residence of the royal family until the start of the revolution in 1789. Today the palace is another popular Parisian attraction."
  },
  {
    cities: "Paris",
    hotel: "Hotel Campanile Paris",
    image: "",
    visit:
      "The second day of your Parisian experience begins with a visit to the Louvre, one of the world’s greatest art museums. Here you’ll set your eyes upon some of history’s most famous masterpieces, including the Venus de Milo, Winged Victory of Samothrace (also called Nike of Samothrace), and Leonardo da Vinci’s Mona Lisa. Opt for a guided gallery tour, which will enhance your experience and allow you to browse through hundreds of works in just a few hours. You can then take a leisurely cruise along the river Seine, a great sightseeing option that offers splendid views of iconic Parisian landmarks, including Notre-Dame Cathedral and Pont Alexandre III. After an exhilarating morning of walking the gallery corridors, replenish your energy levels with lunch in the museum before heading to the area surrounding the Palais Garnier, Paris’s Opera House. Afterwards, you have an option of having a French 4 course Dinner and Show experience or spend time shopping at the legendary department stores Galleries Lafayette."
  }
];

const redLine = [
  {
    cities: "Frankfurt – Prague",
    hotel: "Hotel Don Giovanni Prague",
    image: "",
    visit:
      "After boarding the luxury coach in Frankfurt, sit back and enjoy a scenic ride through some classic German country side en-route to the Czech Republic. Prague, one of Europe’s most ornate cities, is your first destination. We will arrive in the evening, ready to discover this charming capital city with its fairy-tale architecture, the following morning. "
  },
  {
    cities: "Prague – Bratislava",
    hotel: "Lindner Hotel Gallery Central Bratislava",
    image: "",
    visit:
      "Your Prague adventure begins with a spectacular walk along the Royal Route, following the traditional coronation path of the kings and queens of old Bohemia. You’ll start from the top of Castle Hill in the Hradcany district, famous for its views over the red-roofed old city, and then tour Prague Castle. The castle has been the historic seat of Bohemia royalty since the 9th century, as well as home to the nation’s presidents in recent times. Further exploration then heads off around the imposing gothic St. Vitus Cathedral, the Old Royal Palace, St. George’s Basilica and along Golden Lane, an ancient thoroughfare lined with some wonderful traditional buildings. Later we will stroll across the iconic Charles Bridge, which arches gracefully over the Vltava, and on through the winding alleys to the Old Town Square, where you can see the City Hall and one of Prague’s most well-known sights, the Astronomical Clock. After lunch in the square, our coach will make the scenic transfer from Prague to the hotel in or near the Slovakian capital, Bratislava."
  },
  {
    cities: "Bratislava – Budapest",
    hotel: "Mercure Budapest Buda",
    image: "",
    visit:
      "Wednesday sees you arrive in Hungary, the fourth country of the tour. Its capital, Budapest, is known as the Pearl of the Danube, and is essentially two different cities joined together: Buda on the west of the river, Pest on the east, each with its own distinct characteristics. One of the best ways of seeing this unique location is by taking a river cruise, which many people choose to do. After a morning of activity, you’ll relax over lunch at Buda Palace, and then have a chance to look at the exhibitions in the Budapest History Museum and Hungarian National Gallery, or do a spot of souvenir shopping. Next you’ll explore both sides of the city on a cultural and historic tour. Highlights on the Buda side of the Danube include the towered terrace of Fisherman’s Bastion, the medieval Matthias Church and a walk up to the summit of Gellért Hill for panoramic views. While over in Pest the sights include the expansive Heroes’ Square and Hungary’s dramatic riverside Parliament Building. In the evening, you can choose to round off an eventful day with an optional dinner in the heart of Budapest, where you can sample traditional dishes such as goose liver, goulash, duck leg and local wine, accompanied by Hungarian folkdance and music"
  },
  {
    cities: "Budapest – Vienna",
    hotel: "Ibis Wien Mariahilf",
    image: "",
    visit:
      "Today starts with a short journey to another of Europe’s grand capitals, Vienna, where you’ll get to explore the Austrian city’s resplendent palaces, striking churches and prestigious art museums.    Your Vienna adventure begins at one of the city’s most popular attractions, Schönbrunn Palace, the Rococo-style summer residence of the Habsburg dynasty, rulers of Europe and the Church for many decades. After lunch in this refined setting, you will take a driving tour past many grand, famous buildings, including the City Hall, the Austrian Parliament, Hofburg Palace and Heroes’ Square. In the afternoon, you’ll have some shopping time, before adding the Wiener Staatsoper (opera house) to your checklist of key Vienna buildings. Later, opt for dinner in the heart of the city or visit St. Stephen’s Cathedral, before taking a stroll in Stadtpark, which is known for its range of sculptures, including the famous gilded bronze statue of Johann Strauss II. In the evening, we recommend the option of attending a Viennese waltz concert, which will allow you the unforgettable experience of hearing the music of Mozart and Strauss in the place where it was composed"
  },
  {
    cities: "Vienna – Mondsee – Munich",
    hotel: "Hotel NH Munich City Sud",
    image: "",
    visit:
      "From Vienna it’s on to another Austrian gem, Mondsee. Mondsee is a town located on the shore of the Lake Mondsee. The town is home to the historic medieval Mondsee Abbey. The cloister church was used for the site of the wedding in The Sound of Music. After lunch group will continue to across the German border to Munich. After arriving Munich, you'll visit Marienplatz and New Town Hall. Marienplatzis a central square in the city centre of Munich since 1158. The New Town Hall is at the northern part of Marienplatz. It hosts the city government including the city council, offices of the mayors and part of the administration since 1874. Or you can enjoy a German beer in one of the beergarden before going to the hotel."
  },
  {
    cities: "Munich – Mount Titlis – Lucerne – Zürich",
    hotel: "Ibis Airport Hotel Zurich",
    image: "",
    visit:
      "You’ll leave the big cities behind on Saturday morning and head for one of the world’s most famous mountain ranges – the Swiss Alps. The first destination is Engelberg, the stunning Swiss resort.  From here you can opt to board a cable car that takes you to the summit of the impressive Mount Titlis. To reach to the top of the permanently snow-covered Mt. Titlis is by a combination of gondolas over 3 stages. You’ll ascend the last stage by the world’s first revolving gondola the Titlis Rotair, that delivers spectacular views of the valleys, glaciers, lakes and forests below, and 360˚ vistas of the surrounding mountains.  At the summit the sun terrace is the perfect place to pause and appreciate the breath-taking panoramas.  There’s a 150-metre ice cavern through the core of a glacier to explore at the top.  Other highlights include walking across Europe’s highest suspension bridge for more phenomenal views from Mt. Titlis. You’ll come down from the hills to the lakeside for your next stop. Lucerne is a picturesque city of bridges and towers located in what many people believe to be the “true” Switzerland – picture-postcard Mountains, lakes, cowbells, Alpine villages and meadows full of edelweiss flowers. Here you will have time to wander through the charming streets, and see the famous Lion Monument, which Mark Twain once described as “the most mournful and moving piece of stone in the world”. This is a great place to get souvenirs like Swiss watches and fine chocolates, before travelling to the overnight stop of Zurich."
  },
  {
    cities: "Zürich – Rhein Falls – Titisee – Frankfurt",
    hotel: "Hotel NH Frankfurt airport West",
    image: "",
    visit:
      "The final day of the tour begins in Zurich, a city with a reputation as a leading global financial centre. There is chance for a picture stop at the impressive Lake Zurich, before moving on to Rhine Falls, Europe’s biggest waterfall. Next you’ll cross back into Germany and the Black Forest, the ancient fir-covered mountain range, which is famous for its creepy folklore and mythical tales. Here you will see the beautiful lake Titisee, where you can stop at one of the many lakeside cafés to enjoy some of the region’s best Black Forest cherry gateaux. Cuckoo clocks are made in Titisee, making this the ideal place to pick up a few souvenirs from the local shops and you’ll also get to see a demonstration of how these magical mechanisms work. Finally, you’ll head back to Frankfurt, where it will be time to say goodbye to some members of our group, while others opt to stay another night in this major German city before switching to the Blue Line tour the next day. "
  }
];

const departureCities = [
  {
    city: "Paris",
    flag: "../public/images/flags/france-flag.jpg",
    time: "09.00",
    geolocation: "48.856788, 2.351077"
  },
  {
    city: "Luxembourg",
    flag: "../public/images/flags/luxembourg-flag.jpg",
    time: "09.00",
    geolocation: "49.612151, 6.137464"
  },
  {
    city: "Frankfurt",
    flag: "../public/images/flags/german-flag.jpg",
    time: "09.00",
    geolocation: "50.106171, 8.664951"
  },
  {
    city: "Amsterdam",
    flag: "../public/images/flags/netherlands-flag.jpg",
    time: "09.00",
    geolocation: "52.378522, 4.897025"
  },
  {
    city: "Prague",
    flag: "../public/images/flags/czech-flag.jpg",
    time: "09.00",
    geolocation: "50.087113, 14.417726"
  },
  {
    city: "Budapest",
    flag: "../public/images/flags/hungary-flag.jpg",
    time: "09.00",
    geolocation: "47.503823, 19.044939"
  },
  {
    city: "Vienna",
    flag: "../public/images/flags/austria-flag.jpg",
    time: "09.00",
    geolocation: "48.209819, 16.360785"
  },
  {
    city: "Zurich",
    flag: "../public/images/flags/switzerland-flag.jpg",
    time: "09.00",
    geolocation: "47.366122, 8.541175"
  }
];
