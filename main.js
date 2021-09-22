const prompt = require('prompt-sync')();
const decision1 = Number(prompt('Input only the characters contained within the brackets. Would you like to [1] construct or [2] deconstruct?  '));

if (decision1 === 1) {
    const build1 = Number(prompt('Choose your first color: [1] red [2] blue [3] yeller  '));
        if (build1 === 1) {
            const build2 = Number(prompt('Choose your second color: [2] blue [3] yeller  '));
            if (build1 + build2 === 3) {
                console.log('purple');
            }
            if (build1 + build2 === 4) {
                console.log('orange');
            }   

        }
        else if (build1 === 2) {
            const build3 = Number(prompt('Choose your second color: [1] red [3] yeller  '));
            if (build1 + build3 === 3) {
                console.log('purple');
            }
            if (build1 + build3 === 5) {
                console.log('green');
            }  
        }
        else if (build1 === 3) {
            const build4 = Number(prompt('Choose your second color: [1] red [2]  '));
            if (build1 + build4 === 4) {
                console.log('orange');
            }
            if (build1 + build4 === 5) {
                console.log('purple');
            }


    else if (decision1 === 2) {
        const destroy1 = Number(prompt('Which color would you like to destroy? [1] purple [2] orange [3] green  '));
        }
        else if (destroy1 === 1) {
            console.log('red and blue');
        }
        else if (destroy1 === 2) {
            console.log('red and yeller');
        }
        else if (destroy1 === 3) {
          console.log('blue and yeller');
        }

    }
}
