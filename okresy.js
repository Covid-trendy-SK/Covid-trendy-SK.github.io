// zoznam okresov a ich id podla https://cdn.covid.chat/districts.v2.js
// pocty ludi v okresoch k 31.12.2019 podla https://sk.wikipedia.org/wiki/Zoznam_okresov_na_Slovensku

const okresy = {
  "1":
  {
    "title": "Bánovce nad Bebravou",
    "population": 36184
  },
  "2":
  {
    "title": "Banská Bystrica",
    "population": 110716
  },
  "3":
  {
    "title": "Banská Štiavnica",
    "population": 16069
  },
  "4":
  {
    "title": "Bardejov",
    "population": 77765
  },
  "5":
  {
    "title": "Bratislava",
    "population": 437726
  },
/*  "5":
  {
    "title": "Bratislava I",
    "population": 41893
  },
  "6":
  {
    "title": "Bratislava II",
    "population": 116223
  },
  "7":
  {
    "title": "Bratislava III",
    "population": 69479
  },
  "8":
  {
    "title": "Bratislava IV",
    "population": 97792
  },
  "9":
  {
    "title": "Bratislava V",
    "population": 112339
  },*/
  "10":
  {
    "title": "Brezno",
    "population": 61269
  },
  "11":
  {
    "title": "Bytča",
    "population": 30965
  },
  "12":
  {
    "title": "Čadca",
    "population": 89952
  },
  "13":
  {
    "title": "Detva",
    "population": 31967
  },
  "14":
  {
    "title": "Dolný Kubín",
    "population": 39417
  },
  "15":
  {
    "title": "Dunajská Streda",
    "population": 122825
  },
  "16":
  {
    "title": "Galanta",
    "population": 94147
  },
  "17":
  {
    "title": "Gelnica",
    "population": 31894
  },
  "18":
  {
    "title": "Hlohovec",
    "population": 44943
  },
  "19":
  {
    "title": "Humenné",
    "population": 61773
  },
  "20":
  {
    "title": "Ilava",
    "population": 59075
  },
  "21":
  {
    "title": "Kežmarok",
    "population": 75533
  },
  "22":
  {
    "title": "Komárno",
    "population": 101500
  },
  "27":
  {
    "title": "Košice - okolie",
    "population": 130132
  },
  "23":
  {
    "title": "Košice",
    "population": 238593
  },
/*  "23":
  {
    "title": "Košice I",
    "population": 67484
  },
  "24":
  {
    "title": "Košice II",
    "population": 82278
  },
  "25":
  {
    "title": "Košice III",
    "population": 28687
  },
  "26":
  {
    "title": "Košice IV",
    "population": 60144
  },*/
  "28":
  {
    "title": "Krupina",
    "population": 22139
  },
  "29":
  {
    "title": "Kysucké Nové Mesto",
    "population": 32890
  },
  "30":
  {
    "title": "Levice",
    "population": 110523
  },
  "31":
  {
    "title": "Levoča",
    "population": 33708
  },
  "32":
  {
    "title": "Liptovský Mikuláš",
    "population": 72216
  },
  "33":
  {
    "title": "Lučenec",
    "population": 73342
  },
  "34":
  {
    "title": "Malacky",
    "population": 74661
  },
  "35":
  {
    "title": "Martin",
    "population": 96171
  },
  "36":
  {
    "title": "Medzilaborce",
    "population": 11787
  },
  "37":
  {
    "title": "Michalovce",
    "population": 110748
  },
  "38":
  {
    "title": "Myjava",
    "population": 26256
  },
  "39":
  {
    "title": "Námestovo",
    "population": 62879
  },
  "40":
  {
    "title": "Nitra",
    "population": 161679
  },
  "41":
  {
    "title": "Nové Mesto nad Váhom",
    "population": 62575
  },
  "42":
  {
    "title": "Nové Zámky",
    "population": 138577
  },
  "43":
  {
    "title": "Partizánske",
    "population": 45489
  },
  "44":
  {
    "title": "Pezinok",
    "population": 65593
  },
  "45":
  {
    "title": "Piešťany",
    "population": 62726
  },
  "46":
  {
    "title": "Poltár",
    "population": 21397
  },
  "47":
  {
    "title": "Poprad",
    "population": 104990
  },
  "48":
  {
    "title": "Považská Bystrica",
    "population": 62351
  },
  "49":
  {
    "title": "Prešov",
    "population": 176181
  },
  "50":
  {
    "title": "Prievidza",
    "population": 133721
  },
  "51":
  {
    "title": "Púchov",
    "population": 44248
  },
  "52":
  {
    "title": "Revúca",
    "population": 39537
  },
  "53":
  {
    "title": "Rimavská Sobota",
    "population": 84048
  },
  "54":
  {
    "title": "Rožňava",
    "population": 62131
  },
  "55":
  {
    "title": "Ružomberok",
    "population": 56657
  },
  "56":
  {
    "title": "Sabinov",
    "population": 60659
  },
  "66":
  {
    "title": "Šaľa",
    "population": 51568
  },
  "57":
  {
    "title": "Senec",
    "population": 91612
  },
  "58":
  {
    "title": "Senica",
    "population": 60419
  },
  "59":
  {
    "title": "Skalica",
    "population": 47078
  },
  "60":
  {
    "title": "Snina",
    "population": 36123
  },
  "61":
  {
    "title": "Sobrance",
    "population": 22789
  },
  "62":
  {
    "title": "Spišská Nová Ves",
    "population": 99878
  },
  "63":
  {
    "title": "Stará Ľubovňa",
    "population": 53958
  },
  "64":
  {
    "title": "Stropkov",
    "population": 20442
  },
  "65":
  {
    "title": "Svidník",
    "population": 32484
  },
  "67":
  {
    "title": "Topoľčany",
    "population": 69947
  },
  "68":
  {
    "title": "Trebišov",
    "population": 105295
  },
  "69":
  {
    "title": "Trenčín",
    "population": 114670
  },
  "70":
  {
    "title": "Trnava",
    "population": 132779
  },
  "71":
  {
    "title": "Turčianske Teplice",
    "population": 15880
  },
  "72":
  {
    "title": "Tvrdošín",
    "population": 36203
  },
  "73":
  {
    "title": "Veľký Krtíš",
    "population": 43263
  },
  "74":
  {
    "title": "Vranov nad Topľou",
    "population": 80841
  },
  "77":
  {
    "title": "Žarnovica",
    "population": 26112
  },
  "78":
  {
    "title": "Žiar nad Hronom",
    "population": 46732
  },
  "79":
  {
    "title": "Žilina",
    "population": 158279
  },
  "75":
  {
    "title": "Zlaté Moravce",
    "population": 40512
  },
  "76":
  {
    "title": "Zvolen",
    "population": 68685
  }
};
