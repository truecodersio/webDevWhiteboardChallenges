1. Write a function that will recieve an array of numbers, and return the unique number. Every number in the array will be identical, except for one. Return that unique value. The array will have at least 3 numbers.
> Try to find a solution that only iterates through the array once

2. Write a function that will be given an array of strings, and returns the string with the highest score. If two words in the array have the same score, return the word with the highest score that appears last in the array. A word's score can be determined as follows: 
Every consonant is worth 1 point, and every vowel (a, e, i, o, u) is worth 2 points. The letter y gets special treatment, and is worth 3 points.
    Examples:
        - "hello" -> 7 points (3 consonants, 2 vowels)
        - "biscuit" -> 10 points (4 consonats, 3 vowels)
        - "bayou" -> 10 points (1 consonant, 3 vowels, 1 y)

> For an additional challenge, add this rule to the word scoring. Each word can receive a bonus 5 points if any letter appears more than once in the word. This bonus can only apply once for each word - multiple duplicate letters do not repeat the bonus
    Examples:
        - "hello" -> 12 points (3 consonants, 2 vowels, plus bonus)
        - "sheepherder" -> 20 points (7 consonants, 4 vowels, plus bonus)