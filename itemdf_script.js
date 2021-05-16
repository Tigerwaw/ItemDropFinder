// ---
// Global Variables
// ---

var checkBoxes =
{
	head: false,
	shoulder: false,
	chest: false,
	wrist: false,
	hands: false,
	waist: false,
	legs: false,
	feet: false,
	neck: false,
	back: false,
	finger: false,
	str_onehand: false,
	str_twohand: false,
	agi_onehand: false,
	agi_twohand: false,
	int_onehand: false,
	int_twohand: false,
	ranged: false,
	offhand: false,
	shield: false
};

var othersideItems = new Array();
var hallsItems = new Array();
var mistsItems = new Array();
var plagueItems = new Array();
var sanguineItems = new Array();
var spiresItems = new Array();
var necroticItems = new Array();
var theaterItems = new Array();


// ---------------
// DE OTHER SIDE
// ---------------

var othersideMisc =
{
	neck: false,
	back: true,
	finger: true,
	str_onehand: true,
	str_twohand: true,
	agi_onehand: true,
	agi_twohand: true,
	int_onehand: false,
	int_twohand: true,
	ranged: true,
	offhand: false,
	shield: false
};

var othersidePlate = 
{
	head: false,
	shoulder: false,
	chest: true,
	wrist: true,
	hands: false,
	waist: true,
	legs: false,
	feet: true,
};

var othersideMail = 
{
	head: false,
	shoulder: true,
	chest: true,
	wrist: false,
	hands: true,
	waist: false,
	legs: true,
	feet: false,
};

var othersideLeather = 
{
	head: false,
	shoulder: true,
	chest: false,
	wrist: false,
	hands: true,
	waist: false,
	legs: true,
	feet: true,
};

var othersideCloth = 
{
	head: false,
	shoulder: false,
	chest: true,
	wrist: false,
	hands: false,
	waist: true,
	legs: true,
	feet: true,
};


// ---------------
// HALLS OF ATONEMENT
// ---------------

var hallsMisc =
{
	neck: true,
	back: false,
	finger: true,
	str_onehand: false,
	str_twohand: false,
	agi_onehand: true,
	agi_twohand: false,
	int_onehand: false,
	int_twohand: true,
	ranged: false,
	offhand: true,
	shield: false
};

var hallsPlate = 
{
	head: true,
	shoulder: true,
	chest: true,
	wrist: false,
	hands: false,
	waist: false,
	legs: true,
	feet: false,
};

var hallsMail = 
{
	head: true,
	shoulder: true,
	chest: true,
	wrist: false,
	hands: false,
	waist: false,
	legs: false,
	feet: true,
};

var hallsLeather = 
{
	head: true,
	shoulder: false,
	chest: false,
	wrist: false,
	hands: true,
	waist: true,
	legs: true,
	feet: false,
};

var hallsCloth = 
{
	head: false,
	shoulder: false,
	chest: true,
	wrist: false,
	hands: true,
	waist: true,
	legs: false,
	feet: true,
};


// ---------------
// MISTS OF TIRNA SCYTHE
// ---------------

var mistsMisc =
{
	neck: true,
	back: false,
	finger: false,
	str_onehand: true,
	str_twohand: true,
	agi_onehand: true,
	agi_twohand: false,
	int_onehand: true,
	int_twohand: true,
	ranged: false,
	offhand: false,
	shield: true
};

var mistsPlate = 
{
	head: true,
	shoulder: true,
	chest: false,
	wrist: false,
	hands: true,
	waist: false,
	legs: false,
	feet: false,
};

var mistsMail = 
{
	head: true,
	shoulder: false,
	chest: false,
	wrist: true,
	hands: false,
	waist: true,
	legs: true,
	feet: false,
};

var mistsLeather = 
{
	head: true,
	shoulder: false,
	chest: true,
	wrist: true,
	hands: false,
	waist: true,
	legs: false,
	feet: false,
};

var mistsCloth = 
{
	head: true,
	shoulder: true,
	chest: false,
	wrist: true,
	hands: true,
	waist: false,
	legs: false,
	feet: false,
};


// ---------------
// PLAGUEFALL
// ---------------

var plagueMisc =
{
	neck: false,
	back: true,
	finger: true,
	str_onehand: true,
	str_twohand: false,
	agi_onehand: true,
	agi_twohand: true,
	int_onehand: true,
	int_twohand: false,
	ranged: false,
	offhand: false,
	shield: false
};

var plaguePlate = 
{
	head: true,
	shoulder: false,
	chest: false,
	wrist: false,
	hands: true,
	waist: true,
	legs: false,
	feet: false,
};

var plagueMail = 
{
	head: false,
	shoulder: true,
	chest: false,
	wrist: true,
	hands: false,
	waist: true,
	legs: true,
	feet: false,
};

var plagueLeather = 
{
	head: true,
	shoulder: true,
	chest: false,
	wrist: true,
	hands: true,
	waist: false,
	legs: false,
	feet: false,
};

var plagueCloth = 
{
	head: true,
	shoulder: false,
	chest: false,
	wrist: false,
	hands: true,
	waist: false,
	legs: true,
	feet: true,
};


// ---------------
// SANGUINE DEPTHS
// ---------------

var sanguineMisc =
{
	neck: false,
	back: true,
	finger: true,
	str_onehand: true,
	str_twohand: false,
	agi_onehand: true,
	agi_twohand: true,
	int_onehand: true,
	int_twohand: false,
	ranged: false,
	offhand: true,
	shield: false
};

var sanguinePlate = 
{
	head: false,
	shoulder: false,
	chest: false,
	wrist: true,
	hands: true,
	waist: true,
	legs: false,
	feet: true,
};

var sanguineMail = 
{
	head: false,
	shoulder: false,
	chest: false,
	wrist: true,
	hands: true,
	waist: true,
	legs: false,
	feet: false,
};

var sanguineLeather = 
{
	head: false,
	shoulder: true,
	chest: true,
	wrist: true,
	hands: false,
	waist: false,
	legs: false,
	feet: true,
};

var sanguineCloth = 
{
	head: true,
	shoulder: true,
	chest: false,
	wrist: true,
	hands: false,
	waist: false,
	legs: true,
	feet: false,
};


// ---------------
// SPIRES OF ASCENSION
// ---------------

var spiresMisc =
{
	neck: true,
	back: true,
	finger: false,
	str_onehand: false,
	str_twohand: false,
	agi_onehand: true,
	agi_twohand: true,
	int_onehand: false,
	int_twohand: false,
	ranged: true,
	offhand: false,
	shield: false
};

var spiresPlate = 
{
	head: false,
	shoulder: false,
	chest: true,
	wrist: true,
	hands: true,
	waist: false,
	legs: false,
	feet: true,
};

var spiresMail = 
{
	head: false,
	shoulder: false,
	chest: true,
	wrist: true,
	hands: false,
	waist: true,
	legs: false,
	feet: false,
};

var spiresLeather = 
{
	head: true,
	shoulder: false,
	chest: false,
	wrist: false,
	hands: true,
	waist: true,
	legs: true,
	feet: false,
};

var spiresCloth = 
{
	head: false,
	shoulder: false,
	chest: true,
	wrist: false,
	hands: false,
	waist: true,
	legs: true,
	feet: true,
};


// ---------------
// NECROTIC WAKE
// ---------------

var necroticMisc =
{
	neck: false,
	back: false,
	finger: true,
	str_onehand: true,
	str_twohand: true,
	agi_onehand: true,
	agi_twohand: false,
	int_onehand: true,
	int_twohand: false,
	ranged: true,
	offhand: false,
	shield: true
};

var necroticPlate = 
{
	head: true,
	shoulder: true,
	chest: false,
	wrist: false,
	hands: false,
	waist: true,
	legs: true,
	feet: false,
};

var necroticMail = 
{
	head: true,
	shoulder: true,
	chest: false,
	wrist: false,
	hands: false,
	waist: false,
	legs: true,
	feet: true,
};

var necroticLeather = 
{
	head: false,
	shoulder: true,
	chest: true,
	wrist: true,
	hands: false,
	waist: false,
	legs: false,
	feet: true,
};

var necroticCloth = 
{
	head: true,
	shoulder: true,
	chest: false,
	wrist: true,
	hands: true,
	waist: false,
	legs: false,
	feet: false,
};


// ---------------
// THEATER OF PAIN
// ---------------

var theaterMisc =
{
	neck: false,
	back: false,
	finger: true,
	str_onehand: true,
	str_twohand: true,
	agi_onehand: true,
	agi_twohand: true,
	int_onehand: true,
	int_twohand: false,
	ranged: false,
	offhand: true,
	shield: true
};

var theaterPlate = 
{
	head: false,
	shoulder: true,
	chest: true,
	wrist: true,
	hands: false,
	waist: false,
	legs: true,
	feet: false,
};

var theaterMail = 
{
	head: true,
	shoulder: false,
	chest: true,
	wrist: false,
	hands: true,
	waist: false,
	legs: false,
	feet: true,
};

var theaterLeather = 
{
	head: false,
	shoulder: false,
	chest: true,
	wrist: false,
	hands: false,
	waist: true,
	legs: true,
	feet: true,
};

var theaterCloth = 
{
	head: false,
	shoulder: true,
	chest: true,
	wrist: true,
	hands: false,
	waist: true,
	legs: false,
	feet: false,
};


// ---------
// Functions
// ---------

function itemUpdate()
{
	if (othersideItems == null || othersideItems == "")
	{
		armorTypeSelect("plate");
	}
	
	othersideToggle();
	mistsToggle();
	hallsToggle();
	plagueToggle();
	sanguineToggle();
	spiresToggle();
	necroticToggle();
	theaterToggle();
}

function armorTypeSelect(_armorType)
{
	switch(_armorType)
	{
		case "plate":
			othersideItems = Object.assign(othersidePlate, othersideMisc);
			hallsItems = Object.assign(hallsPlate, hallsMisc);
			mistsItems = Object.assign(mistsPlate, mistsMisc);
			plagueItems = Object.assign(plaguePlate, plagueMisc);
			sanguineItems = Object.assign(sanguinePlate, sanguineMisc);
			spiresItems = Object.assign(spiresPlate, spiresMisc);
			necroticItems = Object.assign(necroticPlate, necroticMisc);
			theaterItems = Object.assign(theaterPlate, theaterMisc);
			break;
		case "mail":
			othersideItems = Object.assign(othersideMail, othersideMisc);
			hallsItems = Object.assign(hallsMail, hallsMisc);
			mistsItems = Object.assign(mistsMail, mistsMisc);
			plagueItems = Object.assign(plagueMail, plagueMisc);
			sanguineItems = Object.assign(sanguineMail, sanguineMisc);
			spiresItems = Object.assign(spiresMail, spiresMisc);
			necroticItems = Object.assign(necroticMail, necroticMisc);
			theaterItems = Object.assign(theaterMail, theaterMisc);
			break;
		case "leather":
			othersideItems = Object.assign(othersideLeather, othersideMisc);
			hallsItems = Object.assign(hallsLeather, hallsMisc);
			mistsItems = Object.assign(mistsLeather, mistsMisc);
			plagueItems = Object.assign(plagueLeather, plagueMisc);
			sanguineItems = Object.assign(sanguineLeather, sanguineMisc);
			spiresItems = Object.assign(spiresLeather, spiresMisc);
			necroticItems = Object.assign(necroticLeather, necroticMisc);
			theaterItems = Object.assign(theaterLeather, theaterMisc);
			break;
		case "cloth":
			othersideItems = combineArrays(othersideCloth, othersideMisc);
			hallsItems = combineArrays(hallsCloth, hallsMisc);
			mistsItems = combineArrays(mistsCloth, mistsMisc);
			plagueItems = combineArrays(plagueCloth, plagueMisc);
			sanguineItems = combineArrays(sanguineCloth, sanguineMisc);
			spiresItems = combineArrays(spiresCloth, spiresMisc);
			necroticItems = combineArrays(necroticCloth, necroticMisc);
			theaterItems = combineArrays(theaterCloth, theaterMisc);
			break;
		default:
			// do nothing
	}
	
	itemUpdate();
}


// --- Slot Check ---

function slotCheck(slotType)
{
	switch(slotType)
	{
		case "head":
			checkBoxes.head = !checkBoxes.head;
			break;
		case "shoulder":
			checkBoxes.shoulder = !checkBoxes.shoulder;
			break;
		case "chest":
			checkBoxes.chest = !checkBoxes.chest;
			break;
		case "wrist":
			checkBoxes.wrist = !checkBoxes.wrist;
			break;
		case "hands":
			checkBoxes.hands = !checkBoxes.hands;
			break;
		case "waist":
			checkBoxes.waist = !checkBoxes.waist;
			break;
		case "legs":
			checkBoxes.legs = !checkBoxes.legs;
			break;
		case "feet":
			checkBoxes.feet = !checkBoxes.feet;
			break;
		case "neck":
			checkBoxes.neck = !checkBoxes.neck;
			break;
		case "back":
			checkBoxes.back = !checkBoxes.back;
			break;
		case "finger":
			checkBoxes.finger = !checkBoxes.finger;
			break;
		case "str_onehand":
			checkBoxes.str_onehand = !checkBoxes.str_onehand;
			break;
		case "str_twohand":
			checkBoxes.str_twohand = !checkBoxes.str_twohand;
			break;
		case "agi_onehand":
			checkBoxes.agi_onehand = !checkBoxes.agi_onehand;
			break;
		case "agi_twohand":
			checkBoxes.agi_twohand = !checkBoxes.agi_twohand;
			break;
		case "int_onehand":
			checkBoxes.int_onehand = !checkBoxes.int_onehand;
			break;
		case "int_twohand":
			checkBoxes.int_twohand = !checkBoxes.int_twohand;
			break;
		case "ranged":
			checkBoxes.ranged = !checkBoxes.ranged;
			break;
		case "offhand":
			checkBoxes.offhand = !checkBoxes.offhand;
			break;
		case "shield":
			checkBoxes.shield = !checkBoxes.shield;
			break;
		default:
			// do nothing
	}
	
	itemUpdate();
}


// --- Toggle Dungeon ---

function othersideToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && othersideItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		othersideImage.style.display = "block";
	}
	else
	{
		othersideImage.style.display = "none";
	}
}

function hallsToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && hallsItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		hallsImage.style.display = "block";
	}
	else
	{
		hallsImage.style.display = "none";
	}
}

function mistsToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && mistsItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		mistsImage.style.display = "block";
	}
	else
	{
		mistsImage.style.display = "none";
	}
}

function plagueToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && plagueItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		plagueImage.style.display = "block";
	}
	else
	{
		plagueImage.style.display = "none";
	}
}

function sanguineToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && sanguineItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		sanguineImage.style.display = "block";
	}
	else
	{
		sanguineImage.style.display = "none";
	}
}

function spiresToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && spiresItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		spiresImage.style.display = "block";
	}
	else
	{
		spiresImage.style.display = "none";
	}
}

function necroticToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && necroticItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		necroticImage.style.display = "block";
	}
	else
	{
		necroticImage.style.display = "none";
	}
}

function theaterToggle()
{
	var x;
	var isMatch = true;
	for (x in checkBoxes)
	{
		if (checkBoxes[x] == true && theaterItems[x] == false)
		{
			isMatch = false;
		}
	}
	
	if (isMatch)
	{
		theaterImage.style.display = "block";
	}
	else
	{
		theaterImage.style.display = "none";
	}
}