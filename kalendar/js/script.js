// JavaScript Document
        // Počty dní v jednotlivých měsících
        // Pro jednoduchost má únor vždy 28 dní
        DayCount = [31, 28, 31, 30, 31, 30,
                    31, 31, 30, 31, 30, 31];
        // Názvy dní
        Days = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

        // Názvy měsíců
        Months = ["Leden", "Únor", "Březen", "Duben",
                  "Květen", "Červen", "Červenec", "Srpen",
                  "Září", "Říjen", "Listopad", "Prosinec"];

        // Funkce pro generování kalendáře
        function GenerateCal (Today){
          // Počet dní v měsíci
          var DC = DayCount[Today.getMonth()];

          // Hlavička s názvem měsíce a rokem
          Str = '<TABLE Cols="7" Border="2" Rules="All">';
          Str += '<TR><TH Colspan="7"><B>';
          Str += Months[Today.getMonth()]+' '+
                 Today.getFullYear();
          Str += '</B></TR>';
          Str += '<TR>';

          // Řádek obsahující názvy dní v týdnu
          for (i=0; i<Days.length; i++){
            Str += '<TD><B>';
            if (i>4) Str += '<FONT Color="Red">';
            Str += Days[i];
            if (i>4) Str += '</FONT>';
            Str += '</B></TD>';
          }
          Str += '</TR>';

          // Zjištění pozice prvního dne v měsíci
          // Neboli v kterém sloupci bude jednička
          var PomDay = new Date (Today);
          PomDay.setDate (1);
          FirstDay = (6 + PomDay.getDay()) % 7;

          // Prazdné buňky před prvním dnem
          Str += '<TR>';
          for (i=0; i<FirstDay; i++){
            Str += '<TD> </TD>';
          }

          // Jednotlivé dny měsíce
          Col = FirstDay;
          for (i=1; i<=DC; i++){
            if (Col>6){
              // Přechod na nový řádek tabulky
              Str += '</TR><TR>';
              Col = 0;
            }
            Str += '<TD>';
            if (Col>4) Str += '<FONT Color="Red">';
            if (i == Today.getDate()) Str += '<B>';   //aktualni den tucne
            Str += i;
            if (i == Today.getDay()) Str += '</B>';
            if (i>4) Str += '</FONT>';
            Str += '</TD>';
            Col++;
          }

          // Prázdné buňky po posledním dni měsíce
          for (i=0; i<=(6-Col); i++){
            Str += '<TD> </TD>';
          }
          Str += '</TR>';

          // Patička (uzavření tabulky) a název
          // aktuálního dne
          Str += '<TR><TD Colspan="7"><I><CENTER>';
          Str += Days[(6 + Today.getDay()) % 7]+' '+
                 Today.getDate()+'. '+
                 Months[Today.getMonth()]+' '+
                 Today.getFullYear();
          Str += '</CENTER></I></TD></TR>';
          Str += '</TABLE>';
            


          // Zapsání kalendáře do stránky
          document.write (Str);
        }



        // Hlavní funkce generující kalendář
        // pro aktuální den
        function Generate(){
          GenerateCal(new Date());
        }
      
        

        // Číslo týdne

        function y2k(number) { return (number < 1000) ? number + 1900 : number; }

        function getWeek(year,month,day) {
          var when = new Date(year,month,day);
          var newYear = new Date(year,0,1);
          var modDay = newYear.getDay();
          if (modDay == 0) modDay=6; else modDay--;

          var daynum = ((Date.UTC(y2k(year),when.getMonth(),when.getDate(),0,0,0) - Date.UTC(y2k(year),0,1,0,0,0)) /1000/60/60/24) + 1;

          if (modDay < 4 ) {
            var weeknum = Math.floor((daynum+modDay-1)/7)+1;
          } else {
            var weeknum = Math.floor((daynum+modDay-1)/7);
            if (weeknum == 0) {
              year--;
              var prevNewYear = new Date(year,0,1);
              var prevmodDay = prevNewYear.getDay();
              if (prevmodDay == 0) prevmodDay = 6; else prevmodDay--;
              if (prevmodDay < 4) weeknum = 53; else weeknum = 52;
            }
          }

          return + weeknum;
        }

        var now = new Date();
        document.write('Číslo týdne = ' +
        getWeek(y2k(now.getYear()),now.getMonth(),now.getDate()));


  