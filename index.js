function introduction(name) {
    console.log(name);
    return `Hi, my name is ${name}.`;
}

console.log(introduction('Josh'));

function introductionWithLanguage(name,language) {
    console.log(`name: ${name}\nlanguage: ${language}`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage('Josh','Ember.js'))

function introductionWithLanguageOptional(name,language="JavaScript") {
    console.log(`name: ${name}\nlanguage: ${language}`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguageOptional('Josh','Ember.js'))