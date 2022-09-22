import React from 'react';

// гама шифру Гамма "БРАТОМИЛ", Повідомлення "ПРІАМУРСК_50А"
const App = () => {

    // length - 44
    const masOfSymbols = ['А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І',
        'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
        'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я', ' ',
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const message = ['П', 'р', 'і', 'а', 'м', 'у', 'р', 'с', 'ь', 'к', ' ', '5', '0', 'А'];
    console.log("Повідомлення: ", message);
    const gammaMas = ['Б', 'р', 'а', 'т', 'о', 'м', 'и', 'л', 'Б', 'р', 'а', 'т', 'о', 'м'];
    console.log("Гамма: ", gammaMas);


    const codding = () => {
        let mesIndexed = [];
        let gammaIndexed = [];
        let comparedMas = [];
        let comparedMasModule = [];
        let comparedMasDecoded = [];


        for (let i = 0; i < message.length; i++) {
            let oneLetter = message[i].valueOf();
            oneLetter = oneLetter.toUpperCase();

            let oneLetterIndexed = masOfSymbols.indexOf(oneLetter.valueOf());
            oneLetterIndexed = oneLetterIndexed + 1;
            mesIndexed.push(oneLetterIndexed);
        }
        console.log('A (повідовлення)', mesIndexed);

        for (let i = 0; i < gammaMas.length; i++) {
            let oneLetter = gammaMas[i].valueOf();
            oneLetter = oneLetter.toUpperCase();

            let oneLetterIndexed = masOfSymbols.indexOf(oneLetter.valueOf());
            oneLetterIndexed = oneLetterIndexed + 1;
            gammaIndexed.push(oneLetterIndexed);
        }
        console.log('B (гамма)', gammaIndexed);


        for (let i = 0; i < gammaMas.length; i++) {
            let oneLetterX = mesIndexed[i].valueOf();
            let oneLetterY = gammaIndexed[i].valueOf();

            let oneLetterZ = oneLetterX + oneLetterY;

            comparedMas.push(oneLetterZ.valueOf());
        }
        console.log("A+B", comparedMas);

        for (let i = 0; i < comparedMas.length; i++) {
            let oneLetter = comparedMas[i].valueOf();
            oneLetter = Math.abs(oneLetter);

            comparedMasModule.push(oneLetter);

        }
        console.log("(A+B) - До модуля: ", comparedMasModule);


        for (let i = 0; i < comparedMasModule.length; i++) {
            let oneLetter = comparedMasModule[i].valueOf();

            let oneLetterDeCodded = masOfSymbols[oneLetter-1].valueOf();



            comparedMasDecoded.push(oneLetterDeCodded);
            // indexOf(oneLetter.valueOf());

        }
        console.log("Кінцевий результат: ", comparedMasDecoded);
    }


    return (
        <div>
            <div onClick={() => codding()}>
                Click
            </div>
        </div>
    );
};

export default App;