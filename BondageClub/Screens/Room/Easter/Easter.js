"use strict";
var EasterBackground = "MaidCafe";
var EasterMistress = null;
var RandomColor = null;
//var EasterSub = null;
//var EasterMistressAngryCount = 0;
//var EasterMistressReleaseTimer = 0;
//var EasterPlayerAppearance = null;
//var EasterMistressAllowPlay = false;
//var EasterCanReleaseChastity = true;
//var EasterEmpty = false;
//var EasterRandomGirl = null;
//var EasterRandomGirlArchetype = "";
//var EasterRandomActivityCount = 0;
//var EasterRandomActivity = "";
//var EasterRandomActivityList = ["AddArms", "RemoveArms", "AddGag", "RemoveGag", "AddTorso", "RemoveTorso", "AddFeet", "RemoveFeet", "AddLegs", "RemoveLegs", "Tickle", "Spank", "Kiss", "Fondle", "Masturbate"];
//var EasterRandomActivityCategory = "";
//var EasterRandomActivityCategoryList = ["Activity", "Quiz", "Struggle"];
//var EasterRandomTalkCount = 0;
//var EasterVisitRoom = false;
//var EasterTimer = 0;

// Returns TRUE if the dialog situation is allowed



// Loads the club Easter room, creates the Mistress Bunny
function EasterLoad() {
	if ((EasterMistress == null) && (TextGet("Mistress") != "")) {
		EasterMistress = CharacterLoadNPC("NPC_Easter_MistressBunny");
		EasterMistress.Name = TextGet("Mistress") + " " + EasterMistress.Name;
		EasterMistress.AllowItem = false;
		InventoryRemove(EasterMistress, "Cloth");
		InventoryRemove(EasterMistress, "ClothAccessory");
		InventoryRemove(EasterMistress, "ClothLower");
		RandomColor ='#'+Math.floor(Math.random()*16777215).toString(16);
		InventoryWear(EasterMistress, "BunnySuit", "Bra", RandomColor);
		InventoryWear(EasterMistress, "Pantyhose1", "Socks");
		InventoryWear(EasterMistress, "Heels1", "Shoes", RandomColor);
		InventoryWear(EasterMistress, "BunnyEars2", "HairAccessory1", RandomColor);
		InventoryWear(EasterMistress, "MistressGloves", "Gloves", RandomColor);
	}
}

// Run the Easter room, draw the 2 characters
function EasterRun() {
	EasterLoad();
	DrawCharacter(Player, 500, 0, 1);
	DrawCharacter(EasterMistress, 1000, 0, 1);
	if (Player.CanWalk()) DrawButton(1885, 25, 90, 90, "", "White", "Icons/Exit.png");
	DrawButton(1885, 145, 90, 90, "", "White", "Icons/Character.png");
	if (Player.CanKneel()) DrawButton(1885, 265, 90, 90, "", "White", "Icons/Kneel.png");
}

// When the user clicks in the Easter room
function EasterClick() {
	if ((MouseX >= 500) && (MouseX < 1000) && (MouseY >= 0) && (MouseY < 1000)) CharacterSetCurrent(Player);
	if ((MouseX >= 1000) && (MouseX < 1500) && (MouseY >= 0) && (MouseY < 1000)) CharacterSetCurrent(EasterMistress);
	if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 25) && (MouseY < 115) && Player.CanWalk()) CommonSetScreen("Room", "MainHall");
	if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 145) && (MouseY < 235)) InformationSheetLoadCharacter(Player);
	if ((MouseX >= 1885) && (MouseX < 1975) && (MouseY >= 265) && (MouseY < 355) && Player.CanKneel()) CharacterSetActivePose(Player, (Player.ActivePose == null) ? "Kneel" : null);
}