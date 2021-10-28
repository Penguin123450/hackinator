let text = prompt("This hack was made by glizzy! Please choose the gamemode out of these:", "global, cafe, kindgom, crypto, factory, fish, gold, race, TD, tower");

if (text == "global") {
  globalprompt = prompt("Which one out of these?", "token, random, flood, allblooks, answer, spamopen, selldupe")
  if (globalprompt == "token")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/addTokens.js").then((res) => res.text().then((t) => eval(t)))
  if (globalprompt == "random")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/bypassRandomName.js").then((res) => res.text().then((t) => eval(t)))
  if (globalprompt == "flood")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/floodGames.js").then((res) => res.text().then((t) => eval(t)))
  if (globalprompt == "allblooks")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/getAllBlooksInGame.js").then((res) => res.text().then((t) => eval(t)))
  if (globalprompt == "answer")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/getEveryAnswerCorrect.js").then((res) => res.text().then((t) => eval(t)))
  if (globalprompt == "spamopen")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/spamOpenBoxes.js").then((res) => res.text().then((t) => eval(t)))
  if (globalprompt == "selldupe")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/sellDupeBlooks.js").then((res) => res.text().then((t) => eval(t)))

}
if (text == "cafe") {
  cafeprompt = prompt("Which one out of these?", "end, coins, foodlvl, stock")
  if (cafeprompt == "end")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/endGame.js").then((res) => res.text().then((t) => eval(t)))
  if (cafeprompt == "coins")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/getCoins.js").then((res) => res.text().then((t) => eval(t)))
  if (cafeprompt == "foodlvl")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/infiniteFoodLevel.js").then((res) => res.text().then((t) => eval(t)))
  if (cafeprompt == "stock")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/cafe/stockInfiniteFood.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "kingdom") {
  kingdomprompt = prompt("Which one out of these?", "ESP, maxres, notax, setguest, skip")
  if (kingdomprompt == "ESP")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/ChoiceESP.js").then((res) => res.text().then((t) => eval(t)))
  if (kingdomprompt == "maxres")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/MaxResources.js").then((res) => res.text().then((t) => eval(t)))
  if (kingdomprompt == "notax")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/NoTaxes.js").then((res) => res.text().then((t) => eval(t)))
  if (kingdomprompt == "setguest")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/SetGuests.js").then((res) => res.text().then((t) => eval(t)))
  if (kingdomprompt == "skip")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crazy-kingdom/SkipGuest.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "crypto") {
  cryptoprompt = prompt("Which one out of these?", "coins, hackpass")
  if (cryptoprompt == "coins")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crypto/getCrypto.js").then((res) => res.text().then((t) => eval(t)))
  if (cryptoprompt == "hackpass")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/crypto/hackOtherUsersPassword.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "factory") {
  factoryprompt = prompt("Which one out of these?", "coins, megabot")
  if (factoryprompt == "coins")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/factory/getCash.js").then((res) => res.text().then((t) => eval(t)))
  if (factoryprompt == "megabot")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/factory/getMegaBot.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "fish") {
  fishprompt = prompt("setweight")
  if (fishprompt == "setweight")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/fishing-frenzy/setWeight.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "gold") {
  goldprompt = prompt("Which one out of these?", "gold, ESP")
  if (goldprompt == "gold")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/gold/getGold.js").then((res) => res.text().then((t) => eval(t)))
  if (goldprompt == "ESP")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/gold/chest-ESP.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "race") {
  raceprompt = prompt("win")
  if (raceprompt == "win")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/racing/instantWin.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "TD") {
  TDprompt = prompt("Which one out of these?", "allfree, gameround, clearenem, coins, ducks, obstac, setprice")
  if (TDprompt == "allfree")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/allFree.js").then((res) => res.text().then((t) => eval(t)))
  if (TDprompt == "gameround")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/changeGameRound.js").then((res) => res.text().then((t) => eval(t)))
  if (TDprompt == "clearenem")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/clearEnemies.js").then((res) => res.text().then((t) => eval(t)))
  if (TDprompt == "coins")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/getCash.js").then((res) => res.text().then((t) => eval(t)))
  if (TDprompt == "ducks")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/removeDucks.js").then((res) => res.text().then((t) => eval(t)))
  if (TDprompt == "obstac")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/removeObsticles.js").then((res) => res.text().then((t) => eval(t)))
  if (TDprompt == "setprice")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-defense/removeObsticles.js").then((res) => res.text().then((t) => eval(t)))
}

if (text == "tower") {
  towerprompt = prompt("Which one?", "coins, lchar, lstr, lwis")
  if (towerprompt == "coins")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/addCoins.js").then((res) => res.text().then((t) => eval(t)))
  if (towerprompt == "lchar")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyCharisma.js").then((res) => res.text().then((t) => eval(t)))
  if (towerprompt == "lstr")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyStrength.js").then((res) => res.text().then((t) => eval(t)))
  if (towerprompt == "lwis")
    fetch("https://raw.githubusercontent.com/glixzzy/blooket-hack/main/tower-of-doom/lowerEnemyWisdom.js").then((res) => res.text().then((t) => eval(t)))
}

else (alert("Not one of the options! Check if you made a typo and try again!"))
