const nouns = [
  {value: "Elves"},
  {value: "Gargoyles"},
  {value: "Ghoul"},
  {value: "Giants"},
  {value: "Gnolls"},
  {value: "Gnomes"},
  {value: "Goblins"},
  {value: "Gray Ooze"},
  {value: "Green Slime"},
  {value: "Griffons"},
  {value: "Hippogriffs"},
  {value: "Hobgoblins"},
  {value: "Hydras"},
  {value: "Invisible Stalkers"},
  {value: "Kobolds"},
  {value: "Lycanthropes"},
  {value: "Manticoras"},
  {value: "Medusae"},
  {value: "Minotaurs"},
  {value: "Mummies"},
  {value: "Nixies"},
  {value: "Ochre Jelly"},
  {value: "Ogres"},
  {value: "Purple Worms"},
  {value: "Rocs"},
  {value: "Skeletons"},
  {value: "Trolls"},
  {value: "Unicorns"},
  {value: "Wights"},
  {value: "Wraiths"},
  {value: "Blink Dogs"},
  {value: "Bugbears"},
  {value: "Carrion Crawlers"},
  {value: "Dragons"},
  {value: "Gelatinous Cubes"},
  {value: "Harpies"},
  {value: "Giant Slugs"},
  {value: "Hell Hounds"},
  {value: "Liches"},
  {value: "Lizard Men"},
  {value: "Ogre Magi"},
  {value: "Owl Bears"},
  {value: "Titans"},
  {value: "Manta Ray"},
  {value: "Masher"},
  {value: "Minotaur Lizard"},
  {value: "Mososaurus"},
  {value: "Sea Horse"},
  {value: "Whale"},
  {value: "Agnar"},
  {value: "Aki"},
  {value: "Ali"},
  {value: "Arinbjorn"},
  {value: "Armod"},
  {value: "Arnbjorn"},
  {value: "Arngeir"},
  {value: "Arngrim"},
  {value: "Arni"},
  {value: "Arnfinn"},
  {value: "Arnkel"},
  {value: "Bergfinn"},
  {value: "Bergthor"},
  {value: "Bergvid"},
  {value: "Bersi"},
  {value: "Bram"},
  {value: "Elgfrothi"},
  {value: "Erlend"},
  {value: "Erp"},
  {value: "Eyjolf"},
  {value: "Finnvid"},
  {value: "Floki"},
  {value: "Flosi"},
  {value: "Gauti"},
  {value: "Gærrar"},
  {value: "Geirmund"},
  {value: "Gufi"},
  {value: "Gulli"},
  {value: "Gunbjorn"},
  {value: "Gunnald"},
  {value: "Gunnlaug"},
  {value: "Hallfrid"},
  {value: "Hallstein"},
  {value: "Hallvard"},
  {value: "Ham"},
  {value: "Halvdan"},
  {value: "Hardbein"},
  {value: "Hedin"},
  {value: "Helgi"},
  {value: "Tar"},
  {value: "Calion"},
  {value: "Beorn"},
  {value: "Bereg"},
  {value: "Bolg"},
  {value: "Arahad II"},
  {value: "Ausir"},
  {value: "Azog"},
  {value: "Walda"},
  {value: "Watcher in the Water"},
  {value: "Wormtongue"},
  {value: "Wulf"},
  {value: "William"},
  {value: "Yavanna"},
  {value: "Uldor"},
  {value: "Urwen"},
  {value: "Tolkien"},
  {value: "Token"},
  {value: "Radagast"},
  {value: "Rain"},
  {value: "Sun"},
  {value: "Moon"},
  {value: "Stars"},
  {value: "Water"},
  {value: "Wind"},
  {value: "Earth"},
  {value: "Fire"},
  {value: "Grass"},
  {value: "Weeds"},
  {value: "Flowers"},
  {value: "Chicken"},
  {value: "Cow"},
  {value: "Duck"},
  {value: "Geese"},
  {value: "Goose"},
  {value: "Weather"},
  {value: "Snow"},
  {value: "Took"},
  {value: "Peregrin"},
  {value: "Princes of Dol Amroth"},
  {value: "Quickbeam"},
  {value: "Tuor"},
  {value: "Boat"},
  {value: "Oar"},
  {value: "Fish"},
  {value: "Humans"},
  {value: "Cats"},
  {value: "Dogs"},
  {value: "Rats"},
  {value: "Ice"},
  {value: "Land"},
  {value: "Thunder"},
  {value: "Lightning"},
  {value: "Stream"},
  {value: "River"},
  {value: "Light"},
  {value: "Dark"},
  {value: "Mountain"},
  {value: "Trench"},
  {value: "Medicine"},
  {value: "Rope"},
  {value: "Lute"},
  {value: "Dulcimer"},
  {value: "Tan Hide Drums"},
  {value: "Misogynist"},
  {value: "Cuckold"},
  {value: "Maiden"},
  {value: "Nights"},
  {value: "Kinds"},
  {value: "Queens"},
  {value: "Jesters"},
  {value: "Jokers"},
  {value: "Peasants"},
  {value: "Middle Class"},
  {value: "Lancelot"},
  {value: "Bligh"},
  {value: "His Magesty"},
  {value: "Frigate"},
  {value: "Prisoners"},
  {value: "Muspratt"},
  {value: "Misfortunes"},
  {value: "Monks"},
  {value: "Gorgon"},
  {value: "Bank"},
  {value: "Buried Treasure"},
  {value: "Treasure"},
  {value: "Shipwreck"},
  {value: "Ship"},
  {value: "Captain"},
  {value: "Cabin"},
  {value: "Viking"},
  {value: "Seaman"},
  {value: "Summer"},
  {value: "Fall"},
  {value: "Spring"},
  {value: "Winter"},
  {value: "Silk"},
  {value: "Sheep"},
  {value: "Goat"},
  {value: "Bison"},
  {value: "Wheat"},
  {value: "Settlers"},
  {value: "Pandora"},
  {value: "Witch"},
  {value: "Handkerchiefs"},
  {value: "Dutch"},
  {value: "Sorceror"},
  {value: "Sorceress"},
  {value: "Grenade"},
  {value: "Hand"},
  {value: "Reefs"},
  {value: "Floor"},
  {value: "Sea"},
  {value: "Salt"},
  {value: "Muskets"},
  {value: "Spear"},
  {value: "Bodies"},
  {value: "Skin"},
  {value: "Cave"},
  {value: "Food"},
  {value: "Grub"},
  {value: "Gruel"},
  {value: "Island"},
  {value: "Pillar"},
  {value: "Moat"},
  {value: "Rag"},
  {value: "Dagger"},
  {value: "Axe"},
  {value: "Mace"},
  {value: "Bow"},
  {value: "Arrow"},
  {value: "Wars"},
  {value: "Bard"},
  {value: "Privy"},
  {value: "Spanish Inquisition"},
  {value: "England"},
  {value: "Spain"},
  {value: "France"},
  {value: "Englishmen"},
  {value: "Stockings"},
  {value: "Doublets"},
  {value: "Serf"},
  {value: "Doublet"},
  {value: "Relic"},
  {value: "Hildegard"},
  {value: "Arthur"},
  {value: "Chaucer"},
  {value: "Bishops"},
  {value: "Canterbury"},
  {value: "Count"},
  {value: "Plague"},
  {value: "Horse"},
  {value: "Horses"},
  {value: "Coconuts"},
  {value: "Mermaid"},
  {value: "Werewolf"},
  {value: "Sphinx"},
  {value: "Chimera"},
  {value: "Griffin"},
  {value: "Centaur"},
  {value: "Imp"},
  {value: "Basilisk"},
  {value: "Manticore"},
  {value: "Sparrow"},
  {value: "Crow"},
  {value: "Ravens"},
  {value: "Boar"},
  {value: "Inquisition"},
  {value: "French"},
  {value: "Shrubbery"},
  {value: "Shrub"},
  {value: "Nuts"},
  {value: "Tree"},
  {value: "Hawk"},
  {value: "Tower"},
  {value: "Mackerel"},
  {value: "Potato"},
  {value: "Potatoes"},
  {value: "Porridge"},
  {value: "Bear"},
  {value: "Shakespeare"},
  {value: "Hamlet"},
  {value: "Egg"},
  {value: "Macbeth"},
  {value: "Goose Egg"},
  {value: "Raptor"},
  {value: "Rapture"},
  {value: "Parchment"},
  {value: "Quills"},
  {value: "Banshee"},
  {value: "Zombie"},
  {value: "Spider"},
  {value: "Nightfall"},
  {value: "Minion"},
  {value: "Drake"},
  {value: "Fairy"},
  {value: "Healer"},
  {value: "Warrior"},
  {value: "Bane"},
  {value: "Dracula"},
  {value: "Barbarian"},
  {value: "Elemental"},
  {value: "Ghost"},
  {value: "Nulgath"},
  {value: "Dage"},
  {value: "Artic"},
  {value: "Alina"},
  {value: "Beholder"},
  {value: "Worgen"},
  {value: "Druid"},
  {value: "Shaman"},
  {value: "Necromancer"},
  {value: "Drow"},
  {value: "Orc"},
  {value: "Hunter"},
  {value: "Crusader"},
  {value: "Wings"},
  {value: "Falcon"},
  {value: "Skull"},
  {value: "Reaper"},
  {value: "Nightmare"},
  {value: "Knight"},
  {value: "King"},
  {value: "Succubus"},
  {value: "Incubus"},
  {value: "Faun"},
  {value: "Wizard"},
  {value: "Paladin"},
  {value: "Enchantress"},
  {value: "Enchanter"},
  {value: "Cerberus"},
  {value: "Demon"}
]

module.exports = nouns
