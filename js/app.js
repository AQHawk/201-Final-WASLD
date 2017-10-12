'use strict';

var userName = document.getElementById('name');
var workoutSelection = document.getElementById('workoutSelection');
Workouts.allWorkouts = [];

if (localStorage.workout) {
  userName.value = JSON.parse(localStorage.workout).userName;
}
// +++++++++++++++++++++++++++++++++++++++++
// +++++++ Constructor
// +++++++++++++++++++++++++++++++++++++++++
function Workouts(name, commitment, intensity, style, html){
  this.name = name;
  this.commitment = commitment;
  this.intensity = intensity;
  this.style = style;
  this.textImgForRendering = html;
  this.score = 0;
  Workouts.allWorkouts.push(this);
}

// COMPARATORATOR
Workouts.prototype.compare = function(){
  for (var i = 0; i < (Workouts.allWorkouts.length - 1); i++) {
    if (Workouts.allWorkouts[i].commitment.includes(parseInt(Workouts.allWorkouts[(Workouts.allWorkouts.length - 1)].commitment))){
      Workouts.allWorkouts[i].score++;
    };
    if (Workouts.allWorkouts[i].intensity.includes(parseInt(Workouts.allWorkouts[(Workouts.allWorkouts.length - 1)].intensity))){
      Workouts.allWorkouts[i].score += 2;
    };
    if (Workouts.allWorkouts[i].style.includes(Workouts.allWorkouts[(Workouts.allWorkouts.length - 1)].style)){
      Workouts.allWorkouts[i].score += 5;
    };
  }
};

//Create the objects; turn user input into last object in allWorkouts array in order to compare it
Workouts.prototype.userInput = function(event){
  event.preventDefault();
  var cleanWeek	= new Workouts('Clean Week', [2], [1], ['low-impact'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/cleanweek.jpg" alt="BeachBody logo"></img><p id="workoutText">lean Week is a 7-day fitness and nutrition program designed to help you kick-start healthy habits that get real results and can lead to a lifestyle change that sticks!</p>');
  var shiftShop = new Workouts('Shift Shop', [1, 2], [2], ['cardio', 'express'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/shiftshop.jpg" alt="BeachBody logo"></img><p id="workoutText">The SHIFT SHOP uses a "ramp-up" method that starts you off slow—then gradually increases the intensity week by week—all while refining your nutrition. The results? Stunning.</p>');
  var youVTwo = new Workouts('YOUv2', [2], [1], ['dance', 'tone', 'low-impact'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/beginner-workout-youv2.jpg" alt="BeachBody logo"></img><p id="workoutText">Leandro and his ladies encourage you to start moving for 30 minutes each weekday with low-impact, easy-to-follow moves set to feel-good party tunes. Learn mini-dance combos with 4 moves in the cardio-dance routines and tone your whole body using just your body weight in the body-sculpting workouts. Create new healthy habits to eat better, feel better, and shed weight with the flexible K.I.S.S. (Keep It Super Simple) & Just Eat! Meal Guide and discover your motivators and setbacks in the Oh Hello YOUv2 Journal.</p>');
  var yogaRetreat	= new Workouts('3 Week Yoga Retreat', [1], [1], ['yoga', 'low-impact'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/yogaretreat.jpg" alt="BeachBody logo"></img><p id="workoutText">Have you always wanted to learn yoga but didn\'t know where to start? Master the fundamentals of yoga right at home in just 21 days. With 3 Week Yoga Retreat you\'ll get step-by-step instructions with 21 unique classes (each 30 minutes or less). Get ready to roll out your mat and finish flexible and strong.</p>');
  var coreDeForce	= new Workouts('Core De Force', [2], [3], ['extreme', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/coredeforce.jpg" alt="BeachBody logo"></img><p id="workoutText">Packed with MMA-style punch-kick combos and explosive cardio-conditioning, Core De Force gives your core a 360-degree muscle-toning workout to help you slash inches from your waist, attack belly fat, and carve sculpted arms, legs, and glutes.</p>');
  var countryHeat	= new Workouts('Country Heat', [2], [2], ['dance'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/countryheat.jpg" alt="BeachBody logo"></img><p id="workoutText">	Created by trainer Autumn Calabrese, Country Heat is a high-energy, low-impact, country dance-inspired workout that\'s so simple and so much fun you\'ll barely notice you\'re getting a great total-body workout. For just 30 minutes a day, you\'ll move nonstop to today\'s hottest country music while you burn major calories. The program also includes a strength-building Dance Conditioning workout to help sculpt and tone your body, and a foolproof Eating Plan and portion-control containers to maximize your results. With Country Heat, you\'ll have a blast as you melt away the pounds and reshape your entire body!</p>');
  var twentyTwoMinute	= new Workouts('22 Minute Hard Corps', [1], [4], ['extreme', 'express'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/22minutehardcorp.jpg" alt="BeachBody logo"></img><p id="workoutText">Twelve routines that keep introducing new moves and challenging your muscles to get you absolutely ripped in 90 days.</p>');
  var hammerAndChisel	= new Workouts('The Master\'s Hammer and Chisel', [2], [2], ['cardio', 'extreme'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/hammernadchisel.jpg" alt="BeachBody logo"></img><p id="workoutText">How It Works: Created by seasoned trainers Sagi Kalev and Autumn Calabrese, The Master\'s Hammer and Chisel is an expert resistance-training system that incorporates the three phases of SSP Training—Strength, Stability, and Power—to help rapidly build, chisel, and refine your body for a "masterpiece" physique.</p>');
  var cize = new Workouts('CIZE', [2], [2], ['dance'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/cize.jpg" alt="BeachBody logo"></img><p id="workoutText">CIZE™ breaks down the hottest professionally choreographed dance courses, step-by-step, so that anyone can dance. You\'ll be so focused on learning the moves that you won\'t even realize you\'re burning calories and losing weight!</p>');
  var dayFixExtreme	= new Workouts('21 Day Fix EXTREME', [2], [3], ['extreme'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/21dayfixextreme.jpg" alt="BeachBody logo"></img><p id="workoutText">Celebrity trainer Autumn Calabrese has combined simple portion control, clean eating, and extreme 30-minute workouts to help you get the hardbody you’ve always wanted.</p>');
  var insanityMax	= new Workouts('INSANITY MAX: 30', [2], [3], ['extreme'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/insanitymax30.jpg" alt="BeachBody logo"></img><p id="workoutText">Every day you\'ll push a little harder, go a little longer, and dig a little deeper. It\'s not about finishing all 30 minutes—it\'s about seeing how far you\'ll go before you MAX OUT. There\'s no equipment needed; all you have to do is work to your MAX and get insane results in 30 minutes a day.</p>');
  var pNinetyOriginal	= new Workouts('P90', [1, 2], [2], ['express', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/p90.jpg" alt="BeachBody logo"></img><p id="workoutText">Now you don\'t have to go to the extreme to get dramatic, visible results! Tony Horton\'s all-new P90® workouts are simple, doable, and made to change your body right away—regardless of your age or fitness level.</p>');
  var piYo = new Workouts('PiYo', [1, 2], [2], ['yoga', 'cardio', 'tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/piyo.jpg" alt="BeachBody logo"></img><p id="workoutText">PiYo combines the muscle-sculpting, core-firming benefits of Pilates with the strength and flexibility advantages of yoga. It cranks up the speed to deliver a true fat-burning, low-impact workout that leaves your body looking long, lean, and incredibly defined.</p>');
  var insanityOriginal = new Workouts('INSANITY', [2, 3], [3], ['extreme', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/insanity.jpg" alt="BeachBody logo"></img><p id="workoutText">MAX Interval Training—you perform long bursts of maximum-intensity exercise with short periods of rest.</p>');
  var pNinetyX = new Workouts('P90X', [3], [3], ['extreme', 'tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/p90x.jpg" alt="BeachBody logo"></img><p id="workoutText">Twelve routines that keep introducing new moves and challenging your muscles to get you absolutely ripped in 90 days.</p>');
  var pNinetyXThree	= new Workouts('P90X3', [2], [3], ['extreme', 'tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/p90x3.jpg" alt="BeachBody logo"></img><p id="workoutText">Study after study shows that the most dramatic body transformations happen . . . in the first 30 minutes of exercise. Tony Horton\'s breakthrough Muscle Acceleration system combines a highly structured, plateau-busting schedule with an unprecedented variety of moves that keep every muscle challenged every day for 30 minutes of full-throttle intensity. P90X3 is a whole workout in half the time.</p>');
  var focusT = new Workouts('FOCUS T25', [1], [3], ['extreme', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/focust25.jpg" alt="BeachBody logo"></img><p id="workoutText">High-intensity, non-stop, 25-minute workouts that give you everything you need, nothing you don\'t. 25 minutes. 5 days a week. 100% results.</p>');
  var twentyOneFix = new Workouts('21 Day Fix', [2], [2], ['tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/21dayfix.jpg" alt="BeachBody logo"></img><p id="workoutText">Easy-to-follow portion control and 30-minute workouts take the guesswork out of losing weight. No more counting, weighing, or measuring—just quick results.</p>');
  var turboFire	= new Workouts('Turbo Fire', [1, 2, 3], [3], ['express', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/turbofire.jpg" alt="BeachBody logo"></img><p id="workoutText">High Intensity Interval Training (HIIT) ignites your metabolism and helps your body burn calories for up to 48 hours after your workout.</p>');
  var brazilButt = new Workouts('Brazil Butt Lift', [1, 2, 3], [2], ['express', 'tone', 'Brazilian'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/brazilbuttlift.jpg" alt="BeachBody logo"></img><p id="workoutText">	The TriAngle Training method targets all three major muscles of the buttocks from multiple angles to shape and transform.</p>');
  var bodyBeast = new Workouts('Body Beast', [1, 2, 3], [3], ['tone', 'express', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/bodybeast.jpg" alt="BeachBody logo"></img><p id="workoutText">Get the head-turning physique you\'ve always wanted. Body Beast fuses basic resistance training with breakthrough sports science in 12 extreme muscle-building and fat-shredding workouts. Plus, the Body Beast Eating Plan takes all the guesswork out of getting built!</p>');
  var tenMinutesTrainer	= new Workouts('10-Minute Trainer', [1], [2], ['express', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/10minutetrainer.jpg" alt="BeachBody logo"></img><p id="workoutText">Combines fat-burning cardio, total-body sculpting, and ab moves all at the same time for maximum efficiency!</p>');
  var pNinetyXTwo	= new Workouts('P90X2', [3], [3], ['cardio', 'tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/p90x2.jpg" alt="BeachBody logo"></img><p id="workoutText">Features a breakthrough in sports science called Muscle Integration, a training technique focused on instability. By doing resistance moves on one foot, a ball, or some other unstable platform, your body is forced to engage more muscles with each movement of the 12 workouts, burning more calories and delivering the kind of results pro athletes pay thousands of dollars for.</p>');
  var insanityAsylum = new Workouts('INSANITY: THE ASYLUM', [3], [4], ['extreme', 'cardio', 'tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/insanityasylum.jpg" alt="BeachBody logo"></img><p id="workoutText">Unleash your inner world-class athlete through plyometrics, speed, agility, strength, and core workouts in a jaw-dropping series of progressions. In just 30 days, you\'ll push yourself to the next level of game-day readiness with dramatic, measurable improvements in your athletic performance.</p>');
  var BrazilMaster = new Workouts('Brazil Butt Lift Master Series', [2], [2], ['tone', 'Brazilian'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/brazilbuttliftmaster.jpg" alt="BeachBody logo"></img><p id="workoutText">Leandro takes his TriAngle Training method to the next level with 3 innovative workouts that incorporate heavier weights and the stability ball to engage your core with every move, for your ultimate bikini body.</p>');
  var taiCheng = new Workouts('Tai Cheng', [2, 3], [1], ['low-impact'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/taicheng.jpg" alt="BeachBody logo"></img><p id="workoutText">Learn 18 healing Tai Chi movements, and combine them into a health-boosting routine. Incorporate gentle stretching, breathing exercises, and foam roller techniques to help awaken your natural energy; increase flexibility and mobility; and reduce joint and muscle pain.</p>');
  var slimSix = new Workouts('Slim in 6', [1, 2, 3], [2], ['tone', 'cardio'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/slimin6.jpg" alt="BeachBody logo"></img><p id="workoutText">Combines cardio with light resistance moves to burn fat and reshape your body in 6 weeks.</p>');
  var turboJam = new Workouts('Turbo Jam', [1, 2, 3], [3], ['dance', 'tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/turbojam.jpg" alt="BeachBody logo"></img><p id="workoutText">Kickboxing and body sculpting to the hottest tunes to burn more calories than almost any other exercise.</p>');
  var hipHopAbs = new Workouts('Hip Hop Abs', [1, 2], [2], ['dance', 'tone', 'express'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/hiphopabs.jpg" alt="BeachBody logo"></img><p id="workoutText">Fun hip hop dance moves set to hot music to burn fat and sculpt lean sexy abs.</p>');
  var chaLean = new Workouts('ChaLEAN Extreme', [2], [3], ['tone', 'extreme'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/chaleanextreme.jpg" alt="BeachBody logo"></img><p id="workoutText">The proven 3-phase circuit training technique is guaranteed to give you results every 30 days—the more muscle you build, the more fat your burn because Muscle Burns Fat®!</p>');
  var rockinBody = new Workouts('Rockin\' Body', [1, 2], [2], ['dance', 'tone'], '<section class="displayedWorkout"><img class="left" id="workoutLogo" src="img/rockinbody.jpg" alt="BeachBody logo"></img><p id="workoutText">Calorie-burning cardio and full-body sculpting moves. Party off the pounds as you dance and sweat to the hottest hits of all time!</p>');
  var userWorkout = new Workouts('null', event.target.time.value, event.target.intensity.value, event.target.style.value);
  // Compare the objects against the user input; sort objects according to 'score', place highest scoring object into localStorage.
  Workouts.prototype.compare();
  Workouts.allWorkouts.sort(function (a, b) {
    return a.score - b.score;
  });
  Workouts.allWorkouts[(Workouts.allWorkouts.length - 1)].userName = event.target.userName.value;
  var selectedWorkout = Workouts.allWorkouts.slice(-3);
  for (var i = 0; i < selectedWorkout.length; i++) {
    selectedWorkout[i].textImgForRendering = selectedWorkout[i].textImgForRendering.concat('<button id="submit' + [i] + '" name="sendSelection" type="submit">Select this workout!</button></section>');
  }
  localStorage.workout = JSON.stringify(selectedWorkout);
  window.location = 'outputForm.html';
};

workoutSelection.addEventListener('submit', Workouts.prototype.userInput);
