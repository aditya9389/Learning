let s="this is a test"
s=s.split(' ').map(word=>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(' ');
console.log(s);