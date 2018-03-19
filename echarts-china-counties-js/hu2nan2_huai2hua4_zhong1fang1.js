(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('中方县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"431221","properties":{"name":"中方县","cp":[109.944711,27.440138],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@CC@C@CBAD@D@@@@CAAA@@AC@A@MFC@C@AACB@B@BAB@@A@AAAAAC@@A@GFCBABC@CAA@C@AC@@A@ABCBEFGBA@EBCB@@@BAB@BELCFAH@BCJAB@BA@AAC@EFGD@BABC@C@CACEECCACC@ACAA@@CF@@ABAA@@AC@CBCBC@C@CCA@@ACA@@E@@@AAAAEG@FADFLC@A@GACAA@AA@BC@GBA@A@AB@FADA@E@E@GACDBF@D@BDDHDHFBDBH@D@BBJBFDFBBFDFDDDDBHLDFDBDDJFJFFDRHBBBB@DABADA@@B@@BDF@FBBBLBFBF@LBD@B@@A@A@A@ADAHAFADABEBEFCDAB@D@D@DBBB@H@FBFBDFBBBB@FDBFBH@D@FA@CB@DAHCFIP@B@BBDDB@FBJDRBF@D@@@BTALAD@F@DDHBLJJDBB@@@BBF@BDBDABADKBADAJ@DBDBBBDD@DDHFFFDDDBBFD@DBJD@B@@@B@DBDBDBBADAB@DBH@H@DAB@@BFABALAJGDFB@H@FBHA`CFQB@BAFEDAB@AA@A@@BCBCB@@@BBB@BBBBBBBB@BBBDBB@DBBA@CCBBC@A@AAAABCBA@@A@@@A@@@ABBB@@A@@@ACCA@BADB@BB@ABBBB@@@D@@AAC@A@A@CBAB@DA@A@@IAICMAHADD@CDB@BB@FAHBDBAEBCECAAD@DB@@ACC@CCGAEGGBGBGEIAE@ACBADABA@ABCD@ABD@D@@CD@DABA@@@C@A@AAA@@BC@C@AAA@CB@DA@AAA@ACA@AAA@A@CH@BA@CBCBCDCFCBC@@@@@ECCAC@ACG@@@ABCBADADABI@A@ICCBCAA@AAAC@CFABC@A@CCC@C@C@AAAA@AA@CAA@CCAACCB@@A@AA@AAEEA@AAGAECACAAACBE@AA@C@CAC@CAEEAAC@AAB@DCBA@AC@ABADABA@@A@C@ACCB@LEFAD@F@B@BA@A@C@ABABA@GACBC@A@A@@@@AAGACAA@@C@AAA@AC@A@AAAAECCC@@A@GDCBAAGAG@C@GCA@AB@BABCAAAA@AAA@CFCBA@CBC@A@ABA@AD@BADABG@ABAB@BA@C@A@AAA@AAA@AB@BADMDEBAAAAECC@KA"],["@@AA@ABAAAAAA@@B@B@@C@C@C@IAC@A@C@A@AAAAACCAAAAAAAAAE@A@AB@B@FBJ@@CBAD@@BBB@B@BB@BC@A@CCA@A@@B@B@BFDFDB@BH@DADAD@H@B@BADAD@BCBCBA@CBADABCDE@CCC@C@EB@BABF@BB@BGBC@@@A@@B@B@BBBB@DBB@BB@B@D@BDBH@@B@B@B@BABEACB@D@DBDBBADGHGFE@C@AA@ABADCBA@CA@AC@AAAC@I@E@EDABBBB@D@JABB@BABABADCBE@C@EDBF@BGBAAADDDCDEEABFFABA@ADEAEB@@AFBD@FCDADCCABGCABEAADC@E@ABBBBBDB@@BADABADBDB@B@BEBCBAB@BDDLJ@F@JIPIL@HBLDPFLBF@F@FAFCDCBIAG@CBCFCLCBIDGLGHEH@F@FAFCD@B@DFJEHCDCDADABIHGDGB@@OCYIGAC@C@EBCBEJCF@DBDDF`JLFHH@@FJBBHRJHJFX^DDDJDHADEFCF@F@FBDFBFBBDBDA@@FEJPBD@DBDD@BDDFB@@FBD@FEB@BEDEBCJAPCJAPAJAD@D@V@LANBB@H@JBPAXG@@NCJAZINGFC@@TKXKNIPEHEBA@CFAD@HBHDFDDBHBPBF@D@JBTALB@@BCBAD@FADBB@DBD@FDD@DBFAHEHEFADCBC@ECGGCAEAE@@@@@E@I@A@@@G@@@_@ABABABA@CBABAD@FCDABA@GBEBA@ABA@@BA@A@AAACAEACACA@CBAHGDABC@AA@CA@@AEAGACAC@C@@F@FBFAHCHADABBDHBD@DD@F@DAB@BBB@F@BABCBCB@BBBBBBBADCBA@ABBD@BABADCDAFBD@DBB@B@B@BAF@N@D@BBDF@@BH@DDFFDF@H@@ABABA@@AAAA@A@GBAB@F@B@DBD@HEB@BBBB@DDFBDBBFDJLBFFCD@DAB@@A@ABAFABAAAIKAC@ABABALEDA@A@AD@BBB@@BAB@B@BB@B@BBBB@DCD@BB@@@B@@AD@DAD@BB@@B@AC@IAAC@A@C@@A@ABCDCDEBABC@EAEAAAC@AACBC@GACAICMIKGMKK@@AAIEGG@@EGCKCIAM@CBK@M@C@CDKDK@AFQBA@@DK@EAC@A@GACAEEIIGICEAKEECIFC@CAA@GHEFGLCD@BEHIFI@CC@IAI@A@EAC@AEACAEAGAKAA@SEEBGBA@EDKDIAA@EAG@E@G@EBEDAB@@@B@@CHAFAHAD@BEBE@E@E@A@A@CDCB@BADEDABA@A@AE@AAA@@ACAC@A@AB@BA@AAAAA@@@AC@A@EB@B@BAB@BC@C@E@@D@BABA@A@AAEICAAB@BADABA@C@CAAAACBKAACAG@C@CAAAA@ABADABC@GAAAA@A@ADABABABCDCFA@A@AA@CAACG@AAB@BABC@G@AA@C@A@@AAE@A@AA@CBAAA@AAA@ABACGAAA@CA@B@B@BABA@CCA@@B@BA@@@AC@A"]],"encodeOffsets":[[[112540,27939]],[[112845,28065]]]}}],"UTF8Encoding":true});}));