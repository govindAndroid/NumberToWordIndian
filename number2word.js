var toWords = function(number) {
    var res = {1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Nineteen", 20: "Twenty", 21: "Twenty One", 22: "Twenty Two", 23: "Twenty Three", 24: "Twenty Four", 25: "Twenty Five", 26: "Twenty Six", 27: "Twenty Seven", 28: "Twenty Eight", 29: "Twenty Nine", 30: "Thirty", 31: "Thirty One", 32: "Thirty Two", 33: "Thirty Three", 34: "Thirty Four", 35: "Thirty Five", 36: "Thirty Six", 37: "Thirty Seven", 38: "Thirty Eight", 39: "Thirty Nine", 40: "Forty", 41: "Forty One", 42: "Forty Two", 43: "Forty Three", 44: "Forty Four", 45: "Forty Five", 46: "Forty Six", 47: "Forty Seven", 48: "Forty Eight", 49: "Forty Nine", 50: "Fifty", 51: "F ifty One", 52: "Fifty Two", 53: "Fifty Three", 54: "Fifty Four", 55: "Fifty Fiv e", 56: "Fifty Six", 57: "Fifty Seven", 58: "Fifty Eight", 59: "Fifty Nine", 60: "Sixty", 61: "Sixty One", 62: "Sixty Two", 63: "Sixty Three", 64: "Sixty Four", 65: "Sixty Five", 66: "Sixty Six", 67: "Sixty Seven", 68: "Sixty Eight", 69: "Sixty Nine", 70: "Seventy", 71: "Seventy One", 72: "Seventy Two", 73: "Seventy Three", 74: "Seventy Four", 75: "Seventy Five", 76: "Seventy Six", 77: "Seventy Seven", 78: "Seventy Eight", 79: "Seventy Nine", 80: "Eighty", 81: "Eighty One", 82: "Eighty Two", 83: "Eighty Three", 84: "Eighty Four", 85: "Eighty Five", 86: "Eighty Six", 87: "Eighty Seven", 88: "Eighty Eight", 89: "Eighty Nine", 90: "Ninety", 91: "Ninety One", 92: "Ninety Two", 93: "Ninety Three", 94: "Ninety Four", 95: "Ninety Five", 96: "Ninety Six", 97: "Ninety Seven", 98: "Ninety Eight", 99: "Ninety Nine", 100: "Hundred", 1000: "Thousand", 100000: "Lakh", 10000000: "Crore"};
    var blocks = [10000000, 100000, 1000, 100];
    var output = "";
    if (number == 0)
        return "Zero";

    for (var block in blocks)
    {
        var curr = blocks[block];
        if (number >= curr)
        {
            var blockVal = Math.floor(number / curr);
            number = number - (blockVal * curr);
            if (blockVal > 100) {
                output += toWords(blockVal) + ' ' + res[curr] + ' ';
            } else {
                output += res[blockVal];
                if (curr > 10) {
                    output += ' ' + res[curr] + ' ';
                }
            }

        }
    }

    if (number >= 0) {
        output += res[number];
    }
    return output;
};
