Google docs
https://docs.google.com/document/d/1SlmwygZeIxpzYUKFIcJ0AbHHdCMPtC19pZlxKdtQlx0/edit?usp=sharing

Grundlæggende teknologier
HTML – Til struktur
CSS – Til styling
JavaScript – Til logikken
 
Tech Stack
frameworks
 
ReactJS
For mig var der to muligheder, enden at skrive i valilla javascript eller bruge frameworket/libary ReactJS. Jeg valgte at bruge react da det stiller en masse forskellige ting til rådighed som for eksempel stort community, hvilket gør det nemt at finde problemløsninger, forskellige pakker, og derudover er det super nemt at genanvende forskellige komponenter så jeg slipper for at gentage kode.
 
Derudover kan man med react lave en single page applikation hvilket vil sige at man ikke er nødt til at genindlæse en helt ny html side hver gang man skifter side, hvilket gør din applikation hurtigere. 

Tailwind
Jeg har valgt at bruge tailwind som css framework da jeg syntes det er en nem og hurtig måde at få stylet sine komponenter på. I modsætning til sass eller normalt css styler man direkte på html tags med deres inline styling hvilket jeg også syntes det er det nemt og overskueligt så man ikke behøver at have en masse forskellige style sheets med en masse forskellige classes.
Librarys  
 
Framer-motion
Rent praktisk ville det være lidt overkill at bruge et helt library til så lidt animation som der er i dette projekt, i modsætning til bare at bruge lidt css. Men jeg har valgt at bruge det for at demonstrere at det er noget jeg kan og fordi at det er nemt og hurtigt at sætte op, til at lave nogle gode animationer.
 
Packages  
 
React-router
React router gør det muligt at skifte sider ved at bytte de viste komponenter ud hvilket gør det til en single page applikation, hvilket derved gør applikationen hurtigere da man ikke genindlæser et helt nyt html dokument hver gang man skifter side, som man formentligt ville gøre hvis man brugte almindelige anchor tags.
 
Axios
Jeg har valgt at bruge axios til mine HTTP requests, frem for bare at lave et normalt fetch, da formateringen til json er indbygget i det. Derfor ikke behøver at skrive helt lige så meget kode når jeg for eksempel henter data.
 
Yup
Jeg har valgt at bruge yup, da man med yup laver et schema som nemt kan blive genbrugt.
 
Valgfri opgave A, Automatiseret Deployment
 
Projektet er blevet deployed på vercel. Vercel kan automatisk opdatere din side når man pusher til main. For mit vedkommende kræver det bare at jeg pusher min kode til github, går ind i min forkede version i mit repository og der synkroniserer den med det andet repsitory
 
Jeg har valgt at bruge vercel til min deployment, frem for netlify da jeg før har haft problemer med at netlify ikke kunne deploy hvis der var warnings. Det er klart mest optimalt ikke at have warnings i ens projekt. Men jeg valgte at gå med noget der virker selvom man har en variabel man ikke nåede at få brugt, til en tidspresset opgave.



Projekt perspektivering
 
Hvis jeg skulle skalere dette projekt, ville jeg sige at en sign up formular ville være en af de vigtigere ting af få lavet. I nuværende form kan nye brugere ikke registrere sig selv, hvilket jo ikke er så godt for forretningen og deres mål om at få flere tilmeldinger til deres danse aktiviteter. Men dette var også en af grundene til at jeg valgte at bruge Yup, da man nemt ville kunne genbruge schemaet fra log ind, til at lave en sign up formular.
 
Hvis jeg skulle forbedre min applikation, ville jeg sørge for at den var mere brugervenlig og gav lidt bedre responses. Det ville jeg gøre ved at give beskeder hvis en bruger ikke er meldt til nogle aktiviteter, ville der stå noget vedrørende det i stedet for bare at være tom.


Packages  

React-router
React router gør det muligt at skifte sider ved at bytte de viste komponenter ud hvilket gør det til en single page applikation, hvilket derved gør applikationen hurtigere da man ikke genindlæser et helt nyt html dokument hver gang man skifter side, som man formentligt ville gøre hvis man brugte almindelige anchor tags.

Axios
Jeg har valgt at bruge axios til mine HTTP requests, frem for bare at lave et normalt fetch, da formateringen til json er indbygget i det. Derfor ikke behøver at skrive helt lige så meget kode når jeg for eksempel henter data.

Yup
Jeg har valgt at bruge yup, da man med yup laver et schema som nemt kan blive genbrugt. 


Valgfri opgave A Continuous Deployment

Projektet er blevet deployed på vercel. Vercel kan automatisk opdatere din side når man pusher til main. For mit vedkommende kræver det bare at jeg pusher min kode til github, går ind i min forkede version i mit repository og der synkroniserer den med det andet repsitory

Jeg har valgt at bruge vercel til min deployment, frem for netlify da jeg før har haft problemer med at netlify ikke kunne deploy hvis der var warnings. Det er klart mest optimalt ikke at have warnings i ens projekt. Men jeg valgte at gå med noget der virker selvom man har en variabel man ikke nåede at få brugt, til en tidspresset opgave.



Projekt perspektivering

Hvis jeg skulle skalere dette projekt, ville jeg sige at en sign up formular ville være en af de vigtigere ting af få lavet. I nuværende form kan nye brugere ikke registrere sig selv, hvilket jo ikke er så godt for forretningen og deres mål om at få flere tilmeldinger til deres danse aktiviteter. Men dette var også en af grundene til at jeg valgte at bruge Yup, da man nemt ville kunne genbruge schemaet fra log ind, til at lave en sign up formular. 

Hvis jeg skulle forbedre min applikation, ville jeg sørge for at den var mere brugervenlig og gav lidt bedre responses. Det ville jeg gøre ved at give beskeder hvis en bruger ikke er meldt til nogle aktiviteter, ville der stå noget vedrørende det i stedet for bare at være tom.

