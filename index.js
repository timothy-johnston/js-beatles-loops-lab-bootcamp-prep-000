function theBeatlesPlay(musician,instrument) {
  var sentence = []
  for (var i=0;i<musician.length;i++) {
    sentence[i]=musician[i]+instrument[i]
  }
  //console.log(sentence)
  return sentence
}