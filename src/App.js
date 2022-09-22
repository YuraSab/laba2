import React from 'react';

// гама шифру Гамма "БРАТОМИЛ", Повідомлення "ПРІАМУРСК_50А"
const App = () => {

    // length - 44
    const masOfSymbols = ['А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І',
        'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
        'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я', ' ',
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const message = ['П', 'р', 'і', 'а', 'м', 'у', 'р', 'с', 'ь', 'к', ' ', '5', '0', 'А'];
    console.log("Повідомлення  (шифрування): ", message);
    const gammaMas = ['Б', 'р', 'а', 'т', 'о', 'м', 'и', 'л', 'Б', 'р', 'а', 'т', 'о', 'м'];
    console.log("Гамма  (шифрування): ", gammaMas);


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
        console.log('A (повідовлення) (шифрування):', mesIndexed);

        for (let i = 0; i < gammaMas.length; i++) {
            let oneLetter = gammaMas[i].valueOf();
            oneLetter = oneLetter.toUpperCase();

            let oneLetterIndexed = masOfSymbols.indexOf(oneLetter.valueOf());
            oneLetterIndexed = oneLetterIndexed + 1;
            gammaIndexed.push(oneLetterIndexed);
        }
        console.log('B (гамма)  (шифрування):', gammaIndexed);


        for (let i = 0; i < gammaMas.length; i++) {
            let oneLetterX = mesIndexed[i].valueOf();
            let oneLetterY = gammaIndexed[i].valueOf();

            let oneLetterZ = oneLetterX + oneLetterY;

            comparedMas.push(oneLetterZ.valueOf());
        }
        console.log("A+B  (шифрування): ", comparedMas);

        for (let i = 0; i < comparedMas.length; i++) {
            let oneLetter = comparedMas[i].valueOf();
            oneLetter = Math.abs(oneLetter);

            comparedMasModule.push(oneLetter);

        }
        console.log("(A+B) - До модуля  (шифрування): ", comparedMasModule);


        for (let i = 0; i < comparedMasModule.length; i++) {
            let oneLetter = comparedMasModule[i].valueOf();

            let oneLetterDeCodded = masOfSymbols[oneLetter-1].valueOf();



            comparedMasDecoded.push(oneLetterDeCodded);
            // indexOf(oneLetter.valueOf());

        }
        console.log("Кінцевий результат (шифрування): ", comparedMasDecoded);
    }

    // -----------------------------------------------------------------------------------------------------------------


    // Д О Б Р И Л О           И Г Я Ї Щ Т 6 А В _ Ю Г Й М Б
    const messageDec =  ['И', 'Г', 'Я', 'Ї', 'Щ', 'Т', '6', 'А', 'В', ' ', 'Ю', 'Г', 'Й', 'М', 'Б'];
    console.log("Повідомлення для дешифрування: ", messageDec);
    const gammaMasDec = ['Д', 'О', 'Б', 'Р', 'И', 'Л', 'О', 'Д', 'О', 'Б', 'Р', 'И', 'Л', 'О', 'Д'];
    console.log("Гамма для дешифрування: ", gammaMasDec);


    const decoding = () => {
        let mesIndexedDec = [];
        let gammaIndexedDec = [];
        let comparedMasDec = [];
        let comparedMasModuleDec = [];
        let comparedMasDecodedDec = [];


        for (let i = 0; i < messageDec.length; i++) {
            let oneLetter = messageDec[i].valueOf();
            oneLetter = oneLetter.toUpperCase();

            let oneLetterIndexed = masOfSymbols.indexOf(oneLetter.valueOf());
            oneLetterIndexed = oneLetterIndexed + 1;
            mesIndexedDec.push(oneLetterIndexed);
        }
        console.log('A (повідовлення) (розшифрування)', mesIndexedDec);

        for (let i = 0; i < gammaMasDec.length; i++) {
            let oneLetter = gammaMasDec[i].valueOf();
            oneLetter = oneLetter.toUpperCase();

            let oneLetterIndexed = masOfSymbols.indexOf(oneLetter.valueOf());
            oneLetterIndexed = oneLetterIndexed + 1;
            gammaIndexedDec.push(oneLetterIndexed);
        }
        console.log('B (гамма) (розшифрування)', gammaIndexedDec);


        for (let i = 0; i < gammaMasDec.length; i++) {
            let oneLetterX = mesIndexedDec[i].valueOf();
            let oneLetterY = gammaIndexedDec[i].valueOf();

            let oneLetterZ = oneLetterX - oneLetterY;

            comparedMasDec.push(oneLetterZ.valueOf());
        }
        console.log("A-B (розшифрування)", comparedMasDec);

        for (let i = 0; i < comparedMasDec.length; i++) {
            let oneLetter = comparedMasDec[i].valueOf();
            oneLetter = Math.abs(oneLetter);

            comparedMasModuleDec.push(oneLetter);

        }
        console.log("(A+B) - До модуля (розшифрування): ", comparedMasModuleDec);


        for (let i = 0; i < comparedMasModuleDec.length; i++) {
            let oneLetter = comparedMasModuleDec[i].valueOf();

            let oneLetterDeCodded = masOfSymbols[oneLetter-1].valueOf();



            comparedMasDecodedDec.push(oneLetterDeCodded);
            // indexOf(oneLetter.valueOf());

        }
        console.log("Кінцевий результат розшифрування: ", comparedMasDecodedDec);
    }

    return (
        <div>
            <div onClick={() => codding()}>
                Click codding
            </div>
            <div onClick={() => decoding()}>
                Click decoding
            </div>
        </div>
    );
};

export default App;