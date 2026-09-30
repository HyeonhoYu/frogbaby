/* Frog Baby story data: shared by the movie (index.html) and the recording studio (record/). */
const UI = {
  en:{tag:"Ball State's little touch of luck", sub:"Ball State's little touch of luck", start:"Meet Frog Baby", startP:"A short animated story about a real statue at Ball State University.", go:"Watch the story", prev:"Back", next:"Next", play:"Play", pause:"Pause", von:"Narration on", voff:"Narration off", quiz:"Take the quiz", replay:"Watch again", q:"Question", of:"of", right:"That's right!", wrong:"Not quite. Try again!", qnext:"Next question", done:"Finish", score:"You did it! Frog Baby is proud of you.", close:"Back to the story", src:"Story facts come from The Ball State Daily News, Ball Bearings magazine, the Clio, Wikipedia, and the Wabash College Elston Collection blog. The character art is a playful illustration, not an exact copy of the bronze statue."},
  ko:{tag:"볼스테이트의 작은 행운", sub:"볼스테이트의 작은 행운", start:"프로그 베이비를 만나요", startP:"볼스테이트 대학교에 있는 진짜 조각상에 대한 짧은 애니메이션 이야기예요.", go:"이야기 보기", prev:"이전", next:"다음", play:"재생", pause:"일시정지", von:"소리 켜짐", voff:"소리 꺼짐", quiz:"퀴즈 풀기", replay:"다시 보기", q:"문제", of:"/", right:"정답이에요!", wrong:"아쉬워요. 다시 골라 보세요!", qnext:"다음 문제", done:"끝내기", score:"잘했어요! 프로그 베이비가 자랑스러워해요.", close:"이야기로 돌아가기", src:"이야기 내용은 볼스테이트 데일리 뉴스, Ball Bearings 매거진, Clio, 위키백과, 워배시 칼리지 엘스턴 컬렉션 블로그 자료를 바탕으로 했어요. 캐릭터 그림은 실제 청동 조각상을 그대로 옮긴 것이 아니라 귀엽게 표현한 일러스트예요."}
};

const SCENES = [
  {l:["lily","sparkle"], mode:"color", title:true,
   en:"This is the story of Frog Baby, a little statue with a big smile at Ball State University.",
   ko:"볼스테이트 대학교에는 커다란 미소를 가진 작은 조각상이 살고 있어요. 이름은 프로그 베이비예요."},
  {l:["studio"], mode:"bronze", badge:{en:"Long ago",ko:"아주 오래전"},
   en:"Long ago, an artist named Edith Barretto Parsons made a bronze statue of a giggling girl holding two frogs. She often sculpted children holding little animals.",
   ko:"아주 오래전, 에디스 바레토 파슨스라는 조각가가 개구리 두 마리를 들고 까르르 웃는 여자아이를 청동으로 만들었어요. 파슨스는 작은 동물을 안은 아이들을 자주 조각했답니다."},
  {l:["museum"], mode:"bronze", badge:{en:"1937",ko:"1937년"},
   en:"In 1937, Frank C. Ball gave Frog Baby to Ball State. She lived inside the university's art museum.",
   ko:"1937년, 프랭크 C. 볼이 프로그 베이비를 볼스테이트에 선물했어요. 프로그 베이비는 대학 미술관 안에서 지냈어요."},
  {l:["museum","hands","sparkle"], mode:"bronze", nose:"shiny", badge:{en:"Exam time",ko:"시험 기간"},
   en:"When exams came, students visited Frog Baby and rubbed her nose for good luck. Rub, rub, rub!",
   ko:"시험 기간이 되면 학생들이 찾아와 행운을 빌며 프로그 베이비의 코를 문질렀어요. 쓱싹쓱싹!"},
  {l:["museum"], mode:"bronze", nose:"worn", badge:{en:"Years later",ko:"몇 년 뒤"},
   en:"After years and years of rubbing, her bronze nose wore down to a tiny nub. Poor Frog Baby needed a rest.",
   ko:"오랫동안 너무 많이 문지른 나머지, 청동 코가 아주 작게 닳아 버렸어요. 프로그 베이비에게는 휴식이 필요했어요."},
  {l:["campus","fountain","burst","shine"], mode:"bronze", badge:{en:"1993",ko:"1993년"},
   en:"In 1993, Frog Baby was fixed up and moved outside to a brand new fountain near Bracken Library.",
   ko:"1993년, 프로그 베이비는 깨끗하게 고쳐져서 브래큰 도서관 앞의 새 분수로 이사했어요."},
  {l:["campus","fountain"], mode:"bronze", badge:{en:"The fountain",ko:"분수"},
   en:"Little bronze frogs sit around the fountain and spray water. Now Frog Baby has lots of frog friends!",
   ko:"분수 가장자리에는 작은 청동 개구리들이 앉아서 물을 뿜어요. 이제 프로그 베이비에게 개구리 친구가 많이 생겼어요!"},
  {l:["campus","fountain","snow"], mode:"bronze", acc:["hat","scarf"], badge:{en:"Winter",ko:"겨울"},
   en:"Students started a new tradition. When it gets cold, they dress Frog Baby in a warm hat and scarf.",
   ko:"학생들은 새로운 전통을 만들었어요. 날씨가 추워지면 프로그 베이비에게 따뜻한 모자와 목도리를 입혀 준답니다."},
  {l:["campus","fountain","game"], mode:"bronze", acc:["jersey","helmet"], badge:{en:"Game day",ko:"경기 날"},
   en:"On big game days, she might even wear a jersey and a helmet to cheer on the team!",
   ko:"큰 경기가 있는 날에는 유니폼과 헬멧을 쓰고 팀을 응원하기도 해요!"},
  {l:["campus","fountain","spray"], mode:"gold", badge:{en:"2013",ko:"2013년"},
   en:"One winter, someone sprayed Frog Baby with gold paint. That was not okay, because she belongs to everyone.",
   ko:"어느 겨울, 누군가 프로그 베이비에게 금색 페인트를 뿌렸어요. 모두가 함께 아끼는 작품이니까 그러면 안 되는 일이었어요."},
  {l:["campus","fountain","caps","shine"], mode:"bronze", badge:{en:"Spring 2013",ko:"2013년 봄"},
   en:"Bronze experts in Detroit carefully cleaned her. Frog Baby came home just in time for graduation.",
   ko:"디트로이트의 청동 전문가들이 조심조심 깨끗하게 닦아 주었어요. 프로그 베이비는 졸업식에 딱 맞춰 집으로 돌아왔어요."},
  {l:["lily","sparkle","burst"], mode:"color", title:true, end:true,
   en:"Next time you walk past Bracken Library, wave hello to Frog Baby. We take care of the art we share!",
   ko:"다음에 브래큰 도서관 앞을 지나가면 프로그 베이비에게 손을 흔들어 인사해 주세요. 우리 모두의 작품은 우리가 함께 아껴요!"}
];

const QUIZ = [
  {en:{q:"What did students rub for good luck before exams?", o:["Frog Baby's nose","The frogs' feet","The museum door"]},
   ko:{q:"학생들은 시험 전에 행운을 빌며 무엇을 문질렀나요?", o:["프로그 베이비의 코","개구리의 발","미술관 문"]}, a:0},
  {en:{q:"Where does Frog Baby live now?", o:["Inside a classroom","In a fountain near Bracken Library","On the football field"]},
   ko:{q:"프로그 베이비는 지금 어디에 살고 있나요?", o:["교실 안","브래큰 도서관 앞 분수","미식축구 경기장"]}, a:1},
  {en:{q:"How do students show they care about Frog Baby today?", o:["They paint her gold","They hide her frogs","They dress her for the weather"]},
   ko:{q:"요즘 학생들은 프로그 베이비를 어떻게 아껴 주나요?", o:["금색으로 칠해요","개구리를 숨겨요","날씨에 맞게 옷을 입혀요"]}, a:2}
];

/* speaking direction for each narration line (used by the recording studio) */
const TONES = [
  "warm and inviting, like opening a favorite picture book",
  "gentle and curious, a little bit of wonder",
  "friendly and proud",
  "playful and giggly, especially on the last words",
  "soft and a little sad, then caring",
  "excited and happy, like good news",
  "cheerful and bouncy",
  "cozy and warm",
  "energetic, like cheering at a game",
  "serious but kind, teaching a gentle lesson",
  "relieved and joyful",
  "warm and friendly goodbye"
];
