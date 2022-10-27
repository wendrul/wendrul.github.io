import {gksdud, reverseGksdud} from "./gksdud/lib/gksdud.js"

function isASCII(str) {
    return /^[\x00-\x7F]*$/.test(str);
}

function isHangeul(str) {
    return str.match(/[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]/g);
    // return !isASCII(str); //replace later with proper logic
}

export class KoreanIMEString {
    
    _length;
    _data;
    _string;

    constructor(rawString)
    {
        this._string = rawString.trim();
        this._data = [];
        this._length = 0;
        let i = 0;
        while (i < this._string.length) {
            const nextPart = this._getNextPart(this._string, i);
            this._data.push(nextPart);
            i += nextPart.text.length;
            this._length += nextPart.length;
        }
    }

    _getNextPart(str, i, trueStart)
    {
        const start = i;
        if (isHangeul(str[i]))
        {
            while(i < str.length && isHangeul(str[i])){
                i++;
            }
            const substr = str.substring(start, i);
            const rawInput = reverseGksdud(substr);
            return {
                "inputType": "KR",
                "text": substr,
                "rawInput": rawInput,
                "start": this.length,
                "end": this.length + rawInput.length,
                "length": rawInput.length
            }
        }
        else 
        {
            while(i < str.length && !isHangeul(str[i])){
                i++;
            }
            const substr = str.substring(start, i);
            return {
                "inputType": "default",
                "text": substr,
                "rawInput": substr,
                "start": this.length,
                "end": this.length + substr.length,
                "length": substr.length
            }
            
        }
    }

    charAt(i) {
        for (const part of this._data) {
            if (i >= part.start && i < part.end)
                return part.rawInput.charAt(i - part.start);
        }
        return '';
    }

    at(i) {
        for (const part of this._data) {
            if (i >= part.start && i < part.end)
                return part.rawInput.at(i - part.start);
        }
        return undefined;
    }

    substring(start, end = undefined) {
        if (end == undefined) end = this.length;

        let ret = "";
        for (const part of this._data) {
            const substrStart = Math.max(0, start - part.start);
            const substrEnd = Math.max(0, end - part.start);
            let toAdd = part.rawInput.substring(substrStart, substrEnd);
            if (part.inputType === "KR")
                toAdd = gksdud(toAdd);
            ret = ret.concat(toAdd);
        }
        return ret;
    }

    substr(start, length = undefined) {
        if (length == undefined) 
            return this.substring(start);
        return this.substring(start, start + length);
    }

    toString() {
        return this.substring(0);
    }

    trim() {
        return this;
    }

    get length() {
        return this._length;
    }
    get fullString() {
        return this._string;
    }
}
