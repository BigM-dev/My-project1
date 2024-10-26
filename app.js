function question (job){
    return function(name){
        
        if (job === 'designer'){
            console.log('What can you say about UI/UX design ' + name );
        } else if
            (job === 'teacher'){
                console.log("What do you teach " + name);
        }else
        console.log('What do you do?');
    }
    
}

console.log(Math.floor(Math.random() * 6) + 1);


/* question(teacher)(John); */
question('designer')('Jane');
question('teacher')('malik');