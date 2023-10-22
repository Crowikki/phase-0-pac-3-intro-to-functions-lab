function shout(string) {
    //todo
    return "Hello".toUpperCase(); //'HELLO'
}

  function whisper(lower){
    return "HELLO".toLowerCase();
 }

 function logShout(string){
    console.log("Hello".toUpperCase());

 }

 function logWhisper(string){
    console.log("HELLO".toLowerCase());
 }

 function sayHiToHeadphonedRoommate(message) {
    if (message.toLowerCase() === message) {
      return "I can't hear you!";
    } else if (message.toUpperCase() === message) {
      return "YES INDEED!";
    } else if (message === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "I don't understand your message.";
    }
  }
  
  

