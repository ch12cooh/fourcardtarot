//card#  = [#, "Name", 
//[divinatory meanings],
//[inverted meanings],
//"Description",
//[5 Card Features]

var card0 = [0, "The Fool", 
["adventure", "an open mind", "expectation", "extravagance", "intoxication", "delirium", "folly"], 
["negligence", "absence", "carelessness", "apathy", "triviality", "vanity"], 
"With light step, as if earth and its obstacles had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world. He surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly staff, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience.", 
["the young man", "his flower", "his dog", "the cliff", "the clear sky and sun"],
["prompt10.png", "prompt20.png", "prompt30.png", "prompt40.png"]
];

var card2 = [2, "The High Priestess", 
["wisdom", "secrets", "mystery", "the future", "tenacity", "silence", "science"],
["passion", "zeal", "conceit", "shallow knowledge"], 
 "She has the lunar crescent at her feet, a horned diadem on her head, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. Her robe is flowing and gauzy, and the mantle suggests light--a shimmering radiance. She is the bright reflection of the moon and the mother.  The black and white pillars and, between them, the priestess herself, represent the three stages of taking action.  Boaz is the final stage: action, strength, and labor.  Jachin is the firs stage: motivation and the will to begin.  And the priestess herself is the knowledge and intelligence that connectes betwen the two: the mind which creates a plan for action that will accomplish what is needed.  She is a leader, isolated by her position, but also bound to a vast community by her commitment to them and their trust of her, and her trust is also given to that greater science which she understands and serves.",
["the priestess", "her Torah scroll", "the crescent moon", "the B & J pilars", "pomegranates"],
["prompt12.png", "prompt22.png", "prompt32.png", "prompt42.png"]
];

var card8 = [8, "Strength", 
["power", "energy", "action", "courage", "success", "mastery"], 
["despotism", "abuse of power", "weakness", "discord", "disgrace"], 
"A woman, over whose head there broods the symbol of life (the horizontal figure-eight), is closing the jaws of a lion. Her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. the figure represents organic force, moral force and the principle of all force. Her strength is also representative of more subtle forces such as the strength which resides in contemplation. Additionally, a second meaning of this card can be derrived from the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden of Divine Law, when it has been taken into the heart of hearts. In this interpretation, the strength of the figure is not the ordinary strength of self-confidence, but is rather the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which the lion signifies the passions, and she who is called Strength is the higher nature in its liberation.",
["the maiden", "the lion", "the vine/chain", "infinity (life)", "green hills and mountains"],
["prompt18.png", "prompt28.png", "prompt38.png", "prompt48.png"]
];

var card30 = [30, "Nine of Wands", 
["obstacles", "threat in wait", "formidable defense", "suspension", "delay", "deferral"], 
["despotism", "abuse of power", "weakness", "discord", "disgrace"], 
"The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.",
["a worried man","eight wands behind", "one wand in hand", "his bandaged head", "the green landscape"],
["prompt130.png", "prompt230.png", "prompt330.png", "prompt430.png"]
];


var card1 = [];
var card3 = [];
var card4 = [];
var card5 = [];
var card6 = [];
var card7 = [];
var card9 = [];
var card10 = [];
var card11 = [];
var card12 = [];
var card13 = [];
var card14 = [];
var card15 = [];
var card16 = [];
var card17 = [];
var card18 = [];
var card19 = [];
var card20 = [];
var card21 = [];
var card22 = [];
var card23 = [];
var card24 = [];
var card25 = [];
var card26 = [];
var card27 = [];
var card28 = [];
var card29 = [];
var card31 = [];
var card32 = [];
var card33 = [];
var card34 = [];
var card35 = [];
var card36 = [];
var card37 = [];
var card38 = [];
var card39 = [];
var card40 = [];
var card41 = [];
var card42 = [];
var card43 = [];
var card44 = [];
var card45 = [];
var card46 = [];
var card47 = [];
var card48 = [];
var card49 = [];
var card50 = [];
var card51 = [];
var card52 = [];
var card53 = [];
var card54 = [];
var card55 = [];
var card56 = [];
var card57 = [];
var card58 = [];
var card59 = [];
var card60 = [];
var card61 = [];
var card62 = [];
var card63 = [];
var card64 = [];
var card65 = [];
var card66 = [];
var card67 = [];
var card68 = [];
var card69 = [];
var card70 = [];
var card71 = [];
var card72 = [];
var card73 = [];
var card74 = [];
var card75 = [];
var card76 = [];
var card77 = [];

var deck = [0, 2, 8, 30];
var cards = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39, card40, card41, card42, card43, card44, card45, card46, card47, card48, card49, card50, card51, card52, card53, card54, card55, card56, card57, card58, card59, card60, card61, card62, card63, card64, card65, card66, card67, card68, card69, card70, card71, card72, card73, card74, card75, card76, card77];
var cardimages = ["card0.png", "card1.png", "card2.png", "card3.png", "card4.png", "card5.png", "card6.png", "card7.png", "card8.png", "card9.png", "card10.png", "card11.png", "card12.png", "card13.png", "card14.png", "card15.png", "card16.png", "card17.png", "card18.png", "card19.png", "card20.png", "card21.png", "card22.png", "card23.png", "card24.png", "card25.png", "card26.png", "card27.png", "card28.png", "card29.png", "card30.png", "card31.png", "card32.png", "card33.png", "card34.png", "card35.png", "card36.png", "card37.png", "card38.png", "card39.png", "card40.png", "card41.png", "card42.png", "card43.png", "card44.png", "card45.png", "card46.png", "card47.png", "card48.png", "card49.png", "card50.png", "card51.png", "card52.png", "card53.png", "card54.png", "card55.png", "card56.png", "card57.png", "card58.png", "card59.png", "card60.png", "card61.png", "card62.png", "card63.png", "card64.png", "card65.png", "card66.png", "card67.png", "card68.png", "card69.png", "card70.png", "card71.png", "card72.png", "card73.png", "card74.png", "card75.png", "card76.png", "card77.png"];
var state = 0;
var currentcard = 0;
var rev = 0;

var unflipped = [1, 2, 3, 4];

var Text1 = " ";
var Text2 = " ";
var feature0 = " ";
var feature1 = " ";
var feature2 = " ";
var feature3 = " ";
var feature4 = " ";
var meaning0 = " ";
var meaning1 = " ";


// 0 = preflip,   1 = postflip,   2,3,4,5,6 = Feature n,   7,8 = meanings 1&2   9,10,11,12 = keyword n, 13=cardID, 14= 0norm 1rev

var carddata1 = [" ", " ", 0, 0, 0, 0, 0, " ", " ", " ", " ", " ", " ", 100, 2]; //left
var carddata2 = [" ", " ", 0, 0, 0, 0, 0, " ", " ", " ", " ", " ", " ", 100, 2]; //center
var carddata3 = [" ", " ", 0, 0, 0, 0, 0, " ", " ", " ", " ", " ", " ", 100, 2]; //right
var ALLdata = [carddata1, carddata2, carddata3];
var question = ""

$( document ).ready(function() {
    console.log( "ready!" );
	$('#PromptImg').css({'box-shadow':'0px 0px 0px 0px #0B122D'});
	$("#catharsis-button").hide();
	$("#text1block").hide();
	$('#leftbutton').prop('disabled', false);
	$('#centerbutton').prop('disabled', true);
	$('#rightbutton').prop('disabled', true);
	$('#centerbutton').css({'background-color':'Transparent'});
	$('#rightbutton').css({'background-color':'Transparent'});
	$('#centerbutton').css({'color':'Transparent'});
	$('#rightbutton').css({'color':'Transparent'});
	$("#promptall1").hide();
	$("#promptall2").hide();
	$("#boxofbuttons").hide();
	$("#PromptImg").hide();
	$("#yourquestion").show();
	$("#datacollect").hide();
	$("#datacollectblock").hide();	
	$("#datacollect1").hide();
	$("#datacollect2").hide();
	$("#leftbutton").hide();
	$("#centerbutton").hide();
	$("#rightbutton").hide();
	$("#fourthbutton").hide();
	$('#fourthbutton').prop('disabled', true);
	$('#fourthbutton').css({'background-color':'Transparent'});
	$('#fourthbutton').css({'color':'Transparent'});
	$("#details").css({'color': 'Transparent'});
	$("#theconclusion").hide();
	$('textarea#thequestion').val("Write down your question here... \n\nSpend a minute deciding the object and scope of your question.  Choose each word you use deliberately.");
	$('textarea#thequestion').focus(function() { $(this).select(); } );
	$('textarea#userconclusion').val("");
	clearuserfields();
});

$(".continue").click(function () {
	question = $('textarea#thequestion').val();
	$("#yourquestion").hide();
	$("#structuretext").hide();
	//$("#datacollect1").show();
	$("#PromptImg").show();
	$("#text1block").show();
	//$('textarea#Text1').val("What are your motivations for learning this? Before you flip over the first card, write what you know about your motivations already here. Then flip the first card.");
	//$('textarea#Text1').focus(function() { $(this).select(); } );
	$("#leftbutton").show();
	$("#centerbutton").show();
	$("#rightbutton").show();
	$("#fourthbutton").show();
	$(".questiontext").append("Your Question: " + question + "</br> </br>")
	//$("#fourthcard").hide();
	//$("#fourthbreak").hide();	
	$("#attribution").hide();
});

function drawcard(){
	$("#text1block").hide();
	$('#feature0').attr('checked', false);
	$('#feature1').attr('checked', false);
	$('#feature2').attr('checked', false);
	$('#feature3').attr('checked', false);
	$('#feature4').attr('checked', false);
	$('.meaning-data').find('input:eq( 0 )').val(""); 
	$('.meaning-data').find('input:eq( 1 )').val(""); 
    $('.key-data').find('input:eq( 0 )').val(""); 
	$('.key-data').find('input:eq( 1 )').val(""); 
    $('.key-data').find('input:eq( 2 )').val(""); 
	$('.key-data').find('input:eq( 3 )').val(""); 
	$("#promptall1").hide();
	$("#promptall2").hide();
	$("#PromptImg").show();
	$("#boxofbuttons").show();
	$('textarea#Text1').css({'border': '0px solid #9C7A5A'});
	$('textarea#Text1').css({'color': '#162356'});
	//$("#details").css({'color': '#9C7A5A'});
	$("#beforedraw").css({'color': '#162356'});
	$('#Prompt1').css({'border': '1px solid #9C7A5A'});
	var cardcard = cards[currentcard];
	var pics = cardcard[6];
	document.getElementById("PromptImg").src=pics[0];
	$('#PromptImg').css({'box-shadow':'0px 0px 18px 8px #0B122D'});
	$("#datacollect").show();	
	$("#datacollectblock").hide();	
	$('textarea#Text2').val("Now use this card -- both its visual features and meanings -- to extend the start you made above into a more substantial story with details, memories, and metaphors.  \n\nThen select the card features, meanings, and keywords from your writing that stand out as important.");
	if (state == 1){
		$('textarea#Text2').val("How does this first card represent some part of you? \n\nOnce you've written a few sentence or paragraphs here, in the fields below select the card features, meanings, and keywords from your writing that stand out as important. Then click the 'Save & Continue' button on the right. ");
	};
	$('textarea#Text2').focus(function() { $(this).select(); } );
	$("#datacollect2").show();
	var input = deck[Math.floor(Math.random() * deck.length)];
	var index = deck.indexOf(input);
	deck.splice(index, 1);
	loadcard(input);
	if(state == 3){
		$("#catharsis-button").show();
	};
	return input;
    }
	
function loadcard(input){
	currentcard = input;
	var rev = 0;
	var card = cards[input];
	var meanings = card[2];
	var features = card[5];
	$(".meaningtext").text("");
	$(".meaningtext").append("<b>" + card[1] + "</br> Card Meanings:</b> <br/> <br/>");
	for (var index = 0; index < meanings.length; index++) {
		$(".meaningtext").append("&#9733 &nbsp" + meanings[index] + "<br/>");
	}
	$(".descriptiontext").text("");
    $(".descriptiontext").append("A.E. Waite's Description: </br></br>" + card[4]);
	$(".feature0").text("");
	$(".feature0").append(features[0]);
	$(".feature1").text("");
	$(".feature1").append(features[1]);
	$(".feature2").text("");
	$(".feature2").append(features[2]);
	$(".feature3").text("");
	$(".feature3").append(features[3]);
	$(".feature4").text("");
	$(".feature4").append(features[4]);
	document.getElementById("CardDisplay").src=cardimages[input];
	var cardcard = cards[currentcard];
	var pics = cardcard[6];
	document.getElementById("PromptImg").src=pics[0];
};

$(".CardLeft").click(function () {
	saveuserfields();
	state = 1;
	var dex = unflipped.indexOf(state);
	if (dex === -1) {
		var load = ALLdata[0];
		var cardid = load[13];
		loadcard(cardid);
		loaduserfields(state);
	return;
	};
	unflipped.splice(dex, 1);
	var input = drawcard();
	document.getElementById("CardLeft").src=cardimages[input];
	document.getElementById("leftbutton").innerHTML="Review";
});

$(".CardCenter").click(function () {
	saveuserfields();
	state = 2;
	$('#leftbutton').prop('disabled', false);
	$('#leftbutton').css({'background-color':'#10193E'});
	$('#leftbutton').css({'color':'#9C7A5A'});
	var dex = unflipped.indexOf(state);
	if (dex === -1) {
		var load = ALLdata[1];
		var cardid = load[13];
		loadcard(cardid);
		loaduserfields(state);
	return;
	};
	unflipped.splice(dex, 1);
	var input = drawcard();
	document.getElementById("CardCenter").src=cardimages[input];
	document.getElementById("centerbutton").innerHTML="Review";
});

$(".CardRight").click(function () {
	saveuserfields();
	state = 3;
	$('#centerbutton').prop('disabled', false);
	$('#centerbutton').css({'background-color':'#10193E'});
	$('#centerbutton').css({'color':'#9C7A5A'});
	$('#leftbutton').prop('disabled', false);
	$('#leftbutton').css({'background-color':'#10193E'});
	$('#leftbutton').css({'color':'#9C7A5A'});
	var dex = unflipped.indexOf(state);
	if (dex === -1) {
		var load = ALLdata[2];
		var cardid = load[13];
		loadcard(cardid);
		loaduserfields(state);
	return;
	};
	unflipped.splice(dex, 1);
	var input = drawcard();
	document.getElementById("CardRight").src=cardimages[input];
	document.getElementById("rightbutton").innerHTML="Review";
});



// 0 = preflip,   1 = postflip,   2,3,4,5,6 = Feature n,   7,8 = meanings 1&2   9,10,11,12 = keyword n, 13=cardID, 14= 0norm 1rev

function saveuserfields(){
    var Vals = [];
    var input = " ";
	function saveit(input){
        if (input.length > 0) {
            Vals.push(input.val());
            }
        else {
              Vals.push("");
            }
	}
	function checkcheck (bool) {
		if (bool) {
			Vals.push(1);
		}
		else {
			Vals.push(0);
		}
	}
	input = $('textarea#Text1').val();
	Vals.push(input);
	input = $('textarea#Text2').val();
	Vals.push(input);
	checkcheck($('#feature0').is(':checked'));
	checkcheck($('#feature1').is(':checked'));
	checkcheck($('#feature2').is(':checked'));
	checkcheck($('#feature3').is(':checked'));
	checkcheck($('#feature4').is(':checked'));
	input = $('.meaning-data').find('input:eq( 0 )'); 
	saveit(input);
	    input = $('.meaning-data').find('input:eq( 1 )'); 
	saveit(input);
    input = $('.key-data').find('input:eq( 0 )'); 
	saveit(input);
    input = $('.key-data').find('input:eq( 1 )'); 
	saveit(input);
    input = $('.key-data').find('input:eq( 2 )'); 
	saveit(input);
    input = $('.key-data').find('input:eq( 3 )'); 
	saveit(input);
	Vals.push(currentcard);
	Vals.push(rev);
	if (parseInt(state) == 1){
	carddata1 = Vals;	
	};
	if (parseInt(state) == 2){
	carddata2 = Vals;	
	};
	if (parseInt(state) == 3){
	carddata3 = Vals;
	};
	$(".descriptiontext").text("");
	ALLdata = [carddata1, carddata2, carddata3];
  };
  
  
  function clearuserfields(){
	$('textarea#Text1').val("");
	$('textarea#Text2').val("");
	$('#feature0').attr('checked', false);
	$('#feature1').attr('checked', false);
	$('#feature2').attr('checked', false);
	$('#feature3').attr('checked', false);
	$('#feature4').attr('checked', false);
	$('.meaning-data').find('input:eq( 0 )').val(""); 
	$('.meaning-data').find('input:eq( 1 )').val(""); 
    $('.key-data').find('input:eq( 0 )').val(""); 
	$('.key-data').find('input:eq( 1 )').val(""); 
    $('.key-data').find('input:eq( 2 )').val(""); 
	$('.key-data').find('input:eq( 3 )').val(""); 
  };
 
 // 0 = preflip,   1 = postflip,   2,3,4,5,6 = Feature n,   7,8 = meanings 1&2   9,10,11,12 = keyword n, 13=cardID, 14= 0norm 1rev

  function loaduserfields(n){
	console.log(n);
	PromptOff ();
	var load = ALLdata[n-1];
	$('textarea#Text1').val(load[0]);
	$('textarea#Text2').val(load[1]);
	if (parseInt(load[2]) === 0) {
		$('#feature0').attr('checked', false);
	}
	else {
		$('#feature0').prop('checked', true);
	}
	if (parseInt(load[3]) === 0) {
		$('#feature1').attr('checked', false);
	}
	else {
		$('#feature1').prop('checked', true);
	}
	if (parseInt(load[4]) === 0) {
		$('#feature2').attr('checked', false);
	}
	else {
		$('#feature2').prop('checked', true);
	}
	if (parseInt(load[5]) === 0) {
		$('#feature3').attr('checked', false);
	}
	else {
		$('#feature3').prop('checked', true);
	}
	if (parseInt(load[6]) === 0) {
		$('#feature4').attr('checked', false);
	}
	else {
		$('#feature4').prop('checked', true);
	}
	$('.meaning-data').find('input:eq( 0 )').val(load[7]); 
	$('.meaning-data').find('input:eq( 1 )').val(load[8]); 
    $('.key-data').find('input:eq( 0 )').val(load[9]); 
	$('.key-data').find('input:eq( 1 )').val(load[10]); 
    $('.key-data').find('input:eq( 2 )').val(load[11]); 
	$('.key-data').find('input:eq( 3 )').val(load[12]); 
  };
  
 $('.Save').click(function() {
	saveuserfields();
	clearuserfields();
	$("#datacollect1").show();
	$("#PromptImg").hide();
	PromptOff();
	$("#boxofbuttons").hide();
	state = unflipped[0];
	var stateword = findstateword();
	$('textarea#Text1').css({'border': '1px solid #83A7C6'});
	$('textarea#Text1').css({'color': '#83A7C6'});
	$('textarea#Text1').focus(function() { $(this).select(); } );
//	$("#beforedraw").text("");
	$("#beforedraw").append("Your thoughts <br/> &nbsp before flipping &nbsp <br/> the card for <br/>" + stateword)
	$("#beforedraw").css({'color': '#9C7A5A'});
	$("#datacollect").hide();	
	$("#datacollectblock").show();	
	$("#datacollect2").hide();
	if (state == 2){
		statetwo();
	}
	if (state == 3){
		statethree();
	}
  });
  
function findstateword(){
	if (state == 1){
		return "YOURSELF";
	}
	if (state == 2){
		return "MOTIVATION";
	}
	if (state == 3){
		return "OBSTACLES";
	}
	if (state == 4){
		return "RESOLUTION";
	}
	console.log("state fail");
};

function statetwo(){
	$('#leftbutton').prop('disabled', true);
	$('#leftbutton').css({'background-color':'Transparent'});
	$('#leftbutton').css({'color':'Transparent'});
	$('#centerbutton').prop('disabled', false);
	$('#centerbutton').css({'background-color':'#10193E'});
	$('#centerbutton').css({'color':'#9C7A5A'});
	$('#rightbutton').prop('disabled', true);
	$('#rightbutton').css({'background-color':'Transparent'});
	$('#rightbutton').css({'color':'Transparent'});
	$('textarea#Text1').val("What are your motivations for asking this question? \n\nBefore you flip over the second card, write what you already know about your motivations here. Then flip the second card.");
};

function statethree(){
	$('#leftbutton').prop('disabled', true);
	$('#leftbutton').css({'background-color':'Transparent'});
	$('#leftbutton').css({'color':'Transparent'});
	$('#centerbutton').prop('disabled', true);
	$('#centerbutton').css({'background-color':'Transparent'});
	$('#centerbutton').css({'color':'Transparent'});
	$('#rightbutton').prop('disabled', false);
	$('#rightbutton').css({'background-color':'#10193E'});
	$('#rightbutton').css({'color':'#9C7A5A'});
	$('textarea#Text1').val("What obstacles make this question/situation difficult? \nWrite a few sentences or paragraphs about what you already think. \nWhen you're done writing, flip over the third card.");
	$("#save-button").hide();
};
  
function PromptOff () {
	$('#Prompt0').css({'border': '0px solid #9C7A5A'});
	$('#Prompt1').css({'border': '0px solid #9C7A5A'});
	$('#Prompt2').css({'border': '0px solid #9C7A5A'});
	$('#Prompt3').css({'border': '0px solid #9C7A5A'});
	$('#Prompt4').css({'border': '0px solid #9C7A5A'});
	$("#promptall1").hide();
	$("#promptall2").hide();
	$("#PromptImg").show();
	document.getElementById("PromptImg").src="blankprompt.png";
	$('#PromptImg').css({'box-shadow':'0px 0px 0px 0px #0B122D'});
};
  
$(".Prompt1").click(function () {
	PromptOff();
	$('#Prompt1').css({'border': '1px solid #9C7A5A'});
	var card = cards[currentcard];
	var pics = card[6];
	document.getElementById("PromptImg").src=pics[0];
	$('#PromptImg').css({'box-shadow':'0px 0px 18px 8px #0B122D'});
});

$(".Prompt2").click(function () {
	PromptOff();
	$('#Prompt2').css({'border': '1px solid #9C7A5A'});
	var card = cards[currentcard];
	var pics = card[6];
	document.getElementById("PromptImg").src=pics[1];
	$('#PromptImg').css({'box-shadow':'0px 0px 18px 8px #0B122D'});
});

$(".Prompt3").click(function () {
	PromptOff();
	$('#Prompt3').css({'border': '1px solid #9C7A5A'});
	var card = cards[currentcard];
	var pics = card[6];
	document.getElementById("PromptImg").src=pics[2];
	$('#PromptImg').css({'box-shadow':'0px 0px 18px 8px #0B122D'});
});

$(".Prompt4").click(function () {
	PromptOff();
	$('#Prompt4').css({'border': '1px solid #9C7A5A'});
	var card = cards[currentcard];
	var pics = card[6];
	document.getElementById("PromptImg").src=pics[3];
	$('#PromptImg').css({'box-shadow':'0px 0px 18px 8px #0B122D'});
});

$(".Prompt0").click(function () {
	PromptOff();
	$('#Prompt0').css({'border': '1px solid #9C7A5A'});
	$("#promptall1").show();
	$("#promptall2").show();
	$("#PromptImg").hide();
});
  

 $('.Catharsis').click(function() {
	saveuserfields();
	$("#theconclusion").show();
	$(window).scrollTop($('#theconclusion').offset().top);
	$(".finalquestiontext").append(question);
  });
  
 $('.LastFlip').click(function() {
	var input = deck[Math.floor(Math.random() * deck.length)];
	var index = deck.indexOf(input);
	deck.splice(index, 1);
	var rev = 0;
	var card = cards[input];
	var meanings = card[2];
	var description = card[4];
	var discsen = description.slice(0, description.indexOf('.')+1);
	$(".finalmeaningtext").text("");
	$(".finalmeaningtext").append(card[1] + ": </br> </br>"+ discsen + "</br></br></br> Card Meanings:</b> <br/> <br/>");
	for (var index = 0; index < meanings.length; index++) {
		$(".finalmeaningtext").append("&#9733 &nbsp" + meanings[index] + "<br/>");
	}
	document.getElementById("LastCard").src=cardimages[input];

  });
  
// 0 = preflip,   1 = postflip,   2,3,4,5,6 = Feature n,   7,8 = meanings 1&2   9,10,11,12 = keyword n, 13=cardID, 14= 0norm 1rev


 $('.ReviewAll').click(function() {
	$('textarea#userconclusion').val("THE CONCLUSION... brings together symbols and extended metaphors from all four cards. What themes and connections do you see?\nYou can scroll up if you want to review any earlier parts of the reading. \n\nThe fourth card is the most literal 'answer' to your original question.  However, your conclusion will be more complete and the story of the reading will be more meaningful and memorable if you can reuse and extend the metaphors from earlier cards to draw new symbolic connections between the four cards and new real connections between the many issues that you related each card to earlier. \n\nGood luck pattern hunting! ");
	$('textarea#userconclusion').focus(function() { $(this).select(); } );
	for (var index = 7; index < 13; index++) {
		var data = carddata1[index]
		if (data.length > 1){
		$(".kewordlist1").append("&#9733 &nbsp" + data + "<br/>");
	}}
	document.getElementById("TopCard").src=cardimages[carddata1[13]];
	for (var index = 7; index < 13; index++) {
		var data = carddata2[index]
		if (data.length > 1){
		$(".kewordlist2").append("&#9733 &nbsp" + data + "<br/>");
	}}
	document.getElementById("MidCard").src=cardimages[carddata2[13]];
	for (var index = 7; index < 13; index++) {
		var data = carddata3[index]
		if (data.length > 1){
		$(".kewordlist3").append("&#9733 &nbsp" + data + "<br/>");
	}}
	document.getElementById("LowCard").src=cardimages[carddata3[13]];
  });
    
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgL = document.getElementById('CardLeft');
var imgC = document.getElementById('CardCenter');
var imgR = document.getElementById('CardRight');
var imgF = document.getElementById('CardFour');
var imgA = document.getElementById('LastCard');
var imgT = document.getElementById('TopCard');
var imgM = document.getElementById('MidCard');
var imgW = document.getElementById('LowCard');
var imgD = document.getElementById('CardDisplay');
var modalImg = document.getElementById("img01");

imgL.onclick = function(){
	if ( imgL.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgC.onclick = function(){
	if ( imgC.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgR.onclick = function(){
	if ( imgR.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgF.onclick = function(){
	if ( imgF.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgA.onclick = function(){
	if ( imgA.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgT.onclick = function(){
	if ( imgT.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgM.onclick = function(){
	if ( imgM.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgW.onclick = function(){
	if ( imgW.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}
imgD.onclick = function(){
	if ( imgD.src.slice(-13) == "cardBACK2.png"){return;}
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

