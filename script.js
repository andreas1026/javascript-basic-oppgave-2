/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

function oddEllerPartall(num) {
  if (num % 2 === 0) {
    return "Partall";
  }
  return "Oddetall";
}

console.log(oddEllerPartall(4));
console.log(oddEllerPartall(7));
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

const BIGTEXT = (text) => text.toUpperCase() + "!";

console.log(BIGTEXT("Dette er kult"));
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et name (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt name)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt name)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt name)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt name)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function greeting(name, time) {
  if (time === undefined) {
    return "Ingen gyldig tid gitt";
  }

  if (time < 0 || time > 23) {
    return "Ugyldig tid";
  }

  if (time <= 5) {
    return `God natt ${name}`;
  } else if (time <= 11) {
    return `God morgen ${name}`;
  } else if (time <= 17) {
    return `God dag ${name}`;
  } else {
    return `God kveld ${name}`;
  }
}

console.log(greeting("Ole", 3));
console.log(greeting("Dole", 9));
console.log(greeting("Doffen", 14));
console.log(greeting("Per", 20));
console.log(greeting("Pål", 25));
console.log(greeting("Ola"));
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

function removeFirstAndLast(array) {
  array.shift();
  array.pop();
  return array;
}

console.log(removeFirstAndLast(["Rød", "Grønn", "Blå", "Gul"]));
console.log(removeFirstAndLast(["En", "To", "Tre", "Fire", "Fem", "Seks"]));

const removeLastAndFirst = (array) => array.slice(1, -1);

console.log(removeLastAndFirst(["Rød", "Grønn", "Blå", "Gul"]));
console.log(removeLastAndFirst(["En", "To", "Tre", "Fire", "Fem", "Seks"]));
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

function updateText(text) {
  return text.replace("vanskelig", "gøy").trim();
}

console.log(updateText("  Javascript er vanskelig   "));
console.log(updateText(" Det er vanskelig å bruke metoder "));
console.log(updateText("   vanskelig        "));
/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

items.shift();
console.log(items);

items.splice(items.indexOf("Viskelær"), 1, "Linjal");
console.log(items);

items.splice(0, 2, "Markeringspenn");
console.log(items);
console.log(items.join(" | "));
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/
// Fikk litt hjelp av GPT for å skjønne denne. Men jeg forsår hva koden gjør, så det går bra.
const sunglasses = (value) => {
  if (typeof value === "string") {
    return `😎${value}😎`;
  } else if (typeof value === "number") {
    return `😎${String(value * 2)}`;
  } else if (typeof value === "boolean") {
    return value ? "😎Ja😎" : "😎Slapp av😎";
  } else {
    return "😎Kun primitive verdier😎";
  }
};

console.log(sunglasses("Hei"));
console.log(sunglasses(5));
console.log(sunglasses(true));
console.log(sunglasses(false));
console.log(sunglasses([1, 2]));
