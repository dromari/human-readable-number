module.exports = function toReadable(number) {

    let z = number % 10;
    let y = ((number % 100) - z) / 10;
    let x = (number - (number % 100)) / 100;
    let f = (number % 100) % 10;

    const a = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const b = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const c = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const d = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    if (number === undefined || number === 0) {
        return 'zero'
    }

    if (number < 10) {
        return a[z - 1];
    }

    if (10 < number && number < 20) {
        return c[f - 1];
    }

    if (number % 100 === 0 && number > 99) {
        return d[x - 1];
    }

    if (number === 110 || number === 120 || number === 130 || number === 140 || number === 150 || number === 160 || number === 170 || number === 180 || number === 190
        || number === 210 || number === 220 || number === 230 || number === 240 || number === 250 || number === 260 || number === 270 || number === 280 || number === 290
        || number === 310 || number === 320 || number === 330 || number === 340 || number === 350 || number === 360 || number === 370 || number === 380 || number === 390
        || number === 410 || number === 420 || number === 430 || number === 440 || number === 450 || number === 460 || number === 470 || number === 480 || number === 490
        || number === 510 || number === 520 || number === 530 || number === 540 || number === 550 || number === 560 || number === 570 || number === 580 || number === 590
        || number === 610 || number === 620 || number === 630 || number === 640 || number === 650 || number === 660 || number === 670 || number === 680 || number === 690
        || number === 710 || number === 720 || number === 730 || number === 740 || number === 750 || number === 760 || number === 770 || number === 780 || number === 790
        || number === 810 || number === 820 || number === 830 || number === 840 || number === 850 || number === 860 || number === 870 || number === 880 || number === 890
        || number === 910 || number === 920 || number === 930 || number === 940 || number === 950 || number === 960 || number === 970 || number === 980 || number === 990) {
        return d[x - 1] + ' ' + b[y - 1];
    }

    if (number % 10 === 0 && number < 100) {
        return b[y - 1];
    }

    if (20 < number && number < 100 && number % 10 > 0) {
        return b[y - 1] + ' ' + a[z - 1];
    }

    if (100 < number && number < 110 || 200 < number && number < 210 || 300 < number && number < 310 || 400 < number && number < 410 || 500 < number && number < 510
        || 600 < number && number < 610 || 700 < number && number < 710 || 800 < number && number < 810 || 900 < number && number < 910) {
        return d[x - 1] + ' ' + a[z - 1];
    }

    if (110 < number && number < 120 || 210 < number && number < 220 || 310 < number && number < 320 || 410 < number && number < 420 || 510 < number && number < 520
        || 610 < number && number < 620 || 710 < number && number < 720 || 810 < number && number < 820 || 910 < number && number < 920) {
        return d[x - 1] + ' ' + c[f - 1];
    }

    return d[x - 1] + ' ' + b[y - 1] + ' ' + a[z - 1];
}
