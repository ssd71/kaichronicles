import { mechanicsEngine } from "../..";

/**
 * Translations table
 */
export class Translations {

    /**
     * English translations
     */
    private readonly texts = {

        //////////////////////////////////////
        // Action chart / object tables
        //////////////////////////////////////

        "actionChart" : "Action Chart",
        "noneFemenine" : "None",
        "noneMasculine" : "None",
        "disciplineDescription" : "Discipline description",
        "goldCrowns" : "Gold Crowns",
        "arrows" : "Arrows",
        "current" : "Current",
        "backpackLost" : "You have lost your backpack",
        "buyObject" : "Buy object",
        "pickObject" : "Get object",
        "sellObject" : "Sell object",
        "use": "Use",
        "setCurrentWeapon" : "Set as current weapon",
        "dropObject" : "Drop object",
        "confirmSell" : "Are you sure you want to sell the object for {0} Gold Crowns?",
        "confirmUse" : 'Are you sure you want to use "{0}"?',
        "confirmDrop" : 'Are you sure you want to drop "{0}"?',
        "noEnoughMoney" : "You don't have enough money",
        "confirmBuy" : "Are you sure you want to buy the object for {0} Gold Crowns?",
        "msgGetObject" : 'You get "{0}"',
        "msgDropObject" : 'You drop "{0}"',
        "msgGetMeal" : "You get {0} meals",
        "msgDropMeal" : "You drop {0} meals",
        "msgGetMoney" : "You get {0} Gold Crowns",
        "msgGetArrows" : "You get {0} Arrows",
        "msgDropMoney" : "You lost {0} Gold Crowns",
        "msgDropArrows" : "You lost {0} Arrows",
        "msgEndurance" : "{0} Endurance Points",
        "msgCombatSkill" : "{0} Combat Skill",
        "msgCurrentWeapon" : 'Your current weapon is now "{0}"',
        "msgIncompatible" : 'You already have a "{0}"',
        "msgNoMoreWeapons" : "You cannot get more weapons",
        "msgAlreadyBackpack" : "You already have a Backpack",
        "msgNoMoreBackpackItems" : "You cannot get more Backpack Items",
        "msgNoMoreSpecialItems" : "You cannot get more Special Items",
        "noWeapon" : "No weapon",
        "weaponskill" : "Weaponskill",
        "weaponmastery" : "Weaponmastery",
        "grdweaponmastery" : "Grand Weaponmastery",
        "mindblast" : "Mindblast",
        "psisurge" : "Psi-surge",
        "kaisurge" : "Kai-surge",
        "countAsObjects"  : "(Counts as {0} items)",
        "circleFire" : "Circle of Fire",
        "circleLight" : "Circle of Light",
        "circleSolaris" : "Circle of Solaris",
        "circleSpirit" : "Circle of the Spirit",
        "kaiLevel" : "Kai Level",
        "dropMoney" : "Drop money",
        "pickMoney" : "Pick money",
        "amount" : "Amount",
        "noQuiversEnough" : "You don't have enough Quivers (only 6 Arrows per Quiver)",
        "restore20EPMagnakaiButton": "Curing: +20 EP (only if EP 6 or less, once every 100 days)",
        "restore20EPGrdMasterButton": "Deliverance: +20 EP (only if EP 8 or less, once every 20 days)",
        "confirm20EP": "This ability can only be used once every 100 days. Continue?",
        "confirm20EPGrdMaster": "This ability can only be used once every 20 days. Continue?",
        "more" : "More",
        "permanent" : "Permanent",
        "usageCount" : "(can be used {0} times)",
        "objectUsed" : "{0} has been used",
        "mentora": "Mentora",

        //////////////////////////////////////
        // Combats
        //////////////////////////////////////

        "randomTable" : "Random Number Table",
        "combatSkillUpper" : "COMBAT SKILL",
        "enduranceUpper" : "ENDURANCE",
        "loneWolf": "Lone Wolf",
        "deathLetter" : "K",
        "mechanics-combat-psisurge" : "Psi-surge: +{0} CS, -{1} EP per round",
        "mechanics-combat-kaisurge" : "Kai-surge: +{0} CS, -{1} EP per round",
        "sectionModifier" : "Section modifier",
        "objectsUse" : "Objects use",
        "enemyMindblast" : "Enemy mindblast",

        //////////////////////////////////////
        // Number picker
        //////////////////////////////////////

        "npWrongValue" : 'Wrong value for "{0}"',
        "npMinValue" : 'Minimum value for "{0}" is {1}',
        "npMaxValue" : 'Maximum value for "{0}" is {1}',

        //////////////////////////////////////
        // Game setup
        //////////////////////////////////////

        "combatSkillSet" : "Your Combat Skill is {0}",
        "enduranceSet" : "Your Endurance Points are {0}",
        "maxDisciplines" : "You can choose only {0} disciplines",
        "onlyNWeapons" : "You can select only {0} weapons",

        //////////////////////////////////////
        // Grand Master upgrade
        //////////////////////////////////////

        "gmupgrade-confirm": "THESE CHANGES CANNOT BE UNDONE! Are you sure you want to apply them?",
        "gmupgrade-applied": "Changes applied",

        //////////////////////////////////////
        // Special sections
        //////////////////////////////////////

        "playerDices" : "{0} dices",
        "playerNumber" : "Player {0}",
        "number" : "Number {0}",
        "adganaUse" : "Adgana use, Random Table number: {0}",
        "heads" : "Heads",
        "tails" : "Tails",

        //////////////////////////////////////
        // About page
        //////////////////////////////////////

        "about" : "About the book",

        //////////////////////////////////////
        // New game
        //////////////////////////////////////

        "youMustAgree" : "You must agree the licence to continue",
        "noDownloadedBooks" : 'There are no downloaded books. Go to "Download books" on the main menu',

        //////////////////////////////////////
        // Settings
        //////////////////////////////////////

        "settings" : "Settings",
        "wrongFileName" : "The file name contains invalid characters",
        "gameSaved" : "Game saved",
        "confirmRestart" : "Are you sure you want to restart the book?",
        "close" : "Close",

        //////////////////////////////////////
        // Template (Main page)
        //////////////////////////////////////

        "CS" : "C.S.",
        "E" : "E.",
        "map" : "Map",

        //////////////////////////////////////
        // Download books
        //////////////////////////////////////

        "noChangesSelected" : "No changes selected",
        "confirmChanges" : "Are you sure you want to do the selected changes?",
        "deletingBook" : "Deleting book {0}",
        "bookDeleted" : "Book {0} deleted",
        "deletionFailed" : "Book {0} deletion failed: {1}",
        "downloadingBook" : "Downloading book {0}",
        "bookDownloaded" : "Book {0} downloaded",
        "downloadFailed" : "Book {0} download failed: {1}",
        "processFinishedErrors" : "Process finished with errors!",
        "noInternet" : "There is no Internet connection",
        "cancel" : "Cancel",
        "processCancelled" : "Process cancelled",
        "confirmCancel" : "Are you sure you want to cancel?",

        //////////////////////////////////////
        // Load game
        //////////////////////////////////////

        "noSavedGames" : "No saved games found",
        "confirmDeleteSave" : "Are you sure you want to delete the save game {0} ?",
        "fileDeleted" : "{0} deleted",
        "exportedDownloads" : "Saved games exported to Downloads",
        "importedGames" : "{0} games imported",
        "importExtensionsError" : 'Only files with extension "zip" or "json" can be imported',
        "confirmSavedOverwrite" : "Following saved games will be overwritten. Are you sure you want to continue?:\n{0}",
        "confirmExport" : 'This will create a Zip file with all your saved games at "Downloads". ' +
            "This can be useful to copy your saved games to other device, or as a backup. Continue?",
        "infoImport" : "With this function you can import saved games to the application. " +
            "This can be useful to copy your saved games from other device. You can select files with " +
            'extension "json" (single saved games) or "zip" (multiple saved games)',
        "errorExporting" : "Error exporting saved games",
        "noGamesToExport" : "There is no saved game to export",

        //////////////////////////////////////
        // Others
        //////////////////////////////////////

        "doMealFirst" : "Please, do the Meal first",
        "kaiChronicles" : "Kai Chronicles",
        "projectAonLicense" : "Project Aon license",
        "combatTables" : "Combat Tables",
        "mainMenu" : "Main Menu",
        "bookNotDownloaded" : "Book {0} is not downloaded",
        "maximumPick" : "You can pick only {0} objects",
        "zeroIgnored" : "Zero ignored",
        "gameRules" : "Game rules"

    };

    /**
     * Returns a DOM view translated to the current language
     * @param {DOM} view The view to translate
     * @param {boolean} doNotClone True if the view should be modified. False, if a clone of the view
     * should be returned
     */
    public translateView( view: HTMLElement | JQuery<HTMLElement> , doNotClone: boolean = false ): JQuery<HTMLElement> {
        let $clonedView;
        if ( doNotClone ) {
            $clonedView = $(view);
        } else {
            $clonedView = $(view).clone();
        }

        // Translate the view
        this.translateTags( $clonedView );
        return $clonedView;
    }

    /**
     * Translate an HTML fragment
     * @param $tags jQuery selector of tags to translate
     */
    public translateTags( $tags: JQuery<HTMLElement>) {
        const table = this["texts"];

        const $translatedTags = $tags
            .find("[data-translation]")
            .addBack("[data-translation]");
        for (const translatedTag of $translatedTags.toArray()) {
            const $t = $(translatedTag);
            const translationId = $t.attr("data-translation");
            const html = table[ translationId ];
            if ( html ) {
                $t.html( html );
            }
        }
    }

    /**
     * Get a translated message
     * @param {string} textId The text it to get
     * @param {Array<object>} replacements Replacements to do on the message. It can be null
     * @returns {string} The text
     */
    public text( textId: string , replacements: any[] = null ): string {
        try {
            const table = this["texts"];

            let text:string = table[textId];
            if ( !text ) {
                mechanicsEngine.debugWarning("Text code not found: " + textId);
                text = textId;
            }

            if ( replacements ) {
                // TODO: Check replacements in debug mode
                for (let i = 0; i < replacements.length; i++) {
                    text = text.replaceAll( "{" + i + "}" , replacements[i].toString() );
                }
            }
            return text;
        } catch (e) {
            mechanicsEngine.debugWarning(e);
            return textId;
        }
    }

}

/**
 * The translations singleton
 */
export const translations = new Translations();
