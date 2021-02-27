function cetakPattern() {
    const text = "DUMBWAYSIDSUJIAN";

    for (let i = 0; i <= 5; i++) {
        // for (let j = 5; j > i; j--) {
        //     process.stdout.write('*');
        // }

        for (let k = 0; k < i; k++) {

            for (let l = 0; l < text.length; l++) {
                process.stdout.write(text[l]);
            }


        }
        console.log('\n');

    }

}

cetakPattern();
// process.stdout.write