# Sportly - Käyttöliittymän yleiskuvaus
Sportly on sovellus, jonka ideana on tutustuttaa uusiin urheilulajeihin unohtamatta oman kunnon ja terveyden seuraamista. Sportly on jaettu kolmeen eri osioon: Activity, Health ja Sport. Activity-osiossa käyttäjä voi seurata omaa liikkumistaan visuaalisesti pylväsdiagrammilla. Tarkoitus on, että käyttäjä käy kirjaamassa joka päivältä liikunnan määrän ja viikon lopulla voi katsoa, miten on liikkunut viikon aikana. Health-osiossa käyttäjä voi laskea oman painoindeksinsä ja saa tuloksestaan palautetta. Tässä osiossa voi myös laskea, liikkuuko tarpeeksi viikon aikana. Sport-osiossa käyttäjä voi etsiä tietoa eri urheilulajien hyödyistä ja katsoa kartalta myös näiden urheilulajien seuroja Etelä-Suomessa. Tämän osion tarkoituksena on antaa tietoa ja saada kokeilemaan uutta urheilulajia.

# Tekniset ratkaisut
Käyttöliittymässä on yhteensä kahdeksan eri tiedostoa: index.html, kaksi JSON-tiedostoa, yksi PHP-tiedosto, kolme JavaScript-tiedostoa ja CSS-tiedosto. JSON-tiedostojen tiedot on itse etsittyjä ja koottuja ja myös PHP-tiedostoon on muokattu sopivat arvot. Käyttöliittymän toiminnallisuuden rakentamisessa on käytetty puhdasta JavaScriptiä sekä Reactia ja siitä on tehty mahdollisimman monipuolinen laittamalla siihen kartta, diagrammi, laskentaa ja tiedonhaku-komponentti.

Projektiin sisällytettyjä teknisiä ratkaisuja: chart.js pylväsdiagrammi, local storage, React, jQuery autocomplete plugin ja hieman muuta toiminnallisuutta myös jQuerylla, tietoa haetaan sekä PHP-tiedostosta että JSON-tiedostoista Ajaxilla ja sovelluksessa on leaflet/mapbox kartta, jossa itsessään on hieman toiminnallisuutta. Eri teknisten asioiden sisällyttämisen lisäksi sovellus on responsiivinen ja saavutettavuutta on paranneltu.
![documentationPicture1](palautus/rakenne.PNG "Documentation picture of the structure")
![documentationPicture2](palautus/activityOsio.PNG "Documentation picture of activity section")
![documentationPicture3](palautus/healthOsio.PNG "Documentation picture of health section")
![documentationPicture4](palautus/sportOsio.PNG "Documentation picture of sport section")

