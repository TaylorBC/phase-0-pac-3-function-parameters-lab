function introduction(name) {
    return `Hi, my name is ${name}.` 
    
} 
introduction("Brian");

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
} 
introductionWithLanguage("Brian, Javascript")
 
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
} 


